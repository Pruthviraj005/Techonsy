"use client";
''

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal";
import Contact from "../Contact";

export default function ButtonComp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col sm:flex-row items-start justify-start gap-3 sm:gap-4 mt-8 sm:mt-0">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsModalOpen(true)}
        className="group relative inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-semibold text-white overflow-hidden rounded-lg transition-all duration-300"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800"></span>
        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-blue-400 opacity-30 group-hover:rotate-90 ease"></span>
        <span className="relative flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Get Started
        </span>
      </motion.button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Contact isPopup={true} onClose={() => setIsModalOpen(false)} />
        </Modal>
    </div>
  );
}