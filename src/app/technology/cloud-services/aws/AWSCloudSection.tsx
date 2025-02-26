'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface CloudServiceImageProps {
  imagePath: string;
  delay: number;
  className?: string;
}

const CloudServiceImage: React.FC<CloudServiceImageProps> = ({ imagePath, delay, className }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.8 }}
    className={`absolute ${className}`}
  >
    <motion.img 
      src={imagePath} 
      alt="AWS Service"
      className="w-16 h-16 object-contain"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.8 }}
    />
  </motion.div>
);

const AWSCloudSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#111f34] via-black to- py-32 px-6 relative overflow-hidden min-h-screen">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'linear-gradient(45deg, transparent 0%,#111f34 50%, transparent 100%)',
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-[1000px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Drive Business Transformation with {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Customized AWS Solutions
            </span>
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 mt-10">
          {/* AWS Cloud illustration */}
          <motion.div 
            className="relative w-full lg:w-1/2 h-[400px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="relative w-96 h-96"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img 
                src="/images/technology/cloud-services/aws/cloud.png" 
                alt="AWS Cloud Services"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Orbiting service icons */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-blue-500/10 rounded-full p-2"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 60}deg) translateX(160px) rotate(-${i * 60}deg)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: -i * 3,
                  }}
                >
                  <div className="w-full h-full bg-blue-500/20 rounded-full backdrop-blur-sm" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Content section */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-blue-100 text-lg leading-relaxed">
              Leverage AWS development to optimize business processes and drive impactful cloud transformations. 
              Bridge gaps in on-premise operations and automate enterprise workflows with scalable, flexible AWS solutions.
              </p>

              <p className="text-blue-100 text-lg leading-relaxed">
              Our expertise in AWS enables rapid creation of robust cloud infrastructures, streamlining implementation
               and improving business agility and responsiveness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="pt-6"
            >
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/50 hover:from-blue-500 hover:to-blue-400">
                Get Started with AWS Development
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AWSCloudSection;