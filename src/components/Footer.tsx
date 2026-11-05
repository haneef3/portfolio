import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { personalData } from '../data/personal';
import { SocialLinks } from './SocialLinks';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B12] border-t border-white/[0.08] py-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Terminal size={15} />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {personalData.fullName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary max-w-md">
              AI/ML Engineer & Full-Stack Developer crafting intelligent, scalable digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <SocialLinks iconSize={18} showResume={true} />
            <span className="text-[11px] font-mono text-slate-500">
              {personalData.location}
            </span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {personalData.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              Designed & Developed by{' '}
              <strong className="text-slate-200 font-medium">Haneef</strong>
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              aria-label="Scroll back to top"
              className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
