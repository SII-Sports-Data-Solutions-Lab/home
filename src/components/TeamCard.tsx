import React from 'react';
import { cn } from '@/lib/utils';
import { getAssetPath } from '@/lib/assetPath';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  index: number;
  isLead?: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, index, isLead = false }) => {
  // Set different dimensions for the lead member (Dr. Liz Ann Wanless)
  const imageSize = isLead ? "w-48 h-48" : "w-40 h-40";
  return (
    <div className={cn(
      "flex flex-col items-center p-6 animate-fade-in",
      { "delay-100": index === 0 },
      { "delay-200": index === 1 },
      { "delay-300": index === 2 },
      { "delay-400": index === 3 }
    )}>
      <div className={cn("relative rounded-full overflow-hidden mb-4 border-4 border-white shadow-lg", imageSize)}>
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-indiana-crimson">{name}</h3>
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
      role: "Research Assistant",
      imageUrl: getAssetPath("/assets/a57539df-fb1b-4ae4-aaa1-173af06538d4.png")
    },
    {
      name: "Raghuveer Venkatesh",
      role: "Research Assistant",
      imageUrl: getAssetPath("/assets/5345d883-eaba-470f-ab0d-4f2b15047e5d.png")
    },
    {
      name: "Sai Pranam Chillakuru",
      role: "Research Assistant",
      imageUrl: getAssetPath("/assets/59fb4cec-1adf-46f3-8726-207a7b1f03b4.png")
    },
    {
      name: "Dr. Liz Ann Wanless",
      role: "Director of the Sports Innovation Institute",
      imageUrl: getAssetPath("/assets/b5866e1b-57bc-42f2-8b40-b20ef8adec6b.png")
    }
  ];

  // Separate the lead member from the rest
  const leadMember = teamMembers.find(member => member.name.trim() === "Dr. Liz Ann Wanless");
  const otherMembers = teamMembers.filter(member => member.name.trim() !== "Dr. Liz Ann Wanless");

  return (
    <div className={cn("mt-8", className)}>
      {leadMember && (
        <div className="flex justify-center mb-8">
          <TeamMember 
            key={leadMember.name}
            name={leadMember.name}
            role={leadMember.role}
            imageUrl={leadMember.imageUrl}
            index={0}
            isLead={true}
          />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherMembers.map((member, index) => (
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
