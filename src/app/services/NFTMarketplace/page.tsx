

import dynamic from 'next/dynamic';

import React from 'react';
const HeroSection = dynamic(() => import("./HeroSection"));
const FeaturesSection = dynamic(() => import("./FeaturesSection"));
const ProcessSection = dynamic(() => import("./ProcessSection"));
const TechnologiesSection = dynamic(() => import("./CTASection"));
const CTASection = dynamic(() => import("./HeroSection"));

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