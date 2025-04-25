import os
from google import genai
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct
import json
from dotenv import load_dotenv
import time
from typing import List

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))
qdrant = QdrantClient(url="http://raghuserver:6333", prefer_grpc=True)

# Get a sample embedding to determine the correct vector dimension
sample_text = "Sample text for dimension check"
sample_response = client.models.embed_content(
    model="gemini-embedding-exp-03-07",
    contents=[sample_text]
)
vector_dim = len(sample_response.embeddings[0].values)

# Check if collection exists and create if it doesn't
collection_name = "SII"
if not qdrant.collection_exists(collection_name):
    qdrant.create_collection(
        collection_name=collection_name,
        vectors_config=VectorParams(size=vector_dim, distance=Distance.COSINE),
    )

def generate_embeddings_with_retry(texts: List[str], max_retries: int = 3, batch_size: int = 5) -> List[List[float]]:
    """Generate embeddings with retry logic and rate limiting."""
    all_embeddings = []
    
    for i in range(0, len(texts), batch_size):
        batch = texts[i:i + batch_size]
        retries = 0
        while retries < max_retries:
            try:
                response = client.models.embed_content(
                    model="gemini-embedding-exp-03-07",
                    contents=batch
                )
                # Extract the raw values from each ContentEmbedding object
                batch_embeddings = [embedding.values for embedding in response.embeddings]
                all_embeddings.extend(batch_embeddings)
                # Wait 1 second between batches to avoid rate limits
                time.sleep(1)
                break
            except Exception as e:
                retries += 1
                if retries == max_retries:
                    raise Exception(f"Failed to generate embeddings after {max_retries} retries: {str(e)}")
                # Exponential backoff
                time.sleep(2 ** retries)
        
    return all_embeddings

# 4. Read and chunk the text file
if not os.path.exists("RAG-Realtime-Voice\\Source.json"):
    raise FileNotFoundError("The file 'Source.json' does not exist in the specified path.")

def flatten_json(data, prefix=''):
    """Recursively flatten a nested JSON object into a single string."""
    text_pieces = []
    if isinstance(data, dict):
        for key, value in data.items():
            new_prefix = f"{prefix} {key}" if prefix else key
            text_pieces.append(flatten_json(value, new_prefix))
    elif isinstance(data, list):
        for item in data:
            text_pieces.append(flatten_json(item, prefix))
    else:
        return f"{prefix}: {str(data)}" if prefix else str(data)
    return ' '.join(filter(None, text_pieces))

with open("RAG-Realtime-Voice\\Source.json", encoding="utf-8") as f:
    try:
        data = json.load(f)
    except json.JSONDecodeError as e:
        raise ValueError(f"Error decoding JSON: {e}")

# Convert the nested JSON structure into a single text string
text = flatten_json(data).strip()
if not text:
    raise ValueError("No content could be extracted from the JSON file")

# Split into 1,000-character chunks for efficient batch embedding
docs = [text[i:i+1000] for i in range(0, len(text), 1000)]

# 5. Generate embeddings for each chunk with retry logic
embeddings = generate_embeddings_with_retry(docs)

# 6. Prepare and upsert points into Qdrant
points = [
    PointStruct(id=idx, vector=embeddings[idx], payload={"text": docs[idx]})
    for idx in range(len(docs))
]

# Batch upsert in smaller chunks to avoid overwhelming the server
batch_size = 100
for i in range(0, len(points), batch_size):
    batch = points[i:i + batch_size]
    qdrant.upsert(
        collection_name=collection_name,
        points=batch,
        wait=True
    )


def load_resume_data_to_collection(file_path: str, collection_name: str):
    """Load data from a JSON file and upsert into the specified Qdrant collection."""
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"The file '{file_path}' does not exist.")

    with open(file_path, encoding="utf-8") as f:
        try:
            data = json.load(f)
        except json.JSONDecodeError as e:
            raise ValueError(f"Error decoding JSON: {e}")

    # Flatten and process the JSON data
    text = flatten_json(data).strip()
    if not text:
        raise ValueError("No content could be extracted from the JSON file")

    # Split into 1,000-character chunks
    docs = [text[i:i+1000] for i in range(0, len(text), 1000)]

    # Generate embeddings for each chunk
    embeddings = generate_embeddings_with_retry(docs)

    # Prepare and upsert points into Qdrant
    points = [
        PointStruct(id=idx, vector=embeddings[idx], payload={"text": docs[idx]})
        for idx in range(len(docs))
    ]

    # Batch upsert in smaller chunks
    batch_size = 100
    for i in range(0, len(points), batch_size):
        batch = points[i:i + batch_size]
        qdrant.upsert(
            collection_name=collection_name,
            points=batch,
            wait=True
        )

# Load data from the specified file into the "resume_collection"
resume_file_path = "RAG-Realtime-Voice\\Resume.json"
resume_collection_name = "resume_collection"

if not qdrant.collection_exists(resume_collection_name):
    qdrant.create_collection(
        collection_name=resume_collection_name,
        vectors_config=VectorParams(size=vector_dim, distance=Distance.COSINE),
    )

load_resume_data_to_collection(resume_file_path, resume_collection_name)