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
            Gain Fully Managed MySQL Database Services for your Business
          </h2>
          <div className="w-12 h-1 bg-blue-600 mb-4"></div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Unlock innovation and support critical database deployments with our comprehensive MySQL services. Benefit from unmatched reliability, flexibility, and high-performance storage, along with data encryption and process optimizations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            Achieve millisecond latency and high throughput, tailored to your performance requirements while optimizing cost. Replicate data across availability zones and enjoy guaranteed uptime ensuring data durability and avoiding downtime and data loss. Seamlessly reduce costs with MySQL automation and cold data tiering, achieving up to 70% savings in cloud storage expenses.
          </p>
        </div>
      </div>
    </section>
    );
}

export default ManagedMySql;