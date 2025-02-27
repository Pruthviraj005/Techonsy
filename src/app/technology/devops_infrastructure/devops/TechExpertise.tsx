'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Categories with logos
const categories = [
  { 
    name: "DEVELOP", 
    logos: [
      "/images/technology/devops_infrastructure/devops/logo/atlassian.png",
      "/images/technology/devops_infrastructure/devops/logo/jenkins.png",
      "/images/technology/devops_infrastructure/devops/logo/cruisecontrol.png",
      "/images/technology/devops_infrastructure/devops/logo/vmware.png",
      "/images/technology/devops_infrastructure/devops/logo/github.png"
    ] 
  },
  { name: "TEST", 
    logos: [
        "/images/technology/devops_infrastructure/devops/logo/se.png",
         "/images/technology/devops_infrastructure/devops/logo/junit.png",
        "/images/technology/devops_infrastructure/devops/logo/testlink.png",
        "/images/technology/devops_infrastructure/devops/logo/docker.png"
    ] 
 },
  { name: "CONFIGURE & DEPLOY", 
    logos: [
        "/images/technology/devops_infrastructure/devops/logo/harness.png",
        "/images/technology/devops_infrastructure/devops/logo/chef.png",
        "/images/technology/devops_infrastructure/devops/logo/kubernetes.png",
        "/images/technology/devops_infrastructure/devops/logo/puppet.png",
        "/images/technology/devops_infrastructure/devops/logo/redhat.png"
    ] 
},
  { name: "OPERATE", 
    logos: [
        "/images/technology/devops_infrastructure/devops/logo/elasticsearch.png",
        "/images/technology/devops_infrastructure/devops/logo/appdynamics.png",
        "/images/technology/devops_infrastructure/devops/logo/sumo.png"
    ] 
},
];

const infrastructureLogos = [
  "/images/technology/devops_infrastructure/devops/logo/azure.png",
  "/images/technology/devops_infrastructure/devops/logo/amazon_web.svg",
  "/images/technology/devops_infrastructure/devops/logo/google_cloud.png",
  "/images/technology/devops_infrastructure/devops/logo/vmware2.png",
  "/images/technology/devops_infrastructure/devops/logo/openstack.png"  ,
];

export default function TechExpertise() {
  const [activeTab, setActiveTab] = useState("DEVELOP");

  return (
    <section className="bg-gradient-to-r from-[#172946] to-[#000d25] text-white py-12 px-4 sm:px-6 md:px-12">
        <div className='max-w-6xl mx-auto'>

        
      {/* Title */}
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Platforms & Technology Expertise
                </h2>
            </div>

            {/* Tab Navigation */}
            <div className="mt-8 flex flex-wrap justify-center border-b border-gray-600">
                {categories.map((category) => (
                <button
                    key={category.name}
                    onClick={() => setActiveTab(category.name)}
                    className={`px-4 py-2 text-sm md:text-lg font-semibold transition-colors ${
                    activeTab === category.name
                        ? "border-b-2 border-white text-white"
                        : "text-gray-400"
                    }`}
                >
                    {category.name}
                </button>
                ))}
            </div>

            {/* Logos Section */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center mx-auto"
                >
                    {categories
                    .find((category) => category.name === activeTab)
                    ?.logos.map((logo, index) => (
                        <div key={index} className="bg-slate-300 rounded-lg w-full max-w-[150px] h-16 flex items-center justify-center mx-auto shadow-md">
                        <Image src={logo} alt="Tech Logo" width={130} height={50} className="p-2" />
                        </div>
                    ))}
                </motion.div>

            {/* Infrastructure Section */}
            <div className="mt-10 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-white">Infrastructure</h3>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                {infrastructureLogos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                    <Image src={logo} alt="Infrastructure Logo" width={120} height={60} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
}