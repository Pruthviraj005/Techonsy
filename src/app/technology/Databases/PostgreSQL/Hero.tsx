'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ButtonComp from '@/components/Common/ButtonComp';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-900 min-h-[80vh] flex items-center justify-center text-white px-6">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 bg-[url('/images/postgresql/postgresqll.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-gray-900/90"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center md:text-left  mt-24 lg:mt-0 mb-10 lg:mb-0 "
      >
        <div className='max-w-6xl mx-auto flex flex-col gap-6 '>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-lg ">
            Maximize Performance with <span className="text-blue-400">PostgreSQL Expertise</span>
          </h1>
          <div className='lg:py-4'>
            <p className="text-lg sm:text-xl   leading-relaxed text-slate-400">
                Access precise database implementations, optimization, and tuning with PostgreSQL.
              </p>
              <p className="text-lg sm:text-xl   leading-relaxed text-slate-400">
                Ensure optimal performance and reliability with expert PostgreSQL DBAs, delivering seamless operations without compromising security.
              </p>
          </div>
          {/* Call to Action Button */}
          <div className='flex justify-center items-center lg:justify-start'>
            <ButtonComp/>
          </div>
        </div>
        </motion.div>
    </section>
  );
};

export default Hero;
