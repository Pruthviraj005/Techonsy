"use client";
'';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Clock, Users, Banknote, LineChart, 
  Smartphone, Layout, Award, Settings
} from 'lucide-react';

const Benefits = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const benefits = [
    {
      icon: <Clock />,
      title: 'Ongoing Support',
      description: '24/7 technical support and regular maintenance updates',
      color: 'from-blue-400 to-indigo-600'
    },
    {
      icon: <Banknote />,
      title: 'Competitive Pricing',
      description: 'Cost-effective solutions without compromise',
      color: 'from-indigo-400 to-purple-600'
    },
    {
      icon: <Users />,
      title: 'Expert Team',
      description: 'Skilled professionals with deep expertise',
      color: 'from-purple-400 to-pink-600'
    },
    {
      icon: <LineChart />,
      title: 'Time Efficiency',
      description: 'Quick turnaround and timely delivery',
      color: 'from-pink-400 to-rose-600'
    },
    {
      icon: <Layout />,
      title: 'User Experience',
      description: 'Intuitive and engaging interfaces',
      color: 'from-rose-400 to-orange-600'
    },
    {
      icon: <Award />,
      title: 'Proven Success',
      description: 'Track record of successful solutions',
      color: 'from-orange-400 to-amber-600'
    },
    {
      icon: <Smartphone />,
      title: 'App Optimization',
      description: 'Enhanced platform visibility',
      color: 'from-amber-400 to-yellow-600'
    },
    {
      icon: <Settings />,
      title: 'Custom Solutions',
      description: 'Tailored to your business needs',
      color: 'from-yellow-400 to-blue-600'
    }
  ];

  return (
    <div className="w-full bg-[#0B1425] py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-blue-500">Benefits</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Experience the advantages that set us apart
          </p>
        </motion.div>

        <div className="relative min-h-[800px]">
          {/* DNA Helix Structure */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`strand-${i}`}
                className="absolute w-full h-2"
                style={{
                  top: `${(i * 5)}%`,
                  transform: `rotate(${i % 2 ? 45 : -45}deg)`,
                }}
                animate={{
                  backgroundColor: `hsla(${(i * 20) % 360}, 70%, 50%, 0.1)`,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          {/* Benefits Flow */}
          <div className="relative">
            {benefits.map((benefit, index) => {
              const isLeft = index % 2 === 0;
              const yOffset = (index * 100) - (isLeft ? 20 : 0);

              return (
                <motion.div
                  key={benefit.title}
                  className={`absolute w-80 ${isLeft ? 'left-0' : 'right-0'}`}
                  style={{ top: yOffset }}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      scale: activeIndex === index ? 1.05 : 1,
                    }}
                  >
                    {/* Connecting Line */}
                    <motion.div
                      className={`absolute ${isLeft ? 'right-0' : 'left-0'} top-1/2 w-20 h-px bg-gradient-to-r ${benefit.color}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.2 }}
                    />

                    {/* Benefit Content */}
                    <div className="relative p-6">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-5 rounded-xl`}
                        animate={{
                          opacity: activeIndex === index ? 0.2 : 0.05,
                        }}
                      />
                      
                      <div className="relative flex items-center gap-4">
                        <motion.div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.color} p-0.5`}
                          animate={{
                            rotate: activeIndex === index ? 360 : 0,
                          }}
                          transition={{ duration: 2 }}
                        >
                          <div className="w-full h-full rounded-full bg-[#0B1425] flex items-center justify-center text-blue-400">
                            {benefit.icon}
                          </div>
                        </motion.div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-blue-400 mb-1">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Floating Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 rounded-full bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;