'use client';

import { useState } from 'react';
import { Code, ShieldCheck, Wallet, Layers, FileText, TrendingUp, Lock, ShoppingCart, Banknote } from 'lucide-react';

const services = [
  {
    title: " Proven Expertise",
    description: " Leverage our deep industry knowledge and hands-on experience in delivering secure and scalable blockchain solutions.",
    icon: <Code size={32} className="text-white" />
  },
  {
    title: "Security & Transparency",
    description: "Build trust with blockchain-powered systems ensuring data integrity, immutability, and robust security.",
    icon: <ShieldCheck size={32} className="text-white" />
  },
  {
    title: " Custom Solutions",
    description: "Get tailored blockchain applications designed to fit your unique business needs and operational goals.",
    icon: <Wallet size={32} className="text-white" />
  },
  {
    title: "End-to-End Support",
    description: " From ideation to deployment and beyond, we provide continuous support, maintenance, and optimization.",
    icon: <Layers size={32} className="text-white" />
  },
  {
    title: "Innovative Approach ",
    description: "Stay ahead with cutting-edge blockchain technologies, ensuring efficiency, automation, and seamless integrations.",
    icon: <TrendingUp size={32} className="text-white" />
  }
];

export default function StickyScrollContainer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-950 text-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 border border-blue-800 rounded-lg">

        {/* Left Side - Scrollable List */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-4 sm:p-6 rounded-lg 
                        h-72 md:h-80 lg:h-96 
                        overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
          <ul className="space-y-3 sm:space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className={`text-base md:text-lg p-2 cursor-pointer transition-all duration-300 
                            ${activeIndex === index ? "text-white font-bold" : "text-gray-200"}`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <span className="ml-2">{service.title}</span>
                <hr className='mt-3 opacity-50' />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Dynamic Content */}
        <div className="bg-gray-950 p-4 sm:p-6 md:p-8 rounded-lg flex flex-col justify-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-2 sm:p-3 rounded-lg transition-transform duration-300">
              {services[activeIndex].icon}
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold transition-opacity duration-300">
              {services[activeIndex].title}
            </h2>
          </div>
          <p className="mt-3 sm:mt-4 text-gray-400 text-sm md:text-base transition-opacity duration-500">
            {services[activeIndex].description}
          </p>
        </div>

      </div>
    </section>
  );
}
