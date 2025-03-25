
import React, { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="page-transition-wrapper">
      {children}
    </div>
  );
};

export default PageTransition;
