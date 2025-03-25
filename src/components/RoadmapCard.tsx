
import React from 'react';
import { cn } from '@/lib/utils';

interface RoadmapStepProps {
  title: string;
  description: string;
  date: string;
  index: number;
  isLast?: boolean;
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ 
  title, 
  description, 
  date, 
  index, 
  isLast = false 
}) => (
  <div className={cn("relative flex flex-col md:flex-row", !isLast && "pb-8")}>
    <div className="flex flex-col items-center mr-4 md:mr-8">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indiana-crimson text-white font-semibold">
        {index + 1}
      </div>
      {!isLast && (
        <div className="w-px h-full bg-indiana-crimson/30 mt-2"></div>
      )}
    </div>
    <div className={cn(
      "flex-1 animate-fade-in",
      { "delay-100": index === 0 },
      { "delay-200": index === 1 },
      { "delay-300": index === 2 },
      { "delay-400": index === 3 },
      { "delay-500": index === 4 }
    )}>
      <div className="glass-card p-5 rounded-lg mb-2">
        <h3 className="text-xl font-semibold text-indiana-crimson">{title}</h3>
        <time className="text-sm text-gray-400 mb-2 block">{date}</time>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  </div>
);

interface RoadmapCardProps {
  className?: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = ({ className }) => {
  const roadmapSteps = [
    {
      title: "Project Initiation",
      description: "Define project scope, objectives, and deliverables. Establish team structure and roles.",
      date: "January 2024"
    },
    {
      title: "Data Collection",
      description: "Scrape customer reviews from e-commerce platforms and fitness review websites.",
      date: "February 2024"
    },
    {
      title: "Data Preprocessing",
      description: "Clean and preprocess collected data. Annotate data for sentiment analysis.",
      date: "March 2024"
    },
    {
      title: "LDA Model Development",
      description: "Apply Latent Dirichlet Allocation to extract key topics from reviews.",
      date: "April 2024"
    },
    {
      title: "Analysis & Evaluation",
      description: "Perform sentiment analysis and evaluate results. Generate insights and findings.",
      date: "May 2024"
    }
  ];

  return (
    <div className={cn("py-8", className)}>
      <div className="mt-12">
        {roadmapSteps.map((step, index) => (
          <RoadmapStep
            key={index}
            title={step.title}
            description={step.description}
            date={step.date}
            index={index}
            isLast={index === roadmapSteps.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
