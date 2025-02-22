'use client';

import { Server, Layers, Settings, Code, CheckCircle, Database, BookOpen } from 'lucide-react';

const benefits = [
    { title: 'Scalability', description: 'NestJs provides many useful scalability features such as modular architecture, dependency injection, and progressive web applications. This makes it easier for developers to create apps that are highly reliable and scalable.', icon: <Server size={48} className="text-[#da2752]" /> },
    { title: 'Component-Based Architecture', description: 'Developers can easily write, maintain, and reuse code thanks to NestJs\' component-based architecture.', icon: <Layers size={48} className="text-[#da2752]" /> },
    { title: 'Rich in Features', description: 'NestJs offers a wide range of features. Microservices, GraphQL, RESTful API, and Web Sockets are all supported. Additionally, it is compatible with well-known libraries like Express, Mongoose, and Passport.', icon: <Settings size={48} className="text-[#da2752]" /> },
    { title: 'TypeScript Support', description: 'TypeScript, a superset of JavaScript, is the language used to create NestJs. This enables developers to write maintainable code and use the most recent JavaScript features.', icon: <Code size={48} className="text-[#da2752]" /> },
    { title: 'Testability', description: 'Testing applications with NestJs just got a lot easier. Thanks to its testing library, developers can rest easy knowing that their applications are working perfectly and free from any errors.', icon: <CheckCircle size={48} className="text-[#da2752]" /> },
    { title: 'High Configurability with ORMs', description: 'Popular ORMs like Sequelize and Mongoose are compatible with NestJs. This makes it simple for developers to navigate and handle their projects\' data.', icon: <Database size={48} className="text-[#da2752]" /> },
    { title: 'Clear Documentation', description: 'It is open-source and comes with simple documentation. In addition, the developer community for NestJs is active and always eager to help.', icon: <BookOpen size={48} className="text-[#da2752]" /> }
];

function Card({ children }) {
    return (
        <div className="bg-[#1a1a1a] text-white border border-[#da2752] rounded-lg p-6 mx-4 md:mx-6 lg:mx-8 relative">
            <div className="absolute inset-0 rounded-lg shadow-[#da2752] shadow-lg animate-[pulse_2s_infinite]"></div>
            <div className="relative z-10">{children}</div>
        </div>
    );
}

function CardContent({ children }) {
    return <div className="flex items-center gap-4">{children}</div>;
}

export default function BenefitsSection() {
    return (
        <section className="w-full flex justify-center py-10 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-[#230B2F] to-[#0B182F]">
            <div className="max-w-[1000px] w-full text-center">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#da2752] to-[#ff8a00] mb-6">
                    Why Choose NestJs?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 shadow-lg">
                    {benefits.map((benefit, index) => (
                        <Card key={index}>
                            <CardContent>
                                <span className="text-3xl">{benefit.icon}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                                    <p className="text-gray-400 text-sm mt-2">{benefit.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
