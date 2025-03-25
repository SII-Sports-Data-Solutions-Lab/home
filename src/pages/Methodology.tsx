
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const Methodology: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Research Approach
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-playfair font-bold">
            Research Methodology
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Our approach to analyzing e-commerce reviews using Latent Dirichlet Allocation and sentiment analysis
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <ProjectCard 
            title="Methodological Framework" 
            animationDelay="delay-100"
          >
            <p className="mb-4">
              Our research employs a mixed-methods approach that combines natural language processing techniques with statistical analysis. The core of our methodology is the application of Latent Dirichlet Allocation (LDA) for topic modeling, complemented by sentiment analysis to understand customer perceptions.
            </p>
            <p>
              This framework enables us to extract meaningful insights from unstructured text data in customer reviews, identifying key topics of discussion and the associated sentiments. By combining these techniques, we can develop a comprehensive understanding of customer experiences with digital fitness equipment.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Latent Dirichlet Allocation (LDA)" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              LDA is a generative statistical model that allows sets of observations to be explained by unobserved groups. In our context, it helps identify the main topics present in customer reviews:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Topic Identification:</span> LDA identifies latent topics in the review text</li>
              <li><span className="font-medium">Word Distribution:</span> Each topic is characterized by a distribution over words</li>
              <li><span className="font-medium">Document Distribution:</span> Each review is modeled as a mixture of topics</li>
            </ul>
            <p className="mb-4">
              Our implementation of LDA follows these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Preprocessing of review text (tokenization, stop word removal, etc.)</li>
              <li>Creation of a document-term matrix</li>
              <li>Model training with parameter tuning</li>
              <li>Topic extraction and interpretation</li>
              <li>Validation using coherence measures</li>
            </ol>
          </ProjectCard>

          <ProjectCard 
            title="Sentiment Analysis" 
            animationDelay="delay-300"
          >
            <p className="mb-4">
              To understand customer perceptions, we apply sentiment analysis to the reviews:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Overall Sentiment:</span> Classifying reviews as positive, negative, or neutral</li>
              <li><span className="font-medium">Feature-Based Sentiment:</span> Analyzing sentiments associated with specific product features</li>
              <li><span className="font-medium">Sentiment Intensity:</span> Measuring the strength of expressed opinions</li>
            </ul>
            <p>
              We use a combination of lexicon-based approaches and machine learning models for sentiment analysis, including VADER (Valence Aware Dictionary and sEntiment Reasoner) and fine-tuned BERT models.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Analysis Workflow" 
            animationDelay="delay-400"
          >
            <p className="mb-4">
              Our research follows a systematic workflow:
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium">Data Collection & Preprocessing</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Web scraping of reviews from multiple platforms</li>
                  <li>Text cleaning and normalization</li>
                  <li>Feature extraction and annotation</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Topic Modeling with LDA</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Parameter optimization</li>
                  <li>Topic extraction and labeling</li>
                  <li>Topic visualization and interpretation</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Sentiment Analysis</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Sentiment classification at review and sentence level</li>
                  <li>Feature-based sentiment extraction</li>
                  <li>Sentiment trend analysis over time</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Integration & Interpretation</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Combining topic and sentiment results</li>
                  <li>Statistical analysis of findings</li>
                  <li>Generation of insights and recommendations</li>
                </ul>
              </li>
            </ol>
          </ProjectCard>

          <ProjectCard 
            title="Validation & Evaluation" 
            animationDelay="delay-500"
          >
            <p className="mb-4">
              To ensure the reliability and validity of our findings, we employ several evaluation strategies:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Topic Coherence:</span> Measuring the semantic similarity of words within topics</li>
              <li><span className="font-medium">Human Validation:</span> Expert review of topic labels and sentiment classifications</li>
              <li><span className="font-medium">Cross-Validation:</span> Testing model performance across different subsets of data</li>
              <li><span className="font-medium">Comparative Analysis:</span> Benchmarking against alternative modeling approaches</li>
              <li><span className="font-medium">Sensitivity Analysis:</span> Testing the robustness of findings to parameter changes</li>
            </ul>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Methodology;
