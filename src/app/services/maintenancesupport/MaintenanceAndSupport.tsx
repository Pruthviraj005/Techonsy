"use client";
import React from 'react';
import { features } from './data';

function MaintenanceAndSupport() {
  return (
    <div>
      {/* Services Section */}
      <section className="pb-14 px-6 text-center mt-10 w-100 ">
        <h2 className="text-4xl font-bold text-white mb-10 leading-[60px]">
          Efficient
          <span className="text-blue-500"> Software Maintenance</span> & <span className="text-blue-500">Support</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 px-4 md:px-20">
          Ensure smooth, efficient, and secure operations with tailored software maintenance that maximizes functionality and user satisfaction.
        </p>

        {/* Features Grid */}
        <section className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 p-6 
                mx-auto rounded-lg shadow-lg border border-white/30 bg-slate-900 
                transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-blue-500/50"
              >
                {/* Icon */}
                <div className="text-5xl">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default MaintenanceAndSupport;
