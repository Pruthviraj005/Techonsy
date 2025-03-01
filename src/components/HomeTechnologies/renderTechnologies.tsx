"use client";
"";

import { motion } from "framer-motion";
import { Technology } from "@/types/technologies";

const RenderTechnologies = ({ feature }: { feature: Technology }) => {
  const { icon, title, paragraph } = feature;

  return (
    <motion.div
      className="group relative rounded-xl bg-white dark:bg-gray-800/80 p-5 shadow-lg transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 via-blue-600/20 to-purple-600/20 text-blue-600 dark:text-blue-400"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h3>
        
        <motion.button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:group-hover:bg-blue-500 dark:group-hover:text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.button>
      </div>

      <motion.div 
        className="overflow-y-auto max-h-[150px] pr-2 text-base text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(59, 130, 246, 0.3) transparent"
        }}
      >
        <p className="leading-relaxed">
          {paragraph}
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)"
        }}
      />
    </motion.div>
  );
};

export default RenderTechnologies;
