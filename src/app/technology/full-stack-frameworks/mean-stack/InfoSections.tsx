"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section id="info-section" className="bg-slate-900 py-16 px-4 sm:px-6 md:px-16 border-y-[0.5px] border-cyan-900">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={isVisible ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8"
        >
            Unlock the Power of MEAN Stack Development
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
                  src="/images/technology/frontend/next/image.png"
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
            Transform your web development with MEAN Stack's robust architecture (MongoDB, Express.js, AngularJS, Node.js). Build interactive portals, scalable APIs, and immersive applications that elevate user engagement. Leverage our expertise to create impactful web solutions that drive performance and scalability for your projects.            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}