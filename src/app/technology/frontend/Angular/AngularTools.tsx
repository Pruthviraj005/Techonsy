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
    <div className="bg-black py-10 px-4 sm:px-6 md:px-8 lg:px-10 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
          Our Angular Development Tools & Technologies
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 justify-items-center">
          {tools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-gray-100 text-blue-800 p-3 sm:p-4 md:p-5 w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl text-sm sm:text-base md:text-lg font-semibold text-center rounded-lg"
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
