
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

const Overview: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Project Details
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            Project Overview
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A comprehensive look at our research on e-commerce reviews of digital fitness equipment
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <ProjectCard 
            title="Project Scope" 
            animationDelay="delay-100"
          >
            <p className="mb-4">
              This research project aims to analyze customer reviews of digital treadmills and exercise bikes from major e-commerce platforms. By leveraging natural language processing techniques, particularly Latent Dirichlet Allocation (LDA), we seek to extract meaningful insights about customer experiences, preferences, and pain points.
            </p>
            <p>
              The analysis focuses on identifying key topics discussed in reviews and conducting sentiment analysis to understand customer perceptions of different product features. The findings will provide valuable insights for manufacturers, retailers, and consumers in the digital fitness equipment market.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Research Questions" 
            animationDelay="delay-200"
          >
            <p className="mb-4">Our research addresses the following key questions:</p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>What are the most frequently discussed topics in customer reviews of digital treadmills and exercise bikes?</li>
              <li>How do sentiments vary across different product features and price points?</li>
              <li>What features are most valued by customers in digital fitness equipment?</li>
              <li>How do customer expectations compare to actual experiences with these products?</li>
              <li>What insights can be derived to improve product development and marketing strategies?</li>
            </ol>
          </ProjectCard>

          <ProjectCard 
            title="Significance & Innovation" 
            animationDelay="delay-300"
          >
            <p className="mb-4">
              This project offers several significant contributions to both academic research and practical applications:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-semibold">Methodological Innovation:</span> Combining LDA with sentiment analysis to extract nuanced insights from user-generated content</li>
              <li><span className="font-semibold">Market Intelligence:</span> Providing data-driven insights about customer preferences and expectations</li>
              <li><span className="font-semibold">Academic Contribution:</span> Advancing the application of natural language processing in consumer research</li>
              <li><span className="font-semibold">Practical Impact:</span> Informing product development and marketing strategies for manufacturers and retailers</li>
            </ul>
          </ProjectCard>

          <ProjectCard 
            title="Expected Outcomes" 
            animationDelay="delay-400"
          >
            <p className="mb-4">
              Through this research, we expect to produce the following outcomes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A comprehensive dataset of analyzed customer reviews</li>
              <li>Identification of key topics and themes in customer feedback</li>
              <li>Sentiment analysis across different product features and brands</li>
              <li>Actionable insights for product improvement and marketing strategies</li>
              <li>Academic publications and presentations of the findings</li>
              <li>Recommendations for future research in this area</li>
            </ul>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Overview;
