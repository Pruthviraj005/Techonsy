"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaMobileAlt, FaCloud, FaCogs, FaGamepad, FaSync, FaServer, FaWrench } from "react-icons/fa";

const services = [
  { title: "Java Web Development", icon: <FaDesktop />, description: "Experienced in Java web architecture..." },
  { title: "Java Mobile App Development", icon: <FaMobileAlt />, description: "Professional Java mobile development..." },
  { title: "Java API Development", icon: <FaServer />, description: "Expertise in Java frameworks..." },
  { title: "Java Integration & Migration", icon: <FaSync />, description: "Seamless integration & migration..." },
  { title: "Java Game Development", icon: <FaGamepad />, description: "Creating immersive Java games..." },
  { title: "Java J2EE Development", icon: <FaCogs />, description: "Robust J2EE architecture solutions..." },
  { title: "Java Cloud Development", icon: <FaCloud />, description: "Microservices & cloud-native Java..." },
  { title: "Java Maintenance & Support", icon: <FaWrench />, description: "Ongoing Java application support..." },
];

const techCategories = [
  "Frameworks", "Front End", "Database", "Deployment", "Apache Foundation", "BI and Reporting", "DevOps", "Testing"
];

const techStack = {
  "Frameworks": ["Spring MVC", "Spring Security", "Spring Boot", "JSF", "Hibernate"],
  "Front End": ["React.js", "Angular", "Vue.js"],
  "Database": ["MySQL", "PostgreSQL", "MongoDB"],
  "Deployment": ["Docker", "Kubernetes", "AWS"],
  "Apache Foundation": ["Kafka", "Tomcat", "Spark"],
  "BI and Reporting": ["JasperReports", "Pentaho", "Tableau"],
  "DevOps": ["Jenkins", "Ansible", "Terraform"],
  "Testing": ["JUnit", "Selenium", "TestNG"]
};

export default function JavaServices() {
  const [selectedCategory, setSelectedCategory] = useState("Frameworks");

  return (
    <div className="bg-gray-900 text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-500 mb-6">Enterprise Java Development Services</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          From Java consulting to product deployment, we offer end-to-end Java development services, including post-deployment support.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg border border-blue-500 hover:bg-blue-600 transition transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-blue-300 text-5xl mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-blue-500 mt-16 mb-8">Our Java Technology Stack</h2>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 text-base font-semibold text-gray-400 overflow-x-auto no-scrollbar px-4">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className={`cursor-pointer px-4 py-2 rounded-md transition duration-200 ${
                selectedCategory === category ? "text-blue-500 bg-gray-800" : "hover:text-blue-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>

        <div className="mt-6 border-b border-gray-600"></div>
        <div className="mt-6 px-4">
          <h3 className="text-2xl text-blue-400 font-bold mb-4 text-center">{selectedCategory}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center text-blue-300">
            {techStack[selectedCategory].map((tech, subIndex) => (
              <div key={subIndex} className="flex items-center justify-center gap-2">
                <span className="text-blue-500">▪</span> {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}