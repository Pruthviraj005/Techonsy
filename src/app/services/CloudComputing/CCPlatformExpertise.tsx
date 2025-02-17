import React from 'react';
import Image from 'next/image';

const CCPlatformExpertise = () => {
  return (
    <div className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Our Cloud Platform Expertise
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Upgrade your operations performance, flexibility, and cost-effectiveness with our cloud consultation services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-20">

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Software-As-A-Service-SaaS.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Software As A Service (SaaS)</h3>
            <p className="text-gray-600">
              Elevate your business operations, lower your expenses, and innovate quickly with the latest tools and technologies.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Platform-As-A-Service-PaaS.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Platform As A Service (PaaS)</h3>
            <p className="text-gray-600">
              Streamline processes and accelerate time-to-market with a comprehensive platform to build, deploy, and manage apps.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Private-Cloud-Solutions.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Private Cloud Solutions</h3>
            <p className="text-gray-600">
              Migrate your essential apps to a secure and fully-customized cloud system, ensuring compliance and scalability.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Infrastructure-As-A-Service-IaaS.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Infrastructure As A Service (IaaS)</h3>
            <p className="text-gray-600">
              Employ flexible and scalable infrastructure solutions, seamless resource provisioning, management, and optimization.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Amazon-Web-Services-AWS.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Amazon Web Services (AWS)</h3>
            <p className="text-gray-600">
              We help you leverage AWS&apos;s robust suite of tools to enhance scalability, performance, and security.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Microsoft-Azure.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Microsoft Azure</h3>
            <p className="text-gray-600">
              We provide end-to-end Azure solutions, including cloud migration, app modernization, and AI integration.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image src="/images/cloudcomputing/Google-Cloud-Platform-GCP.svg" alt="" width={150} height={150} className='-mt-20 mx-auto' />
            <h3 className="text-xl font-bold text-gray-800 mb-4">Google Cloud Platform (GCP)</h3>
            <p className="text-gray-600">
            We assist with data analytics, machine learning, and scalable cloud storage solutions to drive innovation and growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CCPlatformExpertise;