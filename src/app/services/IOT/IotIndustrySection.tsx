"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  FaHeartbeat, FaUniversity, FaShoppingCart, FaTruck, FaGamepad, FaChalkboardTeacher, FaStore,
  FaBuilding, FaUsers, FaFilm, FaPlane, FaIndustry, FaOilCan, FaCogs, FaGlobe, FaPlug,
  FaShieldAlt, FaLeaf, FaNewspaper
} from "react-icons/fa";

const industries = [
  { name: "Ecommerce", icon: <FaShoppingCart />, description: "Enhancing trust and transparency in online marketplaces through blockchain solutions." },
  { name: "Healthcare", icon: <FaHeartbeat />, description: "Ensuring secure patient records, drug traceability, and decentralized medical data." },
  { name: "Real Estate", icon: <FaBuilding />, description: "Revolutionizing property transactions with smart contracts and secure ledgers." },
  { name: "AI Software", icon: <FaCogs />, description: "Integrating blockchain for decentralized AI model training and secure data sharing." },
  { name: "Manufacturing", icon: <FaIndustry />, description: "Improving supply chain visibility, product authenticity, and efficiency." },
  { name: "Education", icon: <FaChalkboardTeacher />, description: "Providing verifiable certificates and student credentials using blockchain." },
];

export default function IotIndustrySection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!swiperInstance) return;

      if (event.key === "ArrowRight") {
        swiperInstance.slideNext();
      } else if (event.key === "ArrowLeft") {
        swiperInstance.slidePrev();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [swiperInstance]);

  return (
    <section className="bg-black text-white py-12 px-4 flex justify-center">
      <div className="w-[80%] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Industries We Serve
        </h2>

        {/* 🔹 Large & Tablet Screens: Grid Layout (without icons) */}
        <div className=" hidden lg:flex lg:flex-row justify-center md:grid md:grid-cols-3 gap-3 md:gap-4 text-center">
          {industries.map((industry, index) => (
            <button
              key={industry.name}
              onClick={() => setSelectedIndex(index)}
              className={`relative p-3 md:p-4 text-sm md:text-base font-semibold transition-all transform rounded-lg ${selectedIndex === index
                ? "text-blue-500"
                : "text-gray-300 hover:text-white"
                }`}
            >
              {industry.name}
              <div
                className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-300 transform -translate-x-1/2 ${selectedIndex === index ? "w-full" : "hover:w-full"
                  }`}
              />
            </button>
          ))}
        </div>

        {/* 🔹 Mobile View: Swipeable Carousel (with icons) */}
        <div className="md:hidden">
          <Swiper
            onSwiper={setSwiperInstance}
            spaceBetween={10}
            slidesPerView={1.3}
            centeredSlides
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onSlideChange={(swiper) => setSelectedIndex(swiper.realIndex)}
            modules={[Autoplay]}
            className="overflow-hidden"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.name}>
                <div
                  className={`p-6 flex flex-col items-center bg-gray-900 rounded-lg shadow-md transform transition-all ${selectedIndex === industries.indexOf(industry) ? "scale-110 bg-blue-600" : "hover:scale-105"
                    }`}
                >
                  <div className="text-4xl text-blue-500">{industry.icon}</div>
                  <h3 className="text-lg font-bold mt-2">{industry.name}</h3>
                  <p className="text-gray-300 mt-1 text-sm text-center">{industry.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Selected Industry Details (With Icons) */}
        <div className="mt-10 md:flex md:flex-col lg:flex lg:flex-col items-center text-center bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg max-w-3xl mx-auto animate-fade-in hidden">
          <div className="text-3xl md:text-4xl text-blue-500 mb-2">{industries[selectedIndex].icon}</div>
          <h3 className="text-lg md:text-2xl font-bold">{industries[selectedIndex].name}</h3>
          <p className="text-gray-300 mt-1 text-sm md:text-base">{industries[selectedIndex].description}</p>
        </div>
      </div>
    </section>
  );
}
