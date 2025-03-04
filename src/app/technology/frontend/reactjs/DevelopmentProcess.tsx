"use client";
'';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  { title: 'Planning', description: 'We analyze your business needs to craft a tailored ReactJS framework for optimal performance.' },
  { title: 'Development', description: 'Our experts harness ReactJS to build scalable, high-performance apps that align with your goals.' },
  { title: 'Testing & QA', description: 'We rigorously test every feature to ensure flawless functionality and superior quality.' },
  { title: 'Launch & Optimization', description: 'After launch, we monitor performance and continuously optimize to ensure peak efficiency.' }
];

const DevelopmentProcess = () => {
  return (
    <div className='relative bg-black text-white py-16 px-6 md:px-12'>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/80 opacity-60" />
      <section className="max-w-6xl mx-auto">
        {/* Background Gradient Effect */}
       
        
        {/* Heading */}
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Streamlined ReactJS Development Process
          </motion.h2>
          <motion.p 
            className="mt-4 text-gray-400 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined ReactJS development process is designed to deliver results that go beyond expectations.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative mt-12 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {/* Horizontal Line for Desktop */}
          <motion.div 
            className="absolute top-[50%] left-0 right-0 h-1 bg-blue-500/20 w-10/12 mx-auto hidden md:block"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {/* Icon Container */}
              <motion.div 
                className="bg-gradient-to-br from-blue-600 to-blue-800 p-5 rounded-full shadow-lg shadow-blue-500/30 
                  hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 }}
              >
                <FaCheckCircle className="text-white text-3xl" />
              </motion.div>

              {/* Step Title */}
              <h3 className="mt-4 text-lg font-semibold text-blue-400">{step.title}</h3>
              
              {/* Step Description */}
              <p className="mt-2 text-gray-300 max-w-xs">
                {step.description}
              </p>

              {/* Connector for Mobile View */}
              {index !== steps.length - 1 && (
                <motion.div 
                  className="w-1 h-16 bg-blue-500/40 mx-auto md:hidden"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DevelopmentProcess;