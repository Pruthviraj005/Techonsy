"use client";
'';

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonComp from "@/components/Common/ButtonComp";

const Hero = () => {
  return (
    <section className="bg-[#0d1b28]  px-6 flex justify-center items-center py-20 lg:py-0 lg:min-h-screen border-b-[0.5px] border-b-cyan-700">
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
            <ButtonComp/>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center w-full"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700 w-2/3 lg:flex md:flex hidden">
            <Image
              src="/images/technology/databases/supabase/supabase.svg" // Replace with actual path
              alt="Supabase"
              width={250}
              height={250}
              className="w-full h-auto object-contain "
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
