"use client";
import React from "react";
import { btn, expertiseData } from "./data";

export default function Approaches() {
  return (
    <>
      {/* IT Consulting Approach Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 w-full opacity-50 bg-gradient-to-br from-[#0d1b2a] to-[#1b263b] blur-[50px] rounded-full z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center text-center w-full max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
            Our IT Consulting Approach
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {expertiseData.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-xl shadow-xl 
                p-6 flex flex-col items-center text-center transition-transform 
                duration-500 hover:scale-105 hover:shadow-2xl w-[90%] sm:w-[80%] md:w-[90%] lg:w-[90%] mx-auto"
                style={{ perspective: "1000px" }} // Adding Perspective for 3D effect
              >
                {/* Icon with 3D Hover Effect */}
                <div
                  className="text-5xl text-white mb-3 transition-transform duration-500 ease-in-out group-hover:rotate-[10deg]"
                  style={{
                    transformOrigin: "center",
                    transition: "transform 0.5s ease-in-out",
                  }}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <div className="w-11/12 max-w-4xl mx-auto border border-gray-700 rounded-lg bg-gray-900/50 p-10 flex flex-col items-center text-center mt-10 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h1>
        <p className="mt-3 text-lg sm:text-xl font-light text-gray-300">
          Connect with our expert strategy consulting team for a strategy that brings results.
        </p>

        {/* Contact Button */}
        <button className="mt-6 flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 
          border border-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
        >
          <span className="mr-3">{btn.icon}</span>
          Contact Our Experts
        </button>
      </div>
    </>
  );
}
