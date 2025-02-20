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
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white-900">
            Why Choose Us for Custom Development
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto my-4"></div>
          <p className="text-lg text-white200 max-w-3xl mx-auto mt-4">
            Optimize your application's performance, security, and launch speed with our tailored services!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 text-center transition-all duration-300 hover:translate-y-[-8px]"
            >
              {/* Icon Container */}
              <div className="relative mx-auto mb-4">
                {/* Blue circle background */}
                <div className="absolute inset-0 rounded-full bg-white-100 transform transition-transform group-hover:scale-110"></div>
                {/* Icon */}
                <div className="relative p-4">
                  <feature.Icon 
                    className="h-8 w-8 text-blue-600 mx-auto" 
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-white-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-white-600">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Border */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;