import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Common/ButtonComp";

const ReactServices = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white  border-b-[0.5px] border-b-cyan-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 ">
            Unlock the Power of <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">React </span> Application Development
          </h2>
          <motion.div 
            initial={{ width: 0 }} 
            animate={{ width: "6rem" }} 
            transition={{ duration: 0.8, ease: "easeInOut" }} 
            className="h-1 bg-blue-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } }
          }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative transform transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-900 to-cyan-900 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <img 
                src="/images/technology/reactjs.png"
                alt="React Development"
                className="relative rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <p className="text-blue-300 mb-4 font-medium">
                Unlock the Power of React Application Development
              </p>
              <p className="text-gray-300">
              Looking for top-notch ReactJS development? ReactJS is a robust, open-source JavaScript library for building fast, dynamic, and reusable UI components. With its virtual DOM, React enhances app performance, making it ideal for high-speed, scalable applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 border border-white/20 p-6 rounded-xl backdrop-blur-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <p className="text-gray-300">
                Our expert developers stay ahead of trends, using the latest tools and techniques to deliver custom React applications that meet your business goals. We ensure efficient, on-time delivery while crafting seamless, high-performance digital experiences. Partner with us to bring your vision to life with ReactJS.
              </p>
            </motion.div>

            <motion.div
              whileTap={{ scale: 0.95 }}            >
              <Button/>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReactServices;