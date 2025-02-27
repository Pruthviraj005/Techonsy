'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import InfoCard from "./InfoCards";

export default function AngularBenefits() {
  const angularBenefitsData = [
    {
      title: "Directives",
      description: "Directives empower AngularJS developers to create dynamic HTML applications efficiently.",
      icon: <Image src="/images/angular/directives.png" alt="Directives" width={70} height={70}  />,
    },
    {
      title: "Reusable Components",
      description: "Conceal complex CSS and DOM structures while focusing on app functionality.",
      icon: <Image src="/images/angular/reusable-component.png" alt="Reusable Components" width={80} height={80} />,
    },
    {
      title: "Localization",
      description: "Developers can build applications from scratch with Angular's local filters and directives.",
      icon: <Image src="/images/angular/localization.png" alt="Localization" width={80} height={80} />,
    },
    {
      title: "Validating Forms",
      description: "Set validation criteria easily in Angular, accelerating development.",
      icon: <Image src="/images/angular/validating-forms.png" alt="Validating Forms" width={80} height={80} />,
    },
    {
      title: "Server Communication",
      description: "Efficiently manage data flow using third-party libraries and built-in services.",
      icon: <Image src="/images/angular/server-communication.png" alt="Server Communication" width={80} height={80} />,
    },
    {
      title: "Dependency Injection",
      description: "Angular’s dependency injections simplify application structure and logic.",
      icon: <Image src="/images/angular/injections.png" alt="Injections" width={80} height={80} />,
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-[#0a192f] to-[#000000] text-white py-16 px-4 border-t-[0.5px] border-t-cyan-950">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent 
                       bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-500">
          Discover the Benefits of Angular
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl pt-10">
        {angularBenefitsData.map((card, index) => (
          <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative p-6 rounded-xl bg-opacity-10 bg-white shadow-md 
                                 backdrop-blur-lg border border-gray-700 transition-all duration-300 
                                 hover:shadow-xl hover:border-blue-800"
                    >
                      {card.icon}
                      <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
                      <p className="text-sm text-gray-300 mt-2">{card.description}</p>
                    </motion.div>
        ))}
      </div>
    </div>
  );
}

