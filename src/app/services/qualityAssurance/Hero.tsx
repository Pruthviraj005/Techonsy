"use client"; // Required for Next.js (App Router)

import { motion } from "framer-motion";
import ButtonComp from "@/components/Common/ButtonComp";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-white pt-28 pb-5 lg:pb-0 lg:pt-0 lg:min-h-screen flex items-center justify-center bg-gradient-to-br from-[#060912] to-[#012b4b6f] px-4 border-b-[0.5px] border-b-cyan-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-12 max-w-6xl">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight 
                            bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-500 
                            text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
            Quality Assurance & Software Testing Services
            </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-300 lg:py-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Quality assurance testing is a structured, process-driven approach that guarantees the delivery of superior,
            high-performance services. We adhere to proven procedures, standards, and methodologies tailored to each project 
            to ensure optimal results and client satisfaction.
          </motion.p>

          <motion.div
            className="mt-6 sm:mt-10 flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ButtonComp />
          </motion.div>
        </div>

        {/* Right Section - Illustration */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/services/quality_assurance/qualityAssurance.svg"
            width={400}
            height={400}
            alt="quality assurance image svg"
            className="w-[50%] sm:w-[60%] md:w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm"
          />
        </motion.div>
      </div>
    </div>
  );
}