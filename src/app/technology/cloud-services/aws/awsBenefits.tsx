"use client";
'';
import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    text: "AWS regions and availability zone offers the advantage of being highly scalable and reliable.",
  },
  {
    text: "AWS S3 as CDN utilizes an end-to-end approach to secure and harden our infrastructure, including physical, operational, and software measures.",
  },
  {
    text: "AWS regions enable you to select the operating system, programming language, web application platform, database, and other services you need.",
  },
  {
    text: "It leverages an end-to-end approach to secure infrastructure and delivers high-performance.",
  },
  {
    text: "You pay only for the compute power, storage, and other resources you use, with no long-term contracts or up-front commitments.",
  }
];

const AWSBenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className=" min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Benefits of AWS Development
          </h2>
          <motion.div 
            className="h-1 w-20 bg-blue-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left side - Animated Illustration */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/images/technology/cloud-services/aws/benefits.png" 
                alt="AWS Development"
                className="w-full h-auto rounded-2xl shadow-xl shadow-blue-500/20"
              />
              
            </motion.div>
          </motion.div>

          {/* Right side - Benefits List */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 mb-6"
              >
                <motion.div
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mt-1"
                  whileHover={{ scale: 1.2 }}
                >
                  <svg 
                    className="w-4 h-4 text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </motion.div>
                <motion.p 
                  className="text-blue-100 text-lg"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {benefit.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AWSBenefitsSection;