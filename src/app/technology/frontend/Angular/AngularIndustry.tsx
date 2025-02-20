import React from 'react';
import { FaShoppingCart, FaMoneyBillAlt, FaBuilding, FaUtensils, FaGraduationCap, FaHeartbeat, FaRocket } from 'react-icons/fa';

const AngularIndustry = () => {
  const industries = [
    { name: "Retail", icon: <FaShoppingCart className="w-12 h-12 text-blue-500" /> },
    { name: "Finance", icon: <FaMoneyBillAlt className="w-12 h-12 text-green-500" /> },
    { name: "Real Estate", icon: <FaBuilding className="w-12 h-12 text-teal-500" /> },
    { name: "Food & Hospitality", icon: <FaUtensils className="w-12 h-12 text-blue-500" /> },
    { name: "Education", icon: <FaGraduationCap className="w-12 h-12 text-purple-500" /> },
    { name: "Health & Fitness", icon: <FaHeartbeat className="w-12 h-12 text-red-500" /> },
    { name: "Startups", icon: <FaRocket className="w-12 h-12 text-orange-500" /> },
  ];

  return (
    <section className="bg-gray-950 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-100">WORK FOR ANY INDUSTRY</h2>
        <p className="text-center text-gray-600 mb-12">Experience Across Different Industries</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-800 hover:bg-gray-950"
            >
              <div className="flex justify-center mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl text-gray-100">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AngularIndustry;