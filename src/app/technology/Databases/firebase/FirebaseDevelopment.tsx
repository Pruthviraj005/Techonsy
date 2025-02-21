"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import desktop_image from '../../../../../public/images/technology/databases/firebase/download.png'


export default function FirebaseDevelopment() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-[1000px] mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
            Build Scalable & High-Performance Apps with Firebase
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Right - Content */} 
          <div className=" justify-center gap-4 rounded-4xl hidden sm:block mx-auto">
              <Image
                  src={desktop_image}
                  alt="Mobile App 1"
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
              />
          </div>
          <div className={`text-slate-400  transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-md sm:text-lg mb-4">
                Develop high-quality mobile and web applications without managing backend infrastructure. Leverage Google’s scalable infrastructure to support app growth effortlessly.
            </p>
            <p className="text-md sm:text-lg mb-4">
                Access all development tools in one place for seamless feature integration and an optimized user experience, even offline. Customize your database to fit business needs with Firebase’s flexible local development.
            </p>
            <p className="text-md sm:text-lg mb-4">
                Ensure smooth upgrades and maintenance for consistent operational efficiency with expert Firebase development services.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}