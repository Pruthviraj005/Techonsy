"use client";
"";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import desktop_image from "../../../../../public/images/technology/Devops_infrastructure/jenkins/image-03.png";

export default function PlugIn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="bg-gray-900/80 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-400 mb-8"
        >
          Build Scalable & High-Performance Apps with Firebase
        </motion.h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-gray-300 transition-all duration-700 text-center md:text-left ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-md sm:text-lg mb-4">
              Enhance software development with industry-leading integrations like 
              <span className="text-blue-400 font-semibold"> Docker</span>, 
              <span className="text-blue-400 font-semibold"> Google Cloud</span>, and 
              <span className="text-blue-400 font-semibold"> Kubernetes</span>.
            </p>
            <p className="text-md sm:text-lg mb-4">
              Leverage enterprise-grade infrastructure and seamless automation to 
              streamline complex development workflows, ensuring efficient and 
              accurate <span className="text-blue-400 font-semibold"> DevOps implementation</span>.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="justify-center gap-4 rounded-4xl hidden sm:block mx-auto"
          >
            <Image
              src={desktop_image}
              alt="Firebase Development"
              width={300}
              height={300}
              className="rounded-lg shadow-lg  transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
