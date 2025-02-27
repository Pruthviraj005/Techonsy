'use client';
import ButtonComp from "@/components/Common/ButtonComp";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" bg-gray-900 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center  text-white pt-24 lg:pb-24 max-w-6xl mx-auto ">
        <motion.div
          className=" text-center md:text-left px-4 flex flex-col lg:gap-10  lg:mt-10 "
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div className="">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-teal-500">MongoDB Development</span>
                <span className="block text-2xl md:text-3xl mt-4 font-light">
                  Scalable Data Solutions
                </span>
              </h1>
              <p className="text-lg text-gray-400 py-4 leading-relaxed max-w-md">
                Expert MongoDB development services for efficient data management and scalable applications.
              </p>
            </div>
            <div className="flex justify-center items-center lg:justify-start ">
              <ButtonComp/>
            </div>
          </motion.div>

          <motion.div
            className=" flex justify-center mt-12 md:mt-0"
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
    </div>
  );
};

export default Hero;