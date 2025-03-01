"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import illustration from "../../../../public/images/services/ecom/ecom.svg";
import ButtonComp from "@/components/Common/ButtonComp";

export default function HeroSection() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-r from-purple-950 to-gray-800 px-6 md:px-10 py-12 pt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full items-center gap-10">
        
        {/* Left Section (Content) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-6 text-center md:text-left flex-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            E-Commerce Solutions for Growth and Engagement
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-[90%] mx-auto md:mx-0">
            We help E-Commerce businesses expand their reach and grow revenue with omnichannel strategies, customer insights, and user-focused solutions. Our services empower B2B and B2C clients to enhance customer satisfaction, increase audience engagement, and boost sales.
          </p>
          <div className="flex justify-center md:justify-start">
            <ButtonComp />
          </div>
        </motion.div>

        {/* Right Section - Illustration (Properly Scaled for Different Screens) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center flex-1"
        >
          <Image
            src={illustration}
            alt="Illustration"
            width={500}
            height={500}
            className="max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] w-full"
          />
        </motion.div>

      </div>
    </div>
  );
}
