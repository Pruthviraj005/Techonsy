"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Link from "next/link";
const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto max-w-5xl">
          <SectionTitle
            title="Services"
            paragraph="Discover our cutting-edge solutions designed to empower your business. Explore the key features tailored to meet your needs."
            center
          />
          <div className="flex flex-col gap-[10px]">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="flex items-center">
            <Link
              href="/services"
              className="ml-auto text-white hover:underline"
            >
              See more
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
