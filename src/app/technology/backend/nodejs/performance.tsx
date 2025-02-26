"use client";


import { motion } from "framer-motion";
import { FaRocket, FaClock, FaBolt, FaShieldAlt, FaSyncAlt } from "react-icons/fa";

export default function Performance() {
  const features = [
    { icon: <FaRocket size={50} />, title: "Node Package Manager (NPM)", desc: "Accelerate development with a vast repository of reusable modules.", color: "text-blue-400" },
    { icon: <FaClock size={50} />, title: "Asynchronous Model", desc: "Achieve high efficiency with non-blocking operations.", color: "text-yellow-400" },
    { icon: <FaBolt size={50} />, title: "Exceptional Speed", desc: "Powered by Google’s V8 engine, delivering lightning-fast execution.", color: "text-red-400" },
    { icon: <FaShieldAlt size={50} />, title: "Real-Time Authorization", desc: "Secure and instant authentication mechanisms for real-time apps.", color: "text-green-400" },
    { icon: <FaSyncAlt size={50} />, title: "Event-Driven Architecture", desc: "Optimized for scalability, processing multiple tasks concurrently.", color: "text-purple-400" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-10 text-white bg-gray-900">
      <motion.div 
        className="max-w-3xl text-center space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl bg-clip-text text-transparent font-bold bg-gradient-to-r from-[#00bcd4] to-[#b388eb]">
          Unleash Unleash the Power of High-Performance Node.js Development
           
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg w-60"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className={feature.color} whileHover={{ scale: 1.2 }}>
                {feature.icon}
              </motion.div>
              <h2 className={`text-xl font-semibold mt-4 ${feature.color}`}>{feature.title}</h2>
              <p className="text-gray-400 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
