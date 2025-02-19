'use client';
import React from 'react';

// Data array for IoT services
const services = [
  {
    title: 'IoT Consulting and Strategy',
    description:
      'We provide IoT consulting services to help organizations define their IoT strategy, assess their IoT needs, and plan the implementation of IoT solutions.',
  },
  {
    title: 'IoT Mobile App Development',
    description:
      'We offer mobile applications for smartphones and tablets that provide users with a convenient interface to control and monitor IoT devices remotely.',
  },
  {
    title: 'Web-based IoT Development',
    description:
      "Technology's dedicated team develops web apps that enable users to access and control their IoT devices via a web browser, dashboard, or portal.",
  },
  {
    title: 'IoT Support and Maintenance',
    description:
      'We offer ongoing support and maintenance services to ensure that IoT applications and devices continue to function effectively and securely.',
  },
  {
    title: 'Hire IoT App Developers',
    description:
      'Hire dedicated IoT app developers from Technology and say goodbye to all your business worries right away. Choose from our flexible hiring models available.',
  },
  {
    title: 'IoT App Integration',
    description:
      'Our IoT app integration services connect IoT devices and platforms to create seamless ecosystems. We enable data sharing, automation, and facilitating smart home systems in industrial monitoring, and meet these challenges.',
  },
];

export default function IotServices() {
  return (
    <div className="bg-gray-950 text-white min-h-screen py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Reliable IoT App Development Services
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          When it comes to seeking reliable IoT app development services, there is no better destination than Technology. We have a team of dedicated IoT app developers who can be your savior. So, let’s connect and redefine business excellence with our top-notch IoT application development services.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center font-sans">
              {service.title}
            </h2>
            <p className="text-gray-300 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}