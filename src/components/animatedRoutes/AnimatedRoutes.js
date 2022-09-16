import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Dashboard from "../../pages/dashboard/Dashboard";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Projects from "../../pages/projects/Projects";
import Skills from "../../pages/skills/Skills";
import Theme from "../../themes/Theme";
import SharedContent from "../../helper/SharedContent";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Theme>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<SharedContent />}>
            <Route index element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Theme>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
