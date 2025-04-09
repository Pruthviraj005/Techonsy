"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

// Lazy loading Lucide icons for performance
const Code = dynamic(() => import('lucide-react').then(mod => mod.Code), { ssr: false });
const Users = dynamic(() => import('lucide-react').then(mod => mod.Users), { ssr: false });
const Target = dynamic(() => import('lucide-react').then(mod => mod.Target), { ssr: false });
const Rocket = dynamic(() => import('lucide-react').then(mod => mod.Rocket), { ssr: false });

const Database = dynamic(() => import('lucide-react').then(mod => mod.Database), { ssr: false });
const Server = dynamic(() => import('lucide-react').then(mod => mod.Server), { ssr: false });


const Solution = () => {
  // Memoize static data to prevent re-renders
  const features = useMemo(() => [
    { title: 'Rich APIs', description: 'Java provides APIs for networking, I/O, XML parsing, databases, etc.', icon: <Code size={24} /> },
    { title: 'Platform Independent', description: 'Java is platform-independent at both source and binary levels.', icon: <Server size={24} /> },
    { title: 'Open-Source Libraries', description: 'Java offers extensive open-source libraries and strong community support.', icon: <Database size={24} /> }
  ], []);

  const consultingFeatures = useMemo(() => [
    { title: "Expert Team", icon: <Users size={24} />, description: "Hire top Java developers from Techonsy for scalable solutions." },
    { title: "Strategic Java Solutions", icon: <Target size={24} />, description: "Budget-focused Java solutions tailored to business needs." },
    { title: "Hyper Growth Approach", icon: <Rocket size={24} />, description: "Build a growth-oriented technology ecosystem." }
  ], []);



  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#09131c] to-black" />
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: Math.random() * 3 + 2, repeat: Infinity }}
          />
        ))}
      </div>

      <div className='max-w-6xl mx-auto relative z-10 px-4 py-16'>
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">
            Java Full Stack Development
          </h1>
          <motion.div className="w-24 h-1 bg-blue-500 mx-auto mb-8" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1, delay: 0.5 }} />
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto">
            Platform-independent technology for seamless integration and business solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ scale: 1.05 }}>
              <div className="p-8 rounded-xl bg-slate-800/90 shadow-md backdrop-blur-lg border border-gray-600 transition-all hover:border-blue-800">
                <motion.div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400" whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Techonsy */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-300 bg-clip-text text-transparent">
            Why Choose Techonsy as Your Java Consulting Partner?
          </h2>
          <motion.div className="w-24 h-1 bg-blue-500 mx-auto mb-8" initial={{ width: 0 }} animate={{ width: 96 }} transition={{ duration: 1 }} />
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {consultingFeatures.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} whileHover={{ scale: 1.05 }}>
                <div className="p-8 rounded-xl bg-slate-800/90 shadow-md backdrop-blur-lg border border-gray-600 transition-all hover:border-blue-800">
                  <motion.div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400" whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
