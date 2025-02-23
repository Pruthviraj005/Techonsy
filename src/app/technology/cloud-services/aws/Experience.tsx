'use client';

import { motion } from "framer-motion";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { GiHealthNormal } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { MdPrecisionManufacturing } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

const industries = [
  { 
    title: "Ecommerce", 
    icon: <RiShoppingCart2Fill />, 
    color: "from-blue-500/20 to-blue-600/20",
    glow: "blue",
    description: "Digital retail solutions"
  },
  { 
    title: "Healthcare", 
    icon: <GiHealthNormal />, 
    color: "from-orange-500/20 to-orange-600/20",
    glow: "orange",
    description: "Medical tech systems"
  },
  { 
    title: "Real Estate", 
    icon: <FaHome />, 
    color: "from-teal-500/20 to-teal-600/20",
    glow: "teal",
    description: "Property management"
  },
  { 
    title: "AI-Software", 
    icon: <GrTechnology />, 
    color: "from-green-500/20 to-green-600/20",
    glow: "green",
    description: "Intelligent solutions"
  },
  { 
    title: "Manufacturing", 
    icon: <MdPrecisionManufacturing />, 
    color: "from-blue-400/20 to-blue-500/20",
    glow: "blue",
    description: "Industry automation"
  },
  { 
    title: "Education", 
    icon: <FaSchool />, 
    color: "from-purple-500/20 to-purple-600/20",
    glow: "purple",
    description: "Learning platforms"
  }
];

const ExperienceAcross = () => {
  return (
    <div className="relative py-24 px-4 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#1b1e2e] to-[#0c1c2c]"
        animate={{
          background: [
            "linear-gradient(to bottom right, #1b1e2e, #0c1c2c)",
            "linear-gradient(to bottom right, #0c1c2c, #1b1e2e)",
            "linear-gradient(to bottom right, #1b1e2e, #0c1c2c)",
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Animated particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
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

      <div className="relative max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4 
            className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Work for Any Industry
          </motion.h4>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A1E3F9] to-blue-400">
              Experience Across Different Industries
            </span>
          </h2>

          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mb-16"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`w-40 h-40 flex flex-col items-center justify-center rounded-full bg-gradient-to-br ${industry.color} backdrop-blur-xl border border-white/10 transition-all duration-300 group-hover:border-white/30`}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 rounded-full bg-${industry.glow}-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <motion.div 
                  className="text-4xl text-white mb-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {industry.icon}
                </motion.div>
                
                <p className="text-lg font-semibold text-white mb-1">
                  {industry.title}
                </p>
                
                <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.description}
                </p>
              </motion.div>
              
              {/* Orbital animation */}
              <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceAcross;