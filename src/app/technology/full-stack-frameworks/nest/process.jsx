'';

import { motion } from 'framer-motion';
import { Search, CloudRain, Layout, Code, Upload, ShieldCheck, FileText } from 'lucide-react';

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
        <section className="w-full py-16 px-6 bg-gradient-to-br from-[#0A192F] via-[#15182e] to-[#13161c]">
            <div className="max-w-[1000px] mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-[#a855f7]">
                    Our Process
                </h2>
                <div className="relative flex flex-col items-center">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex items-center gap-4 p-5 rounded-lg shadow-lg bg-gray-900 text-white w-full max-w-lg mb-5 border border-transparent ${index % 2 === 0 ? 'self-start' : 'self-end'} transition-all duration-300 hover:shadow-2xl hover:border-blue-500`}
                        >
                            <div className="p-3 bg-gradient-to-r from-[#3b82f6] to-[#a855f7] text-white rounded-full shadow-md">
                                {step.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-blue-400">{step.title}</h3>
                                <p className="text-sm text-gray-300">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
