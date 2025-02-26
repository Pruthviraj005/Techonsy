'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Data array for IoT services
const services = [
  {
    title: 'Cost-effective',
    description:
      'IoT is the most popular technology that helps organizations to carry out the functionalities which makes it a cost-effective approach.',
  },
  {
    title: 'Boost Productivity',
    description:
      'IoT technology assists businesses to improve their productivity and efficiency.',
  },
  {
    title: 'Better Customer Experience',
    description:
      "IoT improves the overall customer experience by embedding highly advanced tools and technologies.",
  },
  {
    title: 'Business Opportunities',
    description:
      'IoT offers several business opportunities by enabling advanced analytics, artificial intelligence, and smart utility, etc.'
  },
  {
    title: 'Mobility',
    description:
      'IoT enables businesses to let their employees conduct their work virtually from any location.',
  },
  {
    title: 'Automation and Control',
    description:
      'IoT allows the interconnection of the devices enables a large amount of automation and control in the workings.',
  },
];

export default function IotServices() {
  return (
    <div className="bg-gray-950 text-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-50">
          Key Benefits Of IoT
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          When it comes to seeking reliable IoT app development services, there is no better destination than Technology. We have a team of dedicated IoT app developers who can be your savior. So, let’s connect and redefine business excellence with our top-notch IoT application development services.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeInOut' }}
            whileHover={{ scale: 1.08, transition: { duration: 0.3, ease: 'easeInOut' } }}
            className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text mb-4 text-center font-sans">
              {service.title}
            </h2>
            <p className="text-gray-200 text-center">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
