import React from 'react';
import { Shield, Zap, Tv, EyeOff } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-[#674188]" />,
      title: "Military-Grade Encryption",
      description: "Secure your personal data and bank details behind AES-256 encryption. Keep hackers at bay on public Wi-Fi networks."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#674188]" />,
      title: "Blazing-Fast Speeds",
      description: "Experience ultra-low latency and peak speeds. Enjoy buffer-free 4K streaming and low-ping online gaming anywhere."
    },
    {
      icon: <Tv className="w-8 h-8 text-[#674188]" />,
      title: "Unrestricted Global Access",
      description: "Bypass regional blocks instantly. Stream catalog libraries for Netflix, Hulu, and Disney+ as if you were home."
    },
    {
      icon: <EyeOff className="w-8 h-8 text-[#674188]" />,
      title: "Strict No-Logs Audited",
      description: "Registered in privacy-first jurisdictions with independent security audits. We never track or store your digital footprints."
    }
  ];

  return (
    <section className="py-24 bg-warm relative z-10">
      
      {/* Subtle background tech glow dot pattern in the features area */}
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#C3ACD0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#674188]/10 text-[#674188] font-headings font-bold text-xs uppercase tracking-wider mb-4">
            Why Use A VPN?
          </div>
          <h2 className="font-headings text-3xl md:text-5xl text-[#2C1A4D] font-extrabold mb-4 leading-tight">
            Complete Digital Protection
          </h2>
          <p className="text-[#7D6E90]">
            Bypass content walls, hide your IP location, and encrypt your browsing traffic with one click.
          </p>
        </div>

        {/* Features Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-3xl bg-white border border-lavender/30 shadow-[0_4px_20px_rgba(103,65,136,0.01)] transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group/card cursor-default"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-cream mb-6 transition-colors duration-300 group-hover/card:bg-[#674188]/10">
                <div className="transition-transform duration-500 group-hover/card:scale-110">
                  {feat.icon}
                </div>
              </div>
              
              <h3 className="font-headings text-lg font-bold text-[#2C1A4D] mb-3 transition-colors duration-300 group-hover/card:text-[#674188]">
                {feat.title}
              </h3>
              
              <p className="text-xs text-[#7D6E90] leading-relaxed relative z-10">
                {feat.description}
              </p>

              {/* Bottom decorative bar that lights up on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#674188]/40 to-transparent transform scale-x-0 transition-transform duration-500 group-hover/card:scale-x-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
