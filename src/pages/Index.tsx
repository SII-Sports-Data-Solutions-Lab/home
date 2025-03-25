
import React from 'react';
import Layout from '@/components/Layout';
import RoadmapCard from '@/components/RoadmapCard';
import ProjectCard from '@/components/ProjectCard';

const Index: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-sports-purple uppercase tracking-wider">
            Sports Innovation Institute Research Project
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight">
            Analyzing E-commerce Reviews on Digital Treadmills and Exercise Bikes
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Using Latent Dirichlet Allocation to extract key topics and perform sentiment analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ProjectCard 
            title="Project Introduction" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              This research initiative focuses on analyzing customer reviews of digital fitness equipment from various e-commerce platforms. By applying advanced natural language processing techniques, we aim to uncover actionable insights that can benefit both consumers and manufacturers.
            </p>
            <p>
              Our team is leveraging Latent Dirichlet Allocation (LDA) to identify key topics and sentiments in user reviews of treadmills and exercise bikes, providing a comprehensive understanding of customer experiences and preferences in the digital fitness equipment market.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Research Objectives" 
            animationDelay="delay-300"
          >
            <ul className="list-disc pl-5 space-y-2">
              <li>Collect and analyze customer reviews from major e-commerce platforms</li>
              <li>Apply Latent Dirichlet Allocation to identify key topics in the reviews</li>
              <li>Perform sentiment analysis to understand user perceptions</li>
              <li>Identify the most valued features in digital fitness equipment</li>
              <li>Provide insights for product development and marketing strategies</li>
            </ul>
          </ProjectCard>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-center mb-12">
            Project Roadmap
          </h2>
          <RoadmapCard />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
