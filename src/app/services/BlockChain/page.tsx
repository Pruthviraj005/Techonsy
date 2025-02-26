'use client'

import BlockChainBanner from "./BlockChainBanner";
import BlockChainIndustrySection from "./BlockChainIndustrySection";
import BlockChainPlatform from "./BlockChainPlatformSection";
import BlockchainSection from "./BlockChainSection";
import BlockChainDevelopmentProcess from "./BlockChainDevelopmentProcess";
import RelatedBlogs from './RelatedBlogs'
import WhyChooseUs from "./WhyChooseUs";

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
}

export default BlockChain