'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-[#1a252f] py-12 px-6 flex justify-center items-center min-h-screen">
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        
        {/* Left Content */}
        <div className="text-white max-w-lg mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 mt-20">
            Accelerate App Development with Supabase
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Build fast, efficient, and scalable apps with Supabase, streamlining backend development. 
            Leverage Supabase’s powerful tools for seamless integration and high-performance backend systems.
          </p>
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Get Started →
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center w-full"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700 w-full max-w-[320px] sm:max-w-[350px] md:max-w-[400px]">
            <Image
              src="/images/technology/databases/supabase/supabase.svg" // Replace with actual path
              alt="Supabase"
              width={300}
              height={300}
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
