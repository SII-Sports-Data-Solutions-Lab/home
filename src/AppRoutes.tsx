// src/AppRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Suspense, lazy } from 'react';

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Team = lazy(() => import("./pages/Team"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const StrikerWorthDetail = lazy(() => import("./pages/StrikerWorthDetail"));
const NFLBigDataBowlGuidebook = lazy(() => import("./pages/NFLBigDataBowlGuidebook"));
const UnifiedReviewFramework = lazy(() => import("./pages/UnifiedReviewFramework"));
const LinkedinProfileDataMethods = lazy(() => import("./pages/LinkedinProfileDataMethods"));
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
            
            {/* Single project route */}
            <Route path="/projects/:projectId" element={<ProjectDetail projectId="review-analysis" />} />
            <Route path="/projects/striker-worth" element={<StrikerWorthDetail />} />
            {/* NFL Big Data Bowl GuideBook route */}
            <Route path="/projects/nfl-big-data-bowl-guidebook" element={<NFLBigDataBowlGuidebook />} />
            <Route path="/projects/unified-review-framework" element={<UnifiedReviewFramework />} />
            <Route path="/projects/linkedin-profile-data-methods" element={<LinkedinProfileDataMethods />} />
            
            {/* Legacy routes - redirect to main project page */}
            <Route path="/overview" element={<ProjectDetail projectId="review-analysis" />} />
            <Route path="/dataset" element={<ProjectDetail projectId="review-analysis" />} />
            <Route path="/methodology" element={<ProjectDetail projectId="review-analysis" />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;