import React from "react";
import ButtonComp from "@/components/Common/ButtonComp";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center max-h-screen justify-between px-6 md:px-16 py-12 md:py-24 bg-gray-900 text-white overflow-hidden border-b-[0.5px] border-b-cyan-900">
      {/* Left Content */}
      <div className="max-w-[1000px] flex flex-col md:flex-row items-center justify-between mx-auto mt-9">
        <div className="max-w-2xl text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Revolutionizing Development with React JS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mb-6"
          >
            Build fast, scalable applications with a seamless user interface, combining stunning visuals and powerful functionality for optimal performance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex justify-center md:justify-start"
          >
            <ButtonComp/>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-12 md:mt-0 relative flex justify-center"
    >
      {/* Linear Gradient Glow Effect */}
      <div
        className="absolute inset-0 w-44 h-64 md:w-80 md:h-80 rounded-full blur-[100px] opacity-50"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.7), rgba(0, 204, 255, 0.5))',
        }}
        aria-hidden="true"
      ></div>

      {/* React Logo */}
      <Image
        src="/images/technology/frontend/react/react.svg"
        alt="React Logo"
        width={300}
        height={300}
        className="relative z-10 w-40 h-40 md:w-72 md:h-72 drop-shadow-lg"
      />
    </motion.div>
      </div>
    </section>
  );
};

export default Hero;