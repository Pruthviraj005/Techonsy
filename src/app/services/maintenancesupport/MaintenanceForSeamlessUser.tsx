"use client";
''
import React from 'react'
import { maintenanceServices } from './data'
import { motion } from 'framer-motion'

function MaintenanceForSeamlessUser() {
  return (
    <div>
      <section className="relative min-h-screen mt-[10%]">

        {/* Background Glow Effect */}
        <div className="absolute inset-0 w-slg opacity-30 bg-gradient-to-br from-[#182a44] to-[#084e7a] blur-[100px] animate-rotate rounded-full z-0"></div>

        <div className="relative z-10 text-white px-6">
          <div className="text-center max-w-4xl mx-auto mb-12 flex flex-col gap-14">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
              Comprehensive Software Product Maintenance for Seamless User Experiences
            </h1>
          </div>

          {/* Cards with Staggered Animation */}
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto pt-10"
          >
            {maintenanceServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="transparent bg-blur-[300px] shadow-lg rounded-xl p-6 border-[0.5px] border-blue-400 border-opacity-50 w-full text-sm font-medium transition-all duration-700 hover:scale-105 text-center"
              >
                <h3 className="text-xl font-semibold text-slate-300">{service.title}</h3>
                <p className="text-gray-400 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MaintenanceForSeamlessUser
