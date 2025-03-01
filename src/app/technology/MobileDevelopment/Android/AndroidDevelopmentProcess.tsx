"use client";
'';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineLightBulb, HiOutlineQrCode, HiOutlineShieldCheck, HiOutlineRocketLaunch } from 'react-icons/hi2';

export default function AndroidDevelopmentProcess() {
  const [openSection, setOpenSection] = useState(null);

  const sections = [
    {
      id: 1,
      title: 'Consulting and Strategy',
      icon: <HiOutlineLightBulb className="text-teal-500 text-3xl" />,
      content: [
        'Market Scoping: Identifying key market trends and opportunities.',
        'Proof-of-Concept: Validating your app idea before full-scale development.',
        'Product Objectives: Defining clear goals and success metrics.',
        'Project Schedule: Planning milestones and deliverables for efficient execution.',
      ],
    },
    {
      id: 2,
      title: 'Design and Development',
      icon: <HiOutlineQrCode className="text-teal-500 text-3xl" />,
      content: [
        'UI/UX Design: Crafting intuitive and visually appealing interfaces.',
        'Prototyping: Building interactive mockups for early testing.',
        'Frontend & Backend Development: Developing scalable and high-performance applications.',
        'API Integrations: Seamless connectivity with third-party services.',
      ],
    },
    {
      id: 3,
      title: 'Security and Analytics',
      icon: <HiOutlineShieldCheck className="text-teal-500 text-3xl" />,
      content: [
        'Data Encryption: Protecting sensitive user data.',
        'Authentication & Authorization: Implementing secure login mechanisms.',
        'Performance Analytics: Tracking user engagement and app performance.',
        'Threat Monitoring: Identifying and mitigating security risks.',
      ],
    },
    {
      id: 4,
      title: 'Deployment and Maintenance',
      icon: <HiOutlineRocketLaunch className="text-teal-500 text-3xl" />,
      content: [
        'App Store Submission: Ensuring compliance with Play Store guidelines.',
        'Bug Fixes & Updates: Regular maintenance for improved performance.',
        'Feature Enhancements: Rolling out new features based on user feedback.',
        'Ongoing Support: Providing technical assistance post-launch.',
      ],
    },
  ];

  return (
    <div className='w-full'>
      <section className=" px-6 md:px-12 lg:px-0 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-50 leading-tight lg:mt-28">
              A Proven <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
                Development
              </span> Process You Can Trust
            </h2>
            <p className="text-gray-300 mt-4 text-lg">
              Our flexible, iterative approach ensures transparency at every stage, providing a clear roadmap with detailed milestones and deliverables from start to finish.
            </p>
          </div>

          {/* Right Content - Accordion */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div 
                key={section.id} 
                className="border border-gray-700 rounded-lg shadow-lg bg-gray-900 bg-opacity-50 backdrop-blur-lg p-4 transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full text-left p-2 hover:bg-gray-800 rounded-md transition-all duration-300"
                  onClick={() => setOpenSection(openSection === section.id ? null : section.id)}
                >
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <span className="text-lg font-semibold text-gray-200">{section.title}</span>
                  </div>
                  {openSection === section.id ? <FaChevronUp className="text-teal-400" /> : <FaChevronDown className="text-teal-400" />}
                </button>

                {openSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.4 }}
                    className="mt-3 bg-gray-800 bg-opacity-80 p-4 rounded-md"
                  >
                    <ul className="list-none space-y-3">
                      {section.content.map((item, index) => (
                        <li 
                          key={index} 
                          className="flex items-start gap-3 text-gray-300 text-md leading-relaxed"
                        >
                          <span className="w-2 h-2 bg-teal-400 rounded-full mt-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
