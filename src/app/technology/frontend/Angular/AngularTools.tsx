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
    <div className="bg-black p-8 text-center">
      <div className='w-11/12 mx-auto'>
        <h2 className="text-white text-3xl font-bold mb-4">Our Angular Development Tools & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center mt-10 pl-6">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-100 text-blue-800 m-2 p-4 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full text-lg font-semibold">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AngularTools;