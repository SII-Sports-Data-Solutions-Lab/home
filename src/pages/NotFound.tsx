
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-8xl font-playfair font-bold text-indiana-crimson animate-scale-up">404</h1>
        <h2 className="mt-8 text-3xl font-playfair font-medium animate-fade-in delay-100">Page Not Found</h2>
        <p className="mt-4 text-gray-600 max-w-md animate-fade-in delay-200">
          We couldn't find the page you were looking for. It might have been moved or doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-8 px-6 py-3 bg-indiana-crimson text-white rounded-lg transition-all duration-300 hover:bg-indiana-crimson/90 animate-fade-in delay-300"
        >
          Return to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
