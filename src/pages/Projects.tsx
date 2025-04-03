import React from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';

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
          <ProjectCard title="Review Analysis" animationDelay="delay-100">
            <p className="mb-4">
              A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights.
            </p>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
