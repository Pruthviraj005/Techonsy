"use client";

import { useState } from "react";
import { FaLightbulb, FaPencilRuler, FaPaintBrush, FaCode, FaBug, FaClipboardCheck } from "react-icons/fa";

const steps = [
  { title: "Ideation", icon: <FaLightbulb className="text-yellow-400 text-4xl" />, details: ["Business Idea", "Project Scope", "Requirements Gathering", "Proof of Concept"], color: "border-blue-400" },
  { title: "Sketching", icon: <FaPencilRuler className="text-red-400 text-4xl" />, details: ["Sketching", "User Experience", "Application Flow", "Screen Wireframing", "Detailed Navigation"], color: "border-blue-400" },
  { title: "Design", icon: <FaPaintBrush className="text-blue-400 text-4xl" />, details: ["Design", "Aesthetic UI/UX", "Graphic Integration", "Visual Design", "User Feedback"], color: "border-blue-400" },
  { title: "Development", icon: <FaCode className="text-purple-400 text-4xl" />, details: ["Development", "Server-Side Components", "Full Source Code", "API Development", "Database Design"], color: "border-blue-400" },
  { title: "Testing", icon: <FaClipboardCheck className="text-green-400 text-4xl" />, details: ["Testing", "QA Audit", "Analyzing Functionalities", "Automated and Manual Testing", "Identifying Bottlenecks"], color: "border-blue-400" },
  { title: "Debugging", icon: <FaBug className="text-yellow-400 text-4xl" />, details: ["Debugging", "Troubleshooting", "Feedback Implementation", "Isolating Faulty Code", "Fixing Bugs"], color: "border-blue-400" }
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white pb-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-10">
        Flutter Application Development Process
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center text-center w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 p-3 sm:p-4 border-2 ${step.color} rounded-xl bg-gray-800 cursor-pointer shadow-md transition-all hover:shadow-lg hover:scale-105`}
            onClick={() => setActiveIndex(index)}
          >
            {step.icon}
            <h3 className="text-xs sm:text-sm md:text-base font-semibold mt-2">{step.title}</h3>
          </div>
        ))}
      </div>

      {/* Active Step Details */}
      <div className="mt-8 w-full max-w-md sm:max-w-lg md:max-w-2xl bg-gray-700 rounded-xl shadow-lg p-5 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-white">
          {steps[activeIndex].title}
        </h3>
        <ul className="mt-4 space-y-2">
          {steps[activeIndex].details.map((detail, i) => (
            <li key={i} className="text-gray-300 text-sm sm:text-base md:text-lg">
              - {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}