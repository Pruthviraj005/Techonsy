"use client"

import Image from "next/image";
import { motion } from "framer-motion";
const ManagedMySql=()=>{
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
            src="/images/technology/databases/mysql/image-01.svg"
            alt="Managed MySQL"
            width={500}
            height={400}
            className="object-contain"
          />
        </motion.div>
    
        {/* Right Content */}
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fully Managed MySQL Solutions for High Performance<span className="text-blue-400">& Cost Efficiency</span>
          </h2>
          <div className="w-12 h-1 bg-blue-600 mb-4"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
          Unlock innovation and power critical database deployments with our fully managed MySQL services. Enjoy unmatched reliability, flexibility, and high-performance storage with built-in data encryption    and process optimizations. Achieve millisecond latency, high throughput, and seamless data replication across availability zones for guaranteed uptime and durability. Optimize costs with MySQL automation and cold data tiering, reducing cloud storage expenses by up to 70% while ensuring top-tier performance and security.
          </p>
        </div>
      </div>
    </section>
    );
}

export default ManagedMySql;