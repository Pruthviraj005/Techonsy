"use client";
'';
import React from 'react';
import { Code, Rocket, Shield, Lock } from 'lucide-react';

const features = [
  {
    title: 'Custom Development',
    description: 'Build cost-effective, tailored solutions with seamless PostgreSQL integration.',
    Icon: Code,
  },
  {
    title: 'Swift Launching',
    description: 'Accelerate your project with streamlined requirements gathering and efficient execution.',
    Icon: Rocket,
  },
  {
    title: 'Expertise',
    description: 'Ensure top-tier security and performance with our PostgreSQL expertise.',
    Icon: Shield,
  },
  {
    title: 'Data Security',
    description: 'Safeguard your data with robust, secure server-side solutions from PostgreSQL experts.',
    Icon: Lock,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Why Choose Us for Custom Development
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Optimize your application's performance, security, and launch speed with our tailored services!
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 text-center bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:translate-y-[-8px] hover:shadow-2xl"
            >
              {/* Icon Container */}
              <div className="relative mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110 transition-transform">
                <feature.Icon 
                  className="h-8 w-8 text-white" 
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;