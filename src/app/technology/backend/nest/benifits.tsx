'use client';

import { Server, Layers, Settings, Code, CheckCircle, Database, BookOpen } from 'lucide-react';

const benefits = [
    { title: 'Scalability', description: 'NestJs provides many useful scalability features such as modular architecture, dependency injection, and progressive web applications.', icon: <Server size={48} className="text-blue-500" /> },
    { title: 'Component-Based Architecture', description: 'Developers can easily write, maintain, and reuse code thanks to NestJs\' component-based architecture.', icon: <Layers size={48} className="text-green-500" /> },
    { title: 'Rich in Features', description: 'NestJs offers a wide range of features: Microservices, GraphQL, RESTful API, and WebSockets are all supported.', icon: <Settings size={48} className="text-yellow-500" /> },
    { title: 'TypeScript Support', description: 'TypeScript, a superset of JavaScript, is the language used to create NestJs. This enables developers to write maintainable code.', icon: <Code size={48} className="text-purple-500" /> },
    { title: 'Testability', description: 'Testing applications with NestJs is easier thanks to its built-in testing library, ensuring applications work perfectly.', icon: <CheckCircle size={48} className="text-red-500" /> },
    { title: 'High Configurability with ORMs', description: 'Popular ORMs like Sequelize and Mongoose are compatible with NestJs, making data management easier.', icon: <Database size={48} className="text-cyan-500" /> },
    { title: 'Clear Documentation', description: 'NestJs is open-source with simple documentation, and it has an active developer community always eager to help.', icon: <BookOpen size={48} className="text-orange-500" /> }
];

function Card({ children }) {
    return (
        <div className="bg-gray-900 text-white border border-gray-700 rounded-lg p-6 mx-4 md:mx-6 lg:mx-8 relative shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative z-10">{children}</div>
        </div>
    );
}

function CardContent({ children }) {
    return <div className="flex items-center gap-4">{children}</div>;
}

export default function Benifits() {
    return (
        <section className="w-full flex justify-center py-10 px-4 md:px-6 lg:px-8">
            <div className="max-w-[1000px] w-full text-center">
                <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
                    Why Choose NestJs?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                        <Card key={index}>
                            <CardContent>
                                <span className="text-3xl">{benefit.icon}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-300">{benefit.title}</h3>
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
