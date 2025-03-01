"use client"; // Required for Next.js (App Router)

import { motion } from "framer-motion";
import Image from "next/image";

const testCategories = [
  ["Functional Testing", "Compatibility Testing"],
  ["Cross-Platform Testing", "UI & Usability Testing"],
  ["Security Testing", "Load and Stress Testing"],
  ["Configuration Testing", "Acceptance Testing"],
  ["Data Migration Testing", "Integration Testing"],
];

export default function TestingPhase() {
  return (
    <section className=" text-white py-16 px-6 relative border-b-[0.5px] border-cyan-950">

        
        <div className="max-w-6xl mx-auto text-center">
            
            {/* Title */}
            <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            Our Testing Phase
            </motion.h2>

            {/* Subtitle */}
            <motion.p
            className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            >
            Our dedicated team of testers adheres to various testing methods to deliver the 
            best analytical-driven solutions.
            </motion.p>

            <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left - Image */}
            <motion.div
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Image
                src="/images/services/quality_assurance/image copy.png"
                width={500}
                height={500}
                alt="Testing Phase Illustration"
                className="max-w-[80%] md:max-w-[100%]"
                />
            </motion.div>

            {/* Right - Testing Categories */}
            <motion.div
                className="w-full md:w-3/4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                >
                {testCategories.flat().map((test, index) => (
                    <motion.div
                    key={index}
                    className="relative group bg-[#161B22] bg-opacity-90 backdrop-blur-xl text-white text-center 
                                py-2 px-8 rounded-3xl shadow-2xl border border-cyan-800 transition-all 
                                hover:scale-[1.08] hover:border-cyan-300 hover:shadow-blue-500/60"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    >
                    {/* 🔥 Neon Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-pink-500/10 
                                    blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                    {/* 🌟 Interactive Animated Borders */}
                    <div className="absolute inset-0 border border-transparent rounded-3xl 
                                    group-hover:border-cyan-400 group-hover:shadow-lg transition-all duration-300" />

                    {/* ✨ Content with Soft Text Glow */}
                    <span className="relative text-lg font-semibold tracking-wide text-white 
                                    group-hover:text-cyan-300 transition-all duration-300">
                        {test}
                    </span>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </div>
    </section>
  );
}