import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { fadeInUp } from "../constants/animations";

/**
 * Contact Component
 * 
 * Renders the Contact section of the website, including:
 * - Animated heading
 * - Contact description text
 * - Social media links (LinkedIn, GitHub, Email)
 */
const Contact: React.FC = () => {
  return (
    <Element name="contact" id="contact">
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
          className="text-3xl sm:text-4xl font-semibold text-gradient bg-gradient-to-r from-cyan-500 via-blue to-accent bg-clip-text text-transparent text-center"
        >
          Jackson Bryant
        </motion.h3>

        {/* Description */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base mx-auto text-center max-w-xl">
          Full-Stack Developer | Software Engineer
        </p>

        {/* Contact Description */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto">
          Interested in collaborating or hiring me? Feel free to reach out
          through any of the platforms below.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/jacksonbryant-dev"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="Visit my Linkedin Profile"
            className="text-gray-400 hover:text-blue transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/JacksonBryantFGCU"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="Visit my GitHub Profile"
            className="text-gray-400 hover:text-blue transition-colors duration-300"
          >
            <FaGithub size={30} />
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:jacksonbryant.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="Email Jackson Bryant"
            className="text-gray-400 hover:text-blue transition-colors duration-300"
          >
            <FaEnvelope size={30} />
          </motion.a>
        </div>

        {/* Copyright Notice */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500 text-center"
        >
          © {new Date().getFullYear()} Jackson Bryant. All rights reserved.
        </motion.p>
      </motion.div>
    </Element>
  );
};

export default Contact;