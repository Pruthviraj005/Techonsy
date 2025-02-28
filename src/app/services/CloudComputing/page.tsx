'use client'

import CCBanner from "./CCBanner";
import CCBenefits from "./CCBenefits";
import CCIndustrySection from "./CCIndustrySection";
import CCModels from "./CCModels";
import CCPlatformExpertise from "./CCPlatformExpertise";
import CCProcess from "./CCProcess";
import CCTechStack from "./CCTechStack";
import RelatedBlogs from "./RelatedBlogs";

export default function CloudComputing(){
  return(
    <>
    <div>
      <CCBanner />
      <CCModels />
      <CCTechStack />
      <CCIndustrySection />
      <CCProcess />
      <CCPlatformExpertise />
      <CCBenefits />
      <RelatedBlogs />
    </div>
    </>
  );
}