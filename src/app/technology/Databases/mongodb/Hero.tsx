'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black text-white py-24 px-8">
      <motion.div
        className="md:w-1/2 max-w-lg text-center md:text-left px-4 space-y-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="text-blue-500">MongoDB Development</span>
            <span className="block text-2xl md:text-3xl mt-4 font-normal">Data Solutions</span>
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            Expert MongoDB development services for efficient data management and scalable applications.
          </p>
        </div>
        <motion.button
          className="mt-8 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
      <motion.div
        className="md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72">
          <Image
            src="/images/technology/mongodb.png"
            alt="MongoDB Logo"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;