"use client";
"";

import React from "react";
import { motion } from "framer-motion";
import { Code, Settings, Terminal } from "lucide-react"; // Import development-related icons

const steps = [
  "Discovery and Planning",
  "Strategy and Architecture Design",
  "UI/UX Design",
  "Development and Integration",
  "Testing and Quality Assurance",
  "Deployment and Launch",
  "Training and Handover",
  "Support and Maintenance",
];

export default function WebApplicationApproach() {
  return (
    <div className="bg-gradient-to-r from-black via-slate-950 to-blue-950 text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Title & Animated Development Icon */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Approach to Enterprise  <br /> Web Application Development
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            We prioritize customer satisfaction by tailoring our process to meet the unique needs of every business.

          </p>

          {/* Animated Development Icon */}
          <motion.div
            className="mt-10 flex items-center justify-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="p-4 bg-blue-600 rounded-lg shadow-lg"
            >
              <Code size={50} className="text-white" />
            </motion.div>
            <motion.div
              whileHover={{ rotate: -10, scale: 1.1 }}
              className="p-4 bg-gray-800 rounded-lg shadow-lg"
            >
              <Settings size={50} className="text-white" />
            </motion.div>
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="p-4 bg-blue-500 rounded-lg shadow-lg"
            >
              <Terminal size={50} className="text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Steps with Animation */}
        <div className="border-l-2 border-gray-600 pl-6 space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <span className="absolute left-[-16px] top-2 w-4 h-4 bg-blue-500 rounded-full"></span>
              <h3 className="text-xl font-semibold">{index + 1}. {step}</h3>
              {index === steps.length - 1 && (
                <p className="text-gray-400 text-sm mt-2">
                  We have a dedicated team to maintain and support applications.
                  They monitor and upgrade software as per business needs.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
