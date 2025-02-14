'use client'

import BlockChainBanner from "./BlockChainBanner";
import BlockChainIndustrySection from "./BlockChainIndustrySection";
import BlockChainPlatform from "./BlockChainPlatformSection";
import BlockchainSection from "./BlockChainSection";
import BlockChainDevelopmentProcess from "./BlockChainDevelopmentProcess";
import BlockchainSecurity from "./BlockChainConsultingServices";
import RelatedBlogs from './RelatedBlogs'

const BlockChain = () => {
  return (
    <>
      <BlockChainBanner />
      <BlockchainSection />
      <BlockChainPlatform />
      <BlockChainIndustrySection />
      <BlockChainDevelopmentProcess />
      <BlockchainSecurity />
      <RelatedBlogs />
    </>
  );
}

export default BlockChain