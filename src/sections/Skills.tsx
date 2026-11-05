import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';
import { skillCategories, academicCoursework } from '../data/skills';
import { BookOpen } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#0D111B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="TECHNICAL SKILLS"
          title="Skills & Core"
          highlightedText="Competencies"
          description="Strictly verified technical toolkit grounded in data science, machine learning algorithms, and modern full-stack web architectures."
        />

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <SkillCard category={category} />
            </motion.div>
          ))}
        </div>

        {/* Academic Coursework Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="glass-card rounded-2xl p-6 border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <BookOpen size={20} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-white">
                Core Academic Coursework
              </h3>
              <p className="text-xs text-text-secondary">
                Rigorous computer science curriculum at Presidency University
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {academicCoursework.map((course) => (
              <span
                key={course}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/[0.06]"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

