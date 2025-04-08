import React from "react";
import { PROJECTS } from "../constants";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { fadeInUp, staggerContainer } from "../constants/animations";

/**
 * Type definition for a single project item
 */
interface ProjectItem {
  title: string;
  demo: string;
  github: string;
  image?: string;
  description: string;
  skills: string[];
}

/**
 * Projects Component
 *
 * Renders the Projects section of the website, including:
 * - Animated heading
 * - Display of individual projects with links to demo and GitHub
 * - List of technologies used for each project
 */
const Projects: React.FC = () => {
  return (
    <div
      className="border-b border-neutral-900 pb-8 scroll-mt-32"
      id="projects"
    >
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Projects
      </motion.h2>

      {/* Projects Container */}
      <AnimatePresence mode="wait">
        <motion.div
          variants={staggerContainer as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {PROJECTS.map((project: ProjectItem, index: number) => (
            <motion.div
              key={index}
              variants={fadeInUp as Variants}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full max-w-3xl bg-gradient-to-r from-cyan-500 to-blue p-[2px] rounded-xl"
            >
              {/* Individual Project Card */}
              <div className="relative flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
                {/* Project Title and Links */}
                <div className="flex justify-between items-start">
                  <h6 className="text-lg font-semibold text-white">
                    {project.title}
                  </h6>
                  <div className="flex space-x-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-cyan-600 px-3 py-1 text-xs font-medium text-white transition-all hover:bg-cyan-700 hover:underline"
                      aria-label="Visit the demo link of this project"
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-cyan-600 px-3 py-1 text-xs font-medium text-white transition-all hover:bg-cyan-700 hover:underline focus:outline focus:ring-2 focus:ring-cyan-500"
                      aria-label="Visit GitHub repository of this project"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Project Image */}
                {project.image && (
                  <motion.img
                    loading="lazy"
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full max-h-[24rem] object-contain rounded-lg mt-4 transition-transform duration-300 hover:scale-105"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                )}

                {/* Project Description */}
                <motion.p
                  variants={fadeInUp as Variants}
                  className="text-neutral-400 mt-4"
                >
                  {project.description}
                </motion.p>

                {/* Technologies Used */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.skills.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white hover:bg-cyan-700 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Projects;