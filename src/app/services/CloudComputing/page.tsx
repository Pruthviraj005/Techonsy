'use client'

import CCBanner from "./CCBanner";
import CCBenefits from "./CCBenefits";
import CCIndustry from "./CCIndustry";
import CCModels from "./CCModels";
import CCPlatformExpertise from "./CCPlatformExpertise";
import CCProcess from "./CCProcess";
import CCTechStack from "./CCTechStack";

export default function CloudComputing(){
  return(
    <>
    <div>
      <CCBanner />
      <CCModels />
      <CCTechStack />
      <CCIndustry />
      <CCProcess />
      <CCPlatformExpertise />
      <CCBenefits />
    </div>
    </>
  );
}