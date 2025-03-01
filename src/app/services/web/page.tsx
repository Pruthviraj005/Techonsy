"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState, useEffect } from "react";

// Lazy Load Components
const WebBanner = dynamic(() => import("./WebBanner"));
const TailoredSolutions = dynamic(() => import("./TailoredSolutions"));
const TechGrid = dynamic(() => import("./Technologies"));
const IndustryWeServe = dynamic(() => import("./IndustryWeServe"));
const WebApplicationApproach = dynamic(() => import("./WebApplicationApproach"));

export default function WebDevelopment() {
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    setBenefits([
      { title: "User-Centric Solutions", image: "/images/services/11.png" },
      { title: "Clear Communication & Transparency", image: "/images/services/22.png" },
      { title: "Robust Security Systems", image: "/images/services/33.png" },
      { title: "Responsive Client Support", image: "/images/services/44.png" },
      { title: "Cutting-Edge Technology", image: "/images/services/55.png" },
      { title: "Affordable, High-Quality Results", image: "/images/services/66.png" },
    ]);
  }, []);

  const headingStyle = {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    textAlign: "center" as const,
    whiteSpace: "pre-line",
  };

  const approachListStyle = {
    fontSize: "14px",
    color: "#D1D5DB",
    fontWeight: "400",
  };

  return (
    <section id="webDevelopment" className="py-16 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="w-full">
          {/* Web Banner */}
          <WebBanner />

          {/* Tailored Solutions */}
          <TailoredSolutions />

          {/* Technologies */}
          <TechGrid />

          {/* Industries We Serve */}
          <IndustryWeServe />

          {/* Web Application Approach */}
          <WebApplicationApproach />

          {/* Benefits Section */}
          <div className="mt-16 py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-semibold text-center mb-4" style={headingStyle}>
                Benefits of Working with a{"\n"}Web Development Company in India
              </h2>
              <p className="text-center mb-8 font-light w-4/5 mx-auto" style={approachListStyle}>
                Our web development services offer cost-effective, high-quality solutions that deliver real results. 
                Focused on creativity, user engagement, and performance, we help businesses enhance productivity 
                and achieve their digital objectives.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={benefit.image}
                      alt={benefit.title}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="mx-auto h-12 mb-2"
                    />
                    <h3 className="text-sm font-semibold" style={approachListStyle}>
                      {benefit.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
