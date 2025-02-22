'use client';

import { motion } from 'framer-motion';
import { Search, CloudRain, Layout, Code, BarChart, Upload, ShieldCheck, FileText } from 'lucide-react';

const processSteps = [
    { title: 'Product Analysis', icon: <Search size={24} />, description: 'Researching market needs and identifying opportunities.' },
    { title: 'Feature Management', icon: <CloudRain size={24} />, description: 'Prioritizing and planning features for development.' },
    { title: 'Mockup Design', icon: <Layout size={24} />, description: 'Creating wireframes and UI mockups for the product.' },
    { title: 'Product Development', icon: <Code size={24} />, description: 'Building the core functionalities and components.' },
    { title: 'Product Deployment', icon: <Upload size={24} />, description: 'Deploying the product for users and stakeholders.' },
    { title: 'Product Testing', icon: <ShieldCheck size={24} />, description: 'Ensuring quality with testing and debugging.' },
    { title: 'Monitoring and Reporting', icon: <FileText size={24} />, description: 'Tracking performance and gathering user feedback.' }
];

export default function ProcessFlow() {
    return (
        <section className="w-full max-w-5xl mx-auto py-10 px-4 md:px-6 lg:px-8  text-white">
            <h2 className="text-4xl font-bold text-center mb-8 text-red-500">Our Process</h2>
            <div className="relative flex flex-col items-center">
                {processSteps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className={`flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gray-900 text-white w-full max-w-lg mb-4 border border-red-600 ${index % 2 === 0 ? 'self-start' : 'self-end'}`}
                    >
                        <div className="p-3 bg-red-600 text-white rounded-full">
                            {step.icon}
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-red-400">{step.title}</h3>
                            <p className="text-sm text-gray-300">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}