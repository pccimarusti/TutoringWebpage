import React from "react"
import subjectsImg from "../assets/subjects.png"
import { motion } from "framer-motion"
import { fadeInUp, slideInRight } from "../constants/animations"
import { useContent } from "../hooks/useContent"

const About: React.FC = () => {
  const { data: about1 } = useContent("about_1")
  const { data: about2 } = useContent("about_2")
  
  return (
    <div
      id="about"
      className="border-b border-neutral-900 pb-4 scroll-mt-48"
    >
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-bold font-sans bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-600 text-transparent bg-clip-text"
      >
        My Teaching <span className="text-neutral-500">Philosophy</span>
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center">
        {/* Profile Image */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:p-8 flex justify-center"
        >
          <motion.img
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1.2 }}
            src={subjectsImg}
            alt="Subjects"
            className="rounded-2xl shadow-lg h-3/4 transition-transform duration-300 hover:scale-105"
          />
        </motion.div>

        {/* About Text */}
        <div className="w-full lg:w-1/2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start justify-center"
          >
            <p className="my-2 max-w-xl py-6 text-xl text-center lg:text-left font-light tracking-tight">
              {about1?.content || "I believe that every student has unique learning needs and potential. My focus as a tutor and instructor is to create a open enviornment where students are not afraid to ask important questions, and learn from their mistakes."}
            </p>
            <p className="my-2 max-w-xl py-6 text-xl text-center lg:text-left font-light tracking-tight">
              {about2?.content || "Whether you are a student strugling with math concepts, want to master an instrument, or want to improve your chess game, I am here to help you reach your goals."}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About;