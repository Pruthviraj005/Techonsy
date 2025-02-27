import React from 'react';

const AngularFeatures = () => {
  const features = [
    "Different Filters",
    "Two-Way Data Binding",
    "Controller",
    "Services",
    "Dependency Injection",
    "Routing",
    "Directives",
    "Templates",
    "Virtual Scrolling",
  ];

  return (
    <section className=" text-white py-16 md:py-24 border-y-[0.5px] border-cyan-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-500">
          Features of Angular
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-90 hover:shadow-2xl border border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-200">{feature}</h3>
              </div>
              <p className="mt-4 text-gray-400">
                Angular provides powerful tools and features to enhance your development experience.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AngularFeatures;