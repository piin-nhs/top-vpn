import React, { useState, useEffect } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Determine scroll-based styling
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Determine visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false); // scrolling down -> hide
      } else {
        setIsVisible(true);  // scrolling up -> show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-warm/95 backdrop-blur-md py-4 shadow-sm' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <ShieldCheck className="w-8 h-8 text-[#674188] transition-transform duration-300 group-hover:scale-110" />
            <span className="font-headings font-extrabold text-2xl text-[#2C1A4D]">
              VPN<span className="text-[#674188]">2026</span>
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-medium text-[#7D6E90] group/nav">
            <a href="#best-vpns" className="transition-all duration-300 hover:text-[#674188] group-hover/nav:opacity-50 hover:!opacity-100">Best VPNs</a>
            <a href="#how-we-test" className="transition-all duration-300 hover:text-[#674188] group-hover/nav:opacity-50 hover:!opacity-100">How We Test</a>
            <a href="#faq" className="transition-all duration-300 hover:text-[#674188] group-hover/nav:opacity-50 hover:!opacity-100">FAQs</a>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="#best-vpns" 
              className="relative overflow-hidden bg-[#F97316] text-white px-5 py-2.5 rounded-xl font-headings font-semibold shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 group/btn"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover/btn:text-[#F97316]">
                Compare Now
              </span>
              <span className="absolute inset-0 z-0 scale-x-0 bg-white transition-transform duration-300 origin-left group-hover/btn:scale-x-100" />
            </a>
          </div>

          <button 
            className="md:hidden text-[#2C1A4D] focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div className={`absolute top-0 right-0 w-80 h-full bg-warm p-6 shadow-2xl flex flex-col gap-8 transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-[#674188]" />
              <span className="font-headings font-extrabold text-xl text-[#2C1A4D]">
                VPN<span className="text-[#674188]">2026</span>
              </span>
            </div>
            <button 
              className="text-[#2C1A4D]" 
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-lg font-semibold text-[#7D6E90]">
            <a href="#best-vpns" className="pb-2 border-b border-lavender/10 hover:text-[#674188]" onClick={() => setIsOpen(false)}>Best VPNs</a>
            <a href="#how-we-test" className="pb-2 border-b border-lavender/10 hover:text-[#674188]" onClick={() => setIsOpen(false)}>How We Test</a>
            <a href="#faq" className="pb-2 border-b border-lavender/10 hover:text-[#674188]" onClick={() => setIsOpen(false)}>FAQs</a>
            <a href="#best-vpns" className="w-full text-center bg-[#F97316] text-white py-3 rounded-xl font-headings font-semibold shadow-md mt-4 hover:bg-[#EA580C]" onClick={() => setIsOpen(false)}>
              Compare Now
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
