'use client'

import { motion } from "framer-motion";
import { FaLaptopCode, FaLayerGroup, FaMobileAlt, FaExchangeAlt, FaSyncAlt } from "react-icons/fa";

const services = [
  {
    title: "PWA Development",
    description: "Build dynamic, high-performance, and scalable web applications using ReactJS tailored to your business objectives.",
    icon: <FaLaptopCode size={50} className="text-blue-400 drop-shadow-lg" />
  },
  {
    title: "Full Stack Development",
    description: "Develop end-to-end solutions with robust front-end and back-end architecture.",
    icon: <FaLayerGroup size={50} className="text-green-400 drop-shadow-lg" />
  },
  {
    title: "Hybrid App Development",
    description: "Develop cross-platform mobile applications with React Native, ensuring seamless performance across iOS and Android.",
    icon: <FaMobileAlt size={50} className="text-yellow-400 drop-shadow-lg" />
  },
  {
    title: "Strategic React Consulting",
    description: "Effortlessly transition your legacy applications to ReactJS with minimal downtime and improved performance.",
    icon: <FaExchangeAlt size={50} className="text-red-400 drop-shadow-lg" />
  },
  {
    title: "React Migration",
    description: "Migrate your existing applications to React while ensuring data integrity and minimal disruption.",
    icon: <FaSyncAlt size={50} className="text-purple-400 drop-shadow-lg" />
  }
];

const ReactJSDevelopmentServices = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-[1000px] mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="max-w-[1000px] mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold">ReactJS Development Services</h2>
          <p className="text-lg text-gray-300 mt-2">Innovative, scalable, and high-performance solutions for your business.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50, scale: 0.9 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all"
            >
              <motion.div 
                initial={{ opacity: 1, scale: 1 }} 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
    </section>
  );
};

export default ReactJSDevelopmentServices;
