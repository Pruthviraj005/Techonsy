"use client";
// components/AngularTools.js

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
    <div className="bg-gradient-to-b from-black via-gray-900 to-black p-12 text-center min-h-screen flex flex-col items-center justify-center">
    <div className="w-11/12 max-w-6xl">
      <h2 className="text-white text-4xl font-extrabold mb-8">
        Our Angular Development Tools & Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center mt-6">
        {tools.map((tool, index) => (
          <div 
            key={index} 
            className="bg-gray-900/50 backdrop-blur-lg text-white m-2 p-5 rounded-xl shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 text-lg font-semibold text-center"
          >
            {tool}
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default AngularTools;
