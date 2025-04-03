// In src/components/Projects.tsx
import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Our Research
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            Current Projects
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Exploring the intersection of customer feedback and digital fitness technology
          </p>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <ProjectCard 
            title="Review Analysis Dashboard" 
            animationDelay="delay-100"
          >
            <p className="mb-4">
              A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights.
            </p>
            <div className="flex justify-end mt-6">
              <Link to="/projects/review-analysis" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View Project <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
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
                Coming Soon <ArrowRight className="ml-1 inline h-4 w-4" />
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
                Coming Soon <ArrowRight className="ml-1 inline h-4 w-4" />
              </a>
            </div>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;