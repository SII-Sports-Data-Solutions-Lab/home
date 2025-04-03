
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Overview', path: '/overview' },
    { title: 'Team', path: '/team' },
    { title: 'Dataset', path: '/dataset' },
    { title: 'Methodology', path: '/methodology' },
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
        src="./assets/ba38ab43-24a4-490d-8d2a-2622669cb079.png" 
        alt="SII Logo" 
        className="h-10 w-auto"
      />
      <span className="text-lg hidden sm:inline font-medium text-indiana-crimson">Sports Innovation Institute</span>
    </Link>

    <nav>
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
    </nav>
  </div>
</header>
  );
};

export default NavigationBar;
