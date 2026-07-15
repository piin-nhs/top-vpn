import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import VpnTable from './components/VpnTable';
import FeaturesGrid from './components/FeaturesGrid';
import HowWeTest from './components/HowWeTest';
import Faq from './components/Faq';
import Footer from './components/Footer';
import VpnDetailsModal from './components/VpnDetailsModal';

export default function App() {
  const [activeModalId, setActiveModalId] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = (vpnId) => {
    setActiveModalId(vpnId);
  };

  const handleCloseModal = () => {
    setActiveModalId(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-warm text-[#2C1A4D]">
      <Header />
      <main>
        <Hero />
        <VpnTable onOpenModal={handleOpenModal} />
        <FeaturesGrid />
        <HowWeTest />
        <Faq />
      </main>
      <Footer />

      {/* Scroll to Top floating action button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#F97316] text-white rounded-full shadow-lg hover:bg-[#EA580C] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border-0 flex items-center justify-center focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Framer Motion AnimatePresence for clean exit animation */}
      <AnimatePresence>
        {activeModalId && (
          <VpnDetailsModal vpnId={activeModalId} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </div>
  );
}
