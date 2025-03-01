"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy loading components
const CCBanner = dynamic(() => import("./CCBanner"), { ssr: false });
const CCModels = dynamic(() => import("./CCModels"), { ssr: false });
const CCTechStack = dynamic(() => import("./CCTechStack"), { ssr: false });
const CCIndustrySection = dynamic(() => import("./CCIndustrySection"), { ssr: false });
const CCProcess = dynamic(() => import("./CCProcess"), { ssr: false });
const CCPlatformExpertise = dynamic(() => import("./CCPlatformExpertise"), { ssr: false });
const CCBenefits = dynamic(() => import("./CCBenefits"), { ssr: false });
const RelatedBlogs = dynamic(() => import("./RelatedBlogs"), { ssr: false });

export default function CloudComputing() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CCBanner />
      <CCModels />
      <CCTechStack />
      <CCIndustrySection />
      <CCProcess />
      <CCPlatformExpertise />
      <CCBenefits />
      <RelatedBlogs />
    </Suspense>
  );
}
