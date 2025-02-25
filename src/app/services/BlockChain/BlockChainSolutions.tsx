"use client";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaFileContract,
  FaBuilding,
  FaCogs,
  FaTruck,
  FaLightbulb,
} from "react-icons/fa";

const services = [
  {
    title: "Secure Blockchain Wallets",
    icon: <FaWallet className="hover:text-blue-500" />, 
    description:
      "Develop intuitive, secure wallets supporting digital assets, seamless transactions, and innovative payment processing.",
    bgColor: "bg-black",
    hoverEffect: "hover:scale-110 hover:rotate-6 hover:shadow-2xl",
  },
  {
    title: "Smart Contracts for Automation",
    icon: <FaFileContract className="hover:text-blue-500" />, 
    description:
      "Eliminate intermediaries with fast, secure, and self-executing smart contracts, optimizing workflows across industries like healthcare, real estate, and supply chain.",
    bgColor: "bg-gray-950",
    hoverEffect: "hover:scale-105 hover:skew-y-3 hover:shadow-xl",
  },
  {
    title: "Custom Business Blockchain Platforms",
    icon: <FaBuilding className="hover:text-blue-500" />, 
    description:
      "Enhance efficiency with tailored private blockchain solutions designed for secure transactions and data privacy.",
    bgColor: "bg-slate-900",
    hoverEffect: "hover:scale-110 hover:translate-x-2 hover:shadow-lg",
  },
  {
    title: "Seamless Blockchain API & Integrations",
    icon: <FaCogs className="hover:text-blue-500" />, 
    description:
      "Integrate blockchain into your existing software for enhanced security, transparency, and interoperability.",
    bgColor: "bg-gray-850",
    hoverEffect: "hover:scale-105 hover:-rotate-2 hover:shadow-2xl",
  },
  {
    title: "Optimized Supply Chain Solutions",
    icon: <FaTruck className="hover:text-blue-500" />, 
    description:
      "Improve traceability, transparency, and efficiency while reducing administrative costs with blockchain-powered supply chain management.",
    bgColor: "bg-gray-800",
    hoverEffect: "hover:scale-110 hover:skew-x-3 hover:shadow-lg",
  },
  {
    title: "Blockchain Consulting & PoC Development",
    icon: <FaLightbulb className="hover:text-blue-500" />, 
    description:
      "Gain expert insights to navigate blockchain adoption, avoiding potential challenges and ensuring a successful implementation.",
    bgColor: "bg-gray-750",
    hoverEffect: "hover:scale-105 hover:rotate-6 hover:shadow-2xl",
  },
];

export default function BlockchainSolutions() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-slate-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-gray-50 mb-4"
        >
          Expert Blockchain Development Solutions for Your Business
        </motion.h2>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`${service.bgColor} ${service.hoverEffect} rounded-xl shadow-lg p-6 text-center transition-transform transform border border-gray-600`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-5xl text-white mb-4 flex justify-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
