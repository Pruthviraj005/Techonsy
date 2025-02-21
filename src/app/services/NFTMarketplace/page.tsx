import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProcessSection from './ProcessSection';
import TechnologiesSection from './TechnologiesSection';
import CTASection from './CTASection';

export const metadata = {
  title: 'NFT Marketplace Development | Techonsy',
  description: 'Build a secure, scalable and feature-rich NFT marketplace with our expert blockchain development services.',
};

export default function NFTMarketplace() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <TechnologiesSection />
      <CTASection />
    </>
  );
}