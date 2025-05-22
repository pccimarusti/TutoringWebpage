import React from "react"
import { motion, Variants } from "framer-motion"
import { fadeInUp, staggerContainer } from "../constants/animations"

interface Testimonial {
  id: number
  student: string
  subject: string
  text: string
  grade?: string
  date: string
}

// Sample testimonials data (in a real app, this would come from a backend)
const testimonials: Testimonial[] = [
  {
    id: 1,
    student: "Alex Johnson",
    subject: "Calculus",
    text: "I was struggling with calculus and on the verge of failing my class. After just a few sessions, I not only understood the concepts but actually started to enjoy math! I ended up with an A- in the class.",
    grade: "A-",
    date: "May 2025"
  },
  {
    id: 2,
    student: "Sarah Williams",
    subject: "SAT Prep",
    text: "The test-taking strategies I learned were invaluable. My SAT score improved by over 200 points after our tutoring sessions. I'm now confident about my college applications.",
    grade: "1400 SAT Score",
    date: "April 2025"
  },
  {
    id: 3,
    student: "Michael Chen",
    subject: "Physics",
    text: "The way complex physics concepts were broken down made them so much easier to understand. The visual aids and practice problems were incredibly helpful in reinforcing my understanding.",
    grade: "B+",
    date: "March 2025"
  }
]

const Testimonials: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 scroll-mt-32" id="testimonials">
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Student Testimonials
      </motion.h2>

      <motion.div
        variants={staggerContainer as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center gap-8 mx-4"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={fadeInUp as Variants}
            whileHover={{ scale: 1.01 }}
            className="w-full max-w-3xl bg-gradient-to-r from-sky-500 to-blue p-[2px] rounded-xl"
          >
            <div className="flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h6 className="text-lg text-white font-semibold">
                    {testimonial.student} -{" "}
                    <span className="text-sm text-cyan-400 ml-2">
                      {testimonial.subject}
                    </span>
                  </h6>
                  <p className="text-sm text-neutral-400">{testimonial.date}</p>
                </div>
                {testimonial.grade && (
                  <div className="px-3 py-1 bg-green-600 rounded-full text-xs font-medium text-white">
                    Final Grade: {testimonial.grade}
                  </div>
                )}
              </div>

              <div className="relative">
                <span className="absolute -top-2 -left-2 text-4xl text-cyan-500 opacity-40">u201C</span>
                <p className="text-neutral-300 italic pl-6 pr-6">{testimonial.text}</p>
                <span className="absolute -bottom-6 -right-2 text-4xl text-cyan-500 opacity-40">u201D</span>
              </div>
              
              <div className="mt-8 flex justify-end">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-cyan-400 text-sm hover:text-cyan-300 transition-all duration-200"
                >
                  Book a session like {testimonial.student.split(" ")[0]}'s →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Testimonials
