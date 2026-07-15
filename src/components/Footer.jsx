import React from 'react';
import { ShieldCheck, Send } from 'lucide-react';

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed successfully to secure updates!');
    e.target.reset();
  };

  return (
    <footer className="bg-[#2C1A4D] text-[#FFFBF5] pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-12 mb-16">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2">
            <ShieldCheck className="w-8 h-8 text-[#C3ACD0]" />
            <span className="font-headings font-extrabold text-2xl">
              VPN<span className="text-[#C3ACD0]">2026</span>
            </span>
          </a>
          <p className="text-sm text-[#C3ACD0]/70 max-w-sm leading-relaxed">
            Independent security analysts delivering verified, benchmarked assessments of global VPN infrastructure. Protect your network with facts.
          </p>
          
          {/* Social Icons with Inline SVG to prevent library export version issues */}
          <div className="flex items-center gap-3 mt-2">
            {/* Portfolio */}
            <a
              href="https://nhs-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="w-9 h-9 rounded-full bg-[#FFFBF5]/5 hover:bg-[#C3ACD0] hover:text-[#2C1A4D] flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/piin-nhs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-[#FFFBF5]/5 hover:bg-[#C3ACD0] hover:text-[#2C1A4D] flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/piin-nhs/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#FFFBF5]/5 hover:bg-[#C3ACD0] hover:text-[#2C1A4D] flex items-center justify-center transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Resources column */}
        <div>
          <h4 className="font-headings font-bold text-xs uppercase tracking-wider text-[#C3ACD0] mb-6">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-[#C3ACD0]/70">
            <li><a href="#best-vpns" className="hover:text-[#FFFBF5] transition-colors">Best VPNs 2026</a></li>
            <li><a href="#how-we-test" className="hover:text-[#FFFBF5] transition-colors">How We Test</a></li>
            <li><a href="#faq" className="hover:text-[#FFFBF5] transition-colors">FAQs</a></li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="flex flex-col gap-4">
          <h4 className="font-headings font-bold text-xs uppercase tracking-wider text-[#C3ACD0] mb-2">
            Stay Secure
          </h4>
          <p className="text-sm text-[#C3ACD0]/70">
            Subscribe to get monthly alerts on zero-day network exploits and privacy warnings.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
            <input
              type="email"
              placeholder="Your secure email..."
              required
              aria-label="Email address"
              className="flex-grow bg-[#FFFBF5]/5 border border-[#C3ACD0]/20 rounded-xl px-4 py-3 text-sm text-[#FFFBF5] placeholder-[#C3ACD0]/45 focus:outline-none focus:border-[#C3ACD0] transition-colors"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="bg-[#C3ACD0] text-[#2C1A4D] hover:bg-[#FFFBF5] p-3 rounded-xl transition-all duration-300 flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div className="max-w-7xl mx-auto px-6 border-t border-[#FFFBF5]/10 pt-8 flex flex-col gap-4 text-center">
        <p className="text-xs text-[#C3ACD0]/50">
          &copy; 2026 VPN2026. All rights reserved. All product names, logos, and brands are property of their respective owners.
        </p>
        <p className="text-[10px] text-[#C3ACD0]/30 leading-relaxed max-w-4xl mx-auto">
          Disclaimer: We receive referral commissions from some VPN providers when you click links and purchase subscriptions. This does not influence our objective performance rankings.
        </p>
      </div>
    </footer>
  );
}
