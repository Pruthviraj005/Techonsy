"use client";

import { useEffect, useState } from "react";
import Image from "next/image";


export default function InfoSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="bg-slate-950 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 animate-fadeIn">
            Seamless Experiences Through <span className="text-cyan-500"> Continuous Testing</span>
        </h2>

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
          {/* Right - Content */} 
          <div className=" justify-center gap-4 rounded-4xl hidden sm:block mx-auto">
              <Image
                  src="/images/services/quality_assurance/image.png"
                  alt="Mobile App 1"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
              />
          </div>
          <div className={`text-slate-400  transition-all duration-700 text-center md:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-md sm:text-lg mb-4">
                Continuous testing ensures your product is not only bug-free but also high-performing and reliable. 
                By setting and maintaining rigorous quality standards, we enhance the user experience and ensure 
                robust product delivery. Our approach guarantees smooth, high-quality results for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}