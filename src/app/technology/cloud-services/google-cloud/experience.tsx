"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const tabData = [
  {
    id: "tab1",
    label: "Reliable Infrastructure",
    content:
      "Google Cloud ensures high availability and uptime, providing a robust foundation for seamless user experiences without the risk of infrastructure failures.",
    icon: "🖥️",
    svg: "/images/technology/cloud-services/google-cloud/infrastructure.svg",
  },
  {
    id: "tab2",
    label: "Innovative Technology",
    content:
      "Leverage cutting-edge AI, machine learning, and big data analytics to drive innovation and make data-driven decisions with Google Cloud’s advanced tools and services.",
    icon: "💡",
    svg: "/images/technology/cloud-services/google-cloud/innovation.svg",
  },
  {
    id: "tab3",
    label: "Scalability & Flexibility",
    content:
      "Effortlessly scale resources up or down based on demand, optimizing performance and cost efficiency while adapting to changing traffic or user requirements.",
    icon: "📈",
    svg: "/images/technology/cloud-services/google-cloud/scale.svg",
  },
  {
    id: "tab4",
    label: "Top-Tier Security Compliance",
    content:
      "Google Cloud provides robust security measures to protect your data and complies with industry-standard regulations, ensuring your data is safe and secure.",
    icon: "🛡️",
    svg: "/images/technology/cloud-services/google-cloud/secure.svg",
  },
  {
    id: "tab5",
    label: "Global Reach & Low Latency",
    content:
      "With a global network of data centers, Google Cloud allows you to deploy applications closer to users, reducing latency and improving the overall experience.",
    icon: "🌍",
    svg: "/images/technology/cloud-services/google-cloud/global.svg",
  },
  {
    id: "tab6",
    label: "Cost Efficiency",
    content:
      "Google Cloud’s pay-as-you-go model lets you pay only for what you use, helping to optimize costs and eliminate the need for upfront infrastructure investments.",
    icon: "💰",
    svg: "/images/technology/cloud-services/google-cloud/savings.svg",
  },
];

export default function BlueShadowTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section className="flex justify-center items-center  bg-gray-900 text-white p-6 min-h-[70vh] border-b-[0.5px] border-cyan-800">
      <div className="w-full max-w-[1000px]  flex flex-col justify-between min-h-[60vh] md:min-h-[50vh] lg:min-h-[40vh]">
        {/* Title */}
        <div className="text-center p-4">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#91EAE4] to-[#7F7FD5]">
            Key Advantages of Google Cloud Development
          </h2>
        </div>

        {/* Responsive Button Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border-b border-gray-700 p-4">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-3 md:py-3 md:px-4 text-left border border-gray-600 rounded-md flex items-center gap-2 md:gap-3 transition-all ${
                activeTab === tab.id
                  ? "text-white font-semibold border-blue-500 shadow-md"
                  : "text-gray-400"
              }`}
            >
              <span className="text-lg md:text-xl">{tab.icon}</span>
              <span className="text-sm md:text-lg">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="flex-grow flex items-center justify-center text-center p-6 min-h-[40vh] md:min-h-[35vh] lg:min-h-[30vh]">
          {tabData.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center max-w-[90%] md:max-w-[80%]"
                >
                  <Image
                    src={tab.svg}
                    alt={tab.label}
                    height={100}
                    width={100}
                    className="max-w-[80px] md:max-w-[120px] lg:max-w-[150px]"
                  />
                  <p className="mt-3 text-sm md:text-lg lg:text-xl text-gray-300">
                    {tab.content}
                  </p>
                </motion.div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
