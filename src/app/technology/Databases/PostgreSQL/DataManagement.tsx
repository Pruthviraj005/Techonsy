"use client";
'';
import React from 'react';
import { motion } from 'framer-motion';

const DataManagement = () => {
  return (
    <section className="relative   py-20 px-6">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold tracking-tight leading-snug">
            Unleash the Power of <span className="text-blue-400">PostgreSQL</span> for Seamless Data Management
          </h2>
          <p className="mt-6 text-gray-300 leading-relaxed">
            Leverage the power of PostgreSQL, one of the most robust open-source relational
            databases, for unmatched data integrity, security, and reliability.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Manage transactional data, drive application performance, and support critical decision-making
            with PostgreSQL's advanced features.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed">
            Focus on your business while we handle setup and maintenance with expert PostgreSQL database management services.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/images/postgresql/Postgresql2.png"
            alt="PostgreSQL Servers"
            className="rounded-lg shadow-lg border-4transition-transform transform hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default DataManagement;