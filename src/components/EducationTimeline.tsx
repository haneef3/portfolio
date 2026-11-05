import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { educationData } from '../data/education';

export const EducationTimeline: React.FC = () => {
  return (
    <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-0 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-indigo-500 via-indigo-500/40 to-cyan-500/30">
      {educationData.map((item, index) => (
        <div key={index} className="relative group">
          {/* Node on vertical line */}
          <div
            className={`absolute left-[-31px] sm:left-[-39px] top-4 w-4 h-4 rounded-full bg-[#080B12] border-2 transition-colors ${
              item.current
                ? 'border-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.6)]'
                : 'border-slate-600 group-hover:border-cyan-400'
            }`}
          >
            {item.current && (
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 m-auto mt-[3px] animate-pulse"></div>
            )}
          </div>

          {/* Education Card */}
          <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-indigo-400 shrink-0" />
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {item.degree}
                  </h3>
                  {item.current && (
                    <span className="text-[10px] font-mono uppercase bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-full border border-indigo-500/30">
                      Pursuing
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-slate-300 mt-0.5">
                  {item.institution}
                </p>
              </div>

              {/* Score Badge */}
              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono text-xs sm:text-sm font-semibold">
                  <Award size={14} className="text-cyan-400" />
                  <span>
                    {item.scoreLabel}: <strong>{item.score}</strong>
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={13} className="text-indigo-400" />
                {item.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={13} className="text-cyan-400" />
                {item.location}
              </span>
            </div>

            {item.details && (
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-2 border-t border-white/[0.06]">
                {item.details}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
