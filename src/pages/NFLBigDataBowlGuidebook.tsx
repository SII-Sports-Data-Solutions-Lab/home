import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import { getAssetPath } from '@/lib/assetPath';

const PDF_URL_2 = getAssetPath("/assets/NFLBigDataBowlGuidebook.pdf");

const NFLBigDataBowlGuidebook: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-indiana-crimson mb-4">
            NFL Big Data Bowl GuideBook
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            The NFL Big Data Bowl Guidebook is a comprehensive resource for football data enthusiasts and analysts. It provides an overview of the competition, explains the structure of the datasets, and offers guidance on data-driven football analysis. The guidebook includes examples of player tracking data, key metrics, and tips for extracting actionable insights from large-scale NFL datasets.
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            src={PDF_URL_2}
            title="NFL Big Data Bowl GuideBook PDF"
            width="100%"
            height="800px"
            className="border rounded shadow-lg"
            style={{ minHeight: '600px', maxWidth: '900px' }}
          />
        </div>
      </section>
      {/* Team - styled like ProjectDetail */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-indiana-crimson mb-4">Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
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
                  src={getAssetPath("/assets/59fb4cec-1adf-46f3-8726-207a7b1f03b4.png")}
                  alt="Sai Pranam Chillakuru" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-lg font-semibold text-indiana-crimson">Sai Pranam Chillakuru</h3>
              <p className="text-sm text-gray-600">Research Assistant</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative rounded-full overflow-hidden w-24 h-24 mb-3 flex items-center justify-center">
                <img 
                  src={getAssetPath("/assets/a57539df-fb1b-4ae4-aaa1-173af06538d4.png")}
                  alt="Aditya" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h3 className="text-lg font-semibold text-indiana-crimson">Aditya</h3>
              <p className="text-sm text-gray-600">Research Assistant</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NFLBigDataBowlGuidebook;
