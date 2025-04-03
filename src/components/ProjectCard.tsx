// src/components/ProjectCard.tsx - Fixed version

import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  children: ReactNode;
  animationDelay?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  children, 
  animationDelay = "",
  className = "" 
}) => {
  return (
    <div className={cn(
      "bg-white p-8 rounded-lg shadow-md border border-gray-200 animate-fade-in", 
      animationDelay,
      className
    )}>
      <h3 className="text-2xl font-semibold mb-4 text-indiana-crimson">{title}</h3>
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;