import React from "react"
import { FaCalculator, FaCode, FaAtom, FaMusic, FaWaveSquare, FaChessPawn, FaNotesMedical } from "react-icons/fa"
import { motion, Variants } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { staggerContainer } from "../constants/animations"

interface SubjectIcon {
  Icon: React.ElementType
  color: string
  label: string
  duration: number
  slug: string
}

const iconVariants = (duration: number): Variants => ({
  initial: { y: -8, scale: 0.95 },
  animate: {
    y: [0, -10, 0],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
})

const Subjects: React.FC = () => {
  const navigate = useNavigate()

  const subjectIcons: SubjectIcon[] = [
    { Icon: FaCalculator, color: "text-purple-500", label: "Mathematics", duration: 2.5, slug: "mathematics" },
    { Icon: FaAtom, color: "text-green-500", label: "Physics", duration: 3, slug: "physics" },
    { Icon: FaMusic, color: "text-pink-500", label: "Music Performance", duration: 4, slug: "music-performance" },
    { Icon: FaWaveSquare, color: "text-pink-500", label: "Music Theory", duration: 4, slug: "music-theory" },
    { Icon: FaCode, color: "text-cyan-500", label: "Computer Science", duration: 4.5, slug: "computer-science" },
    { Icon: FaChessPawn, color: "text-green-500", label: "Chess", duration: 2.5, slug: "chess"}
  ]

  const handleSubjectClick = (slug: string) => {
    navigate(`/subjects/${slug}`)
  }

  return (
    <div
      className="border-b border-neutral-800 pb-24 scroll-mt-48 -z-10"
      id="subjects"
    >
      {/* Section Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl font-sans text-white text-transparent bg-clip-text"
      >
        Subjects
      </motion.h2>

      {/* Subject Icons Container */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {subjectIcons.map(({ Icon, color, label, duration, slug }, index) => (
          <motion.div
            key={index}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, rotate: 6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue p-[2px] hover:shadow-[0_0_15px_rgba(56,178,172,0.7)] transition-all cursor-pointer"
            aria-label={label}
            onClick={() => handleSubjectClick(slug)}
          >
            <div className="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 p-4">
              <Icon className={`text-5xl ${color} mb-2`} />
              <span className="text-sm font-medium text-white">{label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Subjects;
