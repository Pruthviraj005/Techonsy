import React from 'react';

const ReactServices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Get React Application Developed By Our Experts
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2 relative group animate-fade-in">
            <div className="relative transform transition-all duration-500 hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" />
              <img 
                src="/images/technology/reactjs.png"
                alt="React Development"
                className="relative rounded-lg shadow-2xl"
              />
              
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 animate-fade-in">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-blue-300 mb-4">
                Are You looking about ReactJS Development Services Company in USA?
              </p>
              <p className="text-gray-300">
                ReactJS is an open-source, declarative, dynamic Javascript front-end library. 
                Its JavaScript library is used to create reusable UI components. It was 
                developed by Facebook. The primary intent behind React was to build a UI that 
                could enhance the speed of applications.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="text-xl text-blue-300 font-semibold mb-4">
                At Ahex, we have expertise in delivering the best React development services.
              </h3>
              <p className="text-gray-300">
                We have an ardent team of proficient developers who are efficient at 
                incorporating the latest technologies and converting them into business-oriented 
                applications. Our developers are updated on trending technologies and market 
                niches and implement advanced techniques, tools, and development methods to 
                deliver the project within stipulated deadlines.
              </p>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg 
              transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactServices;