'use client'

import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt, FaCogs, FaMobileAlt, FaRocket, FaDatabase, FaReact } from "react-icons/fa";

const benefits = [
  { title: "Enhanced Scalability", description: "Build adaptable applications that scale seamlessly with your business growth.", icon: <FaChartLine size={40} className="text-blue-400" /> },
  { title: "Top-Level Security", description: "Ensure the highest level of protection for your valuable data with robust security features.", icon: <FaShieldAlt size={40} className="text-green-400" /> },
  { title: "Effortless Integration", description: "Streamline development with seamless collaboration between front-end and back-end using MERN.", icon: <FaCogs size={40} className="text-yellow-400" /> },
  { title: "Responsive Design", description: "Provide an optimized user experience across all devices with mobile-friendly solutions.", icon: <FaMobileAlt size={40} className="text-red-400" /> },
  { title: "Fast Prototyping", description: "Accelerate development and time-to-market with quick iterations using MERN's flexible architecture.", icon: <FaRocket size={40} className="text-purple-400" /> },
  { title: "Resilient Applications", description: "Develop stable, scalable solutions to meet the demands of expanding user bases.", icon: <FaDatabase size={40} className="text-teal-400" /> },
  { title: "Immersive User Interfaces", description: "Craft dynamic and interactive interfaces with React.js, enhancing user engagement.", icon: <FaReact size={40} className="text-cyan-400" /> }
];

const MERNStackBenefits = () => {
  return (
    <section className="relative py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
      {/* SVG Background */}
        {/* <div className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="url(#gradient)" fillOpacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: "#000", stopOpacity: 0.7 }} />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative max-w-[1000px] mx-auto text-center mb-12 px-6"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
            Top Benefits of MERN Stack Development
          </h2>
          <p className="text-lg text-gray-300 mt-2">
            Discover why <span className="text-blue-400 font-semibold">MERN</span> is the go-to choice for modern web applications.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative max-w-[1000px] mx-auto px-6">
          {/* Vertical Line */}
          <div className="border-l-4 border-blue-500 absolute left-1/2 transform -translate-x-1/2 h-full opacity-50"></div>

          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center gap-6 max-w-[450px] p-6 bg-gray-800 rounded-lg shadow-lg relative my-6 
                          ${index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"}`}
            >
              <div className="p-3 bg-gray-700 rounded-full shadow-md shadow-blue-400/30">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MERNStackBenefits;
