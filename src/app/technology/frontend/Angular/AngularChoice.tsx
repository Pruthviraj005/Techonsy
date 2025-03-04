"use client";
'';

import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion
import InfoCard from "./InfoCards";

export default function AngularChoice() {
  const cardData = [
    {
      title: "Easy-to-use",
      description: "Angular’s component-based architecture simplifies managing complex applications.",
      icon: "/images/angular/easy-to-use.png",
    },
    {
      title: "Performance & Speed",
      description: "Angular tools optimize speed, improving reloading and overall performance.",
      icon: "/images/angular/performance.png",
    },
    {
      title: "Dynamic Development",
      description: "Beyond reusable components, Angular enables highly interactive applications.",
      icon: "/images/angular/dynamic.png",
    },
    {
      title: "Easy Testing",
      description: "Automated testing is seamless with Angular, requiring no rigid order.",
      icon: "/images/angular/easy-testing.png",
    },
    {
      title: "Community Support",
      description: "AngularJS boasts a vast developer community offering strong support.",
      icon: "/images/angular/community.png",
    },
    {
      title: "MVC Architecture",
      description: "Angular’s MVC pattern ensures clear separation of UI and logic.",
      icon: "/images/angular/mvc.png",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#0a192f] to-[#000000] text-white py-16 px-4">
      <div className="max-w-6xl w-full text-center">
        {/* Heading with Gradient */}
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-clip-text text-transparent 
                       bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          Why is AngularJS the Best Choice for Web App Development?
        </h1>
        <h2 className="text-lg sm:text-xl mb-10 font-light">
          Here&apos;s why Angular is a top choice for modern web apps
        </h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative p-6 rounded-xl bg-opacity-10 bg-white shadow-md 
                       backdrop-blur-lg border border-gray-700 transition-all duration-300 
                       hover:shadow-xl hover:border-blue-800"
          >
            <Image src={card.icon} alt={card.title} width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">{card.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Card Data
