'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ChallengesSection = () => {
  const list1 = [
    "Unclear Objectives",
    "Budget Constraints",
    "User Experience Challenges",
    "App Marketing & User Acquisition",
    "Post-Launch Maintenance"
  ]

  const list2 = [
    "Platform Selection",
    "Finding the Right Development Team",
    "Security & Data Privacy",
    "Keeping Up with Tech Trends"
  ]

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0d0d0d] text-gray-200">

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 blur-[150px] opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 blur-[150px] opacity-20"></div>
      </div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-wide">
          Overcoming Mobile App Challenges 🚀
        </h1>
        <p className="text-lg mt-6 font-light text-gray-400">
          Building a successful mobile app comes with challenges that can impact performance, user experience, and business growth. Without the right expertise, these obstacles can hinder your app’s success.

        </p>
      </motion.div>

      {/* Challenge Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-11/12 max-w-6xl">

        {/* Left Side Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 w-full p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
        >
          <ul className="space-y-3">
            {list1.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-blue-500/40 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 w-full p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-purple-500/30"
        >
          <ul className="space-y-3">
            {list2.map((item, idx) => (
              <motion.li
                key={idx}
                className="p-3 bg-gray-800/50 rounded-lg text-gray-300 hover:bg-purple-500/40 transition-all duration-300 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span> {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  )
}

export default ChallengesSection
