'use client'
import Image from 'next/image';
import React from 'react';

const steps = [
  { title: 'Problem Statement & Business Objective', icon: '/images/iot/problemstatement.svg' },
  { title: 'Solution & IoT Execution Strategy', icon: '/images/iot/solution.svg' },
  { title: 'Hardware Analysis & Finalization', icon: '/images/iot/hardware-analysis.svg' },
  { title: 'POC Development', icon: '/images/iot/pocdevelopment.svg' },
  { title: 'Web Development', icon: '/images/iot/webdevelopment.svg' },
  { title: 'Real-Time Testing', icon: '/images/iot/testing.svg' },
  { title: 'Deployment & Support', icon: '/images/iot/launch.svg' }
];

function IotDevelopment() {
  return (
    <div className="bg-white text-gray-800 py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
          IoT Developement Process
        </h2>
        <div className="w-32 h-1 bg-blue-300 mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">
          We have been involved in IoT development since early days. We understand the wide spectrum of IoT
          industry and challenges during the development and testing and considering that we provide our IoT
          development services to our clients and help them build secure and scalable IoT solutions.
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="flex flex-col md:flex-row justify-center items-center relative">
        <div className="w-full flex flex-wrap justify-center items-center">
          <Image src="/images/iot/developement.png" alt="development" width={1200} height={500} />
        </div>
      </div>
    </div>
  );
}

export default IotDevelopment;


