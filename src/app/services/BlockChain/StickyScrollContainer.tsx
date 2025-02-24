'use client';

import { useState } from 'react';
import { Code, ShieldCheck, Wallet, Layers, FileText, TrendingUp, Lock, ShoppingCart, Banknote } from 'lucide-react';

const services = [
  {
    title: "Blockchain Consulting and Strategy",
    description: "We offer expert blockchain consulting and strategic guidance to help launch proficient blockchain solutions. Whether you're starting from scratch or revamping an existing system, our solutions are secure and business-focused.",
    icon: <Code size={32} className="text-white" />
  },
  {
    title: "dApps Development",
    description: "Develop secure, scalable, and efficient decentralized applications (dApps) tailored to your business needs, ensuring optimal blockchain integration.",
    icon: <ShieldCheck size={32} className="text-white" />
  },
  {
    title: "Cryptocurrency Wallet and Exchange Development",
    description: "We build secure and feature-rich cryptocurrency wallets and exchange platforms to facilitate seamless digital asset transactions.",
    icon: <Wallet size={32} className="text-white" />
  },
  {
    title: "Layer-2 Development",
    description: "Enhance blockchain scalability with Layer-2 solutions, reducing transaction costs and increasing processing speeds.",
    icon: <Layers size={32} className="text-white" />
  },
  {
    title: "Smart Contract Audit and Development",
    description: "Ensure secure, error-free smart contracts through our rigorous auditing and development services.",
    icon: <FileText size={32} className="text-white" />
  },
  {
    title: "Tokenomics and ICO Development",
    description: "We design robust tokenomics strategies and assist in launching Initial Coin Offerings (ICOs) for startups and enterprises.",
    icon: <TrendingUp size={32} className="text-white" />
  },
  {
    title: "Blockchain Security and Compliance",
    description: "Our blockchain security solutions ensure compliance with industry regulations and safeguard against potential vulnerabilities.",
    icon: <Lock size={32} className="text-white" />
  },
  {
    title: "NFT Marketplace Development",
    description: "Create a fully functional NFT marketplace for digital collectibles, arts, and assets with secure smart contract integration.",
    icon: <ShoppingCart size={32} className="text-white" />
  },
  {
    title: "Decentralized Finance (DeFi) Solutions",
    description: "We develop DeFi platforms including lending, borrowing, and staking solutions to enhance financial inclusivity and decentralization.",
    icon: <Banknote size={32} className="text-white" />
  },
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
