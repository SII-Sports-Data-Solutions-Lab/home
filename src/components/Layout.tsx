
import React, { ReactNode } from 'react';
import NavigationBar from './NavigationBar';
import PageTransition from './PageTransition';
import { ArrowUpRight } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800 text-gray-100">
      <NavigationBar />
      <main className="flex-grow pt-24 pb-12">
        <PageTransition>
          <div className="container mx-auto px-4 md:px-6">
            {children}
          </div>
        </PageTransition>
      </main>
      <footer className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src="./assets/ba38ab43-24a4-490d-8d2a-2622669cb079.png" 
                  alt="Sports Innovation Institute Logo" 
                  className="h-12 mr-3" 
                />
              </div>
              <h3 className="text-xl font-inter font-semibold mb-2">Sports Innovation Institute</h3>
              <p className="text-white/80 text-sm">Research Project Website</p>
            </div>
            
            <div className="text-sm">
              <h4 className="font-semibold mb-3 uppercase tracking-wider text-purple-200">Our Mission</h4>
              <p className="text-white/80 leading-relaxed">
                Our passion is rivaled only by our drive to inspire the next great business or sports-related idea that goes well beyond the game.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 uppercase tracking-wider text-purple-200">Connect</h4>
              <a href="#" className="flex items-center text-white/80 hover:text-white transition-colors mb-2 group">
                <span>Support Our Research</span>
                <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <p className="text-white/60 text-sm mt-4">&copy; {new Date().getFullYear()} Sports Innovation Institute</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/60">
            <p className="leading-relaxed">
              The Sports Innovation Institute blends academic thinking with an entrepreneurial spirit to create, discover, and promote unique products, services, and game-day experiences. Your charitable gifts support this work and position IU Indianapolis as the multi-disciplinary, game-changing leader in sports research, talent development, and market innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
