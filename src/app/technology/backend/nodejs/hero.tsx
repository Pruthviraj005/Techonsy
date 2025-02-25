'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import bgData from "./bg.json"; // Import the JSON file

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6">
      {/* Lottie Animation Background */}
      <Lottie
        animationData={bgData}
        play
        loop
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-gray-900/60" />

      {/* Content Wrapper */}
      <div className="relative container mx-auto max-w-[1000px] grid grid-cols-2 gap-6 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center max-w-lg p-4 h-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Powering Innovation with Scalable <span className="text-[#339933]">Node.js</span> Solutions
          </h1>
          <p className="text-sm sm:text-base leading-relaxed mb-4">
            We deliver high-performance, scalable Node.js solutions tailored to your business needs. Our experts analyze your processes, identify challenges, and craft seamless, real-time applications that enhance efficiency and drive growth.
          </p>
          <div>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-blue-600 text-white font-medium text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Get Started →
            </motion.a>
          </div>
        </div>

        {/* Right Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="flex justify-end items-center h-full"
        >
          <motion.div
            animate={{
              y: [0, -10, 0], // Floating effect
              rotate: [0, 2, -2, 0], // Subtle rotation
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="p-4 relative flex items-center"
          >
            <Image
              src="/images/technology/backend/nodejs/node.svg"
              alt="Node.js Logo"
              width={250}
              height={250}
              className="object-contain w-32 sm:w-48 md:w-64"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
