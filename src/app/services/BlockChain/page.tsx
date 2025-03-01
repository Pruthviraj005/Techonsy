"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy Load Components
const BlockChainBanner = dynamic(() => import("./BlockChainBanner"), { ssr: false });
const BlockchainSection = dynamic(() => import("./BlockChainSection"), { ssr: false });
const BlockChainPlatform = dynamic(() => import("./BlockChainPlatformSection"), { ssr: false });
const BlockChainIndustrySection = dynamic(() => import("./BlockChainIndustrySection"), { ssr: false });
const BlockChainDevelopmentProcess = dynamic(() => import("./BlockChainDevelopmentProcess"), { ssr: false });
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"), { ssr: false });
const RelatedBlogs = dynamic(() => import("./RelatedBlogs"), { ssr: false });

const BlockChain = () => {
  return (
    <>
      <Suspense fallback={<div className="text-center text-gray-500">Loading Banner...</div>}>
        <BlockChainBanner />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Section...</div>}>
        <BlockchainSection />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Platform...</div>}>
        <BlockChainPlatform />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Industries...</div>}>
        <BlockChainIndustrySection />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Development Process...</div>}>
        <BlockChainDevelopmentProcess />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Why Choose Us...</div>}>
        <WhyChooseUs />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Blogs...</div>}>
        <RelatedBlogs />
      </Suspense>
    </>
  );
};

export default BlockChain;
