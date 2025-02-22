"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Development = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center py-16 px-6 bg-gradient-to-r from-[#230B2F] to-[#0B182F]">
      
      {/* SVG Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(255,255,255,0.1)"
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,165.3C840,160,960,160,1080,165.3C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-[1000px] w-full mx-auto relative z-10">
        {/* Content */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Image with Breathing Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, scale: [1, 1.05, 1] }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="flex justify-center"
          >
            <Image
              src="/images/technology/backend/nest/image-01.png"
              alt="Managed MySQL"
              width={400}
              height={300}
              className="object-contain"
            />
          </motion.div>

          {/* Right Content */}
          <div className="max-w-lg">
            {/* Heading with Animation */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: -17 }}
                className="flex justify-center"
              >
                <motion.div className="p-4 rounded-lg relative">
                  <span className="bg-gradient-to-r from-[#da2752] to-[#ff8a00] text-transparent bg-clip-text">
                    Scalable and High-Performance
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    className="flex justify-center"
                  >
                    <span className="text-white">NestJS Development Services</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </h2>

            <div className="w-12 h-1 bg-blue-600 mb-4"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              NestJS is a powerful Node.js framework for building scalable, high-performance backend applications. With its modular architecture and TypeScript support, it simplifies development and ensures maintainable, efficient code. Ideal for web apps, mobile backends, and complex systems, NestJS accelerates development cycles and enhances performance. Trusted by enterprises, our skilled developers deliver tailored solutions that drive business growth and ensure future scalability. Partner with us to bring your ideas to life with NestJS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
