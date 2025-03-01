"use client";
''
import React from 'react';
import Image from 'next/image';

const ConsultingApproach = () => {
  return (
    <div className='bg-gradient-to-r from-black via-blue-900 to-blue-700'>
      <div className="text-white py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center min-h-screen w-11/12 mx-auto">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Our Approach to IT Consulting
        </h2>
        <p className="text-lg text-gray-200">
          We help businesses innovate and stay ahead by modernizing legacy systems and integrating customer-focused, value-driven solutions. Our goal is to optimize costs and enhance customer satisfaction through future-ready technology.

        </p>
        <p className="text-lg text-gray-300">
          We help businesses innovate and stay ahead by modernizing legacy systems and integrating customer-focused, value-driven solutions. Our goal is to optimize costs and enhance customer satisfaction through future-ready technology.

        </p>

      </div>
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src="/images/consulting-services/consulting.png"
          alt="Consulting Transformation"
          width={800}
          height={400}
          className="max-w-full h-auto"
        />
      </div>
    </div>
    </div>
  );
};

export default ConsultingApproach;
