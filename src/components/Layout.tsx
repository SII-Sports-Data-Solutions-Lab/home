
import React, { ReactNode } from 'react';
import NavigationBar from './NavigationBar';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-grow pt-24 pb-12">
        <PageTransition>
          <div className="container mx-auto px-4 md:px-6">
            {children}
          </div>
        </PageTransition>
      </main>
      <footer className="bg-indiana-crimson text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-playfair font-medium">E-commerce Reviews Analysis Project</h3>
              <p className="text-white/80 mt-1">Indiana University</p>
            </div>
            <div className="text-white/80 text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} Indiana University</p>
              <p className="mt-1">Research Project Website</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
