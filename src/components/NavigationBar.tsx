
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const basename = import.meta.env.BASE_URL || "/";

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Projects', path: '/projects' },
    { title: 'Team', path: '/team' }
  ];

  // Separate project sub-navigation
  const isProjectRoute = location.pathname.startsWith('/projects');
  const projectNavItems = [
    { title: 'Overview', path: '/projects/review-analysis/overview' },
    { title: 'Dataset', path: '/projects/review-analysis/dataset' },
    { title: 'Methodology', path: '/projects/review-analysis/methodology' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-indiana-crimson hover:opacity-90 transition-opacity"
        >
          <img 
            src={`/assets/ba38ab43-24a4-490d-8d2a-2622669cb079.png`}
            alt="SII Logo" 
            className="h-10 w-auto"
          />
          <span className="text-lg hidden sm:inline font-medium text-indiana-crimson">Sports Innovation Institute</span>
        </Link>

        <nav className="flex flex-col items-end">
          <ul className="hidden md:flex space-x-1">
            {navItems.map(item => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    'px-4 py-2 rounded-md transition-all duration-200 text-base font-medium',
                    location.pathname === item.path
                      ? 'text-indiana-crimson font-semibold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indiana-crimson after:scale-x-100'
                      : 'text-gray-700 hover:text-indiana-crimson relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-indiana-crimson after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300'
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Project sub-navigation - only show when in a project route */}
          {isProjectRoute && (
            <ul className="hidden md:flex space-x-1 mt-2 bg-gray-100 px-3 py-1 rounded-full">
              {projectNavItems.map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      'px-3 py-1 rounded-full transition-all duration-200 text-sm font-medium',
                      location.pathname === item.path
                        ? 'bg-indiana-crimson text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                    )}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavigationBar;