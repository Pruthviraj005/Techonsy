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
            Smart IoT Solutions
          </h2>
          <p className="mt-4 text-gray-300">
            Unlock the power of the Internet of Things with custom IoT applications designed for seamless device connectivity and real-time data collection. Our solutions enhance efficiency, optimize operations, and drive innovation across businesses of all sizes.

          </p>
        </div>
      </div>
    </section>
  );
};

export default IotSection;
