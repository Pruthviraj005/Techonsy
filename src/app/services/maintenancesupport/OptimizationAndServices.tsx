'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { maintenanceData } from './data';

function OptimizationAndServices() {
  return (
    <div>
      <section className="bg-black border-y-[0.5px] border-slate-600 w-[100vw] mx-auto flex justify-center lg:absolute left-0">
        <div className="w-[1000px]">
          <div>
            <title>Software Maintenance</title>
          </div>
          <div className="container mx-auto px-6 py-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Software Maintenance & Optimization Services
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left py-10">
              {maintenanceData.map((item, index) => (
                <motion.div
                  key={index}
                  className="space-y-2 border-[0.5px] border-purple-700 border-opacity-50 p-6 rounded-2xl shadow-md shadow-purple-500/50"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(139, 92, 246, 0.6)' }}
                >
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-400 font-light">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OptimizationAndServices;
