
import React, { ReactNode } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={400}
        classNames="page-transition"
        unmountOnExit
      >
        <div className="page-transition-container">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;
