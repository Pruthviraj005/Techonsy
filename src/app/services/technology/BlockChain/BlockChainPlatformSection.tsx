import React from "react";
import Image from "next/image";

const platforms = [
  { name: "Ethereum", src: "/images/ethereum.jpg" },
  { name: "Hyperledger", src: "/images/hyperledger.png" },
  { name: "Corda", src: "/images/corda.jpg" },
  { name: "MultiChain", src: "/images/multichain.jpg" },
  { name: "EOS", src: "/images/eos.png" },
  { name: "Stellar", src: "/images/stellar.png" },
  { name: "Tron", src: "/images/tron.png" },
  { name: "Hedera", src: "/images/hedera.png" },
];

const BlockChainPlatform = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Blockchain Development Platforms We Work On
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Explore our Ethereum application development services for building cutting-edge blockchain solutions.
          No matter how old like Ethereum, or new like Polkadot, our team of blockchain developers are
          experts at building solutions on the best available platforms as per your business needs.
        </p>

        {/* Logos */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="relative group flex flex-row">
              <Image
                src={platform.src}
                alt={platform.name}
                width={80}
                height={0}
                className="transition transform hover:scale-110"
              />
              <span className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlockChainPlatform;
