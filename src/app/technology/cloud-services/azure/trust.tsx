"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Trust = () => {
  return (
    <section className="relative min-h-screen flex justify-center items-center py-16 px-6">
      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 w-full opacity-50 bg-gradient-to-br from-[#182a44] to-[#084e7a] blur-[30px] animate-rotate rounded-full z-0"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src="/images/technology/cloud-services/azure/trust.svg"
            alt="Managed MySQL"
            width={400} 
            height={160} 
            className="object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Maximize Your Business with Azure Development
          </h2>
          <div className="w-12 h-1 bg-blue-600 mb-4"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Harness the power of Microsoft Azure to reduce costs, boost productivity, and streamline application deployment with a flexible pay-per-use model. Ensure data security with advanced disaster recovery and automated security patches. <br />
            Azure enables seamless cloud migration without the need for code changes, supporting efficient business continuity. Develop and deploy applications across a global network of Microsoft-managed data centers for unmatched scalability and security. <br />
            Leverage Azure’s flexibility to create robust solutions for various devices using a wide range of tools and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Trust;