
import { Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Index from "./pages/Index";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import Dataset from "./pages/Dataset";
import Methodology from "./pages/Methodology";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
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
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/team" element={<Team />} />
            <Route path="/dataset" element={<Dataset />} />
            <Route path="/methodology" element={<Methodology />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRoutes;
