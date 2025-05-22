import React, { useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaArrowLeft, FaCalculator, FaCode, FaAtom, FaMusic, FaWaveSquare } from "react-icons/fa"
import { fadeInUp } from "../constants/animations"

interface SubjectContent {
  title: string
  icon: React.ReactNode
  description: string
  credentials: string
  approach: string
}

const SubjectDetail: React.FC = () => {
  const { subject } = useParams<{ subject: string }>()
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 85);
  }, []);

  // Define content for each subject
  const subjectContent: Record<string, SubjectContent> = {
    mathematics: {
      title: "Mathematics Tutoring",
      icon: <FaCalculator className="text-5xl text-cyan-500 mb-4" />,
      description: "Comprehensive mathematics tutoring for students of all skill levels, including courses like algebra, precaluclus, calculus I-III, and differential equations. ",
      credentials: "I have publically tutored mathematics at Florida Gulf Coast University through the Center of Academic Achievement to fellow peers, and have tutored high school students privately.",
      approach: "My mathematics tutoring emphasizes conceptual understanding rather than memorization. I highlight the importance of visualization, mental math, and problem-solving skills."
    },
    physics: {
      title: "Physics Tutoring",
      icon: <FaAtom className="text-5xl text-cyan-500 mb-4" />,
      description: "Physics tutoring that focuses on kinematics, I am happy to help with any troubles you might have in Physics I at the high school or college level.",
      credentials: "I have substitute taught physics for a semester at the highschool level, and tutored physics at Florida Gulf Coast University through the Center of Academic Achievement to fellow peers.",
      approach: "My physics tutoring is based on a solid foundation of kinematics, and I focus on helping students develop a deeper understanding of physical principles and concepts."
    },
    "music-performance": {
      title: "Music Performance Tutoring",
      icon: <FaMusic className="text-5xl text-cyan-500 mb-4" />,
      description: "I offer lessons in beginning to advanced Piano, beginning Guitar, and beginning Bass, from genres such as worship to classical.",
      credentials: "With 7 years of classical training, and 3 years of worship training, I have a solid foundation in music performance. I have competed in classical competitions, and have played in many worship services.",
      approach: "I focus on developing proper technique, musical interpretation, and performance skills. My lessons are tailored to each student's goals, whether preparing for recitals, auditions, or personal enjoyment. We work on both technical exercises and repertoire suited to your skill level and interests."
    },
    "music-theory": {
      title: "Music Theory Tutoring",
      icon: <FaWaveSquare className="text-5xl text-cyan-500 mb-4" />,
      description: "Comprehensive music theory and ear training that focuses on the needs of the student. Some topics we might uncover are different scales, chord structures, progressions, basic harmony, and improv. Although I strongly recomend learning the basics of piano (or any instrument) before starting music theory, it is not required.",
      credentials: "With formal training in music theory and composition, I help students develop a deeper understanding of musical structures and concepts that enhance both their performance and appreciation.",
      approach: "My music theory tutoring integrates traditional concepts with practical applications for improv, memorization, or composition."
    },
    "computer-science": {
      title: "Computer Science Tutoring",
      icon: <FaCode className="text-5xl text-cyan-500 mb-4" />,
      description: "Computer science tutoring that develops coding skills in python, and c++.",
      credentials: "With a strong college background in software classes at FGCU, I have a solid foundation in python, c++, and object oriented programming.",
      approach: "My computer science tutoring is hands-on and project-based. We work through concepts by coding real solutions, debugging together, and building skills incrementally."
    },
    chess: {
        title: "Chess Instruction",
        icon: <FaCode className="text-5xl text-cyan-500 mb-4" />,
        description: "Chess instruction that develops visualization, opening principles, and endgame strategy.",
        credentials: "With background in tournament play and experience coaching students of beginner skill levels, I help students develop a deeper understanding of chess principles and strategies.",
        approach: "My chess instruction is based on a solid foundation of opening principles, endgame strategy, and visualization."
      }
  }

  const content = subject ? subjectContent[subject] : null

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl text-white mb-4">Subject not found</h1>
        <Link to="/" className="text-purple-500 hover:text-purple-400 flex items-center">
          <FaArrowLeft className="mr-2" /> Return to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-24 px-6 sm:px-12">
      {/* Back button */}
      <Link 
        to="/"
        className="inline-flex items-center text-purple-500 hover:text-purple-400 mb-12 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to Home
      </Link>
      
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          {content.icon}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-600 text-transparent bg-clip-text pb-10">
            {content.title}
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl">
            {content.description}
          </p>
        </div>

        {/* Credentials Section */}
        <motion.div 
          variants={fadeInUp}
          className="mb-12 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">My Credentials</h2>
          <p className="text-neutral-300">{content.credentials}</p>
        </motion.div>

        {/* Approach Section */}
        <motion.div 
          variants={fadeInUp}
          className="mb-12 bg-neutral-900 p-8 rounded-xl border border-neutral-800"
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">My Teaching Approach</h2>
          <p className="text-neutral-300">{content.approach}</p>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-8"
        >
          <Link 
            to="/"
            onClick={() => {
              // Navigate to home page and then scroll to contact section
              setTimeout(() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
              }, 50)
            }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl text-white font-medium hover:from-purple-600 hover:to-cyan-600 transition-all"
          >
            Book a {content.title.split(' ')[0]} Session
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SubjectDetail
