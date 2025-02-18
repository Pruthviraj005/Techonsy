// components/ServicesSection.js

import Image from 'next/image';
import React from 'react';

const services = [
  { title: 'E-COMMERCE', imageSrc: '/images/iot/ecomm.jpg' },
  { title: 'ON DEMAND SOLUTIONS', imageSrc: '/images/iot/on-demand.jpg' },
  { title: 'SOCIAL NETWORKING', imageSrc: '/images/iot/social.jpg' },
  { title: 'HEALTHCARE', imageSrc: '/images/iot/health.jpg' },
  { title: 'EMERGING TECH', imageSrc: '/images/iot/emerging.jpg' },
  { title: 'FINTECH', imageSrc: '/images/iot/fintech.jpg' },
  { title: 'EDUCATION', imageSrc: '/images/iot/education.jpg' },
  { title: 'TOURS AND TRAVEL', imageSrc: '/images/iot/tour.jpg' },
  { title: 'WELLNESS AND FITNESS', imageSrc: '/images/iot/wellness.jpg' },
  { title: 'TRANSPORT AND LOGISTICS', imageSrc: '/images/iot/trans.jpg' },
];

export default function IotIndustry(){
  return (
    <section className="bg-slate-950 py-20">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">What We Do Best</h2>
        <p className="text-lg text-gray-500">
          We Provide Outsourced IT Services For All Business
        </p>
      </div>

      <div className=" w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
        {services.map((service) => (
          <div key={service.title} className="hover:bg-gray-900 p-4 rounded-lg">
            <Image src={service.imageSrc} alt={service.title} className="w-32 h-32 mx-auto rounded-lg" width={200} height={200} />
            <div className="p-4">
              <h3 className="text-base font-semibold text-center text-white">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
