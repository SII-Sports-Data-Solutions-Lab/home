import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

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
          <ProjectCard 
            title="Review Analysis Dashboard" 
            animationDelay="delay-100"
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
            animationDelay="delay-200"
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
            animationDelay="delay-300"
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

          <ProjectCard 
            title="Comparative Brand Analysis" 
            animationDelay="delay-400"
          >
            <p className="mb-4">
              A detailed comparison of how different brands are perceived in the digital fitness equipment market. This analysis examines strengths, weaknesses, and unique selling points as reflected in customer reviews.
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