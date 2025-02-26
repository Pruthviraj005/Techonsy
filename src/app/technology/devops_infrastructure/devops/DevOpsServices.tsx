'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaServer, FaCogs, FaShieldAlt, FaDocker, FaCodeBranch } from 'react-icons/fa';

const services = [
  {
    icon: <FaCogs className="text-4xl text-blue-400" />, 
    title: "DevOps Consulting and Training",
    description: "Through comprehensive Cloud Automation and Architecture Assessments, coupled with expert guidance on adopting pivotal DevOps platforms like Chef, Terraform, and Docker, we pave the way for a seamless, efficient development process."
  },
  {
    icon: <FaServer className="text-4xl text-purple-400" />, 
    title: "Infrastructure Automation",
    description: "Script your environments end-to-end, from OS installations to server configurations, to ensure seamless communication and operation."
  },
  {
    icon: <FaCodeBranch className="text-4xl text-green-400" />, 
    title: "DevOps Factory Solution",
    description: "Automate your software delivery lifecycle to foster better collaboration and monitoring, thus accelerating delivery and reinforcing security."
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-400" />, 
    title: "Automated Security and Compliance",
    description: "With our automated suite, integrate security and run compliance audits adhering to industry standards like PCI, HIPAA, and FEDRAMP. Our solutions not only identify vulnerabilities but also automate the remediation workflow to mitigate risks effectively."
  },
  {
    icon: <FaDocker className="text-4xl text-yellow-400" />, 
    title: "Containers and Microservices",
    description: "Adopt a modular approach to application development with our containers and microservices expertise. We enable you to develop, test, and scale features independently, increasing your agility and scalability."
  }
];

export default function DevOpsInfographic() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section 
      ref={sectionRef} 
      className="bg-gradient-to-r from-[#172946] to-[#000d25] py-16 px-4 sm:px-6 md:px-16 text-white w-full border-y-[0.5px] border-y-cyan-500 relative"
    >
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text"
        >
          Our Key DevOps Consulting Service Offerings
        </motion.h2>

        <div className="relative ml-6 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className={`relative pl-8 pb-10 ${index !== services.length - 1 ? "border-l-4 border-blue-800" : ""}`}
            >
              <div className="border-b-slate-400 border-b-[3px] border-r-[3px] border-r-slate-400 p-4 rounded-2xl shadow-white ">
                <div className="absolute -left-8 top-0 w-16 h-16 flex items-center justify-center border-[1px] border-slate-500 bg-blue-950 text-white rounded-full shadow-lg shadow-slate-500 ">
                  <div className="z-1">{service.icon}</div>
                </div>
                <div className="my-2 mt-2">
                  <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
                  <p className="text-gray-300 mt-2 ml-8">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}