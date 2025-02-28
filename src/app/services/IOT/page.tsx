'use client'
import React from 'react'
import IotBanner from './IotBanner'
import IotDevelopment from './IotDevelopment'
import IotSection from './IotSection'
import WhyChooseUs from './WhyChooseUs'
import IotIndustrySection from './IotIndustrySection'
import RelatedBlogs from './RelatedBlogs'
import IotBenefits from './IotBenefits'

function page() {
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
  )
}

export default page
