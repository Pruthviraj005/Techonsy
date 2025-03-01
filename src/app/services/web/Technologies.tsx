"use client";
"";

import React from "react";
import { FaReact, FaVuejs, FaNodeJs, FaPython, FaAws, FaDocker } from "react-icons/fa";
import { SiContentful, SiGraphql, SiApachecassandra, SiCircleci } from "react-icons/si";

const technologies = [
  { icon: <FaReact className="text-blue-400 text-5xl" />, name: "React.js" },
  { icon: <FaVuejs className="text-green-400 text-5xl" />, name: "Vue.js" },
  { icon: <FaNodeJs className="text-green-600 text-5xl" />, name: "Node.js" },
  { icon: <FaPython className="text-yellow-400 text-5xl" />, name: "Python" },
  { icon: <SiContentful className="text-gray-300 text-5xl" />, name: "Contentful" },
  { icon: <SiGraphql className="text-pink-400 text-5xl" />, name: "GraphQL" },
  { icon: <SiApachecassandra className="text-gray-400 text-5xl" />, name: "Cassandra" },
  { icon: <SiCircleci className="text-white text-5xl" />, name: "CircleCI" },
  { icon: <FaDocker className="text-blue-500 text-5xl" />, name: "Docker" },
  { icon: <FaAws className="text-orange-400 text-5xl" />, name: "AWS" },
];

export default function TechGrid() {
  return (
    <div className="bg-black py-12 px-6 mt-20">
      <h1 className="text-center text-3xl lg:text-4xl text-gray-50 font-bold">Technologies we work with</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-gray-700 bg-opacity-10 bg-black rounded-lg shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:bg-gray-800"
          >
            {tech.icon}
            <p className="text-white text-lg mt-3">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
