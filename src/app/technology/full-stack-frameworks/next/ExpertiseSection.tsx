"use client";
import { FaServer, FaCode, FaSyncAlt, FaPuzzlePiece, FaArrowUp, FaWrench } from "react-icons/fa";
import { useEffect, useState } from "react";

const expertiseData = [
  {
    title: "Server-Side Rendered Apps",
    description:
      "Specializing in high-performance SSR web apps, we focus on minimal loading times for seamless user experiences across industries.",
    icon: <FaServer className="text-blue-500 text-5xl" />, 
  },
  {
    title: "Custom Development",
    description:
      "We build secure, efficient APIs, ensuring smooth integration with third-party services to enhance app functionality.",
    icon: <FaCode className="text-yellow-500 text-5xl" />,
  },
  {
    title: "Integration Services",
    description:
      "Our team integrates Next.js seamlessly with your existing web apps, optimizing performance and analytics.",
    icon: <FaSyncAlt className="text-pink-500 text-5xl" />,
  },
  {
    title: "Plugin Development",
    description:
      "We create and integrate custom plugins tailored to meet your unique business needs, ensuring optimal functionality.",
    icon: <FaPuzzlePiece className="text-green-500 text-5xl" />,
  },
  {
    title: "Upgradation & Migration",
    description:
      "We offer expert support for upgrading or migrating your apps to the latest Next.js version, ensuring seamless transitions.",
    icon: <FaArrowUp className="text-blue-400 text-5xl" />,
  },
  {
    title: "Maintenance & Support",
    description:
      "Our dedicated team provides responsive support for bug fixes, compatibility issues, and overall performance optimization.",
    icon: <FaWrench className="text-red-500 text-5xl" />,
  },
];
export default function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black py-10 border-y-[0.5px] border-y-cyan-700 ">
      <section className="relative px-6 md:px-16 text-white max-w-[1000px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-16">
          Next.js Development Expertise for Scalable Web Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div key={index} className="rounded-2xl p-8 shadow-lg bg-white/10 backdrop-blur-md hover:scale-105 transition transform duration-500 border border-gray-700">
              <div className="flex justify-center items-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">{item.title}</h3>
              <p className="text-md text-center text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
