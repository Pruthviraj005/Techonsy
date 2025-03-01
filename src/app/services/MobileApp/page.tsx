"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy Load Components
const MobileAppBanner = dynamic(() => import("./MobileAppBanner"), { ssr: false });
const ChallengesSection = dynamic(() => import("./ChallengesSection"), { ssr: false });
const MobileTechnologies = dynamic(() => import("./MobileTechnologies"), { ssr: false });
const IndustryExpertise = dynamic(() => import("./IndustryExpertise"), { ssr: false });
const DevelopmentProcess = dynamic(() => import("./DevelopmentProcess"), { ssr: false });
const Benefits = dynamic(() => import("./Benefits"), { ssr: false });

export default function MobileApp() {
  return (
    <>
      {/* Suspense ensures UI is not blocked while components are loading */}
      <Suspense fallback={<div className="text-center text-gray-500">Loading...</div>}>
        <MobileAppBanner />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Challenges...</div>}>
        <ChallengesSection />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Technologies...</div>}>
        <MobileTechnologies />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Expertise...</div>}>
        <IndustryExpertise />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Development Process...</div>}>
        <DevelopmentProcess />
      </Suspense>

      <Suspense fallback={<div className="text-center text-gray-500">Loading Benefits...</div>}>
        <Benefits />
      </Suspense>
    </>
  );
}
