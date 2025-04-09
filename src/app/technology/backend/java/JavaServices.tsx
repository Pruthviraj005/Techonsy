"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaMobileAlt, FaCloud, FaCogs, FaGamepad, FaSync, FaServer, FaWrench } from "react-icons/fa";

const services = [
  { title: "Java Web Development Services", icon: <FaDesktop />, description: "Expert Java web development for scalable applications." },
  { title: "Java Mobile App Development Services", icon: <FaMobileAlt />, description: "Building high-performance Java mobile applications." },
  { title: "Java API Development Services", icon: <FaServer />, description: "Robust API development with secure integrations." },
  { title: "Java Integration and Migration", icon: <FaSync />, description: "Seamless system integration and migration." },
  { title: "Java Game Development Services", icon: <FaGamepad />, description: "Game development with Java's advanced capabilities." },
  { title: "Java J2EE Development Services", icon: <FaCogs />, description: "Enterprise-grade Java solutions with J2EE." },
  { title: "Java Cloud Development Services", icon: <FaCloud />, description: "Scalable Java cloud applications using modern tools." },
  { title: "Java Maintenance and Support", icon: <FaWrench />, description: "Reliable maintenance and post-deployment support." },
];

const techCategories = [
  "Frameworks", "Front End", "Database", "Deployment", "Apache Foundation", "BI and Reporting", "DevOps", "Testing"
];

const techStack = {
  "Frameworks": ["Spring MVC", "Spring Security", "Spring Boot / Rest API", "JSF", "Hibernate"],
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
    <div className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">
          Enterprise Java Development Services
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          From Java consulting to deployment, we offer end-to-end Java development services, including post-deployment support.
        </p>
        
        {/* Services Section */}
        <div className="relative flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group w-48 h-48 flex flex-col items-center justify-center text-center p-4 rounded-full border-2 border-blue-500 hover:bg-blue-600 hover:scale-110 transition transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={service.title}
            >
              <div className="text-blue-300 text-5xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Technology Stack Section */}
        <h2 className="text-3xl font-bold text-center text-blue-500 mt-16 mb-8">
          Our Battle-Tested Java Technology Stack
        </h2>
        <div className="max-w-5xl mx-auto">
          
          {/* Tech Categories */}
          <div className="flex justify-center gap-8 text-lg font-semibold text-gray-400">
            {techCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className={`cursor-pointer transition duration-200 ${
                  selectedCategory === category ? "text-blue-500" : "hover:text-blue-500"
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Select ${category}`}
              >
                {category}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 border-b border-gray-600"></div>
          
          {/* Technology Details */}
          <div className="mt-6">
            <h3 className="text-2xl text-blue-400 font-bold mb-4">{selectedCategory}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-blue-300">
              {techStack[selectedCategory].map((tech, subIndex) => (
                <motion.div 
                  key={subIndex} 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-blue-500">▪</span> {tech}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
