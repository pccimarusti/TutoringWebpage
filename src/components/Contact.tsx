import React from "react"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeInUp } from "../constants/animations"
import { useContactContent } from "../hooks/useContactContent"

const Contact: React.FC = () => {
  const { data: heading } = useContactContent("heading")
  const { data: tagline } = useContactContent("tagline")
  const { data: note } = useContactContent("note")
  const { data: footer } = useContactContent("footer")

  return (
    <section id="contact" className="scroll-mt-32">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-white py-8 mt-20 px-4 sm:px-8"
      >
        {/* Heading */}
        <motion.h3
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl text-center font-semibold text-transparent bg-gradient-to-r from-cyan-500 via-blue to-accent bg-clip-text"
        >
          {heading?.content || "Jackson Bryant"}
        </motion.h3>

        {/* Tagline */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto">
          {tagline?.content}
        </p>

        {/* Note */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto">
          {note?.content}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8 text-2xl">
          <motion.a
            href="https://www.linkedin.com/in/jacksonbryant-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue transition-colors"
            aria-label="Visit my Linkedin Profile"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/JacksonBryantFGCU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue transition-colors"
            aria-label="Visit my GitHub Profile"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="mailto:jacksonbryant.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="text-gray-400 hover:text-blue transition-colors"
            aria-label="Email Jackson Bryant"
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500 text-center"
        >
          {footer?.content}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Contact;