"use client";
"";

import { useState } from "react";
import { Code, Database, CreditCard, Languages } from "lucide-react";

const techStack = {
  "Development Languages": {
    title: "Development Languages",
    icon: <Languages size={80} className="text-yellow-400" />, // JavaScript
    description: "We use JavaScript (ES6) to build scalable and high-performance applications.",
  },
  IDE: {
    title: "IDE",
    icon: <Code size={80} className="text-blue-300" />, // Visual Studio Code
    description: "Visual Studio Code is our preferred IDE for development due to its versatility and extensions.",
  },
  Database: {
    title: "Database",
    icon: <Database size={80} className="text-green-400" />, // SQLite
    description: "SQLite and Realm are used for efficient and lightweight data storage.",
  },
  "3rd Party Modules": {
    title: "3rd Party Modules",
    icon: (
      <div className="flex gap-4">
        <CreditCard size={60} className="text-red-400" /> {/* Stripe */}
        <CreditCard size={60} className="text-blue-400" /> {/* PayPal */}
        <CreditCard size={60} className="text-purple-400" /> {/* Braintree */}
      </div>
    ),
    description: "We integrate powerful libraries like Stripe, PayPal, Braintree, and React.",
  },
};

export default function TechnologyStack() {
  const [activeTab, setActiveTab] = useState("Development Languages");

  return (
    <div className="bg-slate-900 text-white py-16 px-4 sm:px-8 md:px-16 border-t-[0.5px] border-t-cyan-700">
      <section className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
          Technology Stack
        </h2>

        {/* Tab Navigation - Mobile Responsive */}
        <div className="w-full overflow-x-auto">
          <div className="flex justify-start md:justify-center items-center w-max md:w-[80%] mx-auto space-x-2 sm:space-x-4 border border-white rounded-lg overflow-hidden text-sm md:text-lg whitespace-nowrap p-2 scrollbar-hide">
            {Object.keys(techStack).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 md:px-6 transition-all duration-300 rounded-lg ${
                  activeTab === tab
                    ? "bg-white text-blue-900 font-bold shadow-lg"
                    : "bg-transparent text-white hover:bg-blue-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="flex flex-col items-center justify-center mt-10 animate-fadeIn">
          {techStack[activeTab].icon}
          <h3 className="text-2xl font-semibold mt-4">{techStack[activeTab].title}</h3>
          <p className="text-lg text-center max-w-xl mt-2">{techStack[activeTab].description}</p>
        </div>
      </section>
    </div>
  );
}