'use client';

import ButtonComp from '@/components/Common/ButtonComp';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AndroidBanner() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center  px-4 sm:px-8 md:px-12 lg:px-20 text-center overflow-hidden bg-gradient-to-br from-[#0a0f1a] via-[#020617] to-[#000] min-h-[40vh] md:min-h-[50vh] lg:min-h-[85vh] ">
      {/* Background Image */}
      <div className="absolute inset-0 flex justify-center items-center opacity-60 md:opacity-80">
        <Image 
          src="/images/android/android.png"
          alt="Android Background"
          width={900}
          height={900}
          className="w-[80%] max-w-[600px] md:max-w-[800px] lg:max-w-[900px] object-contain mt-40 sm:mt-48 md:mt-32 lg:mt-24"
        />
      </div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[95%] md:max-w-[800px] mx-auto">
        <motion.h2 
          className="text-[clamp(2rem,5vw,3.75rem)] font-extrabold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-xl tracking-wide mt-20 lg:mt-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          Elevate Your <br /> Android Experience
        </motion.h2>

        <motion.p 
          className="mt-4 text-[clamp(1rem,2vw,1.25rem)] text-gray-300 font-light leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          We build <span className="text-cyan-400 font-semibold">powerful</span> and <span className="text-green-400 font-semibold">high-performing</span> Android apps, delivering seamless user experiences with cutting-edge technology.
        </motion.p>

        <div className='mt-6 flex justify-center'>
          <ButtonComp />
        </div>
      </div>
    </section>
  );
}