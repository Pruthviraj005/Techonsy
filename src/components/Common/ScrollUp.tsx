"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollUp() {
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const opacity = useTransform(scrollY, [0, 200], [0, 1]);
  const scale = useTransform(scrollY, [0, 100], [0.8, 1]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        position: "fixed",
        bottom: "2.5rem",
        right: "2.5rem",
        zIndex: 50,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        onClick={scrollToTop}
        className="bg-gradient-to-br from-indigo-500 via-blue-600 to-purple-600 dark:from-indigo-600 dark:via-blue-700 dark:to-purple-700 rounded-full text-white/90 shadow-lg hover:text-white hover:shadow-indigo-500/30 dark:hover:shadow-indigo-400/20 transition-all duration-300 w-12 h-12 flex items-center justify-center backdrop-blur-sm border border-white/20 dark:border-white/10"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 8px 25px -5px rgba(99, 102, 241, 0.4)"
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -2, 0] }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
