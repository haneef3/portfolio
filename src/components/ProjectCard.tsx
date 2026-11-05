import React from 'react';
import { ExternalLink, Github, Cpu } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  project: Project;
  featuredLarge?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featuredLarge = false,
}) => {
  return (
    <div
      className={`glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300 ${
        featuredLarge ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Visual Header / Graphic Simulation */}
      <div className="p-4 sm:p-5 pb-0">
        <ProjectVisual type={project.visualType} title={project.title} />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-medium">
              {project.category}
            </span>
            {project.badge && (
              <span
                className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full font-medium ${
                  project.liveUrl
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                    : 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                }`}
              >
                {project.badge}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-indigo-200 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Detailed Bullet Points */}
          {project.detailedPoints && (
            <ul className="space-y-2 mb-5">
              {project.detailedPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t border-white/[0.06]">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06] hover:border-indigo-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.08]">
            {/* Live Demo Button (Only if liveUrl is defined) */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all duration-200 shadow-md shadow-indigo-600/20"
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06]">
                <Cpu size={14} className="text-indigo-400" />
                <span>Model Pipeline Verified</span>
              </div>
            )}

            {/* GitHub Repository / Profile Link */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] hover:text-white border border-white/[0.08] active:scale-95 transition-all duration-200"
            >
              <Github size={15} />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
