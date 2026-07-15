import React from 'react';
import * as Icons from 'lucide-react';
import { X, Star, Check, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { vpnData } from '../data/vpnData';

export default function VpnDetailsModal({ vpnId, onClose }) {
  if (!vpnId) return null;

  const vpn = vpnData.find(v => v.id === vpnId);
  if (!vpn) return null;

  // Dynamically load icon
  const IconComponent = Icons[vpn.logoIcon] || Icons.Shield;

  const getStars = (count) => {
    const fullStars = Math.floor(count);
    const hasHalf = count % 1 !== 0;
    return (
      <div className="flex items-center gap-0.5 text-amber-500">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) return <Star key={i} className="w-3.5 h-3.5 fill-current" />;
          if (i === fullStars && hasHalf) return <Star key={i} className="w-3.5 h-3.5 fill-current opacity-70" />;
          return <Star key={i} className="w-3.5 h-3.5 text-amber-500/20" />;
        })}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with Fade transition */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-[#2C1A4D]/40"
        onClick={onClose}
      />

      {/* Modal Container with spring scale transition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative bg-warm border border-lavender/40 rounded-none w-full max-w-xl p-5 md:p-6 shadow-2xl z-10 max-h-[95vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-cream hover:bg-lavender/20 text-[#7D6E90] hover:text-[#674188] w-8 h-8 rounded-none flex items-center justify-center transition-colors focus:outline-none z-20"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header Info */}
        <div className="flex items-center gap-3.5 mb-4">
          <div
            className="w-12 h-12 rounded-none flex items-center justify-center p-3 flex-shrink-0"
            style={{ backgroundColor: `${vpn.logoColor}15` }}
          >
            <IconComponent className="w-full h-full" style={{ color: vpn.logoColor }} />
          </div>
          <div>
            <h3 className="font-headings text-xl font-black text-[#2C1A4D]">{vpn.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="bg-[#674188]/15 text-[#674188] font-bold text-[10px] px-1.5 py-0.5 rounded-none">
                Score {vpn.score}
              </span>
              {getStars(vpn.stars)}
            </div>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 gap-3.5 bg-cream/50 border border-lavender/30 rounded-none p-3 mb-4">
          <div>
            <span className="block text-[9px] uppercase font-bold text-[#7D6E90] tracking-wider">Server Fleet</span>
            <span className="font-semibold text-xs text-[#2C1A4D]">{vpn.servers.toLocaleString()}+ Servers</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase font-bold text-[#7D6E90] tracking-wider">Countries Available</span>
            <span className="font-semibold text-xs text-[#2C1A4D]">{vpn.countries} Countries</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase font-bold text-[#7D6E90] tracking-wider">Tested Peak Speed</span>
            <span className="font-semibold text-xs text-[#2C1A4D]">{vpn.speed} Mbps</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase font-bold text-[#7D6E90] tracking-wider">Simultaneous Devices</span>
            <span className="font-semibold text-xs text-[#2C1A4D]">{vpn.devices}</span>
          </div>
        </div>

        {/* Detailed Specs list */}
        <div className="mb-4">
          <h4 className="font-headings font-bold text-[11px] text-[#2C1A4D] mb-2 uppercase tracking-wider">
            Premium Features Included
          </h4>
          <ul className="flex flex-col gap-1.5 mb-4">
            {vpn.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-[#7D6E90]">
                <Check className="w-3.5 h-3.5 text-[#674188] flex-shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <h4 className="font-headings font-bold text-[11px] text-[#2C1A4D] mb-1.5 uppercase tracking-wider">
            Expert Verdict
          </h4>
          <p className="text-xs text-[#7D6E90] leading-relaxed border-l-2 border-[#674188] pl-2.5 italic">
            "{vpn.verdict}"
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-lavender/20 pt-4">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase font-bold text-[#7D6E90] tracking-wider">Special Price</span>
            <span className="font-headings text-lg font-extrabold text-[#2C1A4D]">
              ${vpn.price} <span className="text-[10px] font-normal text-[#7D6E90]">/mo</span>
            </span>
          </div>
          <a
            href={vpn.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden bg-[#F97316] text-white py-2.5 px-5 rounded-none font-headings font-bold text-xs shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none flex items-center gap-1.5 group/modal-btn"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover/modal-btn:text-[#F97316] flex items-center gap-1.5">
              Get Special Deal <ExternalLink className="w-3.5 h-3.5" />
            </span>
            <span className="absolute inset-0 z-0 scale-x-0 bg-white transition-transform duration-300 origin-left group-hover/modal-btn:scale-x-100" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
