'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Layout, Smartphone, Code, Users, Headphones } from 'lucide-react';

const ImprovedRoadmap = () => {
  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Research",
      subtitle: "Market Analysis",
      description: "Understanding market needs and competition"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Wireframing",
      subtitle: "Technical Feasibility",
      description: "Creating blueprint of the application"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Prototyping",
      subtitle: "UI/UX Design",
      description: "Building interactive prototypes"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      subtitle: "Testing and QA",
      description: "Implementing core functionality"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Stabilization",
      subtitle: "Deployment",
      description: "Ensuring stable performance"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Support",
      subtitle: "Maintenance",
      description: "Ongoing support and updates"
    }
  ];

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
            <span className="text-white">A Roadmap of Our </span>
            <span className="text-blue-500">Development Process</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            From the inception of your idea to the final delivery of your application, our
            development process follows an agile and iterative approach marked by collaboration,
            transparency, and utmost dedication.
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="flex flex-col items-center relative"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.div
                  className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mb-12 relative"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-blue-500">
                    {step.icon}
                  </div>
                  {/* Glowing dot */}
                  <motion.div
                    className="absolute top-24 w-4 h-4 rounded-full bg-blue-500"
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
                  <h3 className="text-white font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-blue-400 font-medium mb-3">{step.subtitle}</p>
                  <p className="text-gray-400 text-sm px-4">{step.description}</p>
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