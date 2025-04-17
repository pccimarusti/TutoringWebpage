import React from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { fadeInUp, staggerContainer } from "../constants/animations"
import { CertificationCard } from "../components/CertificationCard"
import { useCertifications } from "../hooks/useCertifications"

const Certifications: React.FC = () => {
  const {
    data: certifications = [],
    isLoading,
    error,
  } = useCertifications()

  return (
    <div id="certifications" className="border-b border-neutral-900 pb-8 scroll-mt-32">
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white font-bold"
      >
        Certifications
      </motion.h2>

      {isLoading && (
        <p className="text-center text-neutral-400 text-sm">Loading certifications...</p>
      )}
      {error && (
        <p className="text-red-500 text-center text-sm">
          Error: {(error as Error).message}
        </p>
      )}
      {!isLoading && certifications.length === 0 && !error && (
        <p className="text-center text-neutral-400 text-sm">No certifications found.</p>
      )}

      {/* Certifications Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          variants={staggerContainer as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-8"
        >
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} {...cert} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Certifications;