"use client";

import dynamic from "next/dynamic";

// Lazy Load Components
const BlockChainBanner = dynamic(() => import("./BlockChainBanner"));
const BlockchainSection = dynamic(() => import("./BlockChainSection"));
const BlockChainPlatform = dynamic(() => import("./BlockChainPlatformSection"));
const BlockChainIndustrySection = dynamic(() => import("./BlockChainIndustrySection"));
const BlockChainDevelopmentProcess = dynamic(() => import("./BlockChainDevelopmentProcess"));
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"));
const RelatedBlogs = dynamic(() => import("./RelatedBlogs"));

const BlockChain = () => {
  return (
    <>

      <BlockChainBanner />

      <BlockchainSection />


      <BlockChainPlatform />


      <BlockChainIndustrySection />



      <BlockChainDevelopmentProcess />


      <WhyChooseUs />



      <RelatedBlogs />

    </>
  );
};

export default BlockChain;
