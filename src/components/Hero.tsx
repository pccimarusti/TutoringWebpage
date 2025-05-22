import React from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
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
            aria-label="Your Name - Professional Tutor"
          >
            Paul Cimarusti - Tutor and Teacher
          </motion.h1>

          {/* Animated Typing Effect */}
          <motion.div
            variants={fadeInUp}
            className="mt-2 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-mono bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
          >
            <TypeAnimation
              sequence={[
                "Mathematics",
                1000,
                "Physics",
                1000,
                "Computer Science",
                1000,
                "Piano",
                1000,
                "Guitar Fundamentals",
                1000,
                "Music Theory",
                1000,
                "Chess",
                1000
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </motion.div>

          {/* <motion.p
            variants={fadeInUp}
            className="my-2 max-w-xl py-4 text-sm sm:text-base lg:text-lg font-light tracking-wide leading-relaxed text-neutral-300"
          >
            {heroContent?.content || "Loading..."}
          </motion.p> */}

          {/* Resume + Socials */}
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 mt-2 sm:mt-4">
            {/* Book a session Button */}
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
                  backgroundColor: "#8b5cf6",
                  boxShadow: "0 0 12px rgba(139, 92, 246, 0.7), 0 0 24px rgba(139, 92, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl py-3 px-6 mt-4 w-48 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium tracking-tight transition-all"
                aria-label="Book a Session"
              >
                <a href="#contact" className="relative z-10">
                  Book a Session
                </a>
                <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </motion.button>
            </div>

            {/* Social Links */}
            {/* <motion.div
              variants={fadeInUp}
              className="flex gap-6 text-2xl mt-4 sm:mt-0"
            >
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 ml-4 text-neutral-300 hover:text-blue hover:scale-110 transition-transform"
                aria-label="Visit my Linkedin Profile"
              >
                <FaLinkedin />
              </a>
            </motion.div> */}
          </div>
        </div>

        {/* Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <motion.div
            variants={slideInRight}
            className="flex justify-center lg:justify-end w-full mt-6 sm:mt-0"
          >
            {/* <motion.img
              whileHover={{ scale: 1.05 }}
              src="/Linkedin Photo.webp"
              alt="Paul Cimarusti - Professional Tutor"
              height={900}
              width={400}
              className="rounded-md shadow-lg w-72 sm:w-80 lg:w-96"
              loading="eager"
            /> */}          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero;