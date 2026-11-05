import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-3 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-indigo-500 before:via-cyan-500/40 before:to-transparent">
      {/* Timeline indicator node */}
      <div className="absolute left-[-7px] top-3 w-4 h-4 rounded-full bg-[#080B12] border-2 border-indigo-400 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></div>
      </div>

      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300">
        {/* Header Information */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/[0.06]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
                <Briefcase size={16} />
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                {experience.role}
              </h3>
            </div>
            <p className="text-base font-medium text-gradient-accent mt-1">
              {experience.company}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
              <Calendar size={13} className="text-indigo-400" />
              {experience.duration}
            </span>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {experience.type}
            </span>
          </div>
        </div>

        {/* Overview description */}
        <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-5">
          {experience.description}
        </p>

        {/* Key Responsibilities */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Contributions & Responsibilities:
          </h4>
          <ul className="space-y-2.5">
            {experience.responsibilities.map((resp, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed"
              >
                <CheckCircle2
                  size={16}
                  className="text-cyan-400 mt-1 shrink-0"
                />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies used */}
        <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
