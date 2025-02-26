'use client';
import React from 'react';

const FeatureItem = ({ text, delay }) => (
  <div 
    className="flex items-center space-x-3 bg-gradient-to-r from-blue-900/50 to-black/30 p-4 rounded-lg
    transform hover:translate-x-2 transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-blue-500/20
    border border-blue-500/10 hover:border-blue-500/30 backdrop-blur-sm w-full sm:w-80"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center 
      transform hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-500/30">
      <svg 
        className="w-5 h-5 text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 13l4 4L19 7" 
        />
      </svg>
    </div>
    <span className="text-gray-100 font-medium text-lg hover:text-blue-200 transition-colors duration-300">
      {text}
    </span>
  </div>
);

const ReactFeatures = () => {
  const features = [
    'The Virtual DOM',
    'Two-Way Data Binding',
    'Components',
    'JSX',
    'Conditional Statements',
    'Lifecycle Methods',
    'Declarative',
    'Event Handling'
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-radial from-blue-950 via-blue-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#33045427] rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative max-w-[1000px] w-full px-6 sm:px-10 py-16 text-center">
        {/* Header */}
        <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
          Top  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">React JS</span>  Features 
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full animate-pulse mb-6" />
        <p className="text-blue-100 max-w-2xl mx-auto animate-fade-in text-lg">
          React offers a range of robust features that make it a leading frontend framework. Here are the key highlights:
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mt-12">
          {features.map((feature, index) => (
            <FeatureItem 
              key={feature} 
              text={feature} 
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReactFeatures;
