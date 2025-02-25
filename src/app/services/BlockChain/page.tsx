'use client'

import BlockChainBanner from "./BlockChainBanner";
import BlockChainIndustrySection from "./BlockChainIndustrySection";
import BlockChainPlatform from "./BlockChainPlatformSection";
import BlockchainSection from "./BlockChainSection";
import BlockChainDevelopmentProcess from "./BlockChainDevelopmentProcess";
import RelatedBlogs from './RelatedBlogs'
import BlockChainSolutions from "./BlockChainSolutions";
import WhyChooseUs from "./WhyChooseUs";

const BlockChain = () => {
  return (
    <>
      <BlockChainBanner />
      <BlockchainSection />
      <BlockChainSolutions />
      <BlockChainDevelopmentProcess />
      <BlockChainPlatform />
      <WhyChooseUs />
      <BlockChainIndustrySection />
      <RelatedBlogs />
    </>
  );
}

export default BlockChain