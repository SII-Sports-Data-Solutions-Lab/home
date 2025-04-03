import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import RoadmapCard from '@/components/RoadmapCard';

const Projects: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Research Initiatives
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            Our Projects
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Exploring digital fitness innovations through data-driven research
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          {/* Main project from homepage */}
          <ProjectCard 
        title="Analyzing E-commerce Reviews on Digital Treadmills and Exercise Bikes" 
        animationDelay="delay-100"
        className="border-indiana-crimson"
        >
        <p className="mb-4">
            This research initiative focuses on analyzing customer reviews of digital fitness equipment from various e-commerce platforms. Our analysis follows a two-step approach to extract meaningful insights from unstructured review data.
        </p>
        
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Analysis Methodology</h3>
            <ol className="list-decimal pl-5 space-y-3">
            <li>
                <span className="font-semibold">Sentiment Analysis:</span> First, we categorize all reviews into positive, negative, or neutral sentiments based on the overall tone and language used by customers. This classification helps identify general satisfaction levels and areas of concern.
            </li>
            <li>
                <span className="font-semibold">Topic Modeling with LDA:</span> After sentiment classification, we apply Latent Dirichlet Allocation (LDA) to extract key topics discussed within each sentiment category. This reveals which specific aspects of products are associated with positive and negative experiences.
            </li>
            </ol>
        </div>
        
        <p className="mb-4">
            By performing sentiment analysis before topic modeling, we can identify sentiment-specific topics that might otherwise be obscured in a combined analysis. This sequential approach provides a more nuanced understanding of customer experiences and preferences in the digital fitness equipment market.
        </p>
        
        <div className="mt-6 mb-4">
            <h3 className="text-lg font-semibold mb-2">Research Objectives</h3>
            <ul className="list-disc pl-5 space-y-2">
            <li>Collect and analyze customer reviews from major e-commerce platforms</li>
            <li>Classify reviews by sentiment (positive, negative, neutral)</li>
            <li>Apply Latent Dirichlet Allocation to identify key topics within each sentiment category</li>
            <li>Identify the most valued features and common pain points in digital fitness equipment</li>
            <li>Provide insights for product development and marketing strategies</li>
            </ul>
        </div>
        
        <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Project Roadmap</h3>
            <RoadmapCard />
        </div>
        </ProjectCard>
    
            {/* Additional projects */}
          <ProjectCard 
            title="Review Analysis Dashboard" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              An interactive dashboard that visualizes the results of our topic modeling and sentiment analysis on digital fitness equipment reviews. This tool provides real-time insights into consumer perceptions and preferences.
            </p>
            <div className="flex justify-end mt-4">
              <a href="#" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View Project
              </a>
            </div>
          </ProjectCard>

          <ProjectCard 
            title="Feature Importance Analysis" 
            animationDelay="delay-300"
          >
            <p className="mb-4">
              A comprehensive study of which features matter most to consumers when purchasing digital treadmills and exercise bikes. Our analysis ranks features by importance based on frequency of mention and sentiment intensity in reviews.
            </p>
            <div className="flex justify-end mt-4">
              <a href="#" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View Project
              </a>
            </div>
          </ProjectCard>

          <ProjectCard 
            title="Sentiment Trend Tracker" 
            animationDelay="delay-400"
          >
            <p className="mb-4">
              A longitudinal analysis of how consumer sentiments toward digital fitness equipment have evolved over time. This project tracks changes in opinions, expectations, and satisfaction levels from 2020 to 2024.
            </p>
            <div className="flex justify-end mt-4">
              <a href="#" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View Project
              </a>
            </div>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;