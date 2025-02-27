'use client'

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
    <div className="relative flex flex-col items-center h-[60vh] justify-center w-full max-w-[1000px] mx-auto p-4 sm:p-6 md:p-10 lg:p-12 bg-gray-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mt-28">
        Flutter Application Development Process
      </h2>
      <div className="relative flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`w-32 sm:w-36 md:w-40 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center text-center p-4 sm:p-6 border-2 ${step.color} rounded-xl bg-gray-800 cursor-pointer shadow-md transition-all hover:shadow-lg`}
            onClick={() => setActiveIndex(index)}
          >
            {step.icon}
            <h3 className="text-xs sm:text-sm md:text-base font-semibold mt-2">{step.title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-6 w-[50%] flex flex-col items-center justify-center bg-gray-700 rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center">{steps[activeIndex].title}</h3>
        <ul className="text-xs sm:text-sm md:text-base mt-3">
          {steps[activeIndex].details.map((detail, i) => (
            <li key={i} className="text-gray-300">- {detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}