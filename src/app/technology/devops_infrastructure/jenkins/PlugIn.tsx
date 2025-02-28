"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import desktop_image from '../../../../../public/images/technology/Devops_infrastructure/jenkins/image-03.png'


export default function PlugIn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <section className="bg-slate-900 py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-4xl mx-auto">
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
              Enhance software development with industry-leading integrations like Docker, Google Cloud, and Kubernetes.
            </p>
            <p className="text-md sm:text-lg mb-4">
              Leverage enterprise-grade infrastructure and seamless automation to streamline complex development workflows, ensuring efficient and accurate DevOps implementation.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}