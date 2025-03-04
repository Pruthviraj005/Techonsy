"use client";
''
import React from 'react'
import { approachData } from './data'
import { motion } from 'framer-motion'

function OurApproach() {
  return (
    <div>
      <section className="my-8 lg:mt-[90%] relative">
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6 py-12">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              Our Approach to Software Application Maintenance
            </h1>
          </motion.div>

          {/* Features Grid with Staggered Animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[10%] max-w-5xl mx-auto">
            {approachData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative flex items-start space-x-6 hover:bg-gray-800 backdrop-blur-lg p-6 rounded-xl shadow-md border border-gray-800 transition-transform duration-300 ease-in-out"
              >
                {/* Floating Background Glow */}
                <div className="absolute inset-0 rounded-xl bg-purple-500/10 blur-xl opacity-30 -z-10"></div>

                {/* Icon with Subtle Motion Effect */}
                <motion.span
                  className="text-3xl w-14 h-14 flex items-center justify-center rounded-full text-white shadow-md"
                  whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.span>

                {/* Content Section */}
                <div>
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurApproach
