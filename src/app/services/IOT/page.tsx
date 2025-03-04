"use client";

import dynamic from "next/dynamic";

// Lazy Loading Components for Faster Performance
const IotBanner = dynamic(() => import("./IotBanner"));
const IotSection = dynamic(() => import("./IotSection"));
const IotDevelopment = dynamic(() => import("./IotDevelopment"));
const IotIndustrySection = dynamic(() => import("./IotIndustrySection"));
const IotBenefits = dynamic(() => import("./IotBenefits"));
const WhyChooseUs = dynamic(() => import("./WhyChooseUs"));
const RelatedBlogs = dynamic(() => import("./RelatedBlogs"));

function Page() {
  return (
    <>

      <IotBanner />
      <IotSection />

      <IotDevelopment />

      <IotIndustrySection />

      <IotBenefits />

      <WhyChooseUs />

      <RelatedBlogs />

    </>
  );
}

export default Page;
