import React from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { fadeInUp, staggerContainer } from "../constants/animations"

interface Service {
  id: number
  title: string
  description: string
  price: string
  features: string[]
  image_url?: string
  highlighted?: boolean
}

// Sample tutoring services data (in a real app, this would come from a backend)
const tutoringServices: Service[] = [
  {
    id: 1,
    title: "One-on-One Tutoring",
    description: "Personalized tutoring sessions tailored to your specific needs and learning style. Work directly with a tutor to achieve your academic goals.",
    price: "$45/hour",
    features: ["Personalized learning plan", "Flexible scheduling", "Progress tracking", "Study materials included"],
    image_url: "/one-on-one.jpg",
    highlighted: true
  },
  {
    id: 2,
    title: "Group Study Sessions",
    description: "Learn collaboratively with 2-4 students. Perfect for friends studying the same subject or preparing for the same exam.",
    price: "$30/hour per student",
    features: ["Cost-effective learning", "Peer collaboration", "Shared resources", "Guided instruction"],
    image_url: "/group-study.jpg"
  },
  {
    id: 3,
    title: "Exam Preparation",
    description: "Intensive preparation for standardized tests, midterms, or finals. Focus on test-taking strategies and subject mastery.",
    price: "$55/hour",
    features: ["Practice tests", "Test strategies", "Subject review", "Performance analysis"],
    image_url: "/exam-prep.jpg"
  }
]

const Services: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 scroll-mt-32" id="services">
      {/* Section Heading */}
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Tutoring Services
      </motion.h2>

      {/* Services Container */}
      <AnimatePresence mode="wait">
        <motion.div
          variants={staggerContainer as Variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="gap-8 justify-center items-center flex flex-col"
        >
          {tutoringServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp as Variants}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`relative w-full max-w-3xl ${service.highlighted ? 'bg-gradient-to-r from-cyan-500 to-blue' : 'bg-gradient-to-r from-neutral-700 to-neutral-800'} p-[2px] rounded-xl`}
            >
              {/* Individual Service Card */}
              <div className="relative flex flex-col justify-between gap-4 rounded-xl bg-[#15181F] p-6">
                {/* Title and Price */}
                <div className="flex justify-between items-start">
                  <h6 className="text-lg font-semibold text-white">
                    {service.title}
                  </h6>
                  <div className="rounded-xl bg-cyan-700 px-3 py-1 text-sm text-white font-medium">
                    {service.price}
                  </div>
                </div>

                {/* Service Image */}
                {service.image_url && (
                  <motion.div
                    className="w-full overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      loading="eager"
                      src={service.image_url}
                      alt={`${service.title} illustration`}
                      onError={(e) => {
                        e.currentTarget.src = "/fallback-image.png"
                      }}
                      className="transition-transform duration-300 rounded-lg object-cover w-full h-52"
                    />
                  </motion.div>
                )}

                {/* Description */}
                <motion.p
                  variants={fadeInUp as Variants}
                  className="text-neutral-400 mt-4"
                >
                  {service.description}
                </motion.p>

                {/* Features */}
                <div className="mt-4">
                  <h6 className="text-sm font-medium text-white mb-2">Includes:</h6>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center text-sm text-neutral-300"
                      >
                        <span className="mr-2 text-cyan-500">✓</span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Book Now Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 rounded-lg bg-cyan-600 hover:bg-cyan-700 px-4 py-2 text-center text-white font-medium transition-all duration-200"
                >
                  Book Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Services;
