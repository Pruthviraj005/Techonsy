'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const easeInAnimation = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, ease: "easeIn" },
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#821f36] to-[#141e30] py-16 px-6 flex justify-center items-center min-h-screen">
      <div className="mt-10 container mx-auto max-w-[1000px] w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <motion.div className="text-white max-w-lg p-4" {...easeInAnimation}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center md:text-left">
            <motion.span className='text-[#da2752] text-6xl sm:text-7xl inline-block' style={{ WebkitTextStroke: '1px white' }} {...easeInAnimation}>
              NestJS
            </motion.span> Development Services
          </h1>
          <p className="text-lg leading-relaxed mb-6 text-center md:text-left">
            Leverage the power of NestJS, a TypeScript-based framework, to build scalable, high-performance web applications. Our expert developers create robust, future-proof solutions tailored to your business needs, ensuring seamless growth and optimal performance. Whether for enterprise applications or microservices, we deliver exceptional, efficient results.
          </p>
          <div className="flex justify-center md:justify-start">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-[#da2752] text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-md hover:bg-transparent hover:border transition-all duration-300"
            >
              Get Started →
            </motion.a>
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
              alt="Nest js"
              width={400}
              height={300}
              className="object-contain w-full h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
