"use client";
'';

import { useState } from 'react';
import { FaCloud, FaChartLine, FaCogs, FaNetworkWired, FaServer, FaShieldAlt, FaClock, FaFileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCloud className='text-blue-500 text-4xl' />, 
    title: 'Transform Your Cloud Infrastructure',
    description: 'Upgrade your IT infrastructure with scalable, flexible, and cost-effective cloud solutions tailored to your business needs.'
  },
  {
    icon: <FaChartLine className='text-blue-500 text-4xl' />, 
    title: 'Modernize with Real-Time Data',
    description: 'Harness the power of real-time data analytics to make informed decisions, drive innovation, and stay ahead of the competition.'
  },
  {
    icon: <FaCogs className='text-blue-500 text-4xl' />, 
    title: 'Revolutionize Your Business Operations',
    description: 'Optimize processes, increase efficiency, and reduce costs with cloud-based tools and technologies designed to streamline operations.'
  },
  {
    icon: <FaShieldAlt className='text-blue-500 text-4xl' />, 
    title: 'Enhance Security & Compliance',
    description: 'Protect your data and applications with enterprise-grade security measures and ensure compliance with industry regulations.'
  },
  {
    icon: <FaServer className='text-blue-500 text-4xl' />, 
    title: 'Scalable & Reliable Infrastructure',
    description: 'Achieve high availability and performance with a robust cloud infrastructure that scales according to your needs.'
  },
  {
    icon: <FaNetworkWired className='text-blue-500 text-4xl' />, 
    title: 'Seamless Integration & Connectivity',
    description: 'Integrate cloud services seamlessly with your existing systems to enhance connectivity and collaboration across teams.'
  },
  {
    icon: <FaClock className='text-blue-500 text-4xl' />, 
    title: 'Efficiency and Quick Delivery',
    description: 'Drive faster time-to-market and improve operational efficiency with cloud-based solutions that enable rapid development, deployment, and scalability.'
  },
  {
    icon: <FaFileAlt className='text-blue-500 text-4xl' />, 
    title: 'HIPAA Compliant Cloud',
    description: 'To meet regulatory requirements and industry standards, ensure the security and privacy of sensitive healthcare data with HIPAA-compliant cloud security consulting and services.'
  }
];

export default function CCBenefits() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(services.length / itemsPerPage);

  const handleNext = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <div className='bg-gray-900 text-white py-16 px-6 md:px-20'>
      <div className='text-center mb-10'>
        <h2 className='text-3xl md:text-5xl font-bold text-slate-100'>Benefits of Cloud Services</h2>
        <p className='text-gray-400 mt-2'>Transform your infrastructure, revolutionize operations, and ensure compliance.</p>
      </div>

      <div className='relative flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden'>
        {services.slice(page * itemsPerPage, (page + 1) * itemsPerPage).map((service, i) => (
          <div
            key={i}
            className='bg-gray-800 p-6 rounded-2xl shadow-lg max-w-sm text-center'
          >
            <div className='flex justify-center mb-4'>{service.icon}</div>
            <h3 className='text-xl font-semibold text-slate-100'>{service.title}</h3>
            <p className='text-gray-400 mt-4 font-light'>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className='flex items-center justify-center gap-4 mt-6'>
        <button onClick={handlePrev} className='p-2 bg-gray-700 hover:bg-blue-500 rounded-full transition'>
          &#8592;
        </button>
        <span className='text-gray-400'>{`${page + 1} of ${totalPages}`}</span>
        <button onClick={handleNext} className='p-2 bg-gray-700 hover:bg-blue-500 rounded-full transition'>
          &#8594;
        </button>
      </div>
    </div>
  );
}
