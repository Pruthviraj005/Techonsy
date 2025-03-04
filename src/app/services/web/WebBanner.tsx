"use client";
''
import React from 'react';
import { motion } from 'framer-motion';

function WebBanner() {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="order-2 md:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Breadcrumb */}
          <div className="mb-6 text-gray-500 text-sm">
            <span>Services</span>
            <span className="mx-2">/</span>
            <span className="text-blue-500 font-medium">Web Development</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Transforming Ideas into <br />
            <span className="text-blue-500">Seamless Digital Solutions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
            We create functional, user-friendly, and visually engaging web solutions tailored to your needs. With a focus on modern technology and seamless performance, we help enhance your online presence.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 hover:bg-[#55ACEE] text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
          >
            Contact us
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="order-1 md:order-2 relative flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Styled Image */}
          <motion.img 
            src="/images/services/webdev.jpg" 
            loading='lazy'
            alt="Web Development Examples" 
            className="rounded-3xl shadow-2xl w-full md:w-auto max-w-xl"
            style={{ borderRadius: '20px', border: '8px solid rgba(255, 255, 255, 0.1)', filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.2))' }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default WebBanner;