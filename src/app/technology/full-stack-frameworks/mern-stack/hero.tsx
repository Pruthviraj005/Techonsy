'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import ButtonComp from "@/components/Common/ButtonComp";



const Hero = () => {
  return (
    <section 
      className="flex justify-center items-center lg:h-screen h-full  bg-cover bg-center bg-no-repeat border-b-[0.5px] border-b-cyan-600"
      style={{ backgroundImage: "url('/images/technology/fullstack-frameworks/mern-stack/bg.svg')" }}
    >
      <div className="absolute bg-black w-[100vw] mx-auto bg-opacity-50 h-full"></div>
      <div className="my-20 lg:my-0 pt-10 lg:pt-0 lg:mt-10 container mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10  ">
        {/* Left Content */}
        <div className="text-white max-w-lg ">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center md:text-left">
            Expert <br />
              <span className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent"
                 style={{ backgroundImage: "url('/images/technology/fullstack-frameworks/mern-stack/header-bg.svg')" }}> MERN</span> Stack <br /> Development Service
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
          Build fast, scalable applications with a seamless user interface, combining stunning visuals and powerful functionality for optimal performance.

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

        {/* Right Image - 2x2 Grid with Swapping Animation */}
        <div className="lg:grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb- lg:mb-0 hidden">
          <motion.div className="flex items-center justify-center " animate={{ x: [0, 50, 0, -50, 0], y: [0, 0, 50, -50, 0] }} transition={{ duration: 4, repeat: Infinity }}>
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
