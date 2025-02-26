"use client";

import { motion } from "framer-motion";
import { FaCloud, FaDollarSign, FaUsers, FaSync } from "react-icons/fa";

const expertiseSteps = [
    {
        icon: <FaCloud className="text-blue-500 text-4xl" />, 
        title: 'Expertise in Azure Ecosystem',
        description: 'With extensive experience as Microsoft Gold Partners, we bring industry-leading practices to design and implement high-performance Azure cloud solutions.',
        color: 'blue'
    },
    {
        icon: <FaDollarSign className="text-green-500 text-4xl" />, 
        title: 'Scalable Pricing Models',
        description: 'Adapt engagement models to your evolving business needs, with milestone-based payments to maintain budget control and streamline the process.',
        color: 'blue'
    },
    {
        icon: <FaUsers className="text-purple-500 text-4xl" />, 
        title: 'Dedicated, Flexible Teams',
        description: 'Manage time zone differences with ease while allocating scalable resources tailored to your project’s requirements for maximum efficiency.',
        color: 'blue'
    },
    {
        icon: <FaSync className="text-yellow-500 text-4xl" />, 
        title: 'Agile and Continuous Delivery',
        description: 'Leverage an agile approach to deliver ongoing development, integrate feedback swiftly, and ensure a fast time-to-market with reusable IP and frameworks.',
        color: 'blue'
    }
];

export default function AzureExpertiseTimeline() {
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto text-white">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text text-center"
            >
                Unlock the Power of Azure with Expert Development Services
            </motion.h2>
            
            <div className="relative flex flex-col items-center">
                <div className="absolute w-1 bg-gray-500 top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
                
                {expertiseSteps.map((step, index) => (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`flex items-center w-full md:w-2/3 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                        <div className="w-1/2 flex justify-center">{step.icon}</div>
                        <div className={`w-1/2 p-6 rounded-lg shadow-lg border-2 border-${step.color}-500 bg-opacity-30 backdrop-blur-lg`} style={{ backgroundColor: `${step.color === 'blue' ? '#1E3A8A' : step.color === 'green' ? '#166534' : step.color === 'purple' ? '#6B21A8' : '#CA8A04'}` }}>
                            <h3 className="text-xl font-semibold mb-2 text-${step.color}-400">{step.title}</h3>
                            <p className="text-gray-300 text-sm">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}