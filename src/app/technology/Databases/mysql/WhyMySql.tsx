'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  "Build high-performance, tailored database systems",
  "Optimize performance with expert tuning and enhancement",
  "Implement high availability and scalable clustering solutions",
  "Reliable backup, restore, and recovery services",
  "Automate database operations for efficiency",
  "Conduct thorough audits and enhance database security"
];

const WhyMySql = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="bg-transparent text-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* gradient-to-r from-[#84ffc9] to-[#aab2ff] to-[#eca0ff]  */}
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#91EAE4] to-[#7F7FD5] text-center">
        End-to-End MySQL Solutions for Performance & Security
      </h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto mb-8 mt-4"></div>
      
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col justify-center h-full">
          <ul>
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 text-lg flex items-center"
              >
                <span className="mr-2">✅</span>
                {service}
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center p-3 h-full">
          <Image src="/images/technology/databases/mysql/image-02.png" alt="MySQL" height={500} width={500} className="object-contain" />
        </div>
      </div>
    </section>
  );
}

export default WhyMySql;
