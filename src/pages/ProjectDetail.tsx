// src/pages/ProjectDetail.tsx - New component
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import the content components
import ImportedMethodology from './Methodology';

export interface OverviewProps {
  embedded?: boolean;
}

const Overview: React.FC<OverviewProps> = ({ embedded }) => {
  // Overview component implementation
  return <div>Overview Content</div>;
};

interface DatasetProps {
  embedded?: boolean;
}

const Dataset: React.FC<DatasetProps> = ({ embedded }) => {
  return <div>Dataset Content</div>;
};

export { Dataset };

// Methodology component implementation
interface MethodologyProps {
  embedded?: boolean;
}

const LocalMethodology: React.FC<MethodologyProps> = ({ embedded }) => {
  return <div>Methodology Content</div>;
};

interface ProjectDetailProps {
  projectId: string;
  activeTab?: string;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, activeTab = "overview" }, embedded = false) => {
  const navigate = useNavigate();
  
  // Handle tab changes by updating the URL
  const handleTabChange = (value: string) => {
    navigate(`/projects/${projectId}/${value}`, { replace: true });
  };
  
  // Get project data based on projectId (could be expanded for multiple projects)
  const projectData = {
    'review-analysis': {
      title: "Review Analysis Dashboard",
      description: "A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights."
    }
  }[projectId] || {
    title: "Project Not Found",
    description: "This project could not be found"
  };

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Project Details
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            {projectData.title}
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            {projectData.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={handleTabChange} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="dataset">Dataset</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <Overview embedded={true} />
            </TabsContent>
            
            <TabsContent value="dataset" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <Dataset embedded={true} />
            </TabsContent>
            
            <TabsContent value="methodology" className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
              <LocalMethodology embedded={true} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;