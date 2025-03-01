"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Tailored Solutions",
    description:
      "Custom-built e-commerce platforms designed to fit your business needs, ensuring scalability and flexibility.",
  },
  {
    title: "Seamless User Experience",
    description:
      "Intuitive, high-performance websites with fast loading speeds, secure payments, and smooth navigation.",
  },
  {
    title: "Growth-Focused Approach",
    description:
      "SEO-optimized, mobile-friendly solutions with analytics integration to drive traffic and maximize conversions.",
  },
  {
    title: "End-to-End Security",
    description:
      "Robust security measures, regular updates, and compliance with industry standards for safe transactions.",
  },
];

const WorkWithUs = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-12"
      >
        Why Work with <span className="text-purple-500">Us?</span>
      </motion.h2>

      {/* Timeline Wrapper */}
      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1 bg-purple-500 w-1 h-full hidden md:block"></div>

        {/* Benefits List */}
        <div className="flex flex-col gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row items-center md:items-start ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Circle Indicator */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-purple-500 rounded-full"></div>

              {/* Content Box */}
              <div
                className={`w-full md:w-1/2 p-6 bg-gray-900 rounded-lg shadow-lg text-center md:text-left border border-gray-700 hover:border-purple-400 transition-all duration-300`}
              >
                <h3 className="text-lg font-semibold text-purple-400">{benefit.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
