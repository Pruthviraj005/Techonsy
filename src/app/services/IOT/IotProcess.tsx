
'use client';

import { useState } from 'react';
import { FaCogs, FaDollarSign, FaHandshake, FaNetworkWired, FaSyncAlt, FaTools, FaUserCog } from 'react-icons/fa';

const services = [
  {
    title: "Dedicated Developers",
    description: "Our skilled developers are committed to delivering high-quality IoT solutions tailored to your business needs.",
    icon: <FaUserCog className="text-white" />
  },
  {
    title: "IoT Expertise and Experience",
    description: "We bring extensive IoT experience, ensuring seamless connectivity and efficient development.",
    icon: <FaNetworkWired className="text-white" />
  },
  {
    title: "Comprehensive Solutions",
    description: "From device connectivity to data management, we provide end-to-end IoT solutions.",
    icon: <FaCogs className="text-white" />
  },
  {
    title: "Customization and Tailoring",
    description: "We offer personalized IoT solutions to match your specific business requirements.",
    icon: <FaTools className="text-white" />
  },
  {
    title: "Agile Development Approach",
    description: "Our agile methodology ensures flexibility, adaptability, and fast delivery of IoT projects.",
    icon: <FaSyncAlt className="text-white" />
  },
  {
    title: "Cost-Effectiveness and ROI Focus",
    description: "We design cost-effective IoT solutions that maximize your return on investment.",
    icon: <FaDollarSign className="text-white" />
  },
  {
    title: "Collaborative Partnership",
    description: "We work closely with our clients, fostering strong partnerships for long-term success.",
    icon: <FaHandshake className="text-white" />
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