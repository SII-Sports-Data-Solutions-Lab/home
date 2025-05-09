import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import TeamCard from '@/components/TeamCard';
import { ArrowUpRight } from 'lucide-react';

const LinkedinProfileDataMethods: React.FC = () => {
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
            Mining the LinkedIn Goldmine: Data Extraction Demystified
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            This project explores multiple methods for extracting LinkedIn profile data, including official APIs, web scraping, and third-party tools. It highlights the pros, cons, and ethical considerations of each approach using a detailed Google Slides presentation.
          </p>
          <a
            href="https://github.com/SII-Sports-Data-Solutions-Lab/linkedin-profile-data-methods"
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
              The Linkedin-profile-data-methods project provides a comparative analysis of various approaches to extracting LinkedIn profile data. It covers:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Official LinkedIn APIs</li>
              <li>Web scraping techniques</li>
              <li>Third-party tools and services</li>
              <li>Pros and cons of each method</li>
              <li>Ethical and legal considerations</li>
              <li>Summary presented in a detailed Google Slides deck</li>
            </ul>
          </ProjectCard>

          <ProjectCard title="Ways to get LinkedIn Profile Data (PDF)" animationDelay="delay-150">
            <div className="w-full h-[700px] border rounded-md overflow-hidden">
              <iframe
                src="/Ways%20to%20get%20LinkedIn%20Profile%20Data.pdf"
                title="Ways to get LinkedIn Profile Data PDF"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ minHeight: 600, border: 0 }}
              />
            </div>
          </ProjectCard>

          <ProjectCard title="Team" animationDelay="delay-200">
            <TeamCard />
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default LinkedinProfileDataMethods;
