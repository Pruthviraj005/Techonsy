'use client';

import { useState, useEffect } from 'react';
import { Code, ShieldCheck, Wallet, Layers, TrendingUp } from 'lucide-react';

const services = [
  { title: "Blockchain Consulting and Strategy", icon: <Code size={32} className="text-white" /> },
  { title: "dApps Development", icon: <ShieldCheck size={32} className="text-white" /> },
  { title: "CryptoCurrency Wallet and Exchange Development", icon: <Wallet size={32} className="text-white" /> },
  { title: "Layer-2 Development", icon: <Layers size={32} className="text-white" /> },
  { title: "Smart Contract Audit and Development", icon: <TrendingUp size={32} className="text-white" /> },
  { title: "Asset Tokenization Platform Development", icon: <TrendingUp size={32} className="text-white" /> },
  { title: "ICO Development", icon: <TrendingUp size={32} className="text-white" /> },
  { title: "Solidity Development", icon: <TrendingUp size={32} className="text-white" /> }
];

export default function ServicesList() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-950 text-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-400 to-blue-800 p-6 rounded-lg">
        <ul className="space-y-3 sm:space-y-4">
          {services.map((service, index) => (
            <>
              <li
                key={index}
                className={`flex items-center space-x-4 text-lg md:text-xl transition-all duration-500 ${
                  index === activeIndex ? 'font-extrabold text-white' : 'text-white'
                }`}
              >
                <div className="p-2 rounded-lg">{service.icon}</div>
                <span>{service.title}</span>
              </li>
              <hr className="border-gray-200" />
            </>
          ))}
        </ul>
      </div>
    </section>
  );
}
