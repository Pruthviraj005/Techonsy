'use client';

import { useState } from 'react';
import { Server, Layers, Settings, Code, CheckCircle, Database, BookOpen } from 'lucide-react';

const benefits = [
    { title: 'Scalability', description: 'NestJs provides many useful scalability features such as modular architecture, dependency injection, and progressive web applications. This makes it easier for developers to create apps that are highly reliable and scalable.', icon: <Server size={24} className="text-[#00bcd4]" /> },
    { title: 'Component-Based Architecture', description: 'Developers can easily write, maintain, and reuse code thanks to NestJs\' component-based architecture.', icon: <Layers size={24} className="text-[#00bcd4]" /> },
    { title: 'Rich in Features', description: 'NestJs offers a wide range of features. Microservices, GraphQL, RESTful API, and Web Sockets are all supported. Additionally, it is compatible with well-known libraries like Express, Mongoose, and Passport.', icon: <Settings size={24} className="text-[#00bcd4]" /> },
    { title: 'TypeScript Support', description: 'TypeScript, a superset of JavaScript, is the language used to create NestJs. This enables developers to write maintainable code and use the most recent JavaScript features.', icon: <Code size={24} className="text-[#00bcd4]" /> },
    { title: 'Testability', description: 'Testing applications with NestJs just got a lot easier. Thanks to its testing library, developers can rest easy knowing that their applications are working perfectly and free from any errors.', icon: <CheckCircle size={24} className="text-[#00bcd4]" /> },
    { title: 'High Configurability with ORMs', description: 'Popular ORMs like Sequelize and Mongoose are compatible with NestJs. This makes it simple for developers to navigate and handle their projects\' data.', icon: <Database size={24} className="text-[#00bcd4]" /> },
    { title: 'Clear Documentation', description: 'It is open-source and comes with simple documentation. In addition, the developer community for NestJs is active and always eager to help.', icon: <BookOpen size={24} className="text-[#00bcd4]" /> }
];

export default function BenefitsSection() {
    const [selected, setSelected] = useState(null);

    return (
        <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row py-10 px-4 md:px-6 lg:px-8 bg-[#121826]">
            {/* Sidebar */}
            <div className="md:w-1/3 border-r border-[#374151] p-4 space-y-4">
                {benefits.map((benefit, index) => (
                    <button 
                        key={index} 
                        onClick={() => setSelected(index)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition ${
                            selected === index 
                                ? 'bg-[#00bcd4] text-black shadow-lg shadow-[#42787f]'
                                : 'bg-[#1e293b] text-white hover:bg-[#334155]'
                        }`}
                    >
                        {benefit.icon}
                        <span className="font-semibold">{benefit.title}</span>
                    </button>
                ))}
            </div>

            {/* Content Display */}
            <div className="md:w-2/3 p-6 flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bcd4] to-[#b388eb] mb-6 text-center">
                    Why Choose NestJs?
                </h2>
                {selected !== null && (
                    <div className="bg-[#1e293b] text-white border border-[#00bcd4] rounded-lg p-6 shadow-[#00bcd4] shadow-lg animate-[pulse_2s_infinite] w-full max-w-md">
                        <h3 className="text-xl font-semibold mb-3 text-[#00bcd4]">{benefits[selected].title}</h3>
                        <p className="text-gray-300 text-sm">{benefits[selected].description}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
