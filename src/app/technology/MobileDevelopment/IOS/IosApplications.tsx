'use client';

import Image from "next/image";

export default function IosApplications() {
  return (
    <section className="relative bg-gradient-to-b from-[#0a1f44] via-black to-gray-900 text-white py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
          Empowering Enterprises with Revolutionary iOS App Solutions
        </h2>

        {/* Divider */}
        <div className="mt-4 flex justify-center">
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/ios/ios1.png" // Replace with your actual image path
              alt="iOS Development"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 text-gray-300 leading-relaxed lg:text-left md:text-left sm:text-center">
            <p>
              We specialize in enterprise-grade iOS app development, crafting tailored solutions that drive business efficiency. Our expert team leverages cutting-edge technology to build user-friendly, secure apps that exceed expectations. From seamless integrations with existing systems to top-notch security protocols, we ensure your app’s success at every stage. By aligning with your unique business needs, we transform ideas into powerful iOS apps that accelerate growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
