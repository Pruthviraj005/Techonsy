'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Heart, Home, Play, Bot, Flame,
  Factory, Plane, Umbrella, Shield, LineChart, GraduationCap
} from 'lucide-react';

const IndustryExpertise = () => {
  const industries = [
    { icon: <ShoppingCart />, name: 'Ecommerce', description: 'Digital retail solutions' },
    { icon: <Heart />, name: 'Healthcare', description: 'Medical & health systems' },
    { icon: <Home />, name: 'Real Estate', description: 'Property management solutions' },
    { icon: <Play />, name: 'Media', description: 'Digital media platforms' },
    { icon: <Bot />, name: 'AI Software', description: 'Intelligent solutions' },
    { icon: <Flame />, name: 'Oil & Gas', description: 'Energy sector solutions' },
    { icon: <Factory />, name: 'Manufacturing', description: 'Industrial automation' },
    { icon: <Plane />, name: 'Travel & Hospitality', description: 'Tourism solutions' },
    { icon: <Umbrella />, name: 'Insurance', description: 'Risk management systems' },
    { icon: <Shield />, name: 'Security', description: 'Cybersecurity solutions' },
    { icon: <LineChart />, name: 'Finance', description: 'Financial technology' },
    { icon: <GraduationCap />, name: 'Education', description: 'Learning platforms' }
  ];

  const trustedCompanies = [
    "COMPACT",
    "FastTrack360",
    "IncidentControl",
    "TechForward",
    "GlobalSync",
    "InnovateNow"
  ];

  return (
    <div className="w-full bg-[#0B1425] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-white">Domain </span>
            <span className="text-blue-500">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We bring deep industry knowledge and specialized expertise across various sectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(30, 41, 59, 0.8)',
              }}
              className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group border border-blue-900/30"
            >
              <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-800/50 transition-colors duration-300">
                <div className="text-blue-500">
                  {industry.icon}
                </div>
              </div>
              
              <h3 className="text-blue-400 font-semibold mb-2 text-lg group-hover:text-blue-300">
                {industry.name}
              </h3>
              <p className="text-gray-400 text-sm group-hover:text-gray-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Trusted By Section */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-semibold text-white mb-12">Trusted By Industry Leaders</h3>
          
          <div className="relative overflow-hidden h-20">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1425] via-transparent to-[#0B1425] z-10" />
            
            <motion.div
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear"
                }
              }}
              className="flex gap-8 absolute whitespace-nowrap"
            >
              {[...trustedCompanies, ...trustedCompanies].map((company, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-8 py-4 bg-slate-900/90 rounded-lg border border-blue-900/30 backdrop-blur-sm"
                >
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                    {company}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;