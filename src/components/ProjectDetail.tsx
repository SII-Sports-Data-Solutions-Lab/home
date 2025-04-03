// In src/pages/ProjectDetail.tsx
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { ArrowUpRight } from 'lucide-react';

const ProjectDetail: React.FC<{ projectId: string }> = ({ projectId }) => {
  // Get project data based on projectId
  const projectData = {
    'review-analysis': {
      title: "Review Analysis Dashboard",
      description: "A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights."
    }
  }[projectId] || {
    title: "Project Not Found",
    description: "This project could not be found"
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Project Details
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            {projectData.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            {projectData.description}
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Overview Section */}
          <ProjectCard 
            title="Project Overview" 
            animationDelay="delay-100"
          >
            <p className="mb-4">
              This research project aims to analyze customer reviews of digital treadmills and exercise bikes from major e-commerce platforms. By leveraging natural language processing techniques, particularly Latent Dirichlet Allocation (LDA), we seek to extract meaningful insights about customer experiences, preferences, and pain points.
            </p>
            <p className="mb-4">
              The analysis focuses on identifying key topics discussed in reviews and conducting sentiment analysis to understand customer perceptions of different product features. The findings will provide valuable insights for manufacturers, retailers, and consumers in the digital fitness equipment market.
            </p>
            <p className="mb-4">Our research addresses the following key questions:</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>What are the most frequently discussed topics in customer reviews of digital treadmills and exercise bikes?</li>
              <li>How do sentiments vary across different product features and price points?</li>
              <li>What features are most valued by customers in digital fitness equipment?</li>
              <li>How do customer expectations compare to actual experiences with these products?</li>
              <li>What insights can be derived to improve product development and marketing strategies?</li>
            </ol>
          </ProjectCard>

          {/* Dataset Section */}
          <ProjectCard 
            title="Dataset Information" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              Our dataset is collected from multiple e-commerce and fitness review platforms, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Major E-commerce Platforms:</span> Amazon, Walmart, Best Buy</li>
              <li><span className="font-medium">Fitness Equipment Retailers:</span> Dick's Sporting Goods, NordicTrack, Peloton</li>
              <li><span className="font-medium">Fitness Review Websites:</span> FitRated, TreadmillReviews, ExerciseBike.net</li>
            </ul>
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
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-20">
                    <th className="py-3 px-4 font-semibold">Category</th>
                    <th className="py-3 px-4 font-semibold">Number of Reviews</th>
                    <th className="py-3 px-4 font-semibold">Time Period</th>
                    <th className="py-3 px-4 font-semibold">Average Length</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">Digital Treadmills</td>
                    <td className="py-3 px-4">~50,000</td>
                    <td className="py-3 px-4">2020-2024</td>
                    <td className="py-3 px-4">120 words</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Exercise Bikes</td>
                    <td className="py-3 px-4">~35,000</td>
                    <td className="py-3 px-4">2020-2024</td>
                    <td className="py-3 px-4">105 words</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Combined Dataset</td>
                    <td className="py-3 px-4">~85,000</td>
                    <td className="py-3 px-4">2020-2024</td>
                    <td className="py-3 px-4">113 words</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ProjectCard>

          {/* Methodology Section */}
          <ProjectCard 
            title="Research Methodology" 
            animationDelay="delay-300"
          >
            <p className="mb-4">
              Our research employs a mixed-methods approach that combines natural language processing techniques with statistical analysis. The core of our methodology is the application of Latent Dirichlet Allocation (LDA) for topic modeling, complemented by sentiment analysis to understand customer perceptions.
            </p>
            <p className="mb-4">
              LDA is a generative statistical model that allows sets of observations to be explained by unobserved groups. In our context, it helps identify the main topics present in customer reviews:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Topic Identification:</span> LDA identifies latent topics in the review text</li>
              <li><span className="font-medium">Word Distribution:</span> Each topic is characterized by a distribution over words</li>
              <li><span className="font-medium">Document Distribution:</span> Each review is modeled as a mixture of topics</li>
            </ul>
            <p className="mb-4">
              To understand customer perceptions, we apply sentiment analysis to the reviews:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li><span className="font-medium">Overall Sentiment:</span> Classifying reviews as positive, negative, or neutral</li>
              <li><span className="font-medium">Feature-Based Sentiment:</span> Analyzing sentiments associated with specific product features</li>
              <li><span className="font-medium">Sentiment Intensity:</span> Measuring the strength of expressed opinions</li>
            </ul>
            <p className="mb-4">
              Our research follows a systematic workflow:
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium">Data Collection & Preprocessing</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Web scraping of reviews from multiple platforms</li>
                  <li>Text cleaning and normalization</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Topic Modeling with LDA</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Parameter optimization</li>
                  <li>Topic extraction and labeling</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Sentiment Analysis</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Sentiment classification at review and sentence level</li>
                  <li>Feature-based sentiment extraction</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Integration & Interpretation</span>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Combining topic and sentiment results</li>
                  <li>Generation of insights and recommendations</li>
                </ul>
              </li>
            </ol>
          </ProjectCard>

          {/* Team Section */}
          <ProjectCard 
            title="Research Team" 
            animationDelay="delay-400"
          >
            <p className="mb-6">
              Our interdisciplinary research team brings together expertise in data science, natural language processing, machine learning, and consumer behavior. Each team member contributes specialized knowledge and skills to ensure the success of this project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3">
                  <img 
                    src="/assets/b5866e1b-57bc-42f2-8b40-b20ef8adec6b.png" 
                    alt="Dr. Liz Ann Wanless" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Dr. Liz Ann Wanless</h3>
                <p className="text-sm text-gray-600">Director of the Sports Innovation Institute</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3">
                  <img 
                    src="/assets/a57539df-fb1b-4ae4-aaa1-173af06538d4.png" 
                    alt="Aditya Naik" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Aditya Naik</h3>
                <p className="text-sm text-gray-600">Research Assistant</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3">
                  <img 
                    src="/assets/5345d883-eaba-470f-ab0d-4f2b15047e5d.png" 
                    alt="Raghuveer Venkatesh" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Raghuveer Venkatesh</h3>
                <p className="text-sm text-gray-600">Research Assistant</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3">
                  <img 
                    src="/assets/59fb4cec-1adf-46f3-8726-207a7b1f03b4.png" 
                    alt="Sai Pranam Chillakuru" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Sai Pranam Chillakuru</h3>
                <p className="text-sm text-gray-600">Research Assistant</p>
              </div>
            </div>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;