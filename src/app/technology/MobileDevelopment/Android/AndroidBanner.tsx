'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AndroidBanner() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 text-center overflow-hidden bg-gradient-to-br from-[#0a0f1a] via-[#020617] to-[#000] min-h-[50vh] sm:min-h-[60vh] md:min-h-[75vh] lg:min-h-[85vh]">
      
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-70 md:opacity-80">
        <Image 
          src="/images/android/android.png"
          alt="Android Background"
          width={400}
          height={400}
          className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[700px] object-contain mt-40 sm:mt-44 md:mt-48 lg:mt-40"
        />
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-lg sm:max-w-xl md:max-w-2xl px-4">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-xl tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Elevate Your <br /> Android Experience
        </motion.h2>

        <motion.p 
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We build <span className="text-cyan-400 font-semibold">powerful</span> and <span className="text-green-400 font-semibold">high-performing</span> Android apps, delivering seamless user experiences with cutting-edge technology.
        </motion.p>

        <motion.button 
          className="mt-5 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-cyan-400 transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Connect with an Expert
        </motion.button>
      </div>
    </section>
  );
}
