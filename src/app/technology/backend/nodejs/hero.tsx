'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import bgData from "./bg.json"; // Import the JSON file
import ButtonComp from "@/components/Common/ButtonComp";


const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const Hero = () => {
  return (
    <section className="relative flex justify-center items-center min-h-screen bg-gray-900 text-white py-16 px-6">
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
      <div className="relative mt-10 container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="max-w-lg p-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Powering Innovation with Scalable <span className="text-[#339933]">Node.js</span> Solutions
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-center md:text-left">
            We deliver high-performance, scalable Node.js solutions tailored to your business needs. Our experts analyze your processes, identify challenges, and craft seamless, real-time applications that enhance efficiency and drive growth.
          </p>
          <div className="flex justify-center md:justify-start">
            <ButtonComp/>
          </div>
        </div>

        {/* Right Animated Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="flex justify-center"
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
            className="p-4 relative"
          >
            <Image
              src="/images/technology/backend/nodejs/node.svg"
              alt="Node.js Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
