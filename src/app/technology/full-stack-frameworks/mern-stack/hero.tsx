'use client'

import Image from "next/image";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    <section 
      className="py-16 px-6 flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/technology/fullstack-frameworks/mern-stack/bg.svg')" }}
    >
      <div className="mt-10 container mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-white max-w-lg p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center md:text-left">
            Expert <br />
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent"
                 style={{ backgroundImage: "url('/images/technology/fullstack-frameworks/mern-stack/header-bg.svg')" }}> MERN</span> Stack <br /> Development Service
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
          Build fast, scalable applications with a seamless user interface, combining stunning visuals and powerful functionality for optimal performance.

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

        {/* Right Image - 2x2 Grid with Swapping Animation */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <motion.div className="flex items-center justify-center p-2" animate={{ x: [0, 50, 0, -50, 0], y: [0, 0, 50, -50, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Image
              src="/images/technology/fullstack-frameworks/mern-stack/mongo.svg"
              alt="MongoDB Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
          <motion.div className="flex items-center justify-center p-2" animate={{ x: [0, -50, 0, 50, 0], y: [0, 0, -50, 50, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Image
              src="/images/technology/fullstack-frameworks/mern-stack/express.svg"
              alt="Express.js Logo"
              width={80}
              height={80}
              className="object-contain invert"
            />
          </motion.div>
          <motion.div className="flex items-center justify-center p-2" animate={{ x: [0, 50, 0, -50, 0], y: [0, 0, -50, 50, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Image
              src="/images/technology/fullstack-frameworks/mern-stack/react.svg"
              alt="React Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
          <motion.div className="flex items-center justify-center p-2" animate={{ x: [0, -50, 0, 50, 0], y: [0, 0, 50, -50, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Image
              src="/images/technology/fullstack-frameworks/mern-stack/node.svg"
              alt="Node.js Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
