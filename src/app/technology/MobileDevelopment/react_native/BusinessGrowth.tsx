"use client";
import { useState } from "react";

const businessTypes = {
  Startup: {
    title: "React Native App Development for Startups",
    subtitle: "We Turn Great Ideas into Customer-Centric Mobile Apps.",
    description:
      "Your idea. Our execution. We focus on building react native apps that give all – wider market expansion, faster time to market, and memorable user experience.",
    additional:
      "Our clients value our project management, good communication skills, and the quality of code. But most of all, they are happy because of founding us as their tech partner.",
    image: "/startup-app.png",
  },
  SMBs: {
    title: "React Native App Development for Small & Medium Businesses",
    subtitle: "Reach all customers, no matter the platform!",
    description:
      "We not just build react native apps for your business, but create mobile experiences that users adore.",
    additional:
      "When the experience of our react native app developers blend with the creative art of designing the mobile UI, the outcome is always the same – best mobile experience.",
    image: "/smb-app.png",
  },
  Enterprise: {
    title: "Enterprise Mobility Solutions",
    subtitle: "Your vision…Mobilized!",
    description:
      "Delivering digital transformation with React Native app development to enable your enterprise staff to do business – anytime, anywhere.",
    additional:
      "Smartphones have changed the way we work. That’s why building a mobile app for both iOS & Android using React Native can be revolutionary in how your staff deals with customers, colleagues, and overall business.",
    image: "/enterprise-app.png",
  },
};

export default function BusinessGrowthSection() {
  const [activeTab, setActiveTab] = useState("Startup");

  return (
    <div className="relative py-14  mt-14 mx-6">
      
      <div className="absolute inset-0 w-slg opacity-30  bg-gradient-to-br from-[#182a44] to-[#084e7a] blur-[100px]  animate-rotate rounded-full  z-0"></div>

      <section className="max-w-[1000px] mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-6 
               bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 
               bg-clip-text text-transparent">
            How Mobile App Helps In Business Growth
        </h2>

        {/* Tabs */}
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 py-10 ">
          {Object.keys(businessTypes).map((type) => (
            <div key={type} className="border-[0.5px] rounded-xl">
              <button
                onClick={() => setActiveTab(type)}
                className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-slate-800 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-slate-900 before:duration-200 before:ease-linear hover:bg-slate-800 hover:text-slate-600 hover:shadow-blue-600 hover:before:border-[25px] rounded-xl"
              >
                <span className="relative z-10 text-white">{type}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col-reverse justify-center items-center">
          {/* Text Content */}
          <div className="space-y-4 md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center ">{businessTypes[activeTab].title}</h3>
            <p className="italic text-md sm:text-xl text-slate-200 text-center py-4 ">{businessTypes[activeTab].subtitle}</p>
            <p className="text-md sm:text-md text-slate-400 text-center  ">{businessTypes[activeTab].description}</p>
            <p className="text-md sm:text-md text-slate-400 text-center ">{businessTypes[activeTab].additional}</p>
          </div>


        </div>
      </section>
    </div>
  );
}