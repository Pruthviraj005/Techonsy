'use client';
import Image from 'next/image';

export default function NftMetaverse() {
  return (
    <section className="bg-gray-950 text-white py-16  flex flex-col lg:flex-row items-center border">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left border">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Leverage the Power of <br />
          NFT Metaverse Marketplace Development
        </h1>
        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          Consider a parallel universe, where avatars can perform activities similar to the real world.
          We help businesses{' '}
          <span className="text-blue-500 underline cursor-pointer">launch their own NFT metaverse marketplace</span>{' '}
          to bring together the ever-growing community of NFT traders and users.
        </p>
        <p className="text-gray-400 mt-4 text-base sm:text-lg">
          The best part is, our NFT metaverse marketplace is interoperable with multiple
          <span className="text-blue-500 underline cursor-pointer"> metaverse</span> projects. It supports tokenizations and allows instant trading of avatars, digital lands, in-game assets, and more.
        </p>
      </div>

      {/* Right Content (Mobile UI) */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
        <div className="relative w-64 sm:w-80 md:w-96 lg:w-[450px]">
          <Image 
            src="/images/nft/mobile.jpg" 
            alt="mobile ui" 
            width={450} 
            height={700} 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
