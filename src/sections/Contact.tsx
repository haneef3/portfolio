import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { ContactSection as ContactCards } from '../components/ContactSection';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#0D111B]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something"
          highlightedText="Together."
          description="I'm always interested in connecting with people working on AI, machine learning, software development, and innovative technology projects."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <ContactCards />
        </motion.div>
      </div>
    </section>
  );
};

