"use client";
''
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    title: "Unmatched Performance",
    icon: "/images/ios/icon1.png",
  },
  {
    title: "Advanced Security",
    icon: "/images/ios/icon2.png",
  },
  {
    title: "Wider Market Reach",
    icon: "/images/ios/icon3.png",
  },
  {
    title: "Flawless User Experience",
    icon: "/images/ios/icon4.png",
  },
  {
    title: "Reliable Infrastructure",
    icon: "/images/ios/icon5.png",
  },
  {
    title: "Exclusive Features",
    icon: "/images/ios/icon6.png",
  },
];

const IosFeatures = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 800, once: true });
      AOS.refresh();
    }, 100);
  }, []);


  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-50 mb-8">
          Top Reasons to Choose iOS App Development
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              data-aos="fade-up"
            >
              <div className="flex justify-center">
                <img src={feature.icon} alt={feature.title} className="w-16 h-16 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-200">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IosFeatures;
