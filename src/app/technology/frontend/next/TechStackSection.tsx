"use client";
import React, { useState } from "react";

const techStack = [
  { category: "Frontend", items: ["React JS", "Angular JS", "Vue JS", "Next.js", "Bootstrap", "Sass"] },
  { category: "Backend", items: ["Node.js", "Express JS", "PHP"] },
  { category: "Database", items: ["MySQL", "Oracle", "MongoDB", "MS-SQL", "PostgreSQL"] },
  { category: "Server", items: ["AWS", "Apache", "Nginx", "Serverless"] },
  { category: "Testing", items: ["Enzyme", "Selenium", "Browserstack", "Test Rail", "Jest"] },
];

export default function TechStackTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
    <h2 className="text-center text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
      Tech Stack
    </h2>
      
      {/* Tab Headers */}
      <div className="flex flex-wrap justify-center border-b-2 border-gray-300 gap-2 sm:gap-4 md:gap-6">
        {techStack.map((tech, index) => (
          <button
            key={index}
            className={`px-4 sm:px-6 py-2 text-sm sm:text-lg font-semibold transition-all duration-300 ease-in-out
              ${
                activeTab === index
                  ? "border-b-4 border-blue-600 text-blue-600 scale-105"
                  : "text-gray-600 hover:text-blue-500 hover:scale-105 hover:border-b-2 border-transparent"
              }
              focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95`}
            onClick={() => setActiveTab(index)}
          >
            {tech.category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-gray-900 shadow-lg rounded-lg mt-4 border border-gray-700">
        <h3 className="text-2xl font-semibold text-blue-400">{techStack[activeTab].category}</h3>
        <div className="mt-3 flex flex-wrap gap-3">
          {techStack[activeTab].items.map((item, idx) => (
           <span
           key={idx}
           className="px-4 py-2 bg-gray-800 text-gray-200 rounded-lg border-[1px] border-[#700ca7d1] 
           shadow-lg hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
         >
           {item}
         </span>
          ))}
        </div>
      </div>
    </div>
  );
}