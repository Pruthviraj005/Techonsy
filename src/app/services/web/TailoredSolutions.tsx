"use client";
'';

import React from 'react';
import { motion } from 'framer-motion';

function TailoredSolutions() {
  return (
    <div className=" w-full py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Tailored Solutions Section */}
      <motion.div 
        className="relative mt-16 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl text-center md:text-left border border-gray-200 dark:border-gray-700 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Tailored Web Solutions for Your Business
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          We create customized web solutions that align seamlessly with your brand and business goals. From design to development, every detail is crafted for a smooth, high-performance digital experience. Your vision, our expertise—let’s build something great.
        </p>
      </motion.div>

      {/* Tech-Driven Excellence Section */}
      <motion.div 
        className="relative mt-12 p-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl text-center md:text-left border border-gray-200 dark:border-gray-700 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Cutting-Edge Technology for Optimal Performance
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          Leverage modern technology for a fast, secure, and scalable web presence. Our expert team builds with precision, ensuring efficiency, reliability, and seamless performance. Elevate your digital experience with innovation that delivers results.
        </p>
      </motion.div>
    </div>
  );
}

export default TailoredSolutions;
