import React from "react";
import Image from "next/image";

const BlockchainSection = () => {
  return (
    <section className="bg-[#0d1117] text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/bct.webp" // Replace with your image path
            alt="Blockchain Illustration"
            width={500}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Kick-Start Your Digitization Goals with{" "}
            <span className="text-red-500">Our Blockchain Development Services</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Our extensive blockchain development solutions allow you to use blockchain technology efficiently within your business.
            We create and build customized blockchain solutions for enterprises and start-ups using various blockchain protocols, such as Ethereum, Hyperledger, and Solana.
            We build decentralized solutions that meet industry demands.
          </p>
          <p className="mt-4 text-gray-300">
            At JPSoft, we provide complete customized Blockchain development and consultancy services to help companies take advantage of the rapidly growing blockchain market.
            Our highly experienced team will work closely with you to develop an efficient plan of action for your blockchain journey.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-medium rounded-lg hover:bg-red-600 transition flex items-center gap-2">
            🚀 Talk to Our Experts →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
