'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaDatabase, FaRocket, FaSync, FaShieldAlt, FaTools } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="text-blue-500 text-3xl" />, 
    title: 'Streamlined Supabase Development',
    description: 'Accelerate web app development with Supabase, ensuring seamless integration, efficient bug fixes, smooth deployment, and improved user engagement.'
  },
  {
    icon: <FaShieldAlt className="text-purple-500 text-3xl" />, 
    title: 'Secure Cloud Solutions',
    description: 'Store, sync, and manage app and website data securely with Supabase’s powerful PostgreSQL database and cloud services.'
  },
  {
    icon: <FaDatabase className="text-blue-500 text-3xl" />, 
    title: 'High-Performance Apps',
    description: 'Develop fast, scalable apps while delivering seamless web experiences with offline capabilities, all powered by Supabase.'
  },
  {
    icon: <FaSync className="text-purple-500 text-3xl" />, 
    title: 'Next-Gen Database Solutions',
    description: 'Leverage Supabase’s advanced database for real-time data synchronization, intuitive operations, and lightning-fast queries.'
  },
  {
    icon: <FaCloud className="text-blue-500 text-3xl" />, 
    title: 'Seamless Migration & Upgrades',
    description: 'Easily transition to cloud infrastructure with zero downtime and smooth data migration, ensuring a hassle-free upgrade process.'
  },
  {
    icon: <FaTools className="text-purple-500 text-3xl" />, 
    title: 'Reliable Support & Maintenance',
    description: 'Ensure consistent performance with expert support, proactive troubleshooting, and ongoing optimization for Supabase solutions.'
  }
];

export default function SupabaseShowcase() {
  return (
    <section className="relative py-16 px-6 max-w-6xl mx-auto text-white text-center min-h-screen overflow-y-auto">
      {/* Background Animation */}
      <div className="absolute inset-0 w-full h-full -z-10 opacity-30 bg-gradient-to-b from-blue-900 to-purple-900"></div>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text"
      >
        End-to-End Supabase Development & Cloud Solutions
      </motion.h2>

      {/* Timeline Section */}
      <div className="relative flex flex-col items-center h-auto">
        <div className="absolute w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 left-1/2 transform -translate-x-1/2" />
        
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`flex items-center w-full max-w-2xl mb-6 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {/* Connector Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-white z-10" />
            
            {/* Feature Card */}
            <div className="p-5 bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex flex-col items-center w-5/12 mx-4">
              {feature.icon}
              <h3 className="text-lg font-semibold mt-2">{feature.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
