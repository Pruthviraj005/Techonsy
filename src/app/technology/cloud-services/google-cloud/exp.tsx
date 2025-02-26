"use client";

import Image from 'next/image';
import { BsCursorFill } from "react-icons/bs";

export default function GoogleAppEngineSection() {
  return (
    <section className="relative min-h-screen flex justify-center items-center py-16 px-8">
      {/* Glowing Gradient Background */}
      <div className="absolute inset-0 w-full opacity-50  blur-[30px] animate-rotate rounded-full z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1000px] w-full mx-auto flex flex-col md:flex-row items-center gap-10  p-10 rounded-lg shadow-lg">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold leading-tight text-white">
            Experience Unmatched Transformation with Google App Engine Services
          </h2>
          <p className="mt-4 text-gray-300">
            Leverage multi-dimensional Google App Engine and Google Cloud computing services compatible with diverse industry verticals and requirements. Collaborate to create scalable, flexible, and creative cloud solutions ensuring post-modern efficiency and optimal performance.
          </p>
          <p className="mt-4 text-gray-300">
            Deploy experienced domain experts skilled at designing and developing the entire gamut of Google App Engine’s capabilities and create customized solutions, enterprise-scale implementations with round-the-clock maintenance, support, and third-party integrations.
          </p>
          <p className="mt-4 text-gray-300">
            Invoke highly acclaimed services pertaining to cloud migration, Google App Engine consulting, and application development, integration, local development, implementation, and rapid access to information anywhere, anytime.
          </p>
          <button className="mt-4 bg-transparent border-2 border-orange-600 px-6 py-2 rounded text-orange-600 hover:bg-transparent hover:border-orange-700 hover:text-white hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition-all duration-300 glow-effect relative">
            <span className="flex items-center">
              <span className="absolute left-0 transform translate-x-[40%] pl-2 z-10 text-lg">
                <BsCursorFill />
              </span>
              <span className="pl-5">{'Contact Our Experts'}</span>
            </span>
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center ">
          <Image
            src="/images/technology/cloud-services/google-cloud/google-cloud.svg"
            alt="Google App Engine Illustration"
            width={500}
            height={300}
            className="rounded-lg bg-none"
          />
        </div>
      </div>
    </section>
  );
}
