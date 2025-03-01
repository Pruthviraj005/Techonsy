"use client";
'';

import { motion } from 'framer-motion';
import { FaUsers, FaTools, FaRocket, FaChartLine } from 'react-icons/fa';

export default function AndroidAdvantage() {
  const features = [
    {
      icon: <FaUsers className="text-teal-400 text-5xl" />,
      title: 'Wider Reach, Bigger Impact',
      description:
        'With over 3 billion devices worldwide, Android offers 3X more exposure than iOS, helping your app reach a massive audience and boost downloads.',
    },
    {
      icon: <FaTools className="text-teal-400 text-5xl" />,
      title: 'Cost-Effective Development',
      description:
        ' Android development is more affordable, thanks to open-source tools and resources that make building and maintaining apps budget-friendly.',
    },
    {
      icon: <FaRocket className="text-teal-400 text-5xl" />,
      title: 'Seamless Updates & Enhancements',
      description:
        'Easily roll out fixes and upgrades, ensuring quick responses to user feedback, minimal downtime, and a better user experience',
    },
    {
      icon: <FaChartLine className="text-teal-400 text-5xl" />,
      title: 'Faster Market Launch',
      description: 'With a streamlined review process, Google Play approves apps in just 7 hours, allowing you to go live and reach users faster.',
    },
  ];

  return (
    <div className='bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
      <section className="max-w-6xl mx-auto px-6 lg:px-0  py-12 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12 tracking-wide">
          Empowering Businesses Through <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">Android Apps</span>
        </h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center text-center border border-white/20 hover:border-teal-400 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-gray-300 mt-3 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
