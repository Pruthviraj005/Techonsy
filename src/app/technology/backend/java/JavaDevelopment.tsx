'use client';
import { motion } from "framer-motion";

export default function JavaDevelopment() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
      {/* Header Section */}
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center text-white"
        >
          Custom <span className="text-blue-500 drop-shadow-lg">Java Development</span> Services for Your Business
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-center text-gray-400 mt-4 max-w-3xl mx-auto"
        >
          Techonsy is one of the top-rated Java development companies in the world, with experienced Java programmers delivering high-performance web, mobile, and desktop applications.
        </motion.p>
        
        {/* Content Section */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-white drop-shadow-md">Techonsy – Your Java Development Outsourcing Company</h3>
            <p className="mt-4 text-gray-300">
              Java is a powerful and demanding programming language used by millions of developers to create enterprise applications. With expertise in Java technologies like Core Java, Spring Boot, Hibernate, and Microservices, we help businesses build robust solutions.
            </p>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img 
              src="/images/technology/develop.png" 
              alt="Java Development"
              className="rounded-lg shadow-lg w-full md:max-w-md hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* New Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 bg-gray-800 p-10 rounded-xl text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold text-white drop-shadow-md">
            Outsource Java Development Services to Techonsy
          </h2>
          <p className="mt-4 text-gray-300">
            We offer comprehensive outsourcing Java development services for your business needs using the latest Java frameworks.
            Consult Techonsy, the most trusted Java development outsourcing company, now!
          </p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-blue-500/50 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Get a Free Consultation →
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
