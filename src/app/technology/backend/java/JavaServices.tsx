'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaMobileAlt, FaCloud, FaCogs, FaGamepad, FaSync, FaServer, FaWrench } from "react-icons/fa";

const services = [
  { title: "Java Web Development Services", icon: <FaDesktop />, description: "Our Java engineers are experienced in Java web architecture..." },
  { title: "Java Mobile App Development Services", icon: <FaMobileAlt />, description: "Our professional team of Java developers has vast experience..." },
  { title: "Java API Development Services", icon: <FaServer />, description: "Our Java developers are familiar with most of the frameworks..." },
  { title: "Java Integration and Migration", icon: <FaSync />, description: "Our team is ready to integrate and migrate your existing business..." },
  { title: "Java Game Development Services", icon: <FaGamepad />, description: "Our Java programmers have a strong experience in developing..." },
  { title: "Java J2EE Development Services", icon: <FaCogs />, description: "We utilize the robust J2EE architecture to manage your business..." },
  { title: "Java Cloud Development Services", icon: <FaCloud />, description: "We can create microservices-based architectures quickly..." },
  { title: "Java Maintenance and Support", icon: <FaWrench />, description: "Our skilled Java engineers assist you with setting up and..." },
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
        <h2 className="text-4xl font-bold text-center text-blue-500 mb-8">Enterprise Java Development Services</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          From Java consulting to product deployment, we offer end-to-end Java development services, including post-deployment support.
        </p>
        <div className="relative flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group w-48 h-48 flex flex-col items-center justify-center text-center p-4 rounded-full border-2 border-blue-500 hover:bg-blue-600 hover:scale-110 transition transform duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-blue-300 text-5xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </motion.div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center text-blue-500 mt-16 mb-8">Our Battle-Tested Java Technology Stack</h2>
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-8 text-lg font-semibold text-gray-400">
            {techCategories.map((category, index) => (
              <div 
                key={index} 
                className={`cursor-pointer transition duration-200 ${selectedCategory === category ? "text-blue-500" : "hover:text-blue-500"}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
          <div className="mt-6 border-b border-gray-600"></div>
          <div className="mt-6">
            <h3 className="text-2xl text-blue-400 font-bold mb-4">{selectedCategory}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center text-blue-300">
              {techStack[selectedCategory].map((tech, subIndex) => (
                <div key={subIndex} className="flex items-center gap-2">
                  <span className="text-blue-500">▪</span> {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
