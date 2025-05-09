import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { getAssetPath } from '@/lib/assetPath';

const StrikerWorthDetail: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        {/* Project Heading and Description */}
        <div className="max-w-3xl mx-auto text-center mb-8 animate-fade-in">
          <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
            Project Details
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-montserrat font-bold">
            What’s A Striker Worth?
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A smart, data-driven tool that predicts a striker’s market value by analyzing their stats, performance, and physical traits—giving clubs, scouts, and managers the insights they need to spot hidden gems, back big investments, and stay ahead in the game.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
          {/* Project Overview */}
          <ProjectCard title="Project Overview" animationDelay="delay-100">
            <p className="mb-4">
              This project predicts the market value of FIFA football strikers using regression models and data-driven analysis of player attributes. The approach combines statistical modeling, exploratory data analysis, and actionable insights for clubs, scouts, and managers.
            </p>
          </ProjectCard>

          {/* Dataset Information */}
          <ProjectCard title="Dataset Information" animationDelay="delay-200">
            <ul className="mb-4 list-disc pl-5 text-left">
              <li>Player data sourced from Kaggle</li>
              <li>Includes attributes such as overall rating, wage, age, potential, international reputation, and technical skills.</li>
              <li>Data covers multiple seasons and a wide range of professional strikers.</li>

              <li>
                Dataset available on{' '}
                <a
                  href="https://www.kaggle.com/datasets/rehandl23/fifa-24-player-stats-dataset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  Kaggle
                </a>.
              </li>
            </ul>
          </ProjectCard>

          {/* Methodology */}
          <ProjectCard title="Methodology" animationDelay="delay-300">
            <ul className="mb-4 list-disc pl-5 text-left">
              <li>Exploratory data analysis to identify key predictors of market value.</li>
              <li>Regression modeling (multiple linear regression) to estimate player value based on attributes.</li>
              <li>Model evaluation using R² and statistical significance of predictors.</li>
            </ul>
          </ProjectCard>

          {/* Results */}
          <ProjectCard title="Results & Insights" animationDelay="delay-400">
            <ul className="mb-4 list-disc pl-5 text-left">
              <li>Overall rating, wage, and international reputation are the strongest predictors of market value.</li>
              <li>Potential and age are statistically significant: value peaks at ~28.8 years, then declines.</li>
              <li>Regression model explains 98% of variance in striker value (R² = 0.98).</li>
              <li>Scout young players (21-25) with high potential and ratings above 75 for best value.</li>
              <li>Ball control, finishing, positioning, and shot power are key football traits for value.</li>
            </ul>
            <div className="flex flex-col gap-4">
              <div className="w-80 h-48 bg-gray-200 flex items-center justify-center mx-auto">
              <img 
                src={getAssetPath("/assets/age-value.png")} 
                alt="Age vs Market Value" 
                className="w-full h-full object-contain"
              />
              </div>
              <p className="text-center text-sm text-gray-600">
              This chart illustrates the relationship between a player's age and their market value, highlighting the peak value around 28.8 years.
              </p>
              <div className="w-80 h-48 bg-gray-200 flex items-center justify-center mx-auto">
              <img 
                src={getAssetPath("/assets/mvr.png")} 
                alt="Market Value Regression" 
                className="w-full h-full object-contain"
              />
              </div>
              <p className="text-center text-sm text-gray-600">
              This regression plot demonstrates the model's ability to predict market value based on key player attributes.
              </p>
              <div className="w-80 h-48 bg-gray-200 flex items-center justify-center mx-auto">
              <img 
                src={getAssetPath("/assets/potential.png")} 
                alt="Potential vs Market Value" 
                className="w-full h-full object-contain"
              />
              </div>
              <p className="text-center text-sm text-gray-600">
              This visualization shows how a player's potential correlates with their market value, emphasizing the importance of scouting high-potential players.
              </p>
            </div>
          </ProjectCard>

          {/* YouTube Video */}
          <div className="flex justify-center animate-fade-in delay-450">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GONxnHV0iRA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg shadow-lg w-full max-w-2xl h-64 md:h-80"
            ></iframe>
          </div>

          {/* RPUB Link */}
          <ProjectCard title="Full Analysis" animationDelay="delay-500">
            <a
              href="https://rpubs.com/Raghuveer_Venkatesh/1255695"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            >
              View Full Analysis on Rpubs
            </a>
          </ProjectCard>

          {/* Team - styled like ProjectDetail */}
          <ProjectCard title="Team" animationDelay="delay-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3 flex items-center justify-center">
                  <img 
                    src={getAssetPath("/assets/b5866e1b-57bc-42f2-8b40-b20ef8adec6b.png")} 
                    alt="Dr. Liz Ann Wanless" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-semibold text-indiana-crimson">Dr. Liz Ann Wanless</h3>
                <p className="text-sm text-gray-600">Project Advisor</p>
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
            </div>
          </ProjectCard>
        </div>
      </section>
    </Layout>
  );
};

export default StrikerWorthDetail;
