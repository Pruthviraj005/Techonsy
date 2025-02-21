'use client';
import React from 'react';

const ServiceCard = ({ icon, title, description, delay }) => (
  <div className={`bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:transform hover:scale-105 
    transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50 
    group animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 
        rounded-lg group-hover:from-blue-500 group-hover:to-blue-700 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
        </svg>
      ),
      title: "ReactJS Web Solutions",
      description: "Get React applications developed by our experts who have an expertise in developing scalable, secure and interactive websites that cater to your business requirements."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "ReactJS Native App Development",
      description: "We offer React Native App Development Services by incorporating the latest tools, technologies, and libraries to develop native mobile applications."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      ),
      title: "ReactJS UI/UX Development",
      description: "Build a user-friendly interface and incredible web applications that can easily hook users. Our creative team of UI/UX designers offers highly user-engaging development services."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 7h-3m3 0v3m0-3L17 9.5M4 17h3m-3 0v-3m0 3l3-2.5M20 17h-3m3 0v-3m0 3l-3-2.5M4 7h3M4 7v3m0-3l3 2.5" />
        </svg>
      ),
      title: "ReactJS Front-End Development",
      description: "Brace yourself to experience the unparalleled ReactJS front-end development services at Ahex. We've developed a strong expertise in this technology."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "ReactJS Component Library Development",
      description: "Our team will aid you in creating and using the component library to develop an excellent React application considering the expected project requirements."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v6m0 12v2M4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24M2 12h6m12 0h2M4.93 19.07l4.24-4.24m5.66-5.66l4.24-4.24" />
        </svg>
      ),
      title: "ReactJS Plugin Development",
      description: "We offer customized plugins and extensions that can be reused for a host of applications, resulting in less development time with an ideal blend of Flux and React."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-white animate-fade-in">
            ReactJS Development Services
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full animate-pulse" />
          <p className="max-w-3xl mx-auto text-gray-300 animate-fade-in">
            Leverage the high-quality, effective ReactJS development services to build powerful and interactive applications, 
            including dynamic web pages, single-page applications, progressive web apps, and more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;