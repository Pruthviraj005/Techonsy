'use client'

import { motion } from "framer-motion";
import { FaChartBar, FaCogs, FaMobileAlt, FaClock } from "react-icons/fa";

const benefits = [
  { title: "Scalable Solutions", description: "We specialize in building highly scalable web applications tailored to grow with your business needs.", icon: <FaChartBar className="text-blue-400" /> },
  { title: "Seamless Integration", description: "With MERN's powerful combination of MongoDB, Express.js, React.js, and Node.js, we ensure smooth front-end and back-end integration.", icon: <FaCogs className="text-green-400" /> },
  { title: "Mobile-First Approach", description: "Our designs prioritize mobile responsiveness, ensuring flawless performance across all devices.", icon: <FaMobileAlt className="text-yellow-400" /> },
  { title: "Fast Delivery", description: "Our modular approach enables rapid prototyping, faster development cycles, and quicker time-to-market.", icon: <FaClock className="text-red-400" /> }
];

const MERNStackWhyChooseUs = () => {
  return (
    <section className="relative py-16 px-6 text-white bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="relative max-w-[1000px] mx-auto text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 inline-block text-transparent bg-clip-text">
          Why Choose Us for MERN Stack Development
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mt-2">
          We deliver cutting-edge <span className="text-blue-400 font-semibold">MERN stack</span> solutions designed for growth and efficiency.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-[1000px] mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="relative flex flex-col sm:flex-row items-center sm:items-start p-6 md:p-8 rounded-lg shadow-lg transition-all border border-gray-700 hover:border-blue-400"
            style={{ background: "rgba(30, 30, 30, 0.85)", backdropFilter: "blur(10px)" }}
          >
            <div className="p-4 bg-gray-800 rounded-full shadow-md shadow-blue-400/30 flex justify-center items-center w-14 h-14 sm:w-16 sm:h-16">
              {benefit.icon}
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">{benefit.title}</h3>
              <p className="text-gray-300 mt-2 text-sm sm:text-base">{benefit.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MERNStackWhyChooseUs;