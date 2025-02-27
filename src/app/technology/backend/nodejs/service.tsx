'use client';

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import svgimg from "./service.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const Service = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full mx-auto px-6 md:px-10 gap-10 overflow-hidden p-10">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Custom <span className="text-[#339933]">Node.js</span> Development Services
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Build high-performance, scalable web and mobile applications with expert Node.js development. We specialize in creating robust backend solutions, seamless API integrations, and real-time applications using event-driven, asynchronous architectures.
        </p>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed mt-3">
          Whether you need to migrate to Node.js or develop cutting-edge solutions for IoT, stock trading, or enterprise platforms, our expertise ensures efficiency and innovation.
        </p>
      </motion.div>

      {/* Right Animated Lottie Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        className="flex-1 flex justify-center"
      >
        <Lottie
          animationData={svgimg}
          play
          loop
          className="w-[90%] max-w-[400px] h-auto object-contain"
        />
      </motion.div>
    </section>
  );
};

export default Service;
