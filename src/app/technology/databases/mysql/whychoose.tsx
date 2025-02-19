"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "High Performance",
    description:
      "MySQL database offers exceptional performance capabilities, enabling fast and efficient data processing and query execution, even with large datasets and high user loads.",
    icon: "💾",
  },
  {
    title: "Scalability",
    description:
      "MySQL is designed to handle scalable workloads, allowing your database to grow seamlessly as your business expands, without compromising performance or stability.",
    icon: "📈",
  },
  {
    title: "Reliability",
    description:
      "With its proven track record and widespread adoption, MySQL is a reliable choice for mission-critical applications, providing data integrity, fault tolerance, and high availability.",
    icon: "🔒",
  },
  {
    title: "Flexibility",
    description:
      "MySQL supports a wide range of platforms, programming languages, and operating systems, offering flexibility in application development and integration with existing technology stacks.",
    icon: "⚙️",
  },
  {
    title: "Cost-Effectiveness",
    description:
      "MySQL is an open-source database, which means there are no licensing costs involved. It also requires minimal hardware resources, reducing infrastructure costs for your business.",
    icon: "💰",
  },
  {
    title: "Community and Support",
    description:
      "MySQL has a large and active community of developers and users, providing access to extensive resources, documentation, and support forums, ensuring help and assistance when needed.",
    icon: "🤝",
  },
];


const WhyMySql=()=>{
    return (
        <section className="relative py-16 px-4 flex justify-center overflow-hidden">
           {/* Gradient Background with Subtle Glow */}
           <div className="absolute inset-0 bg-gradient-to-br from-[#1b1e2e] to-[#0c1c2c] opacity-90"></div>
           <div className="absolute inset-0 flex justify-center items-center">
             <div className="w-[800px] h-[800px] bg-gray-500 opacity-30 rounded-full blur-[120px]"></div>
           </div>
         
           {/* Content */}
           <div className="relative max-w-[1000px] mx-auto text-center z-10">
             <h2 className="text-3xl font-bold text-white mb-4">
               Why Choose MySQL Server
             </h2>
             <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
             <p className="text-gray-300 mb-8">
               Some of the best features and benefits of MySQL development services
               are discussed below. These benefits and reasons are why MySQL
               development services should be the go-to choice.
             </p>
         
             {/* Card Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {features.map((feature, index) => (
                 <motion.div
                   key={index}
                   className="p-6 rounded-lg shadow-lg border border-gray-700 bg-white/10 backdrop-blur-md transition-all hover:scale-105 hover:shadow-lg "
                 >
                   <div className="text-4xl">{feature.icon}</div>
                   <h3 className="text-xl font-semibold text-white mt-4">
                     {feature.title}
                   </h3>
                   <p className="text-gray-300 mt-2">{feature.description}</p>
                 </motion.div>
               ))}
             </div>
           </div>
        </section>

      );

}

export default WhyMySql;