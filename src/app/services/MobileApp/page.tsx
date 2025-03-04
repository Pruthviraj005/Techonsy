"use client";

import dynamic from "next/dynamic";

// Lazy Load Components
const MobileAppBanner = dynamic(() => import("./MobileAppBanner"));
const ChallengesSection = dynamic(() => import("./ChallengesSection"));
const MobileTechnologies = dynamic(() => import("./MobileTechnologies"));
const IndustryExpertise = dynamic(() => import("./IndustryExpertise"));
const DevelopmentProcess = dynamic(() => import("./DevelopmentProcess"));
const Benefits = dynamic(() => import("./Benefits"));

export default function MobileApp() {
  return (
    <>
      {/* Suspense ensures UI is not blocked while components are loading */}
      <MobileAppBanner />

      <ChallengesSection />

      <MobileTechnologies />

      <IndustryExpertise />

      <DevelopmentProcess />

      <Benefits />

    </>
  );
}
