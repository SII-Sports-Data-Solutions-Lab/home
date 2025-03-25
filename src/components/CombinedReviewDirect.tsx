import React, { useEffect, useState } from 'react';
// The "pg" package must be installed in your project (npm install pg)
import { Client } from 'pg';

interface Review {
  product_name: string;
  rating: number;
  review_date: string;
  body: string;
  source: string;
}

const CombinedReviewDirect: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const client = new Client({
      user: 'admin',
      host: 'raghuserver',
      database: 'SII',
      password: 'raghu@123',
      port: 5432,
    });

    client
      .connect()
      .then(() => {
        return client.query(
          `SELECT product_name, rating, review_date, body, source FROM combined_review`
        );
      })
      .then((res) => {
        setReviews(res.rows);
        setLoading(false);
        client.end();
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to fetch reviews.');
        setLoading(false);
        client.end();
      });
  }, []);

  const exportCSV = () => {
    const headers = ['Product Name', 'Rating', 'Review Date', 'Body', 'Source'];
    const csvRows = [headers.join(',')];

    reviews.forEach((review) => {
      const row = [
        `"${review.product_name}"`,
        review.rating,
        `"${review.review_date}"`,
        `"${review.body.replace(/"/g, '""')}"`,
        `"${review.source}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'combined_reviews.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button 
          onClick={exportCSV}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Export CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Product Name</th>
              <th className="px-4 py-2 border-b">Rating</th>
              <th className="px-4 py-2 border-b">Review Date</th>
              <th className="px-4 py-2 border-b">Body</th>
              <th className="px-4 py-2 border-b">Source</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{review.product_name}</td>
                <td className="px-4 py-2 border-b">{review.rating}</td>
                <td className="px-4 py-2 border-b">{review.review_date}</td>
                <td className="px-4 py-2 border-b">{review.body}</td>
                <td className="px-4 py-2 border-b">{review.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CombinedReviewDirect;