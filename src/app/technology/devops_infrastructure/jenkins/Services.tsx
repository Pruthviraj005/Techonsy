"use client";
""; // Ensure it's a client component

import React from "react";
import { motion } from "framer-motion";
 // Fix TypeScript issue
import { FaMobileAlt, FaLaptopCode, FaCogs, FaServer } from "react-icons/fa";

const services = [
  {
    title: "CI/CD for Mobile Apps",
    description: "Deliver high-quality mobile applications with top Jenkins DevOps principles.",
    icon: <FaMobileAlt className="text-4xl text-blue-500" />,
  },
  {
    title: "CI/CD for Web Apps",
    description: "Streamline web app development with powerful DevOps and CI/CD solutions.",
    icon: <FaLaptopCode className="text-4xl text-green-500" />,
  },
  {
    title: "CI/CD for OS",
    description: "Optimize OS applications with cutting-edge CI/CD automation strategies.",
    icon: <FaServer className="text-4xl text-yellow-500" />,
  },
  {
    title: "Jenkins Integration",
    description: "Seamlessly integrate Jenkins with your existing infrastructure for better efficiency.",
    icon: <FaCogs className="text-4xl text-purple-500" />,
  },
];

const Services = () => {
  return (
    <section className="bg-gray-950 py-16 px-6 text-white text-center">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-blue-400">Jenkins DevOps Services</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mt-2">
          Unlock the power of Jenkins CI/CD pipeline and accelerate your business growth.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center space-x-4 border border-gray-700 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icon Container */}
            <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-lg">
              {service.icon}
            </div>

            {/* Text Content */}
            <div className="text-left">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
