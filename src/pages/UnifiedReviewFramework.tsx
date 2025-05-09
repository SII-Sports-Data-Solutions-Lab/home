// src/pages/UnifiedReviewFramework.tsx
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import TeamCard from '@/components/TeamCard';
import { ArrowUpRight } from 'lucide-react';

const UnifiedReviewFramework: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Project Details
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            Unified Review Collection Framework
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Created by Raghuveer and Dr. Liz Wan, this open-source project provides a comprehensive web scraping and analysis solution for collecting and analyzing product reviews from major fitness equipment retailers. It features modular scrapers for Amazon, Peloton, Best Buy, Dick's Sporting Goods, Bowflex, Horizon Fitness, Wahoo, Scheel's, and Target, with automated pagination, PostgreSQL integration, and interactive data visualization. The framework supports both Python and Node.js, making it easy to extend and adapt for new platforms.
          </p>
          <a
            href="https://github.com/SII-Sports-Data-Solutions-Lab/Unified-Review-Collection-Framework"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-indiana-crimson hover:underline font-medium"
          >
            View on GitHub <ArrowUpRight className="inline h-4 w-4" />
          </a>
        </div>

        <div className="space-y-10 max-w-4xl mx-auto">
          <ProjectCard title="Project Overview" animationDelay="delay-100">
            <p className="mb-4">
              The Unified Review Collection Framework is designed to streamline the process of collecting, storing, and analyzing product reviews from a wide range of e-commerce and fitness equipment platforms. It supports automated scraping, robust error handling, and seamless integration with PostgreSQL databases for scalable data storage and analysis.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Multi-platform review collection (Amazon, Peloton, Best Buy, Dick's, Bowflex, Horizon, Wahoo, Scheel's, Target, etc.)</li>
              <li>Automated pagination and rate limiting</li>
              <li>Error logging and robust request management</li>
              <li>PostgreSQL database integration</li>
              <li>Interactive data visualization support</li>
              <li>Modular and reusable scraping functions (Python & Node.js)</li>
            </ul>
          </ProjectCard>

          <ProjectCard title="Team" animationDelay="delay-200">
            <TeamCard />
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default UnifiedReviewFramework;
