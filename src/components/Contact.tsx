import React, { useState } from "react"
import { FaLinkedin, FaEnvelope, FaCalendarAlt, FaPhone } from "react-icons/fa"
import { motion } from "framer-motion"
import { fadeInUp } from "../constants/animations"
import { useContactContent } from "../hooks/useContactContent"

const Contact: React.FC = () => {
  const { data: heading } = useContactContent("heading")
  const { data: tagline } = useContactContent("tagline")
  const { data: note } = useContactContent("note")
  const { data: footer } = useContactContent("footer")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({...prev, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)
    setErrorMessage('')
    
    console.log('Submitting form data:', formData)
    
    try {
      // Use Vercel Serverless Function URL with full path
      const apiUrl = 'https://tutoringwebpage-8rnvlualf-pauls-projects-3ae7f3b4.vercel.app/api/send-email';
      
      console.log('Sending request to:', apiUrl)
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      console.log('Response status:', response.status)
      const responseData = await response.json()
      console.log('Response data:', responseData)

      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to send message')
      }

      // Clear form and show success message
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredDate: "",
        preferredTime: ""
      })
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
      const errorMessage = error instanceof Error 
        ? `Error: ${error.message}` 
        : 'An unknown error occurred. Please try again later.'
      setErrorMessage(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  const subjects = [
    "Mathematics",
    "Physics",
    "Music Performance",
    "Music Theory",
    "Computer Science",
    "Chess",
    "Other"
  ]

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
          className="text-3xl sm:text-4xl text-center font-semibold text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-600 bg-clip-text"
        >
          {heading?.content || "Book a Session"}
        </motion.h3>

        {/* Tagline */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto">
          {tagline?.content}
        </p>

        {/* Note */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base text-center max-w-xl mx-auto">
          {note?.content}
        </p>

        {/* Booking Form */}
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-neutral-900 rounded-xl border-[1px] border-neutral-800 shadow-lg">
          {submitSuccess ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="text-green-500 text-5xl mb-4">Success!</div>
              <h4 className="text-white text-xl font-medium mb-2">Booking Request Received!</h4>
              <p className="text-neutral-400">
                Thanks for your interest in our tutoring services. I'll get back to you as soon as possible to talk about your session!
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="mt-6 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
              >
                Book Another Session
              </button>
            </motion.div>
          ) : submitError ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-8"
            >
              <div className="text-red-500 text-5xl mb-4">Error!</div>
              <h4 className="text-white text-xl font-medium mb-2">Something went wrong</h4>
              <p className="text-neutral-400">
                We encountered an error while processing your request: <br />
                <span className="text-red-400 font-medium">{errorMessage || 'Unknown error'}</span>
              </p>
              <p className="text-neutral-400 mt-2 text-sm">
                Please try again or contact us directly at pcimarustitutoring@gmail.com
              </p>
              <button
                onClick={() => setSubmitError(false)}
                className="mt-6 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg text-white transition-colors"
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                    Your Name*
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                    Email Address*
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-1">
                    Subject*
                  </label>
                  <select
                    required
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>Select a subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-300 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-300 mb-1">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="" disabled>Select a time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 9pm)</option>
                  </select>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell me about your learning goals, specific topics you need help with, or any other important details."
                  className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium transition-all hover:from-purple-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Book Your Session'}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-purple-500 mr-2" />
              <span className="text-white font-medium">Email</span>
            </div>
            <a href="mailto:pcimarustitutoring@gmail.com" className="text-neutral-400 hover:text-purple-400 transition-colors">
              pcimarustitutoring@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
              <FaPhone className="text-purple-500 mr-2" />
              <span className="text-white font-medium">Phone</span>
            </div>
            <a href="tel:+12392926513" className="text-neutral-400 hover:text-purple-400 transition-colors">
              (239) 292-6513
            </a>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="text-purple-500 mr-2" />
              <span className="text-white font-medium">Hours</span>
            </div>
            <span className="text-neutral-400">
              Tuesday & Thursday: 11am-3pm<br />
            </span>
          </div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500 text-center"
        >
          {footer?.content || " 2025 Paul Cimarusti Tutoring Services. All rights reserved."}
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Contact;