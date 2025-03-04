"use client";
import React from "react";
import Image from "next/image";

const BlockchainSection = () => {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/blockchain/bct.webp" // Replace with your image path
            alt="Blockchain Illustration"
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Accelerate Your Digital Transformation with {" "}
            <span className="text-blue-500">Blockchain Development Services</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Leverage the power of blockchain technology to drive innovation within your business. We design and implement customized blockchain solutions using top protocols like Ethereum, Hyperledger, and Solana for enterprises and startups. Our decentralized solutions are built to meet the evolving needs of your industry.
          </p>
          <p className="mt-4 text-gray-300">
            We offer end-to-end blockchain development and consultancy services to help businesses capitalize on the rapidly expanding blockchain market. Our team works closely with you to create a strategic roadmap for your blockchain journey.

          </p>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
