"use client"; // Required for Next.js

import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaTools, FaBug, FaProjectDiagram } from "react-icons/fa";

const advantages = [
  {
    title: "Automated Releases",
    description: "Streamline software development with automated builds and deployments.",
    icon: <FaRocket />,
    color: "text-blue-400",
  },
  {
    title: "Highly Customizable",
    description: "Easily adapt Jenkins to your unique automation needs.",
    icon: <FaTools />,
    color: "text-green-400",
  },
  {
    title: "Rapid Issue Resolution",
    description: "Quickly detect and fix build failures with monitoring tools.",
    icon: <FaBug />,
    color: "text-yellow-400",
  },
  {
    title: "Adaptable Workflows",
    description: "Customize job workflows to match your project's requirements.",
    icon: <FaProjectDiagram />,
    color: "text-purple-400",
  },
];

// Duplicate items for seamless infinite scrolling
const carouselItems = [...advantages, ...advantages];

const JenkinsAdvantages = () => {
  return (
    <section className="relative bg-gray-900 text-white py-14 overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-200">
          Key Advantages of Jenkins
        </h2>
        <p className="text-gray-400 mt-2 max-w-xl mx-auto text-sm md:text-base">
          Accelerate development with Jenkins automation and flexibility.
        </p>
      </div>

      {/* Scrollable & Draggable Carousel */}
      <div className="w-full overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div
          className="flex space-x-6"
          drag="x"
          dragConstraints={{ left: -500, right: 0 }} // Allows drag within limits
          initial={{ x: 0 }}
          animate={{ x: "-50%" }} // Moves halfway for infinite effect
          transition={{
            repeat: Infinity,
            duration: 10, // Adjust speed
            ease: "linear",
          }}
        >
          {carouselItems.map((adv, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] h-[200px] md:h-[230px] bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 flex flex-col items-center justify-center"
            >
              <span className={`text-4xl md:text-5xl ${adv.color}`}>
                {adv.icon}
              </span>
              <h3 className="text-lg md:text-xl font-semibold mt-3">
                {adv.title}
              </h3>
              <p className="text-gray-400 mt-2 text-center text-xs md:text-sm">
                {adv.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JenkinsAdvantages;
