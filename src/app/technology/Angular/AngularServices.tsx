'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Customization',
    description:
      'Our vetted team of AngularJS developers ensures that the developed application is customizable, scalable, reliable, and performance-driven, giving it a competitive edge in the market.',
    icon: '/images/angular/adaptability.png'
  },
  {
    title: 'API Development and Integration',
    description:
      'At Ahex, we specialize in providing high-performance and business-centric Angular API services, facilitating seamless communication with the backend and enhancing interaction capabilities.',
    icon: '/images/angular/angular-development.png'
  },
  {
    title: 'Angular UI-UX development',
    description:
      'Being a highly recognized and thriving company in the market, we believe in offering the best-in-class solutions with innovative Angular UI service to deliver exceptional and appealing mobile applications.',
    icon: '/images/angular/ux.png'
  },
  {
    title: 'Upgradation',
    description:
      'Experience the modernization of applications with AngularJS development services to get better features, excellent user interfaces, and enhanced user experiences.',
    icon: '/images/angular/gear.png'
  },
  {
    title: 'Expertise',
    description:
      'The expert team at our Angular company facilitates technical advancements, consistent maintenance, additions, and updates to expedite your business goals.',
    icon: '/images/angular/recommend.png'
  },
  {
    title: 'Users requirements',
    description:
      'The highly qualified and proficient AngularJS developers at Ahex Technologies are well acquainted with various frameworks and technologies to diligently cater to high-end business solutions and users\' requirements.',
    icon: '/images/angular/requirement.png'
  }
];

export default function AngularServices() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our AngularJS Development Services</h2>
        <p className="text-gray-400 mt-2">
          Develop high-quality, driven, interactive web applications with Ahex's well-configured development services to meet the desired business objectives.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-950 border border-slate-800 p-6 rounded-2xl shadow-white flex flex-col items-center text-center hover:bg-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Image src={service.icon} alt={service.title} width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-400 mt-2 font-light">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
