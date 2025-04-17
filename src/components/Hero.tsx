import React from "react"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation"
import pdf from "../assets/Jackson Bryant Resume 2025.pdf"
import { fadeInUp, slideInRight, staggerContainer } from "../constants/animations"
import { useContent } from "../hooks/useContent"

const Hero: React.FC = () => {
  const { data: heroContent } = useContent("hero")
  return (
    <div
      id="home"
      className="border-b border-neutral-900 min-h-screen pb-4 pt-24 sm:pt-28 px-4 sm:px-8"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row items-center justify-between"
      >
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            variants={fadeInUp}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="pb-4 sm:py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            aria-label="Jackson Bryant - Software Engineer"
          >
            Jackson Bryant
          </motion.h1>

          {/* Animated Typing Effect */}
          <motion.div
            variants={fadeInUp}
            className="mt-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-mono bg-gradient-to-r from-yellow-300 via-emerald-500 to-blue bg-clip-text text-transparent"
          >
            <TypeAnimation
              sequence={[
                "Front-end Developer",
                1000,
                "Backend Developer",
                1000,
                "Fullstack Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="my-2 max-w-xl py-4 text-sm sm:text-base lg:text-lg font-light tracking-wide leading-relaxed text-neutral-300"
          >
            {heroContent?.content || "Loading..."}
          </motion.p>

          {/* Resume + Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-2 sm:mt-4">
            {/* Download Resume Button */}
            <div className="flex justify-center lg:justify-start">
              <motion.button
                variants={fadeInUp}
                initial={{ scale: 1 }}
                animate={{
                  scale: [1, 1.15, 1],
                  transition: { duration: 1.5, repeat: Infinity },
                }}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#2563EB",
                  boxShadow: "0 0 12px rgba(30, 58, 138, 0.7), 0 0 24px rgba(0, 0, 128, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl py-3 px-6 mt-4 w-48 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium tracking-tight transition-all"
                aria-label="Download Resume"
              >
                <a href={pdf} download="Jackson Bryant Resume 2025.pdf" className="relative z-10">
                  Download Resume
                </a>
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.button>
            </div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-6 text-2xl mt-4 sm:mt-0"
            >
              <a
                href="https://www.linkedin.com/in/jacksonbryant-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 ml-4 text-neutral-300 hover:text-blue hover:scale-110 transition-transform"
                aria-label="Visit my Linkedin Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/JacksonBryantFGCU"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-neutral-300 hover:text-blue hover:scale-110 transition-transform"
                aria-label="Visit my GitHub Profile"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <motion.div
            variants={slideInRight}
            className="flex justify-center lg:justify-end w-full mt-6 sm:mt-0"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/Linkedin Photo.webp"
              alt="Jackson Bryant"
              height={900}
              width={400}
              className="rounded-md shadow-lg w-72 sm:w-80 lg:w-96"
              loading="eager"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero;