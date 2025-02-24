'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const Development = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center py-16 px-6 ">
      <div className="max-w-[1000px] w-full mx-auto relative z-10">
        {/* Content */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Image with Smooth Floating Effect */}
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
              className="object-contain drop-shadow-lg"
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
                  <span className="bg-gradient-to-r from-[#3b82f6] to-[#a855f7] text-transparent bg-clip-text text-4xl">
                    Scalable & High-Performance
                  </span>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    className="flex justify-center"
                  >
                    <span className="text-gray-200 text-2xl">NestJS Development Services</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </h2>

            <div className="w-12 h-1 bg-purple-500 mb-4"></div>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">NestJS</span> is a powerful Node.js framework designed for scalability and high performance. With its modular architecture and TypeScript support, it simplifies backend development, ensuring maintainable and efficient code. Whether for web applications, microservices, or enterprise solutions, NestJS provides faster development cycles and enhanced security.  
              <br /><br />
              🚀 <span className="text-purple-400 font-semibold">Boost your business</span> with robust, future-proof solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Development;
