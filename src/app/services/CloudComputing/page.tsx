"use client";

import dynamic from "next/dynamic";


const CCBanner = dynamic(() => import('./CCBanner'));
const CCBenefits = dynamic(() => import('./CCBenefits'));
const CCIndustrySection = dynamic(() => import('./CCIndustrySection'));
const CCModels = dynamic(() => import('./CCModels'));
const CCPlatformExpertise = dynamic(() => import('./CCPlatformExpertise'));
const CCProcess = dynamic(() => import('./CCProcess'));
const CCTechStack = dynamic(() => import('./CCTechStack'));
const RelatedBlogs = dynamic(() => import('./RelatedBlogs'));



export default function CloudComputing() {
  return (
    <>
      <CCBanner />
      <CCModels />
      <CCTechStack />
      <CCIndustrySection />
      <CCProcess />
      <CCPlatformExpertise />
      <CCBenefits />
      <RelatedBlogs />
    </>
  );
}
