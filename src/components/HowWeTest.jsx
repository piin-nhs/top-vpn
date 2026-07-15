import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { methodologySteps } from '../data/vpnData';

export default function HowWeTest() {
  const [activeStepId, setActiveStepId] = useState('speed');

  const activeStepData = methodologySteps.find(step => step.id === activeStepId) || methodologySteps[0];

  return (
    <section id="how-we-test" className="py-16 md:py-24 bg-cream scroll-mt-20 relative overflow-hidden">
      
      {/* Subtle tech background dot pattern for the testing area */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#674188_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-10 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#674188]/10 text-[#674188] font-headings font-bold text-xs uppercase tracking-wider mb-4">
            Auditing Standard
          </div>
          <h2 className="font-headings text-3xl md:text-5xl text-[#2C1A4D] font-extrabold mb-4 leading-tight">
            Our Independent Testing Process
          </h2>
          <p className="text-[#7D6E90] text-sm md:text-base">
            We operate fully independent testing nodes to verify provider performance. Here is how we verify marketing claims.
          </p>
        </motion.div>


        {/* Linear Connecting Steps (GoodLayers Style with Magic UI spring-loaded dots) */}
        <div className="relative mb-10 md:mb-16">
          {/* Horizontal connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-lavender/60 -z-10" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {methodologySteps.map((step) => {
              const IconComponent = Icons[step.icon] || Icons.Zap;
              const isActive = step.id === activeStepId;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className="flex flex-col items-center text-center cursor-pointer group relative"
                >
                  {/* Step Circle Node with Framer Motion spring pop */}
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center border-2 mb-4 transition-all duration-500 relative transform ${
                    isActive
                      ? 'bg-[#674188] border-[#674188] text-white shadow-glow scale-110'
                      : 'bg-warm border-lavender text-[#674188] group-hover:border-[#674188] group-hover:scale-105 shadow-sm'
                  }`}>
                    {/* Small badge number */}
                    <span className={`absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full font-headings font-bold text-[10px] sm:text-xs flex items-center justify-center border transition-colors duration-300 ${
                      isActive 
                        ? 'bg-warm text-[#674188] border-[#674188]' 
                        : 'bg-cream text-[#7D6E90] border-lavender'
                    }`}>
                      {step.step}
                    </span>

                    {/* Step Icon with rotation */}
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 transition-transform duration-500 group-hover:rotate-12 ${
                      isActive ? 'text-white' : 'text-[#674188]'
                    }`} />

                    {/* Magic UI Pulse Ring when Active */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-full border-2 border-[#674188] animate-pulse-ring -z-10 pointer-events-none scale-110" />
                    )}
                  </div>

                  {/* Title & Info */}
                  <h3 className={`font-headings text-sm sm:text-base lg:text-lg font-bold transition-colors duration-300 ${
                    isActive ? 'text-[#674188]' : 'text-[#2C1A4D] group-hover:text-[#674188]'
                  } mb-1`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#7D6E90] max-w-[200px] leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Methodology Expanded Detail Pane */}
        <div className="max-w-5xl mx-auto shadow-md border border-[#674188]/30 rounded-2xl overflow-hidden bg-white">
          <div className="p-5 sm:p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepData.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6 border-b border-lavender/25 pb-4">
                  <div>
                    <span className="text-[10px] sm:text-xs font-bold text-[#674188] uppercase tracking-wider block mb-1">
                      Audit Phase {activeStepData.step}
                    </span>
                    <h4 className="font-headings text-lg sm:text-xl md:text-2xl font-bold text-[#2C1A4D]">
                      {activeStepData.title} Verification
                    </h4>
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#7D6E90] bg-cream border border-lavender/40 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full self-start md:self-auto">
                    Updated Daily
                  </div>
                </div>
                
                <p className="text-[#7D6E90] leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg">
                  {activeStepData.details}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
