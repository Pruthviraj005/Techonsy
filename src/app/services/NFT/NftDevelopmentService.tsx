'use client'
import { useState } from "react";
import { FaPaintBrush, FaCode, FaShieldAlt, FaTools } from "react-icons/fa";

const services = [
  {
    title: "NFT Marketplace Design",
    description: "We provide top-notch NFT marketplace design services, ensuring a seamless user experience with intuitive navigation and stunning visuals.",
    icon: <FaPaintBrush size={30} className="text-white" />
  },
  {
    title: "NFT Development",
    description: "Our NFT development services cover everything from smart contract creation to platform integration, helping you launch your NFT project successfully.",
    icon: <FaCode size={30} className="text-white" />
  },
  {
    title: "NFT Smart Contract Development and Audit",
    description: "We develop and audit NFT smart contracts to ensure security, reliability, and compliance with industry standards.",
    icon: <FaShieldAlt size={30} className="text-white" />
  },
  {
    title: "NFT Marketplace Support and Maintenance",
    description: "Our support and maintenance services ensure your NFT marketplace remains operational, secure, and up-to-date.",
    icon: <FaTools size={30} className="text-white" />
  }
];

export default function NftDevelopmentService() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="bg-gray-950 text-white py-16 px-8">
      <h2 className="text-4xl font-bold mb-4 text-center text-white">NFT Development Services for New-Age Marketplace</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border border-blue-800 rounded-lg mt-10">
        {/* Left Side - Scrollable List */}
        <div className="bg-gradient-to-b from-blue-400 to-blue-800 p-6 rounded-lg h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent">
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index}>
                <div
                  className={`text-xl p-2 cursor-pointer transition-all duration-300 ease-in-out mt-8 ${activeService.title === service.title ? 'text-white font-bold' : 'text-gray-200'}`}
                  onMouseEnter={() => setActiveService(service)}
                >
                  <span className="ml-2 hover:font-bold">{service.title}</span>
                </div>
                <hr className="border-t border-gray-300 opacity-50" />
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Content */}
        <div className="bg-gray-950 p-8 rounded-lg transition-opacity duration-500 ease-in-out mt-20">
          <div className="flex items-center space-x-4">
            <div className="rounded-full">
              {activeService.icon}
            </div>
            <h2 className="text-2xl font-bold">{activeService.title}</h2>
          </div>
          <p className="mt-4 text-gray-200 text-lg">{activeService.description}</p>
        </div>
      </div>
    </section>
  );
}
