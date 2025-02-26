"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center p-6 md:p-10 overflow-hidden 
      bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white border-b-[0.5px] border-cyan-700"
    >
      {/* Animated Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[300px] h-[300px] bg-blue-500 opacity-30 blur-3xl rounded-full"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[250px] h-[250px] bg-purple-500 opacity-20 blur-3xl rounded-full right-10 bottom-10"
          animate={{
            x: [0, -80, 80, 0],
            y: [0, 60, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-6 px-4 mt-16">
        {/* Left Content */}
        <motion.div
          className="flex-1 text-center md:text-left gap-9"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent lg:w-[110%] 
            bg-gradient-to-r from-blue-400 to-purple-400 animate-text-glow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Unlock the Potential of Next.js Development
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Leverage expert Next.js development for powerful server-side applications and seamless front-end integration. Our team specializes in crafting dynamic React.js-based web apps, Restful APIs, and custom solutions that elevate your projects to new heights. Partner with a leading Next.js development provider to achieve optimal performance and scalability.
          </motion.p>

          <motion.button
            whileHover={{
                scale: 1.05, // Slightly enlarges on hover
                backgroundColor: "#0f172a", // Darker shade on hover
                boxShadow: "0px 4px 20px rgba(0, 255, 255, 0.4)", // Neon glow effect
              }}
                  whileTap={{ scale: 0.95 }} // Click effect
                    className="relative px-8 py-3 text-lg font-bold border-cyan-500 border-[0.5px] text-gray-200 uppercase rounded-full bg-gradient-to-r from-gray-900 to-black shadow-lg transition-all duration-300 ease-in-out overflow-hidden"
                  >
                    <span className="relative z-10 text-cyan-400">Get Started</span>

                      {/* Background Effect */}
                      <span className="absolute inset-0 bg-gray-800 opacity-20 transition duration-300 "></span>
                      {/* Glowing Border Animation */}
                      <span className="absolute inset-0 rounded-full border-2 border-transparent transition-all duration-500 "></span>
            </motion.button>
        </motion.div>

        {/* Right Side Logo */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          >
            <Image
              src="/images/technology/frontend/next/nextjs.svg"
              width={250}
              height={250}
              alt="Next.js Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-72 xl:w-64 2xl:w-80 h-auto drop-shadow-2xl filter brightness-125 invert"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}