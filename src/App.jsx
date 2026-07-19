import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Lenis from 'lenis';
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
  const lenisRef = useRef(null);

  // --- MAGNET CURSOR STATES & MOTION VALUE VALUES ---
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings taake cursor mouse ke piche buttery smooth momentum ke sath chale
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // 1. Mouse Position Tracking System
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // 2. Global Event Listeners for Magnet Targets
    const handleMouseOver = (e) => {
      // Check agar mouse element par hai ya uske kisi child par jo .custom-magnet hold karta ho
      if (e.target.closest('.custom-magnet')) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('.custom-magnet')) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    // 3. Core Lenis Setup
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanups
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      lenis.destroy();
    };
  }, [cursorX, cursorY]);

  // Tab change triggers top view auto-snapping & alignment calculation
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      setIsHovered(false); // Reset tracking states on view change

      const resizeTimeout = setTimeout(() => {
        lenisRef.current.resize();
      }, 50);

      return () => clearTimeout(resizeTimeout);
    }
  }, [activeTab]);

  const renderActiveView = () => {
    const viewRenderer = VIEWS[activeTab] || VIEWS.home;
    return viewRenderer(setActiveTab);
  };

  return (
    <div className="min-h-screen bg-surface-bright flex flex-col justify-between overflow-x-hidden relative">
      
      {/* GLOBAL EXPERIMENTAL ANIMATED POINTER NODE (Hidden on touch devices) */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 bg-[#EB5E28] rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 2.5 : 1,
        }}
        animate={{
          backgroundColor: isHovered ? "#FFFCF2" : "#EB5E28"
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-grow">
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