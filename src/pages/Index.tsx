import React, { lazy, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import ErrorBoundary from '@/components/ErrorBoundary';
import { getAssetPath } from '@/lib/assetPath';
import ProjectCard from '@/components/ProjectCard';

// Lazy load components
const Layout = lazy(() => import('@/components/Layout'));

// Add memo to prevent unnecessary re-renders
const Index: React.FC = React.memo(() => {
  const navigate = useNavigate();

  // Add intersection observer for animations
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Add proper loading states
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  // Add error handling for navigation
  const handleNavigation = (path: string) => {
    try {
      navigate(path);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        {/* Hero Section */}
        <section ref={sectionRef} className={`pt-0 pb-16 md:pt-0 md:pb-20 bg-white ${isVisible ? 'animate-fade-in' : ''}`}>
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12 relative">
      <div className="lg:w-1/2 z-10">
        <span className="text-sm font-medium text-indiana-crimson uppercase tracking-wider">
          IU Indianapolis
        </span>
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold leading-tight text-gray-900">
          Sports Innovation Institute
        </h1>
        <p className="mt-6 text-xl text-gray-700 leading-relaxed">
          <span className="font-semibold">We blend academic thinking with an entrepreneurial spirit</span> to create, discover, and promote unique products, services, and game-day experiences.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Our passion is rivaled only by our drive to inspire the next great business or sports-related idea that goes well beyond the game.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button 
            onClick={() => handleNavigation('/projects')}
            className="bg-indiana-crimson hover:bg-indiana-red text-white px-6 py-3 text-lg"
          >
            Explore Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Link to="/team">
            <Button variant="outline" className="border-indiana-crimson text-indiana-crimson hover:bg-indiana-crimson/10 px-6 py-3 text-lg">
              Meet Our Team
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Image container with 10% right shift */}
      <div className="lg:w-1/2 lg:translate-x-[10%] relative">
        <div className="relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
          {/* White background and mask to blend the image */}
          <div className="absolute inset-0 bg-white"></div>
          
          <img 
            src={getAssetPath("/assets/hero.png")}
            alt="Sports Innovation Institute" 
            className="w-full h-auto relative z-10 mix-blend-normal"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Mission & Impact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-indiana-crimson">
                Our Mission & Impact
              </h2>
              <div className="mt-2 h-1 w-20 bg-indiana-crimson mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md animate-fade-in delay-100">
                <div className="w-16 h-16 bg-indiana-crimson rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Innovation Hub</h3>
                <p className="text-gray-700">
                  We serve as a collaborative hub combining resources, disciplines, and expertise to deliver unique and innovative solutions to sports industry challenges.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md animate-fade-in delay-200">
                <div className="w-16 h-16 bg-indiana-crimson rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Student Success</h3>
                <p className="text-gray-700">
                  We connect students with industry partners to build practical skills, with 60% of IU Indy's sport management graduates working in sports after graduation.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md animate-fade-in delay-300">
                <div className="w-16 h-16 bg-indiana-crimson rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Industry Partnership</h3>
                <p className="text-gray-700">
                  We collaborate with organizations like the Indianapolis Colts, NCAA, and Indiana Sports Corporation to develop evidence-based solutions and drive innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics Section */}
        <section className="py-16 bg-indiana-crimson text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div className="animate-fade-in delay-100">
                <div className="text-4xl md:text-5xl font-bold mb-2">$83B</div>
                <p className="text-white/80">Size of the North American sports market in 2023</p>
              </div>
              <div className="animate-fade-in delay-200">
                <div className="text-4xl md:text-5xl font-bold mb-2">$3.4B</div>
                <p className="text-white/80">Revenue of sports organizations in Indianapolis</p>
              </div>
              <div className="animate-fade-in delay-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">80%</div>
                <p className="text-white/80">Of graduates stay in central Indiana</p>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-indiana-crimson">
                What We Do
              </h2>
              <div className="mt-2 h-1 w-20 bg-indiana-crimson mx-auto"></div>
              <p className="mt-4 text-lg text-gray-700">
                The Sports Innovation Institute focuses on creating impactful solutions through research, education, and industry collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col bg-gray-50 rounded-lg overflow-hidden shadow-md animate-fade-in delay-100">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Innovation Sprints</h3>
                  <p className="text-gray-700">
                    We bring students together from across campus to work with industry partners to quickly and efficiently solve complex problems facing the sports industry.
                  </p>
                  <Link to="/projects" className="mt-4 inline-flex items-center text-indiana-crimson hover:text-indiana-red">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col bg-gray-50 rounded-lg overflow-hidden shadow-md animate-fade-in delay-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sports Innovation Journal</h3>
                  <p className="text-gray-700">
                    Our academic journal brings together researchers and practitioners dedicated to publishing research that informs innovative ideas to move the sports industry forward.
                  </p>
                  <a 
                    href="https://sii.indianapolis.iu.edu/journal/index.html" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="mt-4 inline-flex items-center text-indiana-crimson hover:text-indiana-red"
                  >
                    Visit Journal <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col bg-gray-50 rounded-lg overflow-hidden shadow-md animate-fade-in delay-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Research & Analysis</h3>
                  <p className="text-gray-700">
                    Our faculty and students conduct cutting-edge research to provide evidence-based solutions for the sports industry, from fan experience to marketing strategies.
                  </p>
                  <Link to="/methodology" className="mt-4 inline-flex items-center text-indiana-crimson hover:text-indiana-red">
                    View Methodology <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col bg-gray-50 rounded-lg overflow-hidden shadow-md animate-fade-in delay-400">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Student Engagement</h3>
                  <p className="text-gray-700">
                    We provide hands-on learning opportunities through our capstone courses, innovation sprints, and industry partnerships, giving students real-world experience.
                  </p>
                  <Link to="/team" className="mt-4 inline-flex items-center text-indiana-crimson hover:text-indiana-red">
                    Meet Our Team <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-indiana-crimson">
                New & Featured Projects
              </h2>
              <div className="mt-2 h-1 w-20 bg-indiana-crimson mx-auto"></div>
              <p className="mt-4 text-lg text-gray-700">
                Explore our latest research and innovation initiatives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <ProjectCard title="What Stories Do Your Reviews Tell?" animationDelay="delay-100">
                <p>A comprehensive analysis of customer reviews for digital fitness equipment, using natural language processing and machine learning techniques to uncover patterns and insights.</p>
                <Link to="/projects/review-analysis" className="inline-block mt-4 text-indiana-crimson hover:underline font-medium">Learn More <ArrowRight className="ml-1 inline h-4 w-4" /></Link>
              </ProjectCard>
              <ProjectCard title="What’s A Striker Worth?" animationDelay="delay-200">
                <p>A smart, data-driven tool that predicts a striker’s market value by analyzing their stats, performance, and physical traits—giving clubs, scouts, and managers the insights they need to spot hidden gems and back big investments.</p>
                <Link to="/projects/striker-worth" className="inline-block mt-4 text-indiana-crimson hover:underline font-medium">Learn More <ArrowRight className="ml-1 inline h-4 w-4" /></Link>
              </ProjectCard>
              <ProjectCard title="NFL Big Data Bowl GuideBook" animationDelay="delay-300">
                <p>A guidebook for NFL enthusiasts and analysts, detailing the methodologies and insights from the NFL Big Data Bowl. This project focuses on enhancing understanding of player performance metrics and game strategies through data visualization and analysis.</p>
                <span className="inline-block mt-4 text-gray-400 font-medium">Coming Soon</span>
              </ProjectCard>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-indiana-crimson">
                Join Us in Shaping the Future of Sports
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                Partner with the Sports Innovation Institute to drive innovation, connect with talent, and make an impact in the sports industry.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={() => handleNavigation('/projects')}
                  className="bg-indiana-crimson hover:bg-indiana-red text-white px-6 py-3 text-lg"
                >
                  Explore Our Projects
                </Button>
                <a 
                  href="https://sii.indianapolis.iu.edu/about/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-indiana-crimson text-indiana-crimson hover:bg-indiana-crimson/10 px-6 py-3 text-lg">
                    Learn More About SII
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </Suspense>
  );
});

export default Index;