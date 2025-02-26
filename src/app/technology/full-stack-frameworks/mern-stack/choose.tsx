'use client'

import { motion } from "framer-motion";
import { FaChartBar, FaCogs, FaMobileAlt, FaClock } from "react-icons/fa";

const benefits = [
  { title: "Scalable Solutions", description: "We specialize in building highly scalable web applications tailored to grow with your business needs.", icon: <FaChartBar size={50} className="text-blue-400" /> },
  { title: "Seamless Integration", description: "With MERN's powerful combination of MongoDB, Express.js, React.js, and Node.js, we ensure smooth front-end and back-end integration.", icon: <FaCogs size={50} className="text-green-400" /> },
  { title: "Mobile-First Approach", description: "Our designs prioritize mobile responsiveness, ensuring flawless performance across all devices.", icon: <FaMobileAlt size={50} className="text-yellow-400" /> },
  { title: "Fast Delivery", description: "Our modular approach enables rapid prototyping, faster development cycles, and quicker time-to-market.", icon: <FaClock size={50} className="text-red-400" /> }
];

const Choose = () => {
  return (
    <section className="relative py-16 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* SVG Background */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="url(#gradient)" fillOpacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#000", stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative max-w-[1000px] mx-auto text-center mb-12 px-6"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
          Why Choose Us for MERN Stack Development
        </h2>
        <p className="text-lg text-gray-300 mt-2">
          We deliver cutting-edge <span className="text-blue-400 font-semibold">MERN stack</span> solutions designed for growth and efficiency.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto px-6">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="relative p-8 rounded-lg shadow-lg flex items-center gap-6 transition-all border border-gray-700 hover:border-blue-400"
            style={{ background: "rgba(30, 30, 30, 0.85)", backdropFilter: "blur(10px)" }}
          >
            <div className="p-4 bg-gray-800 rounded-full shadow-md shadow-blue-400/30">{benefit.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-400">{benefit.title}</h3>
              <p className="text-gray-300 mt-2">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Choose;
