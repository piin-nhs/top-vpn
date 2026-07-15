import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroCharacter from '../assets/hero.png';
import BoidsEcosystem from './BoidsEcosystem';

export default function Hero() {
  const words = ["Fast Streaming", "Military Encryption", "Zero-Logs Auditing", "980 Mbps Speed"];
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullWord = words[wordIdx];

    if (isDeleting) {
      timer = setTimeout(() => {
        setSubText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setSubText(currentFullWord.slice(0, subText.length + 1));
      }, 100);
    }

    if (!isDeleting && subText === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && subText === "") {
      setIsDeleting(false);
      setWordIdx(prev => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx]);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-white overflow-hidden">

      {/* Animata Boids Interactive Flocking Background (Light Mode) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <BoidsEcosystem
          count={200}
          background="#ffffff"
          palette={["#000000", "#111111", "#222222", "#333333"]}
          agentShape="dot"
          className="w-full h-full"
        />
      </div>

      {/* Magic UI Technology Grid Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-[0.35]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C3ACD0_1.5px,transparent_1.5px),linear-gradient(to_bottom,#C3ACD0_1.5px,transparent_1.5px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      </div>

      {/* Magic UI Floating Glow behind content */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#C3ACD0]/10 to-[#674188]/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Side: Copy and Typewriter Text */}
        <div className="text-left flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#674188]/10 text-[#674188] border border-[#674188]/20 font-headings font-bold text-xs uppercase tracking-wider mb-6"
          >
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#674188] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#674188]"></span>
            </span>
            Live benchmarks for 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 }}
            className="font-headings text-4xl md:text-5xl lg:text-6xl text-[#2C1A4D] font-extrabold leading-[1.1] mb-4"
          >
            World’s Best VPN
            <br />
            Service Provider In 2026
          </motion.h1>

          {/* Typewriter Text Container (VPNet Style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-headings text-2xl md:text-3xl text-[#674188] font-bold h-10 mb-8 flex items-center gap-1"
          >
            <span className="border-l-4 border-[#674188] pl-2 h-8 inline-block"></span>
            <span>{subText}</span>
            <span className="w-1 h-7 bg-[#674188] animate-pulse ml-0.5"></span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 85 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <a
              href="#best-vpns"
              className="relative overflow-hidden w-full sm:w-auto bg-[#F97316] text-white px-8 py-4 rounded-full font-headings font-extrabold text-sm uppercase tracking-wider shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 text-center group/hero-btn"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover/hero-btn:text-[#F97316]">
                Learn More
              </span>
              <span className="absolute inset-0 z-0 scale-x-0 bg-white transition-transform duration-300 origin-left group-hover/hero-btn:scale-x-100" />
            </a>

            <a
              href="#best-vpns"
              className="text-xs uppercase font-extrabold text-[#2C1A4D] hover:text-[#674188] transition-colors flex items-center gap-1 group"
            >
              Check Offers
              <ArrowRight className="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Bench Character with World Map Background (VPNet Style) */}
        <div className="relative flex justify-center items-center">

          {/* Magic UI Glow under character */}
          <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#674188]/20 to-[#C3ACD0]/10 blur-[60px] pointer-events-none -z-5" />

          {/* World Map Background (Light green-grey SVG) */}
          <div className="absolute inset-0 opacity-15 flex items-center justify-center -z-10 scale-110">
            <svg viewBox="0 0 1000 500" className="w-full h-full fill-[#2ea043]/30">
              <path d="M150 150h50v50h-50zm100 20h40v40h-40zm80-40h60v30h-60zm120 80h100v40H450zm200-80h80v50h-80zm100 120h40v40h-40zM220 300h120v40H220zm200 40h80v30h-80zm180-80h90v40h-90zm150 60h60v30h-60z" />
              <circle cx="200" cy="180" r="40" fill="#2ea043" opacity="0.3" />
              <circle cx="350" cy="150" r="50" fill="#2ea043" opacity="0.2" />
              <circle cx="500" cy="220" r="60" fill="#2ea043" opacity="0.3" />
              <circle cx="700" cy="160" r="55" fill="#2ea043" opacity="0.2" />
              <circle cx="850" cy="250" r="45" fill="#2ea043" opacity="0.3" />
              <circle cx="300" cy="340" r="50" fill="#2ea043" opacity="0.2" />
              <circle cx="600" cy="320" r="55" fill="#2ea043" opacity="0.3" />
            </svg>
          </div>

          {/* Particle lines wrapping the character */}
          <div className="absolute w-[360px] h-[360px] border border-[#C3ACD0]/20 rounded-full animate-pulse -z-5" />

          {/* Character sitting on bench (User-provided clean asset) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-[420px] md:w-[460px] relative z-10 "
          >
            <img
              src={heroCharacter}
              alt="VPN Security Analyst sitting on bench"
              className="w-full h-auto drop-shadow-sm"
            />
          </motion.div>
        </div>

      </div>

      {/* Curved wave shape divider at the bottom (transitioning to pure white/cream) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] text-cream fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,57.05,18.3,90.43,26.85,160.6,44.91,248.8,69.84,321.39,56.44Z" />
        </svg>
      </div>

    </section>
  );
}
