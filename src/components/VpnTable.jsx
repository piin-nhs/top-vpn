import React, { useState } from 'react';
import { Check, X, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { vpnData } from '../data/vpnData';

export default function VpnTable({ onOpenModal }) {
  const [hoveredColumn, setHoveredColumn] = useState(null);

  // Features list matching ProtonVPN rows
  const featuresList = [
    { key: 'openSource', label: 'Open-source VPN' },
    { key: 'noLogs', label: 'Openly published no-logs audit' },
    { key: 'adBlocker', label: 'Ad blocker' },
    { key: 'malwareBlocker', label: 'Malware blocker' },
    { key: 'accelerator', label: 'VPN Accelerator' },
    { key: 'jurisdiction', label: 'Jurisdiction' },
    { key: 'ownedBy', label: 'Owned by' },
    { key: 'price', label: 'Pricing' },
    { key: 'score', label: 'Editor Score' },
  ];

  // Align data to match display order
  const displayOrder = ['protonvpn', 'expressvpn', 'cyberghost', 'nordvpn', 'surfshark'];
  const orderedVpnData = displayOrder.map(id => vpnData.find(v => v.id === id)).filter(Boolean);

  const getFeatureValue = (vpn, key) => {
    switch (key) {
      case 'openSource':
        return vpn.id === 'protonvpn' ? (
          <Check className="w-4 h-4 text-[#2ea043] stroke-[3]" />
        ) : (
          <X className="w-4 h-4 text-rose-500 stroke-[2]" />
        );
      case 'noLogs':
        return vpn.id === 'protonvpn' ? (
          <Check className="w-4 h-4 text-[#2ea043] stroke-[3]" />
        ) : (
          <X className="w-4 h-4 text-rose-500 stroke-[2]" />
        );
      case 'adBlocker':
        return vpn.id !== 'nordvpn' ? (
          <Check className="w-4 h-4 text-[#2ea043] stroke-[3]" />
        ) : (
          <X className="w-4 h-4 text-rose-500 stroke-[2]" />
        );
      case 'malwareBlocker':
        return vpn.id !== 'nordvpn' ? (
          <Check className="w-4 h-4 text-[#2ea043] stroke-[3]" />
        ) : (
          <X className="w-4 h-4 text-rose-500 stroke-[2]" />
        );
      case 'accelerator':
        return vpn.id === 'protonvpn' ? (
          <Check className="w-4 h-4 text-[#2ea043] stroke-[3]" />
        ) : (
          <X className="w-4 h-4 text-rose-500 stroke-[2]" />
        );
      case 'jurisdiction':
        if (vpn.id === 'protonvpn') return 'Switzerland';
        if (vpn.id === 'expressvpn') return 'BVI';
        if (vpn.id === 'cyberghost') return 'Romania';
        if (vpn.id === 'nordvpn') return 'Panama';
        if (vpn.id === 'surfshark') return 'Netherlands';
        return '';
      case 'ownedBy':
        if (vpn.id === 'protonvpn') return 'Proton AG';
        if (vpn.id === 'expressvpn') return 'Kape';
        if (vpn.id === 'cyberghost') return 'Kape';
        if (vpn.id === 'nordvpn') return 'Nord Security';
        if (vpn.id === 'surfshark') return 'Nord Security';
        return '';
      case 'price':
        return <span className="font-bold text-[#2C1A4D]">${vpn.price}/mo</span>;
      case 'score':
        return (
          <div className="flex flex-col items-center">
            <span className="font-headings text-xs font-extrabold text-[#674188]">{vpn.score}</span>
            <div className="flex items-center text-amber-500 gap-0.5 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-2.5 h-2.5 fill-current ${i < Math.floor(vpn.stars) ? 'text-amber-500' : 'text-amber-500/20'}`} />
              ))}
            </div>
          </div>
        );
      default:
        return '';
    }
  };

  return (
    <section id="best-vpns" className="py-24 bg-cream relative z-10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#674188]/10 text-[#674188] font-headings font-bold text-xs uppercase tracking-wider mb-4">
            Comparison Table
          </div>
          <h2 className="font-headings text-3xl md:text-5xl text-[#2C1A4D] font-extrabold mb-4 leading-tight">
            Core Infrastructure Comparison
          </h2>
          <p className="text-[#7D6E90] text-sm">
            Detailed check of jurisdiction legality, source audits, and infrastructure accelerators.
          </p>
        </motion.div>

        {/* ProtonVPN Style Column-based Grid */}
        <div className="w-full overflow-x-auto pb-6 scrollbar-thin">
          <div className="min-w-[960px] grid grid-cols-[240px_repeat(5,1fr)] gap-y-0 items-stretch relative">

            {/* ========================================================================= */}
            {/* ANIMATA BORDER TRAIL CARD OVERLAY FOR PROTON VPN (Spans Column 2, Rows 1-end) */}
            {/* ========================================================================= */}
            <motion.div
              className="absolute inset-0 pointer-events-none rounded-none z-10 shadow-md border-2 border-[#674188] bg-white"
              style={{
                gridColumn: '2 / 3',
                gridRow: '1 / 13',
              }}
              initial={{ opacity: 0, scaleY: 0.95 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0 * 0.08, ease: "easeOut" }}
              viewport={{ once: true }}
            />

            {/* Headers Row */}
            <div className="flex items-end pb-6 pr-4 border-b border-lavender/25 z-10">
              <span className="font-headings font-bold text-xs uppercase tracking-wider text-[#7D6E90]">
                Features
              </span>
            </div>

            {orderedVpnData.map((vpn, idx) => {
              const isHighlighted = vpn.id === 'protonvpn';
              const isHovered = hoveredColumn === vpn.id;

              return (
                <motion.div
                  key={vpn.id}
                  onMouseEnter={() => setHoveredColumn(vpn.id)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  className={`flex flex-col items-center justify-between pb-6 pt-6 px-4 text-center transition-all duration-300 ${isHighlighted
                    ? 'bg-transparent border-0 z-20'
                    : isHovered
                      ? 'bg-cream/20 border-t border-x border-[#674188]/60 z-5'
                      : 'bg-transparent border-t border-x border-lavender/20'
                    }`}
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <span className="font-headings text-sm font-extrabold text-[#2C1A4D] block mb-3">
                    {vpn.name}
                  </span>

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center p-2.5 mb-2"
                    style={{ backgroundColor: `${vpn.logoColor}15` }}
                  >
                    <Shield className="w-full h-full" style={{ color: vpn.logoColor }} />
                  </div>
                </motion.div>
              );
            })}


            {/* Feature Values Rows */}
            {featuresList.map((feature, featureIdx) => (
              <React.Fragment key={feature.key}>

                {/* Feature Label (Left column) */}
                <div className={`flex items-center py-4 pr-4 border-b border-lavender/10 text-left font-headings font-bold text-xs text-[#2C1A4D] ${featureIdx % 2 === 0 ? 'bg-cream/10' : 'bg-transparent'
                  }`}>
                  {feature.label}
                </div>

                {/* Values for each VPN */}
                {orderedVpnData.map((vpn, idx) => {
                  const isHighlighted = vpn.id === 'protonvpn';
                  const isHovered = hoveredColumn === vpn.id;

                  return (
                    <motion.div
                      key={vpn.id}
                      onMouseEnter={() => setHoveredColumn(vpn.id)}
                      onMouseLeave={() => setHoveredColumn(null)}
                      className={`flex items-center justify-center py-4 px-4 text-xs text-[#7D6E90] transition-all duration-300 ${isHighlighted
                        ? 'bg-transparent border-0 font-semibold z-20'
                        : isHovered
                          ? 'bg-cream/20 border-x border-x-[#674188]/60 border-b border-lavender/10'
                          : 'bg-transparent border-x border-x-lavender/20 border-b border-lavender/10'
                        }`}
                      initial={{ opacity: 0, scale: 0.98, y: 5 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      {getFeatureValue(vpn, feature.key)}
                    </motion.div>
                  );
                })}
              </React.Fragment>
            ))}

            {/* CTA Buttons Row at the bottom */}
            <div className="flex items-center pr-4 pt-6 pb-6 border-b-0">
              <span className="text-[10px] text-[#7D6E90] italic">
                *commission supported
              </span>
            </div>

            {orderedVpnData.map((vpn, idx) => {
              const isHighlighted = vpn.id === 'protonvpn';
              const isHovered = hoveredColumn === vpn.id;

              return (
                <motion.div
                  key={vpn.id}
                  onMouseEnter={() => setHoveredColumn(vpn.id)}
                  onMouseLeave={() => setHoveredColumn(null)}
                  className={`flex flex-col items-center justify-center pt-6 pb-6 px-4 transition-all duration-300 ${isHighlighted
                    ? 'bg-transparent border-0 z-20'
                    : isHovered
                      ? 'bg-cream/20 border-b border-x border-[#674188]/60 z-5'
                      : 'bg-transparent border-b border-x border-lavender/20'
                    }`}
                  initial={{ opacity: 0, scale: 0.95, y: 5 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  {isHighlighted ? (
                    <a
                      href={vpn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden bg-[#F97316] text-white px-5 py-2.5 rounded-full font-headings font-extrabold text-[10px] uppercase tracking-wider shadow-sm transition-all duration-300 hover:shadow-md focus:outline-none group/table-btn"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover/table-btn:text-[#F97316]">
                        Try now
                      </span>
                      <span className="absolute inset-0 z-0 scale-x-0 bg-white transition-transform duration-300 origin-left group-hover/table-btn:scale-x-100" />
                    </a>
                  ) : (
                    <a
                      href={vpn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative overflow-hidden bg-white text-[#F97316] border border-[#F97316]/40 px-5 py-2.5 rounded-full font-headings font-extrabold text-[10px] uppercase tracking-wider shadow-sm transition-all duration-300 hover:border-[#F97316] hover:shadow-md focus:outline-none group/table-btn"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover/table-btn:text-white">
                        Try now
                      </span>
                      <span className="absolute inset-0 z-0 scale-x-0 bg-[#F97316] transition-transform duration-300 origin-left group-hover/table-btn:scale-x-100" />
                    </a>
                  )}

                  <button
                    onClick={() => onOpenModal(vpn.id)}
                    className="text-[9px] font-bold text-[#7D6E90] hover:text-[#674188] mt-3 underline"
                  >
                    Specs Details
                  </button>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
