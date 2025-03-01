"use client";
'';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDatabase, FaServer, FaCode, FaCogs, FaRocket } from 'react-icons/fa';

const steps = [
  {
    icon: <FaCode className="text-4xl text-blue-400" />, 
    title: "Development",
    description: "Develop applications using Angular for the front-end and Node.js with Express for the back-end."
  },
  {
    icon: <FaDatabase className="text-4xl text-green-400" />, 
    title: "Database Integration",
    description: "Integrate MongoDB for scalable and flexible data storage, ensuring seamless interaction with your app."
  },
  {
    icon: <FaServer className="text-4xl text-purple-400" />, 
    title: "API Development",
    description: "Design RESTful APIs using Express.js to enable smooth communication between the front-end and back-end."
  },
  {
    icon: <FaCogs className="text-4xl text-red-400" />, 
    title: "Testing & Debugging",
    description: "Ensure code reliability with automated testing, debugging, and performance optimizations."
  },
  {
    icon: <FaRocket className="text-4xl text-yellow-400" />, 
    title: "Deployment & Scaling",
    description: "Deploy the application using cloud services like AWS or Firebase, enabling scalability and high availability."
  }
];

export default function MeanStackProcess() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef} 
      className="bg-gradient-to-r from-[#172946] to-[#000d25] py-16 px-4 sm:px-6 md:px-16 text-white w-full border-y-[0.5px] border-y-cyan-900 relative"
    >
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          MEAN Stack Development Process
        </motion.h2>

        <div className="relative ml-6 mt-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative pl-8 pb-10 ${index !== steps.length - 1 ? "border-l-4 border-blue-800" : ""}`}
            >
              <div className="border-b-slate-400 border-b-[3px] border-r-[3px] border-r-slate-400 p-4 rounded-2xl shadow-white ">
                <div className="absolute -left-8 top-0 w-16 h-16 flex items-center justify-center border-[1px] border-slate-500 bg-blue-950 text-white rounded-full shadow-lg shadow-slate-500 ">
                  <div className="z-1">{step.icon}</div>
                </div>
                <div className="my-2 mt-2">
                  <h3 className="text-xl font-semibold ml-4">{step.title}</h3>
                  <p className="text-gray-300 mt-2 ml-8">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}