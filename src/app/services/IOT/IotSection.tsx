import React from "react";
import Image from "next/image";

const IotSection = () => {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/iot/pngwing.com.png" // Replace with your image path
            alt="Blockchain Illustration"
            width={600}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            IoT Application Development & Consulting Services
          </h2>
          <p className="mt-4 text-gray-300">
            Transform your business with intelligent IoT solutions designed to enhance connectivity, automation, and efficiency. Our IoT development services cover everything from strategy and consulting to seamless integration into your existing infrastructure.

          </p>
          <p className="mt-4 text-gray-300">
            With extensive expertise in IoT architecture, we integrate gateways, cloud platforms, and edge devices to create scalable and secure IoT ecosystems. Whether upgrading analog products or building connected devices from scratch, our full-stack IoT solutions help businesses unlock new possibilities and drive digital transformation.

          </p>
        </div>
      </div>
    </section>
  );
};

export default IotSection;
