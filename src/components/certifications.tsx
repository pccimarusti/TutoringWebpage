import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animations";
import { CERTIFICATIONS } from "../constants";
import CertificationCard from "../components/CertificationCard";

// Support "MM/DD/YYYY" format from your index.ts
const parseDate = (dateString: string): Date => {
    return new Date(dateString);
};

const Certifications: React.FC = () => {
  // Sort certifications newest to oldest
  const sortedCerts = [...CERTIFICATIONS].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  );

  return (
    <div className="border-b border-neutral-900 pb-8 scroll-mt-32" id="certifications">
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Certifications
      </motion.h2>

      {/* Certifications Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          variants={staggerContainer as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {sortedCerts.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Certifications;