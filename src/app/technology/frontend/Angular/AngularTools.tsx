'use client';

import { motion } from 'framer-motion';
import React from 'react';

const AngularTools = () => {
  const tools = [
    "Karma", "Angular Kickstart", "Generator Angular",
    "Webstorm", "Protractor", "NG-Inspector",
    "Angular Deckgrid", "Jasmine", "Mocha.JS",
    "Angular Seed", "Angular JS UI", "Djangular",
    "Sublime Text", "Mean", "Ment.io", "Restangular",
    "Videogular"
  ];

  return (
    <div className="bg-black py-16 text-center">
      <div className="max-w-[1000px] w-11/12 mx-auto text-white">
        {/* Heading with Motion Effect */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-8  text-slate-200  "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Angular Development <span className='bg-gradient-to-r from-blue-400 text-transparent via-purple-400 to-pink-500 bg-clip-text'>Tools & Technologies</span>
        </motion.h2>


        {/* Grid Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {tools.map((tool, index) => (
            <motion.div 
              key={index}
              className="bg-gray-900 text-slate-300 p-4 shadow-lg rounded-full border-[0.5px] border-gray-700 text-lg font-semibold text-center
                         transition-all duration-300 cursor-pointer hover:bg-blue-700 hover:text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngularTools;