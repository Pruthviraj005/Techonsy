'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const steps = [
  { title: 'Planning', description: 'We analyze your business needs and resources to create the right technical framework.' },
  { title: 'Development', description: 'Let our experts leverage the right frontend framework to deliver a perfect app.' },
  { title: 'Testing and QA', description: 'Our experts test every element and scenario to ensure unmatched quality.' },
  { title: 'Launch', description: 'Let’s launch and monitor the product’s performance and improve accordingly.' }
];

const DevelopmentProcess = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-blue-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Development Process
        </motion.h2>
        <motion.p 
          className="mt-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our years of experience with React.js app development have helped us create an effective process
          to meet all your expectations.
        </motion.p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 relative w-full">
        <motion.div 
          className="absolute top-[55%] left-0 right-0 h-1 bg-blue-500 w-10/12 mx-auto hidden md:block"
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
            <motion.div 
              className="bg-blue-600 p-4 rounded-full shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <FaCheckCircle className="text-white text-2xl" />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-blue-400">{step.title}</h3>
            <p className="mt-2 text-gray-300 max-w-xs">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
