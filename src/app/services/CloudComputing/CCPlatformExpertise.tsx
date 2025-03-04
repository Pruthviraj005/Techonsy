"use client";
import React from 'react';
import Image from 'next/image';

const CCPlatformExpertise = () => {
  return (
    <div className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Cloud Platform Solutions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16 gap-20 mt-20 place-items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
            <Image 
              src="/images/cloudcomputing/Amazon-Web-Services-AWS.svg" 
              alt="AWS" 
              width={150} 
              height={150} 
              className=' -mt-20 mx-auto' 
            />
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Amazon Web Services (AWS)</h3>
            <p className="text-gray-600 text-center">
              We help you leverage AWS&apos;s robust suite of tools to enhance scalability, performance, and security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
            <Image 
              src="/images/cloudcomputing/Microsoft-Azure.svg" 
              alt="Azure" 
              width={150} 
              height={150} 
              className='-mt-20 mx-auto' 
            />
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Microsoft Azure</h3>
            <p className="text-gray-600 text-center">
              We provide end-to-end Azure solutions, including cloud migration, app modernization, and AI integration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-sm">
            <Image 
              src="/images/cloudcomputing/Google-Cloud-Platform-GCP.svg" 
              alt="GCP" 
              width={150} 
              height={150} 
              className='-mt-20 mx-auto' 
            />
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Google Cloud Platform (GCP)</h3>
            <p className="text-gray-600 text-center">
              We assist with data analytics, machine learning, and scalable cloud storage solutions to drive innovation and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCPlatformExpertise;