
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, index }) => {
  return (
    <div className={cn(
      "flex flex-col items-center p-6 animate-fade-in",
      { "delay-100": index === 0 },
      { "delay-200": index === 1 },
      { "delay-300": index === 2 },
      { "delay-400": index === 3 }
    )}>
      <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-playfair font-semibold text-indiana-crimson">{name}</h3>
      <p className="text-gray-600 mt-1">{role}</p>
    </div>
  );
};

interface TeamCardProps {
  className?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ className }) => {
  const teamMembers = [
    {
      name: "Aditya Naik",
      role: "Lead Developer",
      imageUrl: "/lovable-uploads/a57539df-fb1b-4ae4-aaa1-173af06538d4.png"
    },
    {
      name: "Raghuveer Venkatesh",
      role: "Data Scientist",
      imageUrl: "/lovable-uploads/5345d883-eaba-470f-ab0d-4f2b15047e5d.png"
    },
    {
      name: "Sai Pranam Chillakuru",
      role: "ML Engineer",
      imageUrl: "/lovable-uploads/59fb4cec-1adf-46f3-8726-207a7b1f03b4.png"
    },
    {
      name: "Dr. Liz Ann Wanless",
      role: "Project Advisor",
      imageUrl: "/lovable-uploads/b5866e1b-57bc-42f2-8b40-b20ef8adec6b.png"
    }
  ];

  return (
    <div className={cn("mt-8", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={member.name}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
