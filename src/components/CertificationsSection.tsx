import React from 'react';
import { Award, Trophy, CheckCircle2 } from 'lucide-react';
import { certificationsData, achievementsData } from '../data/education';

export const CertificationsSection: React.FC = () => {
  return (
    <div className="space-y-10">
      {/* Certifications Sub-block */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Award size={18} />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Verified Technical Certifications
            </h3>
            <p className="text-xs text-text-secondary">
              Standardized skill assessments and course verifications
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-xl p-4 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                      cert.platform === 'freeCodeCamp'
                        ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                        : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {cert.issuer}
                  </span>
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-white leading-snug">
                  {cert.title}
                </h4>
              </div>

              <div className="mt-4 pt-2 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Verified Assessment</span>
                <span className="text-indigo-400">Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Sub-block */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Trophy size={18} />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-white">
              Honors & Achievements
            </h3>
            <p className="text-xs text-text-secondary">
              Hackathons, technical competitions, and symposium recognitions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievementsData.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-xl p-5 border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Trophy size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-heading font-bold text-base text-white">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    {item.year}
                  </span>
                </div>
                <p className="text-xs font-mono text-cyan-400 mb-2">
                  {item.event} • {item.type}
                </p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
