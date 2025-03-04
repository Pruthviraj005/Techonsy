"use client";
"";
import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaServer, FaLock, FaExchangeAlt, FaCogs, FaNetworkWired } from "react-icons/fa";
import Image from "next/image";

const services = [
  { icon: <Image src="/images/cloudcomputing/ccapp.png" alt="ccapp" width={100} height={100} />, title: "Custom Cloud Application Development" },
  { icon: <Image src="/images/cloudcomputing/cloud.png" alt="ccapp" width={100} height={100} />, title: "Optimized Cloud Configuration" },
  { icon: <Image src="/images/cloudcomputing/operating-system.png" alt="ccapp" width={100} height={100} />, title: "Seamless Cloud Migration" },
  {
    icon: <Image src="/images/cloudcomputing/integrated-system.png" alt="ccapp" width={100} height={100} />, title: "Efficient Integration & Consolidation"
  },
  { icon: <Image src="/images/cloudcomputing/solutions.png" alt="ccapp" width={100} height={100} />, title: "Reliable Cloud Server Solutions" },
  { icon: <Image src="/images/cloudcomputing/server.png" alt="ccapp" width={100} height={100} />, title: "Advanced Cloud Security" },
];

export default function CCModels() {
  return (
    <section className="bg-gray-950 py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-sm text-blue-400 uppercase tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          MIGRATE TO CLOUD WITH TECHONSY
        </motion.h2>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold mt-2 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Comprehensive Cloud Computing Solutions

        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Seamlessly migrate, optimize, and manage your business applications with secure and scalable cloud solutions. Whether private, public, or hybrid, we ensure a smooth transition to the cloud while enhancing flexibility, performance, and cost efficiency.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-4 hover:shadow-xl transition duration-300 transform hover:scale-105 "
              whileHover={{ scale: 1.08 }}
            >
              {service.icon}
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
