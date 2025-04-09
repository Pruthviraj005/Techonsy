"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Package, Radio, Zap, Database, Shield, Cpu, Code, Network } from "lucide-react";

const expertiseAreas = [
    { id: "npm", name: "Node Package Manager (NPM)", description: "A robust package manager for managing Node.js libraries and dependencies.", icon: Package },
    { id: "async", name: "Asynchronous Model", description: "Handles multiple operations concurrently for efficient performance.", icon: Radio },
    { id: "speed", name: "Exceptional Speed", description: "Optimized for high-speed execution with V8 JavaScript engine.", icon: Zap },
    { id: "db", name: "Faster Database Management", description: "Seamless integration with SQL and NoSQL databases for efficient data handling.", icon: Database },
    { id: "security", name: "Security", description: "Built-in security features and best practices to safeguard applications.", icon: Shield },
    { id: "memory", name: "Low Memory Footprint", description: "Optimized resource utilization for running lightweight applications.", icon: Cpu },
    { id: "oop", name: "OOP in TypeScript", description: "Enhancing Node.js with TypeScript’s object-oriented programming features.", icon: Code },
    { id: "event-loop", name: "Single-threaded Event Loop Architecture", description: "Uses event-driven architecture for handling concurrent requests.", icon: Network },
];

export default function NodeJsSolutionExpertise() {
    const [selected, setSelected] = useState(null);

    const handleSelect = (id) => setSelected(selected === id ? null : id);

    return (
        <section className="relative w-full max-w-[1000px] mx-auto py-16 px-6 bg-[#121826] overflow-hidden text-white text-center">
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="150" cy="100" r="80" fill="#00bcd4" opacity="0.3" />
                    <circle cx="650" cy="300" r="100" fill="#00bcd4" opacity="0.3" />
                    <circle cx="400" cy="500" r="60" fill="#00bcd4" opacity="0.3" />
                    <path d="M200,400 Q400,200 600,400" stroke="#00bcd4" strokeWidth="2" fill="transparent" opacity="0.2"/>
                </svg>
            </div>

            {/* Section Heading */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-white mb-10">
                Our Node.js Solution Development Expertise
            </h2>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                {expertiseAreas.map(({ id, name, description, icon: Icon }) => (
                    <motion.div
                        key={id}
                        onClick={() => handleSelect(id)}
                        onMouseEnter={() => setSelected(id)}
                        onMouseLeave={() => setSelected(null)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`flex flex-col items-start bg-[#1e293b] p-6 rounded-lg shadow-lg transition-all cursor-pointer w-full 
                            ${selected === id ? "shadow-[#00bcd4] scale-105" : "hover:shadow-[#00bcd4]"}`}
                        aria-label={name}
                    >
                        <div className="flex items-center w-full space-x-4">
                            <Icon size={24} className="text-[#00bcd4]" />
                            <h3 className="text-lg font-semibold text-[#00bcd4] text-left">{name}</h3>
                        </div>
                        {selected === id && (
                            <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-300 text-sm mt-2 text-left w-full"
                            >
                                {description}
                            </motion.p>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
