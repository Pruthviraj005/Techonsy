"use client";
''
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MobileAppBanner() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-gray-950 to-black text-white py-20 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      
      {/* Left Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-center lg:text-left mt-20"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
          Transform Your Business with Cutting-Edge Mobile Development
        </h1>
        <p className="mt-6 text-gray-300 leading-relaxed">
          Empower your business with tailor-made mobile apps designed for performance, scalability, and seamless user experience. Our expert team blends innovation, intuitive design, and cutting-edge technology to create solutions that go beyond expectations.
        </p>
        <p className="mt-4 text-gray-400">
          With agile development and robust architecture, we turn your ideas into impactful digital products. Let’s build something extraordinary.
        </p>

        {/* CTA Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full shadow-lg transition-all duration-300"
        >
          Schedule your free consultation
        </motion.button>
      </motion.div>

      {/* Right Image Section */}
      <div>
        <Image src="/images/mobileApp/mobile-dev.png" alt="mobile" width={500} height={500} />
      </div>

    </section>
  )
}
