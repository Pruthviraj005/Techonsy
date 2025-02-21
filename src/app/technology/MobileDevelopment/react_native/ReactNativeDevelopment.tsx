"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import phone_image from '../../../../../public/images/technology/MobileDevelopment/reactNative/phone_image.jpg'

export default function ReactNativeDevelopment() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1000px] mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
        Seamless React Native App Development for High-Performance Solutions

        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Right - Content */} 
          <div className=" justify-center gap-4 rounded-4xl hidden sm:block mx-auto">
              <Image
                  src={phone_image}
                  alt="Mobile App 1"
                  width={250}
                  height={300}
                  className="rounded-lg shadow-lg"
              />
          </div>
          <div className={`text-slate-400  transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-md sm:text-lg mb-4">
            React Native enables cost-effective, cross-platform app development with a shared codebase for faster go-to-market. It enhances productivity, boosts engagement, and unlocks new revenue streams with intuitive UI, secure data integration, and seamless backend support. Deliver high-performance apps with reusable code, ensuring speed and efficiency. With expertise in Java, Objective-C, and Swift, React Native offers scalability and future-proof solutions. Leverage its strong cross-platform support to optimize performance while maintaining a native-like experience. Build robust mobile architectures tailored to evolving business needs. Stay ahead with cutting-edge React Native development strategies.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}