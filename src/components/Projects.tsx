import React from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { fadeInUp, staggerContainer } from "../constants/animations"
import { useProjects } from "../hooks/useProjects"

const Projects: React.FC = () => {
  const {
    data: projects = [],
    isLoading,
    error,
  } = useProjects()

  return (
    <div className="border-b border-neutral-900 pb-8 scroll-mt-32" id="projects">
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

      {/* Loading/Error/Fallbacks */}
      {isLoading && (
        <p className="text-center text-neutral-400 text-sm">Loading projects...</p>
      )}
      {error && (
        <p className="text-red-500 text-center text-sm">
          Error: {(error as Error).message}
        </p>
      )}
      {!isLoading && projects.length === 0 && !error && (
        <p className="text-center text-neutral-400 text-sm">No projects found.</p>
      )}

      {/* Projects Container */}
      <AnimatePresence mode="wait">
        {projects.length > 0 && (
          <motion.div
            variants={staggerContainer as Variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="gap-8 justify-center items-center flex flex-col"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp as Variants}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative w-full max-w-3xl bg-gradient-to-r from-cyan-500 to-blue p-[2px] rounded-xl"
              >
                {/* Individual Project Card */}
                <div className="relative flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
                  {/* Title and Links */}
                  <div className="flex justify-between items-start">
                    <h6 className="text-lg font-semibold text-white">
                      {project.title}
                    </h6>
                    <div className="flex space-x-2">
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:underline rounded-xl bg-cyan-700 px-3 py-1 text-xs text-white font-medium"
                      >
                        Demo
                      </a>
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all hover:underline rounded-xl bg-cyan-600 hover:bg-cyan-700 px-3 py-1 text-xs text-white font-medium"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Project Image */}
                  {project.image_url && (
                    <motion.img
                      loading="eager"
                      src={project.image_url}
                      alt={`${project.title} screenshot`}
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-image.png"
                      }}
                      className="transition-transform duration-300 hover:scale-105 mt-4 rounded-lg object-contain max-h-[24rem] w-full"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    />
                  )}

                  {/* Description */}
                  <motion.p
                    variants={fadeInUp as Variants}
                    className="text-neutral-400 mt-4"
                  >
                    {project.description}
                  </motion.p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies?.map((tech: string, idx: number) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="transition-all rounded-full bg-cyan-600 hover:bg-cyan-700 px-3 py-1 text-xs text-white font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects;