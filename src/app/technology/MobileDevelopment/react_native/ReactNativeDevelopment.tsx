"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import phone_image from '../../../../../public/images/technology/reactNative/phone_image.jpg'

export default function ReactNativeDevelopment() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1000px] mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 animate-fadeIn">
          React Native Mobile App Development
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Right - Content */} 
          <div className="flex justify-center gap-4 rounded-4xl">
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
              React Native stands out as one of the finest choices for developing cross-platform
              mobile applications. It offers cost reduction and time-saving benefits.
            </p>
            <p className="text-md sm:text-lg  mb-4">
              At Ahex, our highly skilled React Native developers specialize in building tailored mobile
              app solutions for both Android and iOS platforms, enhancing business productivity.
            </p>
            <p className="text-md sm:text-lg">
              Our team comprises exceptionally experienced and proficient React Native developers who
              possess the expertise to deliver premium-quality solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}