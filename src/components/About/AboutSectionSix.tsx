"use client";
"";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Initial Consultation",
    description: "We start by understanding your vision, goals, and challenges through in-depth discussions.",
    color: "from-blue-500 to-blue-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Strategic Planning",
    description: "Together, we develop a comprehensive roadmap tailored to your specific needs.",
    color: "from-indigo-500 to-indigo-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Agile Development",
    description: "We implement solutions using modern methodologies for optimal efficiency and flexibility.",
    color: "from-blue-600 to-indigo-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing ensures your solution meets the highest standards of performance.",
    color: "from-indigo-600 to-blue-500",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const AboutSectionSix = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-overlay animate-pulse"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `linear-gradient(${Math.random() * 360}deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.1))`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 max-w-[90vw] mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-6">
            Partnering for Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We believe in a collaborative approach to help you succeed. From initial consultation to final implementation, 
            we work closely with our clients, ensuring clear communication, timely delivery, and optimal results.
          </p>
        </motion.div>

        {/* Partnership Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Connecting Lines */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-700 to-gray-800 transform -translate-y-1/2 z-0"></div>
              )}
              
              {/* Card */}
              <div className="relative p-6 rounded-2xl backdrop-blur-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 z-10">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-2xl transition-opacity duration-300 group-hover:opacity-10`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-[10px] bg-gray-900 flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} p-0.5 opacity-75`}>
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16 max-w-2xl mx-auto"
        >
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-medium">
            Our commitment to quality means we are with you every step of the way, ensuring your objectives are achieved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionSix;
