"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useAnimation } from "framer-motion";
import Technologies from "./data";
import RenderTechnologies from "./renderTechnologies";
import Link from "next/link";

const Technology = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  // Create a triple-length array for smoother infinite scroll
  const extendedTechnologies = useMemo(() => [
    ...Technologies,
    ...Technologies,
    ...Technologies
  ], []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Optimized animation with smooth reset
  const startAnimation = async () => {
    while (true) {
      try {
        await controls.start({
          y: [-2, -(extendedTechnologies.length * 33.33) + "%"],
          transition: {
            duration: 190 * 3, // Increased duration for longer scroll
            ease: "linear",
            times: [0, 1]
          },
        });
        // Smooth reset without opacity change
        await controls.set({ y: -2 });
      } catch (error) {
        // Animation was stopped
        break;
      }
    }
  };

  useEffect(() => {
    if (!isPaused) {
      startAnimation();
    } else {
      controls.stop();
    }
  }, [isPaused]);

  const handleFeatureClick = () => {
    setIsPaused(true);
  };

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div 
        className="absolute inset-0 opacity-30 dark:opacity-10"
        initial={{ backgroundPosition: "0% 0%" }}
        animate={{ backgroundPosition: "100% 100%" }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />
      
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="relative"
        >
          <motion.h2 
            className="mb-12 text-center"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 dark:from-blue-400 dark:via-purple-300 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
              Our Technologies
            </span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <motion.div 
              className="w-full lg:w-[45%] space-y-8"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <motion.p 
                className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                We Create New Solutions And Transform Existing Ones With
                Technologies That Beat Industry Best Timelines
              </motion.p>

              <motion.div 
                className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p className="mb-8 text-lg md:text-xl text-white/90">
                  Transform your business with our cutting-edge technology solutions. 
                  Let's build something amazing together.
                </p>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition duration-300 ease-out hover:text-white"
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"></span>
                    <span className="relative">Contact Us</span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-[55%] rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 shadow-xl"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div 
                className="h-[500px] overflow-hidden relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => !isPaused && setIsPaused(false)}
              >
                <motion.div 
                  className="space-y-4 absolute w-full"
                  animate={controls}
                  style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    WebkitFontSmoothing: "antialiased"
                  }}
                >
                  {extendedTechnologies.map((technology, index) => (
                    <motion.div
                      key={`${technology.id}-${index}`}
                      initial={{ opacity: 1 }}
                      className="transform transition-all duration-300 hover:scale-[1.02]"
                      onClick={handleFeatureClick}
                    >
                      <RenderTechnologies feature={technology} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
