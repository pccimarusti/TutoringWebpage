import React from "react";
import { EXPERIENCES } from "../constants";
import { motion, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animations";

/**
 * Type definition for a single experience item
 */
interface ExperienceItem {
  role: string;
  company: string;
  year: string;
  description: string;
  skills: string[];
}

/**
 * Experience Component
 *
 * Renders the Experience section of the website, including:
 * - Animated heading
 * - List of experiences displayed as cards with hover effects
 * - Skills associated with each experience
 */
const Experience: React.FC = () => {
  return (
    <div
      className="border-b border-neutral-900 pb-8 scroll-mt-32"
      id="experiences"
    >
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-gradient text-white"
      >
        Experience
      </motion.h2>

      {/* Experience Cards Container */}
      <motion.div
        variants={staggerContainer as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-8"
      >
        {EXPERIENCES.map((experience: ExperienceItem, index: number) => (
          <motion.div
            key={index}
            variants={fadeInUp as Variants}
            whileHover={{ scale: 1.03 }}
            className="w-full max-w-3xl bg-gradient-to-r from-sky-500 to-blue p-[2px] rounded-xl"
          >
            {/* Individual Experience Card */}
            <div className="flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
              {/* Experience Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="text-lg font-semibold text-white">
                    {experience.role} -{" "}
                    <span className="text-sm text-cyan-400 ml-2">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="text-sm text-neutral-400">{experience.year}</p>
                </div>
              </div>

              {/* Experience Description */}
              <p className="text-neutral-400">{experience.description}</p>

              {/* Skills Displayed as Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white hover:bg-cyan-700 transition-all"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;