"use client";
import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaCreditCard, FaBell, FaCloud, FaTools, FaJs } from "react-icons/fa";

const tools = [
  { icon: <FaTools className="text-blue-500 text-4xl" />, name: "Visual Studio Code" },
  { icon: <FaJs className="text-yellow-500 text-4xl" />, name: "JavaScript (ES6)*" },
  { icon: <FaNodeJs className="text-green-500 text-4xl" />, name: "Environment: NodeJs" },
  { icon: <FaReact className="text-cyan-500 text-4xl" />, name: "Libraries: react-navigation, axios, redux" },
  { icon: <FaDatabase className="text-purple-500 text-4xl" />, name: "DBMS: SQLite, Realm" },
  { icon: <FaReact className="text-indigo-500 text-4xl" />, name: "User Interface: react-native-reanimated" },
  { icon: <FaCreditCard className="text-red-500 text-4xl" />, name: "Paypal and Stripe for payment" },
  { icon: <FaCloud className="text-gray-500 text-4xl" />, name: "Firebase for data storage, real-time database" },
  { icon: <FaBell className="text-orange-500 text-4xl" />, name: "Notifications: Firebase, One Signal" },
];

export default function TechToolsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); // Add slight delay for smooth appearance
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-blue-900 via-slate-900 to-black text-center border-t-[0.5px] border-t-cyan-700 ">
      <section className="max-w-[1000px] mx-auto py-12 px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-slate-100 mb-4 transition-opacity duration-700 ease-in-out opacity-100">
          Get the Best of React Native for Your App
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto transition-opacity duration-700 ease-in-out opacity-100 py-6">
          Your iOS App is developed using the best tools, technologies, industry best practices, and workflows. We are committed to building your product of the utmost quality. Here are some of the tools and practices we implement.
        </p>

        {/* Tools List */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8 transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex gap-6 rounded-2xl p-4 shadow-lg justify-center items-center bg-white/10 backdrop-blur-md hover:scale-105 transition transform duration-500 border border-gray-700"
            >
              <div>{tool.icon}</div>
              <span className="text-lg font-medium text-gray-100">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
    }
  