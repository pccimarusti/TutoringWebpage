import React, { useState } from "react"
import { motion, Variants } from "framer-motion"
import { fadeInUp, staggerContainer } from "../constants/animations"

interface PricingPlan {
  id: number
  name: string
  description: string
  price: string
  frequency: string
  features: string[]
  highlighted?: boolean
  hourCount?: number
}

const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Basic",
    description: "Perfect for occasional help with homework or specific topics",
    price: "$45",
    frequency: "per hour",
    features: [
      "One-on-one tutoring",
      "Flexible scheduling",
      "Homework help",
      "Custom study materials",
      "24-hour email support"
    ]
  },
  {
    id: 2,
    name: "Standard",
    description: "Our most popular plan for regular academic support",
    price: "$160",
    frequency: "4 hours",
    hourCount: 4,
    features: [
      "All Basic features",
      "10% discount on hourly rate",
      "Weekly progress reports",
      "Customized study plan",
      "Priority scheduling",
      "Practice tests & quizzes"
    ],
    highlighted: true
  },
  {
    id: 3,
    name: "Premium",
    description: "Comprehensive support for long-term academic success",
    price: "$336",
    frequency: "8 hours",
    hourCount: 8,
    features: [
      "All Standard features",
      "15% discount on hourly rate",
      "Emergency session availability",
      "Advanced learning materials",
      "Monthly parent/teacher conferences",
      "Specialized exam preparation",
      "College application guidance"
    ]
  }
]

const Pricing: React.FC = () => {
  const [billingFrequency, setBillingFrequency] = useState<"monthly" | "semester">("monthly")

  return (
    <div className="border-b border-neutral-900 pb-16 scroll-mt-32" id="pricing">
      <motion.h2
        variants={fadeInUp as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl text-white"
      >
        Tutoring Packages
      </motion.h2>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex rounded-lg bg-neutral-800 p-1">
          <button
            onClick={() => setBillingFrequency("monthly")}
            className={`${billingFrequency === "monthly" ? "bg-cyan-600 text-white" : "text-neutral-400"} px-4 py-2 rounded-lg transition-all`}
          >
            Pay-as-you-go
          </button>
          <button
            onClick={() => setBillingFrequency("semester")}
            className={`${billingFrequency === "semester" ? "bg-cyan-600 text-white" : "text-neutral-400"} px-4 py-2 rounded-lg transition-all`}
          >
            Semester Package
            <span className="ml-2 bg-green-500 text-xs rounded-full px-2 py-0.5">Save 20%</span>
          </button>
        </div>
      </div>

      <motion.div
        variants={staggerContainer as Variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-4"
      >
        {pricingPlans.map((plan) => {
          // Calculate semester price (20% discount on 4-month package)
          const hourlyRate = parseFloat(plan.price.replace('$', ''))
          const semesterHours = plan.hourCount ? plan.hourCount * 4 : 16 // 4 months
          const semesterDiscount = 0.2 // 20% discount
          const semesterPrice = plan.hourCount 
            ? `$${Math.round(hourlyRate * plan.hourCount * 4 * (1 - semesterDiscount))}`
            : `$${Math.round(hourlyRate * 16 * (1 - semesterDiscount))}` // 16 hours for Basic plan

          return (
            <motion.div
              key={plan.id}
              variants={fadeInUp as Variants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col rounded-2xl ${plan.highlighted ? 'bg-gradient-to-b from-cyan-500 to-blue p-[2px]' : 'border border-neutral-800'}`}
            >
              <div className={`flex flex-col h-full rounded-2xl bg-neutral-900 p-8 ${plan.highlighted ? '' : 'border-0'}`}>
                {plan.highlighted && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-cyan-600 text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-neutral-400">{plan.description}</p>
                
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {billingFrequency === "monthly" ? plan.price : semesterPrice}
                  </span>
                  <span className="ml-2 text-sm text-neutral-400">
                    {billingFrequency === "monthly" ? `/${plan.frequency}` : "/semester"}
                  </span>
                </div>

                <ul className="mt-8 space-y-3 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 mr-2 text-cyan-500">u2713</span>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 block w-full rounded-lg ${plan.highlighted ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-neutral-800 hover:bg-neutral-700'} px-4 py-3 text-center text-sm font-medium text-white transition-colors`}
                >
                  {plan.highlighted ? 'Get Started Now' : 'Choose Plan'}
                </motion.a>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <div className="mt-12 text-center text-sm text-neutral-400">
        <p>All packages include a free 15-minute consultation call to discuss your needs and goals.</p>
        <p className="mt-2">Need a custom plan? <a href="#contact" className="text-cyan-500 hover:underline">Contact us</a> for personalized options.</p>
      </div>
    </div>
  )
}

export default Pricing
