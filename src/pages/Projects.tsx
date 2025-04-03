// src/pages/Projects.tsx - Updated version
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the content from the other pages
import ImportedMethodologyContent from './Methodology';

interface OverviewContentProps {
  embedded?: boolean;
}

const OverviewContent: React.FC<OverviewContentProps> = ({ embedded }) => {
  // Content for the Overview tab
  return (
    <div>
      {/* Overview content goes here */}
    </div>
  );
};

interface DatasetContentProps {
  embedded?: boolean;
}

const DatasetContent: React.FC<DatasetContentProps> = ({ embedded }) => {
  return (
    <div>
      {/* Dataset content goes here */}
    </div>
  );
};

interface MethodologyContentProps {
  embedded?: boolean;
}

const LocalMethodologyContent: React.FC<MethodologyContentProps> = ({ embedded }) => {
  return (
    <div>
      {/* Methodology content goes here */}
    </div>
  );
};

const Projects: React.FC = () => {
  // Track the active tab
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
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
            <p className="mb-6">
              A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights.
            </p>
            
            {/* Tabs for project details */}
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mt-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="dataset">Dataset</TabsTrigger>
                <TabsTrigger value="methodology">Methodology</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <OverviewContent embedded={true} />
                </div>
              </TabsContent>
              
              <TabsContent value="dataset" className="mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <DatasetContent embedded={true} />
                </div>
              </TabsContent>
              
              <TabsContent value="methodology" className="mt-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <LocalMethodologyContent embedded={true} />
                </div>
              </TabsContent>
            </Tabs>
          </ProjectCard>
          
          {/* Other projects */}
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
        </div>
      </section>
    </Layout>
  );
};

export default Projects;