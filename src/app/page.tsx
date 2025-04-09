import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Technology from "@/components/HomeTechnologies";
import IndustryWeServe from "@/components/IndustryWeServe";
import Testimonials from "@/components/Testimonials";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Techonsy Pvt. Ltd. | IT Solutions Company",
  description: "We provide top-notch software solutions tailored to your business needs.",
  keywords: ["Techonsy", "IT Company", "Software Development", "Web Development", "Mobile App"],
  authors: [{ name: "Techonsy Pvt. Ltd." }],
  openGraph: {
    title: "Techonsy Pvt. Ltd.",
    description: "Top-tier IT solutions and services.",
    type: "website",
    url: "https://www.techonsy.com",
  },
};


export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Technology />
      <IndustryWeServe />
      {/* <Video /> */}
      <Brands />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
