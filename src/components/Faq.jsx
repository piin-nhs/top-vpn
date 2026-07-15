import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { faqsList } from '../data/vpnData';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-warm scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headings text-3xl md:text-4xl text-[#2C1A4D] font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#7D6E90]">
            Got questions about choosing a VPN in 2026? Find quick answers below.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqsList.map((faq, idx) => {
            const isOpen = activeIndex === idx;

            return (
              <div
                key={idx}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#674188] bg-cream/20 shadow-sm' 
                    : 'border-lavender/30 bg-cream/10 hover:border-[#674188]/30'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-headings font-bold text-base md:text-lg text-[#2C1A4D]">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-[#674188] transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {/* Framer Motion Accordion slide transition */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-sm md:text-base text-[#7D6E90] leading-relaxed border-t border-lavender/10">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
