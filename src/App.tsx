import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-tealbright selection:text-deepblue">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.main
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <HomePage />
              </motion.main>
            }
          />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/personal" element={<TeamPage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
