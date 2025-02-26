'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaMobileAlt, FaServer, FaTachometerAlt, FaCog, FaTools } from 'react-icons/fa';

const capabilities = [
  {
    title: 'Google Cloud Platform Consulting',
    description: 'Create, analyze and maintain easy-to-use yet robust app engine applications by leveraging domain knowledge.',
    icon: <FaCloud className="text-green-400 text-4xl" />,
  },
  {
    title: 'Implementation Services',
    description: 'Fulfill client requirements well within stipulated timelines with component-based libraries assisting in faster builds.',
    icon: <FaTools className="text-green-400 text-4xl" />,
  },
  {
    title: 'Mobile App Development on Cloud',
    description: 'Design and develop cohesive, high-functioning, scalable enterprise-level GAE powered mobile applications.',
    icon: <FaMobileAlt className="text-green-400 text-4xl" />,
  },
  {
    title: 'Migration to GAE',
    description: 'Move your legacy on-premises apps to the cloud. Experience lossless and seamless upgradation and migration.',
    icon: <FaServer className="text-green-400 text-4xl" />,
  },
  {
    title: 'Performance Augmentation',
    description: 'Improve and augment performance of mobile apps through enterprise-grade cloud-based components.',
    icon: <FaTachometerAlt className="text-green-400 text-4xl" />,
  },
  {
    title: 'Maintenance and Support',
    description: 'Acquire round-the-clock critical SLA-driven support for Google Cloud Computing Services and GAE.',
    icon: <FaCog className="text-green-400 text-4xl" />,
  },
];

export default function CloudCapabilities() {
  return (
    <section className="relative bg-gray-900 text-white py-16 px-8 overflow-hidden">
      {/* Gradient Shadows at Top Right & Bottom Left */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-gray-700 opacity-50 blur-[80px] rounded-full"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-gray-700 opacity-50 blur-[80px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]">
            Our Capabilities on Google Cloud Solutions
          </h2>
          <p className="text-gray-300 mb-10">
            Enhance your enterprise multi-fold with powerful and highly capable Google App Engine development to unleash the potential of the cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:shadow-green-500 transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {capability.icon}
                <h3 className="text-lg font-semibold">{capability.title}</h3>
              </div>
              <p className="text-gray-400">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
