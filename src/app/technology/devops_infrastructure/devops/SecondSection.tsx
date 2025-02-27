"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import image from '../../../../../public/images/technology/Devops_infrastructure/devops/image.png'

export default function InfoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("info-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="info-section" className="bg-slate-900 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={isVisible ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
        >
           Achieve Rapid Delivery and Superior Quality with DevOps Services
        </motion.h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Right - Content */} 
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={isVisible ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 0.8 }}
            className="justify-center gap-4 rounded-4xl hidden sm:block mx-auto"
          >
              <Image
                  src={image}
                  alt="Mobile App 1"
                  width={450}
                  height={300}
                  className="rounded-lg shadow-lg"
              />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isVisible ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8 }}
            className="text-slate-400 transition-all duration-700 text-center md:text-left"
          >
            <p className="text-md sm:text-lg mb-4">
                DevOps stands at the forefront of modern software development and deployment strategies. It bridges the gap between development and operations, fostering a culture of continuous improvement that rapidly translates into tangible business value.            
            </p>
            <p className="text-md sm:text-lg mb-4">
                Leveraging our DevOps solutions positions your company to capture market opportunities with greater agility, deploy software continuously, scale operations seamlessly, and foster a unified startup culture. The result? A more consistent, secure, and stable product environment that not only limits costs but also propels you towards exponential growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}