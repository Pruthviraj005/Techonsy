'use client';

import React from 'react';

const services = [
  {
    title: 'Innovative App Ideation & Consulting',
    description: 'Our experts assess your business needs to determine if React Native is the right fit, offering tailored development solutions.'
  },
  {
    title: 'Seamless React Native App Development',
    description: 'We provide comprehensive React Native development, managing everything from design to launch for full-cycle convenience.'
  },
  {
    title: 'Effortless App Migration to React Native',
    description: 'We migrate your iOS or Android apps to cross-platform React Native solutions, ensuring consistent user experience across devices.'
  },
  {
    title: 'Expert React Native Consulting',
    description: 'Get expert guidance on building, optimizing, and scaling your React Native applications for business success.'
  },
  {
    title: 'Comprehensive React Code Auditing',
    description: 'We thoroughly audit your React Native codebase to ensure quality, security, and performance enhancements.'
  },
  {
    title: 'Agile MVP Development Services',
    description: 'Develop a Minimum Viable Product (MVP) quickly and efficiently using agile methodologies for faster market entry.'
  },
  {
    title: 'Robust Server-Side API Integration',
    description: 'Seamlessly integrate backend APIs with your React Native application for robust performance and scalability.'
  },
  {
    title: 'Reliable Support & Maintenance',
    description: 'We offer ongoing support and maintenance to keep your React Native app updated and performing optimally.'
  }
];

const ReactNativeServices = () => {
  return (
    <div className="bg-gray-900 text-white p-10 border-t-[0.5px] border-t-cyan-700">
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center ">
            <h1 className="text-3xl lg:text-4xl font-bold text-center">React Native App Development Services</h1>
            <p className=" text-gray-300 my-[4%] text-center">
                Enhance your business’s reach with React Native solutions that are compatible with Android and iOS devices.
                Grow your business with a React Native solution that caters to your needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {services.map((service, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="mt-2 text-gray-400">{service.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
  );
};

export default ReactNativeServices;
