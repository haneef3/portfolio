import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { EducationTimeline } from '../components/EducationTimeline';
import { CertificationsSection } from '../components/CertificationsSection';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="ACADEMIC BACKGROUND"
          title="Education &"
          highlightedText="Certifications"
          description="Formal academic qualifications in computer science & data science alongside verified technical credentials."
        />

        {/* Vertical Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <EducationTimeline />
        </motion.div>

        {/* Certifications and Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <CertificationsSection />
        </motion.div>
      </div>
    </section>
  );
};

