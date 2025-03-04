"use client";
'';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAndroid, FaApple, FaReact, FaAppStore } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const MobileTechnologies = () => {
  const technologies = [
    {
      name: 'Android',
      icon: <FaAndroid className="text-green-500" size={40} />, 
      description: 'Native Android Development'
    },
    {
      name: 'iOS',
      icon: <FaApple className="text-gray-300" size={40} />, 
      description: 'Native iOS Development'
    },
    {
      name: 'Flutter',
      icon: <SiFlutter className="text-blue-400" size={40} />, 
      description: 'Cross-platform Development'
    },
    {
      name: 'AppleStore',
      icon: <FaAppStore className="text-blue-500" size={40} />, 
      description: 'Cross-platform JavaScript'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: 'easeInOut',
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-500">Technologies</span>
            <span className="text-white"> We Work With</span>
          </h2>
          <p className="text-gray-400 text-lg">Building next-generation mobile experiences</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: 'easeOut' } }}
              className="bg-gray-800 rounded-lg p-6 text-center transform transition-all hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="mb-4 flex justify-center">{tech.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MobileTechnologies;