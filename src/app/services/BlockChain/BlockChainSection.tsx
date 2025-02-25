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
            Unlock the Power of Blockchain with{" "}
            <span className="text-blue-500">Expert Development Solutions</span>
          </h2>
          <p className="mt-4 text-gray-300">
            Our blockchain specialists ensure seamless implementation, enhancing security and efficiency for business applications. With customizable development modules, we tailor solutions to meet unique business needs.
          </p>
          <p className="mt-4 text-gray-300">
            Harness the reliability of blockchain for verifiable, traceable transactions. A well-crafted MVP validates your idea, setting it apart from competitors while increasing investor confidence and minimizing risk ensuring a strong foundation for success.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
            🚀 Talk to Our Experts →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSection;
