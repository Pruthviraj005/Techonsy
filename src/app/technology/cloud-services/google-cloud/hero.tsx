'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#1a252f] py-12 px-6 flex justify-center items-center h-[90vh] ">
      <div className="container mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
        
        {/* Left Content */}
        <div className="text-white max-w-lg p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left leading-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#ff311e]">o</span>
            <span className="text-[#ffaa00]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#ff311e]">e</span> App Engine <span className="text-blue-400">Development</span>
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-center md:text-left">
            Empower your enterprise through bespoke Google App Engine development. Seamlessly connect, compute rapidly, store securely, and scale effortlessly with Google App Engine’s cloud-based APIs.
          </p>
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Get Started →
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700 relative w-full max-w-[350px]">
            <Image
              src="/images/technology/cloud-services/google-cloud/google-cloud.svg" // Replace with actual path
              alt="Google Cloud"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
