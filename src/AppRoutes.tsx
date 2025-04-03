// src/AppRoutes.tsx - Updated version
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Suspense, lazy } from 'react';

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Team = lazy(() => import("./pages/Team"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indiana-crimson"></div>
          </div>
        }>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            
            {/* Project-specific routes */}
            <Route path="/projects/review-analysis" element={<ProjectDetail projectId="review-analysis" />} />
            <Route path="/projects/review-analysis/overview" element={<ProjectDetail projectId="review-analysis" activeTab="overview" />} />
            <Route path="/projects/review-analysis/dataset" element={<ProjectDetail projectId="review-analysis" activeTab="dataset" />} />
            <Route path="/projects/review-analysis/methodology" element={<ProjectDetail projectId="review-analysis" activeTab="methodology" />} />
            
            {/* Legacy route support - redirect to new project paths */}
            <Route path="/overview" element={<ProjectDetail projectId="review-analysis" activeTab="overview" />} />
            <Route path="/dataset" element={<ProjectDetail projectId="review-analysis" activeTab="dataset" />} />
            <Route path="/methodology" element={<ProjectDetail projectId="review-analysis" activeTab="methodology" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;