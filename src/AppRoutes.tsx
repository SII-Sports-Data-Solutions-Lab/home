import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Suspense, lazy } from 'react';

const Index = lazy(() => import("./pages/Index"));
const Projects = lazy(() => import("./pages/Projects"));
const Team = lazy(() => import("./pages/Team"));
const NotFound = lazy(() => import("./pages/NotFound"));

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <div>
      <h1>Project Detail</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
};

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
            <Route path="/home" element={<Index />} />
            <Route path="/home/projects" element={<Projects />} />
            <Route path="/home/team" element={<Team />} />
            <Route path="/home/projects/:projectId" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;