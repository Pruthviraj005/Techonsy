'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, CheckCircle, ArrowRight, Users, Lightbulb, Clock, Coffee, Rocket, Target, GitBranch, Database, Server } from 'lucide-react';

const Solution = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    { title: 'Rich APIs', description: 'Java comes with a set of APIs for many activities, including networking, I/O, XML parsing, database connection, utilities, and many more', icon: <Code size={24} /> },
    { title: 'Platform Independent', description: 'Java is a popular choice in the development industry because it is platform-independent at both the source and binary levels', icon: <Server size={24} /> },
    { title: 'Open-Source Libraries', description: 'The number of open-source libraries and extended industrial support Java provides makes it a popular choice in the development community', icon: <Database size={24} /> }
  ];

  const services = [
    'Java RIA Development',
    'Java Web Portals Development',
    'Java Spring Development',
    'Java Front-End Development',
    'Java Back-End Development',
    'Java Analytics Solutions',
    'Java Data Visualization Solutions',
    'Java Intranet App Development',
    'Java SaaS Application Development'
  ];

  const frameworks = [
    { name: 'Spring', description: 'A versatile, lightweight and modular framework for dynamic applications' },
    { name: 'Hibernate', description: 'Object-relational mapping (ORM) framework for data handling' },
    { name: 'Struts', description: 'Apache-run enterprise-level Java framework with centralized configuration' },
    { name: 'Spark', description: 'Data processing framework for intensive operations on large datasets' },
    { name: 'Play', description: 'Simple web app development framework with basic command interface' },
    { name: 'Google Web Toolkit', description: 'Design user interfaces with this open-source Google product' }
  ];

  const consultingFeatures = [
    {
      title: "Expert Team",
      icon: <Users className="w-6 h-6" />,
      description: "Hire Java developers from Techonsy who are world-class tech talent, off-site collaborators, and cutting-edge resources that perfectly matches your business requirements"
    },
    {
      title: "Strategic Java Solutions",
      icon: <Target className="w-6 h-6" />,
      description: "Our main goal is to deliver high-quality Java solutions that satisfy the client's needs. We implement a budget-focused strategy to ensure businesses receive high-quality products"
    },
    {
      title: "Hyper Growth Approach",
      icon: <Rocket className="w-6 h-6" />,
      description: "We help to build a hyper-growth environment around your technology and product using a very intuitive consultative approach to increase its value over time"
    }
  ];

  const developmentFeatures = [
    {
      title: "Java Development Expertise",
      icon: <Code className="w-6 h-6" />,
      description: "We have a team of proficient Java professionals with more than a decade of experience in complex Java application development"
    },
    {
      title: "Agile Approach",
      icon: <GitBranch className="w-6 h-6" />,
      description: "We use the best practices of a fully Agile strategy to provide unparalleled efficiency and transparency throughout all project areas"
    },
    {
      title: "Quality Delivered in Time",
      icon: <Clock className="w-6 h-6" />,
      description: "Choose avant-garde Java solutions from Techonsy that meet all project requirements while ensuring prompt delivery and client success"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 bg-blue-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
  
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Section 1: Java Full Stack Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-1 h-1 mx-auto mb-6"
          >
            {/* <Coffee className="w-full h-full text-blue-500" /> */}
          </motion.div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Java Full Stack Development
          </h1>
          <motion.div 
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto">
            Platform-independent technology for seamless integration and business solutions
          </p>
        </motion.div>
  
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
              whileHover={{ y: -5 }}
            >
              <div className="h-full p-8 rounded-xl bg-gradient-to-b from-blue-900/20 to-black border border-blue-500/20 hover:border-blue-500/50 transition-all">
                <motion.div
                  className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
  
        {/* Section 2: Why Choose Techonsy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Why Choose Techonsy as Your Java Consulting Partner?
          </h2>
          <motion.div 
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1 }}
          />
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto mb-12">
            Techonsy is a prominent Java software development company with certified developers who have created complex enterprise Java projects with cutting-edge frameworks.
          </p>
  
          {/* Consulting Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {consultingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="h-full p-8 rounded-xl bg-gradient-to-b from-blue-900/20 to-black border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <motion.div
                    className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 text-blue-400"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-400 mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
                {hoveredFeature === index && (
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/50 rounded-xl"
                    layoutId="outline"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 25
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {/* Frameworks Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-black rounded-2xl p-10 border border-blue-500/20 mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Our Framework Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {frameworks.map((framework, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <CheckCircle className="text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-300 transition-colors" />
                <div>
                  <h3 className="font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">{framework.name}</h3>
                  <p className="text-gray-400 text-sm">{framework.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
  
        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-blue-900/20 to-black rounded-2xl p-10 border border-blue-500/20 mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">Development Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {developmentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col items-center text-center p-6"
              >
                <motion.div
                  className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {/* Services Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-900/20 to-black p-10 border-blue-500/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-blue-300 mb-8">Development Solutions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 text-gray-300 group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <ArrowRight className="text-blue-500 group-hover:text-blue-300 transition-colors" size={16} />
                <span className="group-hover:text-blue-300 transition-colors">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl font-bold text-blue-300 mb-4">Ready to Start Your Java Project?</h3>
          <p className="text-gray-400 mb-8">Let's build something amazing together</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
export default Solution;

