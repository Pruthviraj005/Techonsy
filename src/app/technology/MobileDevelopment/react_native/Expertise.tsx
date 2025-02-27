"use client"
import { FaReact, FaLightbulb, FaSyncAlt, FaUsers, FaCheckCircle, FaWrench } from "react-icons/fa";
import { useEffect, useState } from "react";

const expertiseData = [
  {
    title: "Tailored React Native Solutions",
    description:
      "Embark on the journey of creating exceptionally responsive and resilient React Native mobile applications from the ground up. Benefit from comprehensive end-to-end services encompassing the entire lifecycle of production and deployment.",
    icon: <FaReact className="text-blue-500 text-5xl" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "React Native App Consultation",
    description:
      "Leverage our deep-rooted expertise in React Native to gain valuable insights into selecting the technology that best aligns with your unique requirements. Our team will provide you with comprehensive guidance and recommendations to ensure optimal technology choices.",
    icon: <FaLightbulb className="text-yellow-500 text-5xl" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Technology Migration and Upgradation",
    description:
      "We specialize in assisting you with seamless and hassle-free migration of your existing apps to the latest software versions. Our team ensures a smooth transition, enabling you to stay up-to-date with the latest technologies and enjoy enhanced functionalities.",
    icon: <FaSyncAlt className="text-pink-500 text-5xl" />,
    bgColor: "bg-pink-600 text-white",
    textColor: "text-white",
  },
  {
    title: "Dedicated Team of Developers",
    description:
      "Our team of skilled React Native mobile app developers is committed to designing and implementing extraordinary applications. With comprehensive technical support at every step, we ensure a seamless development process and deliver remarkable results.",
    icon: <FaUsers className="text-green-500 text-5xl" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Testing & QA Services",
    description:
      "At every stage of your React Native app development journey, our team of expert consultants includes quality analysts who ensure rigorous testing. This meticulous approach guarantees that your app runs seamlessly across multiple platforms, providing a flawless user experience.",
    icon: <FaCheckCircle className="text-blue-400 text-5xl" />,
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    title: "Support & Maintenance",
    description:
      "As a React Native development agency, we have a proactive support team dedicated to guiding you through any queries or concerns you may have during the entire runtime of your project. We are committed to providing comprehensive assistance and ensuring your project's success through continuous support and maintenance.",
    icon: <FaWrench className="text-red-500 text-5xl" />,
    bgColor: "bg-pink-600 text-white",
    textColor: "text-white",
  },
];

export default function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black py-10 border-y-[0.5px] border-y-cyan-700 ">
      {/* Optional SVG Background for Texture */}
      <section className="relative  px-6 md:px-16 text-white max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 py-16">
          Solution Development Expertise Includes
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg bg-white/10 backdrop-blur-md hover:scale-105 transition transform duration-500 border border-gray-700`}
            >
              {/* Centered Icon */}
              <div className="flex justify-center items-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-center text-gray-200">
                  {item.title}
                </h3>
                <p className="text-md text-center text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}