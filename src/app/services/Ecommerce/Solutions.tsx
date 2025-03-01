"use client";

import { motion } from "framer-motion";
import { FaShoppingBag, FaBuilding, FaStore } from "react-icons/fa";

const ecommerceTypes = [
  { icon: <FaShoppingBag />, title: "B2C E-Commerce", description: "Customers purchase directly from a supplier’s website or app instead of a physical store." },
  { icon: <FaBuilding />, title: "B2B E-Commerce", description: "Businesses trade online with other businesses, often involving larger transactions and specialized e-services." },
  { icon: <FaStore />, title: "E-Commerce Marketplace", description: "A single platform hosting multiple vendors, allowing customers to shop from various sellers in one place." },
];

const Solutions = () => {
  return (
    <section className="flex justify-center items-center min-h-[80vh] px-6 py-12">
      {/* Big Card Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-gray-700"
      >
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6"
        >
          Types of <span className="text-purple-500">E-Commerce Solutions</span>
        </motion.h2>

        {/* App Shelf Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ecommerceTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-gray-800 p-6 rounded-xl flex flex-col items-center text-center shadow-lg border border-gray-700 hover:border-purple-400 hover:shadow-purple-500 transition-all duration-300"
            >
              <motion.div 
                className="text-purple-400 text-4xl"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mt-3">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Solutions;
