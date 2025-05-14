// src/pages/Projects.tsx
import React, { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'sports' | 'data-science' | 'web-development' | 'machine-learning';
  tags: string[];
  link: string;
  isInstituteProject: boolean;
}

const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showInstituteOnly, setShowInstituteOnly] = useState(true);

  const projects: Project[] = [
    {
      id: 'review-analysis',
      title: "What Stories Do Your Reviews Tell?",
      description: "A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights.",
      category: 'data-science',
      tags: ['NLP', 'Machine Learning', 'Data Analysis'],
      link: '/projects/review-analysis',
      isInstituteProject: true
    },
    {
      id: 'striker-worth',
      title: "What's A Striker Worth?",
      description: "A smart, data-driven tool that predicts a striker's market value by analyzing their stats, performance, and physical traits—giving clubs, scouts, and managers the insights they need to spot hidden gems and back big investments.",
      category: 'sports',
      tags: ['Sports Analytics', 'Machine Learning', 'Data Science'],
      link: '/projects/striker-worth',
      isInstituteProject: true
    },
    {
      id: 'nfl-big-data-bowl',
      title: "NFL Big Data Bowl GuideBook",
      description: "A guidebook for NFL enthusiasts and analysts, detailing the methodologies and insights from the NFL Big Data Bowl. This project focuses on enhancing understanding of player performance metrics and game strategies through data visualization and analysis.",
      category: 'sports',
      tags: ['Sports Analytics', 'Data Visualization', 'NFL'],
      link: '/projects/nfl-big-data-bowl-guidebook',
      isInstituteProject: true
    },
    {
      id: 'unified-review-framework',
      title: "Unified Review Collection Framework",
      description: "An open-source framework for collecting and analyzing product reviews from major fitness equipment retailers. Features modular scrapers and PostgreSQL integration.",
      category: 'web-development',
      tags: ['Web Scraping', 'Python', 'PostgreSQL'],
      link: '/projects/unified-review-framework',
      isInstituteProject: true
    },
    {
      id: 'linkedin-profile-data',
      title: "Mining the LinkedIn Goldmine: Data Extraction Demystified",
      description: "This project explores multiple methods for extracting LinkedIn profile data, including official APIs, web scraping, and third-party tools. It highlights the pros, cons, and ethical considerations of each approach.",
      category: 'data-science',
      tags: ['Web Scraping', 'APIs', 'Data Collection'],
      link: '/projects/linkedin-profile-data-methods',
      isInstituteProject: true
    },
    {
      id: 'dentavision',
      title: "DentaVision – AI-Powered Dental Disease Detection",
      description: "An innovative web application that leverages advanced AI models for dental disease detection. Features multiple model implementations including Vanilla CNN, CNN with Attention, EfficientNet-B0, and a pre-trained ViT model. The system processes dental images in real-time with a focus on privacy (no image storage) and educational purposes. Built using state-of-the-art computer vision techniques and trained on diverse dental datasets.",
      category: 'data-science',
      tags: ['AI', 'Computer Vision', 'Healthcare', 'Deep Learning', 'Web App'],
      link: 'https://github.com/raghuveer9303/DentaVision/tree/main',
      isInstituteProject: false
    },
    {
      id: 'taxipulse',
      title: "TaxiPulse - NYC Taxi Intelligence Dashboard",
      description: "A powerful web-based dashboard that transforms NYC Yellow Taxi trip data into valuable insights for maximizing earnings. Features include live data download, spatial analysis, interactive maps, and dynamic visualizations. The system processes and analyzes taxi trip data to help drivers and fleet managers optimize their strategies through data-driven insights.",
      category: 'data-science',
      tags: ['Data Visualization', 'Spatial Analysis', 'Python', 'Flask', 'Dash', 'Docker'],
      link: 'https://github.com/raghuveer9303/TaxiPulse',
      isInstituteProject: false
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesInstitute = showInstituteOnly ? project.isInstituteProject : true;

    return matchesSearch && matchesInstitute;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in">
            <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
              Our Research & Projects
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
              Explore Our Work
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Discover our research projects, student initiatives, and innovative solutions
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant={showInstituteOnly ? "default" : "outline"}
                  onClick={() => setShowInstituteOnly(!showInstituteOnly)}
                  className="whitespace-nowrap"
                >
                  {showInstituteOnly ? "Institute Projects" : "All Projects"}
                </Button>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                animationDelay={`delay-${(index + 1) * 100}`}
                className="hover:shadow-lg transition-shadow duration-200 relative"
              >
                {/* Project Type Label */}
                <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-medium rounded-bl-lg ${
                  project.isInstituteProject 
                    ? 'bg-indiana-crimson text-white' 
                    : 'bg-blue-600 text-white'
                }`}>
                  {project.isInstituteProject ? 'Institute Project' : 'Student Project'}
                </div>
                
                <p className="mb-3 text-gray-600 text-sm line-clamp-3 mt-6">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Link
                    to={project.link}
                    className="inline-flex items-center px-3 py-1.5 bg-indiana-crimson text-white text-sm rounded-md hover:bg-indiana-red transition-colors"
                  >
                    View Project <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </div>
              </ProjectCard>
            ))}
          </div>

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setShowInstituteOnly(true);
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Project Type Legend */}
          <div className="mt-8 flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-indiana-crimson rounded-full"></div>
              <span className="text-sm text-gray-600">Institute Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-gray-600">Student Projects</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;