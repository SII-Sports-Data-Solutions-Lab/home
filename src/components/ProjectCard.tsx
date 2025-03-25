
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  animationDelay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  children, 
  className,
  animationDelay = 'delay-100'
}) => {
  return (
    <div className={cn(
      "glass-card rounded-xl p-6 md:p-8 animate-scale-up",
      animationDelay,
      className
    )}>
      <h2 className="text-2xl md:text-3xl font-playfair font-semibold text-indiana-crimson mb-4">
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
