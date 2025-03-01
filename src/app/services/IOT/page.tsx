"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Lazy Loading Components for Faster Performance
const IotBanner = dynamic(() => import("./IotBanner"), { ssr: false });
const IotSection = dynamic(() => import("./IotSection"), { ssr: false });
const IotDevelopment = dynamic(() => import("./IotDevelopment"), { ssr: false });
const IotIndustrySection = dynamic(() => import("./IotIndustrySection"), { ssr: false });
const IotBenefits = dynamic(() => import("./IotBenefits"), { ssr: false });
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"), { ssr: false });
const RelatedBlogs = dynamic(() => import("./RelatedBlogs"), { ssr: false });

function Page() {
  return (
    <>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <IotBanner />
      </Suspense>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <IotSection />
      </Suspense>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <IotDevelopment />
      </Suspense>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <IotIndustrySection />
      </Suspense>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <IotBenefits />
      </Suspense>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<div className="text-center text-white py-10">Loading...</div>}>
        <RelatedBlogs />
      </Suspense>
    </>
  );
}

export default Page;
