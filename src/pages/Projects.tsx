// src/pages/Projects.tsx
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            title="What Stories Do Your Reviews Tell?" 
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
            title="What’s A Striker Worth?" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              A smart, data-driven tool that predicts a striker’s market value by analyzing their stats, performance, and physical traits—giving clubs, scouts, and managers the insights they need to spot hidden gems, back big investments, and stay ahead in the game.
            </p>
            <div className="flex justify-end mt-4">
              <Link to="/projects/striker-worth" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View Project <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            </div>
          </ProjectCard>
          
          <ProjectCard 
            title="NFL Big Data Bowl GuideBook" 
            animationDelay="delay-200"
          >
            <p className="mb-4">
              A guidebook for NFL enthusiasts and analysts, detailing the methodologies and insights from the NFL Big Data Bowl. This project focuses on enhancing understanding of player performance metrics and game strategies through data visualization and analysis.
            </p>
            <div className="flex justify-end mt-4">
              <Link to="/projects/nfl-big-data-bowl-guidebook" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View GuideBook <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            </div>
          </ProjectCard>

          <ProjectCard
            title="Unified Review Collection Framework"
            animationDelay="delay-300"
          >
            <p className="mb-4">
              An open-source framework for collecting and analyzing product reviews from major fitness equipment retailers. Features modular scrapers and PostgreSQL integration.
            </p>
            <div className="flex justify-end mt-4">
              <Link to="/projects/unified-review-framework" className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors">
                View Project <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            </div>
          </ProjectCard>

          <ProjectCard
            title="Mining the LinkedIn Goldmine: Data Extraction Demystified"
            animationDelay="delay-400"
          >
            <p className="mb-4">
              This project explores multiple methods for extracting LinkedIn profile data, including official APIs, web scraping, and third-party tools. It highlights the pros, cons, and ethical considerations of each approach using a detailed Google Slides presentation.
            </p>
            <div className="flex justify-end mt-4">
              <Link
                to="/projects/linkedin-profile-data-methods"
                className="px-4 py-2 bg-indiana-crimson text-white rounded-md hover:bg-indiana-red transition-colors"
              >
                View Project <ArrowRight className="ml-1 inline h-4 w-4" />
              </Link>
            </div>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;