"use client"; // Add this if you're using Next.js App Router

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function DevelopmentExperties() {
  return (
    <div className="bg-gradient-to-br from-[#060912] to-[#012b4b6f] text-white py-16 px-6 border-y-[0.5px] border-y-cyan-950">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Section Title with Animation */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Comprehensive Software <span className="text-cyan-500">Quality Assurance Testing</span>
        </motion.h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "Full-Cycle Testing",
              description:
                "Our full-cycle testing covers all stages of development, ensuring the highest quality for your product from start to finish. This includes mobile, localization, exploratory, desktop, and usability testing.",
            },
            {
              title: "Outsourced Testing",
              description:
                "We provide outsourced testing services to streamline your process, focusing on manual and Black Box testing, ensuring smooth functioning across all platforms.",
            },
            {
              title: "Custom Testing",
              description:
                "Tailored testing for web, mobile, server-side systems, and devices, designed to ensure steady quality and seamless performance of your software solution.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#131a2b] p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCheckCircle className="text-blue-500 text-2xl" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}