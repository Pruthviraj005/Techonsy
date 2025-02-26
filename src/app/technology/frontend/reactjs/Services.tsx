'use client';
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: delay / 1000 }}
    className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl shadow-lg hover:scale-105 
      transition-transform duration-300 border border-gray-700 hover:border-blue-500"
  >
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 
        rounded-lg transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      title: "ReactJS Web Solutions",
      description: "Expert React applications tailored for your business."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "ReactJS Native App Development",
      description: "Build cross-platform mobile apps with React Native."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      ),
      title: "ReactJS UI/UX Development",
      description: "Craft intuitive and engaging UI/UX experiences."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 7h-3m3 0v3m0-3L17 9.5M4 17h3m-3 0v-3m0 3l3-2.5M20 17h-3m3 0v-3m0 3l-3-2.5M4 7h3M4 7v3m0-3l3 2.5" />
        </svg>
      ),
      title: "ReactJS Front-End Development",
      description: "Cutting-edge front-end solutions with React."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Component Library Development",
      description: "Reusable and scalable React component libraries."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m12 0h2M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
        </svg>
      ),
      title: "ReactJS Plugin Development",
      description: "Custom React plugins for optimized development."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl font-bold text-white">ReactJS Development Services</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full animate-pulse" />
        <p className="max-w-3xl mx-auto text-gray-300">
          Leverage high-quality ReactJS services for building interactive applications, including SPAs, PWAs, and dynamic web platforms.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={index * 200} />
        ))}
      </motion.div>
    </div>
  );
};

export default Services;