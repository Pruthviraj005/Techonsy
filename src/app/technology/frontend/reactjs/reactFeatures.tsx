'use client';
import React from 'react';

const FeatureItem = ({ text, delay }) => (
  <div 
    className="flex items-center space-x-3 bg-gradient-to-r from-blue-900/50 to-black/30 p-4 rounded-lg
    transform hover:translate-x-2 transition-all duration-300 animate-fade-in hover:shadow-lg hover:shadow-blue-500/20
    border border-blue-500/10 hover:border-blue-500/30 backdrop-blur-sm"
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
    <span className="text-gray-100 font-medium text-lg hover:text-blue-200 transition-colors duration-300">{text}</span>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-700/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">
            Features Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">React JS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full animate-pulse mb-6" />
          <p className="text-blue-100 max-w-2xl mx-auto animate-fade-in text-lg">
            React is packed with a number of features that make it suitable for best frontend development framework. 
            Some of the notable features are:
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative">
          {/* Network Visualization */}
          <div className="lg:w-1/2 relative group">
            <div className="animate-float relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-xl blur-2xl 
                group-hover:blur-3xl transition-all duration-700 animate-pulse" />
              <img
                src="/images/technology/feature.png"
                alt="React Features Visualization"
                className="relative rounded-xl shadow-2xl transform transition-all duration-500
                hover:scale-105 group-hover:shadow-blue-500/25 z-10"
              />
              <div className="absolute inset-0 rounded-xl border border-blue-500/20 group-hover:border-blue-500/40 
                transition-colors duration-500 z-20" />
            </div>
          </div>

          {/* Features List */}
          <div className="lg:w-1/2 space-y-4">
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
    </div>
  );
};

export default ReactFeatures;