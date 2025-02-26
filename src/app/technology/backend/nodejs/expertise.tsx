'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Code, Database, Server, Cloud } from 'lucide-react';

const categories = [
    { name: 'Frontend Frameworks', icon: <Code size={24} className="text-[#00bcd4]" /> },
    { name: 'Backend Frameworks', icon: <Server size={24} className="text-[#00bcd4]" /> },
    { name: 'Database', icon: <Database size={24} className="text-[#00bcd4]" /> },
    { name: 'DevOps & Deployment', icon: <Cloud size={24} className="text-[#00bcd4]" /> }
];

const techData = {
    'Frontend Frameworks': [
        { name: 'React', image: '/images/technology/backend/nodejs/icons/react-icon.svg' },
        { name: 'Vue.js', image: '/images/technology/backend/nodejs/icons/vue-icon.svg' },
        { name: 'Angular', image: '/images/technology/backend/nodejs/icons/angular-icon.svg' }
    ],
    'Backend Frameworks': [
        { name: 'Express.js', image: '/images/technology/backend/nodejs/icons/express-icon.svg' },
        { name: 'NestJS', image: '/images/technology/backend/nodejs/icons/angular-icon.svg' },
        { name: 'Fastify', image: '/images/technology/backend/nodejs/icons/fastify-icon.svg' }
    ],
    'Database': [
        { name: 'MySQL', image: '/images/technology/backend/nodejs/icons/mysql-icon.svg' },
        { name: 'MongoDB', image: '/images/technology/backend/nodejs/icons/mongo-icon.svg' },
        { name: 'PostgreSQL', image: '/images/technology/backend/nodejs/icons/post-icon.svg' }
    ],
    'DevOps & Deployment': [
        { name: 'Docker', image: '/images/technology/backend/nodejs/icons/docker-icon.svg' },
        { name: 'Kubernetes', image: '/images/technology/backend/nodejs/icons/kubernates-icon.svg' },
        { name: 'AWS', image: '/images/technology/backend/nodejs/icons/aws-icon.svg' }
    ]
};

export default function Expertise() {
    const [selected, setSelected] = useState('Database');

    return (
        <section className="w-full max-w-[1000px] mx-auto flex flex-col md:flex-row py-10 px-4 md:px-6 lg:px-8 bg-[#121826] text-left">
            {/* Sidebar */}
            <div className="md:w-1/3 border-r border-[#374151] p-4 space-y-4">
                {categories.map((category) => (
                    <button 
                        key={category.name} 
                        onClick={() => setSelected(category.name)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition ${
                            selected === category.name
                                ? 'bg-[#00bcd4] text-black shadow-lg shadow-[#00bcd4]'
                                : 'bg-[#1e293b] text-white hover:bg-[#334155]'
                        }`}
                    >
                        {category.icon}
                        <span className="font-semibold">{category.name}</span>
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="md:w-2/3 p-6 flex flex-col items-start justify-center text-left">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#b388eb] mb-6">
                    Node.js Technology Expertise
                </h2>
                {selected && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-md">
                        {techData[selected].map((tech) => (
                            <div key={tech.name} className="flex flex-col items-center">
                                <Image src={tech.image} alt={tech.name} width={64} height={64} className="w-16 h-16 mb-2" />
                                <p className="text-white text-sm font-medium">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
