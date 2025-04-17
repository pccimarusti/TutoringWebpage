import React from "react"
import { motion, Variants } from "framer-motion"
import { fadeInUp, staggerContainer } from "../constants/animations"
import { useExperience } from "../hooks/useExperience"

const Experience: React.FC = () => {
  const {
    data: experiences = [],
    isLoading,
    error,
  } = useExperience()

  return (
    <div className="border-b border-neutral-900 pb-8 scroll-mt-32" id="experiences">
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Experience
      </motion.h2>

      {isLoading && (
        <p className="text-center text-neutral-400 text-sm">Loading experience...</p>
      )}
      {error && (
        <p className="text-red-500 text-center text-sm">
          Error: {(error as Error).message}
        </p>
      )}
      {!isLoading && experiences.length === 0 && !error && (
        <p className="text-center text-neutral-400 text-sm">No experience found.</p>
      )}

      <motion.div
        variants={staggerContainer as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-8 mx-4"
      >
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            variants={fadeInUp as Variants}
            whileHover={{ scale: 1.01 }}
            className="w-full max-w-3xl bg-gradient-to-r from-sky-500 to-blue p-[2px] rounded-xl"
          >
            <div className="flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="text-lg text-white font-semibold">
                    {experience.role} -{" "}
                    <span className="text-sm text-cyan-400 ml-2">
                      {experience.company}
                    </span>
                  </h6>
                  <p className="text-sm text-neutral-400">{experience.year}</p>
                </div>
              </div>

              <p className="text-neutral-400">{experience.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="transition-all rounded-full bg-cyan-600 hover:bg-cyan-700 px-3 py-1 text-xs text-white font-medium"
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
  )
}

export default Experience