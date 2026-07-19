import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const VIEWS = {
  home: (setActiveTab) => <Home setActiveTab={setActiveTab} />,
  about: (setActiveTab) => <About setActiveTab={setActiveTab} />,
  work: (setActiveTab) => <Work setActiveTab={setActiveTab} />,
  contact: () => <Contact />
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveView = () => {
    const viewRenderer = VIEWS[activeTab] || VIEWS.home;
    return viewRenderer(setActiveTab);
  };

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col justify-between overflow-x-hidden">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}