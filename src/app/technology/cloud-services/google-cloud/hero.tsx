'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonComp from "@/components/Common/ButtonComp";

const HeroSection = () => {
  return (
    <section className="bg-[#050d1c] py-12 px-6 flex justify-center items-center min-h-screen border-b-[0.5px] border-b-cyan-800">
      <div className="container mx-auto max-w-[1000px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-6">
        
        {/* Left Content */}
        <div className="text-white p-4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#ff311e]">o</span>
            <span className="text-[#ffaa00]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#ff311e]">e</span> App Engine <span className="text-blue-400">Development</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Empower your enterprise through bespoke Google App Engine development. Seamlessly connect, compute rapidly, store securely, and scale effortlessly with Google App Engine’s cloud-based APIs.
          </p>
          <div className="flex justify-center lg:justify-start">
            <ButtonComp />
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl shadow-gray-700 relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px]">
            <Image
              src="/images/technology/cloud-services/google-cloud/google-cloud.svg"
              alt="Google Cloud"
              width={250}
              height={250}
              className="object-contain mx-auto "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
