"use client";
''

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonComp from "@/components/Common/ButtonComp";

const Hero = () => {
  return (
    <section className="bg-gray-900 py-16 px-6 flex justify-center items-center min-h-screen border-b-[0.5px] border-cyan-900">
      <div className="mt-10 container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-white max-w-lg p-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-4 text-center md:text-left">
            <span className="text-blue-400">Power Your Business with Scalable &</span> Efficient MySQL Solutions
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-center md:text-left text-slate-300">
            Maximize efficiency and streamline database operations with expert MySQL services, from consulting to implementation. Automate tasks, accelerate deployment, and build modern cloud-native database applications with fast, reliable, and scalable solutions.
          </p>
          <div className="flex justify-center md:justify-start">
            {/* <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-blue-600 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              Get Started →
            </motion.a> */}
            <ButtonComp/>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-gray-800 p-4 rounded-lg shadow-xl shadow-gray-700 relative">
            <Image
              src="/images/technology/databases/mysql/mysql-logo.svg"
              alt="MySQL Logo"
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
