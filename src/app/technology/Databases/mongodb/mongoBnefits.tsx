'use client';
import React, { useState, useEffect } from 'react';
import { Cpu, Database, FileText, Share2, Users, Layers } from 'lucide-react';

const benefitsData = [
  {
    icon: <Cpu className="w-12 h-12 text-blue-500" />,
    title: "Streamlined Open-Source Framework",
    description: "Fast installation with comprehensive documentation."
  },
  {
    icon: <Layers className="w-12 h-12 text-blue-500" />,
    title: "Effortless Developer Onboarding",
    description: "Quick adoption with clear and concise guides."
  },
  {
    icon: <Database className="w-12 h-12 text-blue-500" />,
    title: "Adaptive Architecture",
    description: "Tailored for diverse needs, trusted by industry leaders."
  },
  {
    icon: <FileText className="w-12 h-12 text-blue-500" />,
    title: "Enhanced Performance with Data Sharding",
    description: " Optimize large databases with distributed storage."
  },
  {
    icon: <Share2 className="w-12 h-12 text-blue-500" />,
    title: "Flexible Data Structure",
    description: " Non-strict schema for dynamic and scalable data models."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: "Vibrant Community Support",
    description: "Backed by an active and growing open-source community."
  }
];

const MongoBenefits = () => {
  const [visible, setVisible] = useState([]);
  
  useEffect(() => {
    // Animate cards in sequence
    benefitsData.forEach((_, index) => {
      setTimeout(() => {
        setVisible(prev => [...prev, index]);
      }, 300 * index);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Unlock the Power of MongoDB for Scalable Development</h1>
          <div className="w-16 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index}
              className={`bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center transition-all duration-500 transform ${
                visible.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="mb-6 p-4 bg-gray-900 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MongoBenefits;