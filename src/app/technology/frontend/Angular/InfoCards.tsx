"use client";
''

import React from 'react';

const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl">
      <div className="text-blue-500">{icon}</div>
      <h3 className="font-semibold text-lg mb-2 text-black">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
};

export default InfoCard;