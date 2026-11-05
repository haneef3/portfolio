import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Github, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/personal';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-[#0D111B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FEATURED WORK"
          title="Engineered Systems &"
          highlightedText="Featured Projects"
          description="A selection of end-to-end applications demonstrating machine learning integration, full-stack design patterns, and applied AI systems."
        />

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub Repositories Link Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center pt-6"
        >
          <a
            href={personalData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-200"
          >
            <Github size={17} />
            <span>Explore All Repositories on GitHub</span>
            <ArrowUpRight size={15} className="text-cyan-400" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

