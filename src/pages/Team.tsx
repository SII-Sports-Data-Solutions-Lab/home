import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import TeamCard from '@/components/TeamCard';
import ProjectCard from '@/components/ProjectCard';

const Team: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <span className="text-sm font-medium text-sports-purple uppercase tracking-wider">
            Meet Our Researchers
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            Research Team
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The dedicated team behind our e-commerce reviews analysis project
          </p>
        </div>

        <ProjectCard 
          title="Team Expertise" 
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="mb-4">
            Our interdisciplinary research team brings together expertise in data science, natural language processing, machine learning, and consumer behavior. Each team member contributes specialized knowledge and skills to ensure the success of this project.
          </p>
          <p>
            The team is affiliated with the Sports Innovation Institute and collaborates with industry partners to ensure that the research findings have both academic rigor and practical relevance.
          </p>
        </ProjectCard>

        <TeamCard />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ProjectCard 
            title="Team Collaboration" 
            animationDelay="delay-200"
          >
            <p>
              Our research follows a collaborative approach, with team members working together across different stages of the project. Regular meetings and knowledge-sharing sessions ensure that everyone's expertise is leveraged effectively. The team maintains open communication channels to address challenges and share insights throughout the research process.
            </p>
          </ProjectCard>

          <ProjectCard 
            title="Acknowledgments" 
            animationDelay="delay-300"
          >
            <p>
              We gratefully acknowledge the support of the Sports Innovation Institute and its resources that make this research possible. We also thank the e-commerce platforms that provide access to their data, as well as the many consumers whose reviews form the basis of our analysis. Special thanks to our advisors and mentors who provide guidance and feedback throughout this project.
            </p>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
