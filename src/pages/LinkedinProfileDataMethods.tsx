import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import TeamCard from '@/components/TeamCard';
import { ArrowUpRight } from 'lucide-react';
import { getAssetPath } from '@/lib/assetPath';

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
                src="assets/Ways%20to%20get%20LinkedIn%20Profile%20Data.pdf"
                title="Ways to get LinkedIn Profile Data PDF"
                width="100%"
                height="100%"
                className="w-full h-full"
                style={{ minHeight: 600, border: 0 }}
              />
            </div>
          </ProjectCard>

          {/* Team Section */}
          <ProjectCard 
            title="Research Team" 
            animationDelay="delay-400"
          >
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3 flex items-center justify-center">
                  <img 
                    src={getAssetPath("/assets/b5866e1b-57bc-42f2-8b40-b20ef8adec6b.png")} 
                    alt="Dr. Liz Ann Wanless" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Dr. Liz Ann Wanless</h3>
                <p className="text-sm text-gray-600">Director of the Sports Innovation Institute</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3 flex items-center justify-center">
                  <img 
                    src={getAssetPath("/assets/a57539df-fb1b-4ae4-aaa1-173af06538d4.png")} 
                    alt="Aditya Naik" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Aditya Naik</h3>
                <p className="text-sm text-gray-600">Research Assistant</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3 flex items-center justify-center">
                  <img 
                    src={getAssetPath("/assets/5345d883-eaba-470f-ab0d-4f2b15047e5d.png")} 
                    alt="Raghuveer Venkatesh" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Raghuveer Venkatesh</h3>
                <p className="text-sm text-gray-600">Research Assistant</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3 flex items-center justify-center">
                  <img 
                    src={getAssetPath("/assets/59fb4cec-1adf-46f3-8726-207a7b1f03b4.png")} 
                    alt="Sai Pranam Chillakuru" 
                    className="w-full h-full object-cover object-center"
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

export default LinkedinProfileDataMethods;
