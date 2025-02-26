'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonComp from "@/components/Common/ButtonComp";

const easeInAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeIn" },
};

const Hero = () => {
  return (
    <section className="relative py-16 px-6 flex justify-center items-center min-h-screen overflow-hidden bg-gradient-to-br from-[#121921cb] via-[#161f30] to-[#0e151d]">
      {/* SVG Background
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="url(#heroGradient)" fillOpacity="1" d="M0,128L1440,320L1440,320L0,320Z"></path>
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#1e3a8a", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "#000", stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      <div className="relative container mx-auto max-w-[1000px] w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div className="text-white max-w-lg p-4" {...easeInAnimation}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center md:text-left">
            <motion.span className="text-[#3b82f6] text-6xl sm:text-7xl inline-block" 
              style={{ WebkitTextStroke: '1px white', textShadow: '0 0 5px #3b82f6' }} 
              {...easeInAnimation}
            >
              NestJS
            </motion.span> 
            Development Services
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center md:text-left">
            Leverage the power of <span className="text-blue-400 font-semibold">NestJS</span>, a TypeScript-based framework, to build scalable, high-performance web applications. Our expert developers create robust, future-proof solutions tailored to your business needs, ensuring seamless growth and optimal performance.
          </p>
          <div className="flex justify-center md:justify-start">
            {/* <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-[#3b82f6] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-transparent hover:border-white border-2 transition-all duration-300"
            >
              Get Started →
            </motion.a> */}
            <ButtonComp/>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex justify-center w-full"
        >
          <motion.div className="p-4 rounded-lg relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/images/technology/backend/nest/nest_logo.svg"
              alt="NestJS"
              width={400}
              height={300}
              className="object-contain w-full h-auto drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
