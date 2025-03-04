"use client";
'';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Smartphone, Code, Users, Headphones } from 'lucide-react';

const ImprovedRoadmap = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />, title: "Research", subtitle: "Market Analysis", description: "Understanding market needs and competition"
    },
    {
      icon: <Layout className="w-6 h-6" />, title: "Wireframing", subtitle: "Technical Feasibility", description: "Creating blueprint of the application"
    },
    {
      icon: <Smartphone className="w-6 h-6" />, title: "Prototyping", subtitle: "UI/UX Design", description: "Building interactive prototypes"
    },
    {
      icon: <Code className="w-6 h-6" />, title: "Development", subtitle: "Testing and QA", description: "Implementing core functionality"
    },
    {
      icon: <Users className="w-6 h-6" />, title: "Stabilization", subtitle: "Deployment", description: "Ensuring stable performance"
    },
    {
      icon: <Headphones className="w-6 h-6" />, title: "Support", subtitle: "Maintenance", description: "Ongoing support and updates"
    }
  ];

  const [windowWidth, setWindowWidth] = useState(1440); // Default width

useEffect(() => {
  if (typeof window !== 'undefined') {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }
}, []);


  return (
    <div className="w-full bg-[#0B1425] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">The Pathway to </span>
            <span className="text-blue-500">Seamless App Development</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            We embrace an agile, collaborative approach from concept to launch, ensuring seamless execution, transparent communication, and efficient delivery at every stage.
          </p>
        </motion.div>

        <div className="relative pt-20">
          {/* Timeline line */}
          <motion.div
            className="absolute top-48 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600/20 via-blue-500/40 to-blue-600/20"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                  delayChildren: 0.5
                }
              }
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center relative"
                variants={{
                  hidden: {
                    opacity: 0,
                    x: windowWidth >= 1024 ? -200 : windowWidth >= 640 ? (index % 2 === 0 ? -100 : 100) : 0,
                    y: windowWidth < 640 ? -100 : 0
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 1, ease: 'easeOut' }
                  }
                }}
              >
                <motion.div
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-12 relative"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-blue-500">
                    {step.icon}
                  </div>
                  {/* Glowing dot */}
                  <motion.div
                    className="absolute top-20 sm:top-24 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-blue-500"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  />
                </motion.div>

                <motion.div
                  className="text-center mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2 }}
                >
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2">{step.title}</h3>
                  <p className="text-blue-400 font-medium mb-3 text-sm sm:text-base">{step.subtitle}</p>
                  <p className="text-gray-400 text-xs sm:text-sm px-2 sm:px-4">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ImprovedRoadmap; 