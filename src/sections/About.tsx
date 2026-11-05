import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Target, Briefcase, Sparkles, Brain, Code2, Cpu } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  const getHighlightIcon = (label: string) => {
    switch (label) {
      case 'Degree':
        return <GraduationCap size={20} className="text-indigo-400" />;
      case 'Location':
        return <MapPin size={20} className="text-cyan-400" />;
      case 'Focus':
        return <Target size={20} className="text-indigo-400" />;
      case 'Experience':
        return <Briefcase size={20} className="text-cyan-400" />;
      default:
        return <Sparkles size={20} className="text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ABOUT ME"
          title="Bridging Theoretical ML &"
          highlightedText="Engineering Execution"
          description="A dedicated Computer Science Engineering undergraduate specializing in Data Science, focused on architecting intelligent applications that solve real-world challenges."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/[0.08] space-y-4 leading-relaxed text-slate-300 text-sm sm:text-base">
              {personalData.aboutBio.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <Brain size={18} className="text-indigo-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-300">ML Workflows</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <Code2 size={18} className="text-cyan-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-300">Full-Stack Systems</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <Cpu size={18} className="text-indigo-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-300">Applied AI & Vision</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Compact Verified Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {personalData.keyHighlights.map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-white/[0.08] hover:border-indigo-500/30 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    {item.label}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    {getHighlightIcon(item.label)}
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base text-white">
                    {item.value}
                  </h4>
                  {item.sublabel && (
                    <p className="text-xs text-text-muted mt-1 font-mono">
                      {item.sublabel}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

