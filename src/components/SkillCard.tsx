import React from 'react';
import { Code2, BrainCircuit, Server, Database, Layout, Wrench } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="text-indigo-400" size={22} />;
      case 'BrainCircuit':
        return <BrainCircuit className="text-cyan-400" size={22} />;
      case 'Server':
        return <Server className="text-indigo-400" size={22} />;
      case 'Database':
        return <Database className="text-cyan-400" size={22} />;
      case 'Layout':
        return <Layout className="text-indigo-400" size={22} />;
      case 'Wrench':
        return <Wrench className="text-cyan-400" size={22} />;
      default:
        return <Code2 className="text-indigo-400" size={22} />;
    }
  };

  return (
    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
            {getIcon(category.iconName)}
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg text-white">
              {category.name}
            </h3>
            <p className="text-xs text-text-muted mt-0.5">{category.description}</p>
          </div>
        </div>

        {/* Skill Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#080B12]/80 text-slate-200 border border-white/[0.08] hover:border-cyan-500/40 hover:text-white transition-all duration-150"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
