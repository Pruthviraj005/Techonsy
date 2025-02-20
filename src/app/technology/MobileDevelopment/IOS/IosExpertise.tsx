"use client"; // Ensures the use of React hooks

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const benefits = [
  {
    title: "Exceptional Quality",
    description:
      "We adhere to the highest industry standards to ensure the best possible performance and user experience. Our developers build reliable and optimized solutions that exceed client expectations.",
    icon: "🏆",
  },
  {
    title: "Guaranteed Security",
    description:
      "Security is our top priority. We follow best practices, including data encryption, secure authentication, and compliance with industry regulations, to protect your application from threats.",
    icon: "🔒",
  },
  {
    title: "On-Time Delivery",
    description:
      "We are committed to delivering your project on schedule without compromising on quality. Our efficient development process ensures that your deadlines are met with precision.",
    icon: "⏳",
  },
  {
    title: "Seamless User Experience",
    description:
      "Our developers focus on intuitive UI/UX design to enhance usability and engagement. We ensure that your iOS application delivers a smooth and frictionless experience to end-users.",
    icon: "📱",
  },
  {
    title: "Custom Solutions",
    description:
      "Every business has unique needs. We provide tailor-made iOS development solutions to meet your specific requirements, ensuring scalability and flexibility in the long run.",
    icon: "⚙️",
  },
];

const IosExpertise = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-slate-200 mb-8 text-center">
          Proven <span className="text-blue-600">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex flex-col border border-slate-800 hover:border-blue-600"
              data-aos="fade-up"
            >
              <div className="text-4xl mb-4 text-blue-600">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-500">{benefit.title}</h3>
              <p className="text-gray-400 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosExpertise;
