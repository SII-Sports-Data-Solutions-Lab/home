
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const Dataset: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Research Data
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-playfair font-bold">
            Dataset Information
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Details about the data collection and processing for our analysis
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <ProjectCard 
            title="Data Sources" 
            animationDelay="delay-100"
          >
            <p className="mb-4">
              Our dataset is collected from multiple e-commerce and fitness review platforms, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Major E-commerce Platforms:</span> Amazon, Walmart, Best Buy</li>
              <li><span className="font-medium">Fitness Equipment Retailers:</span> Dick's Sporting Goods, NordicTrack, Peloton</li>
              <li><span className="font-medium">Fitness Review Websites:</span> FitRated, TreadmillReviews, ExerciseBike.net</li>
            </ul>
            <p>
              Reviews are collected across different price points, brands, and product categories to ensure a comprehensive and representative dataset.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Data Collection Methodology" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              We employ web scraping techniques to collect customer reviews using the following approach:
            </p>
            <ol className="list-decimal pl-5 space-y-2 mb-4">
              <li>Identification of relevant product pages on e-commerce platforms</li>
              <li>Automated scraping of review text, ratings, dates, and helpful votes</li>
              <li>Collection of product metadata (price, brand, features, etc.)</li>
              <li>Validation of data integrity and removal of duplicates</li>
              <li>Storage in a structured database for analysis</li>
            </ol>
            <p>
              All data collection is performed in compliance with the terms of service of the respective websites and relevant data protection regulations.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Dataset Composition" 
            animationDelay="delay-300"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 font-semibold">Category</th>
                    <th className="py-3 px-4 font-semibold">Number of Reviews</th>
                    <th className="py-3 px-4 font-semibold">Time Period</th>
                    <th className="py-3 px-4 font-semibold">Average Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">Digital Treadmills</td>
                    <td className="py-3 px-4">~10,000</td>
                    <td className="py-3 px-4">2020-2024</td>
                    <td className="py-3 px-4">120 words</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Exercise Bikes</td>
                    <td className="py-3 px-4">~8,500</td>
                    <td className="py-3 px-4">2020-2024</td>
                    <td className="py-3 px-4">105 words</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Combined Dataset</td>
                    <td className="py-3 px-4">~18,500</td>
                    <td className="py-3 px-4">2020-2024</td>
                    <td className="py-3 px-4">113 words</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ProjectCard>

          <ProjectCard 
            title="Data Preprocessing" 
            animationDelay="delay-400"
          >
            <p className="mb-4">
              Before analysis, the collected data undergoes several preprocessing steps:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">Text Cleaning:</span> Removal of HTML tags, special characters, and non-alphanumeric content</li>
              <li><span className="font-medium">Tokenization:</span> Breaking down reviews into individual words or tokens</li>
              <li><span className="font-medium">Stop Word Removal:</span> Filtering out common words that don't contribute to the analysis</li>
              <li><span className="font-medium">Lemmatization:</span> Reducing words to their base or root form</li>
              <li><span className="font-medium">Part-of-Speech Tagging:</span> Identifying nouns, verbs, adjectives, etc. for targeted analysis</li>
              <li><span className="font-medium">Feature Extraction:</span> Identifying mentions of specific product features</li>
            </ul>
          </ProjectCard>

          <ProjectCard 
            title="Data Ethics & Privacy" 
            animationDelay="delay-500"
          >
            <p className="mb-4">
              We are committed to maintaining ethical standards in our data collection and analysis:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All data is anonymized to protect reviewer privacy</li>
              <li>Personal identifiers are removed from the dataset</li>
              <li>Data is stored securely with appropriate access controls</li>
              <li>The research has been reviewed and approved by the Indiana University Institutional Review Board</li>
              <li>Results are reported in aggregate to prevent identification of individual reviewers</li>
            </ul>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Dataset;
