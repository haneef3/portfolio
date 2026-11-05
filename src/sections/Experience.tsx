import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ExperienceCard } from '../components/ExperienceCard';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="EXPERIENCE"
          title="Professional"
          highlightedText="Internship Experience"
          description="Applied engineering experience delivering practical machine learning solutions and pipeline testing."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} experience={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
