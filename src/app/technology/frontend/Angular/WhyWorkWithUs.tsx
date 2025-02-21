'use client'

import Image from "next/image";
import InfoCard from "./InfoCards";

export default function WhyWorkWithUs() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-black to-blue-900 text-white py-10 mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-center">Why Work With Us</h1>
      <h2 className="text-lg sm:text-xl mb-8 font-light text-center">
        We offer vetted developers with high expertise in delivering high quality software development services.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-10">
        <InfoCard
          title="Thriving in the industry since 13 years"
          description="With a good 13 years of experience, we have high expertise in developing products by utilizing the latest technologies for different industries and can proudly boast about our top clients who have been quite happy with our services."
          icon={<Image src="/images/angular/image1.png" alt="directives" width={70} height={70} />}
        />
        <InfoCard
          title="Cost-efficient services"
          description="We offer the best quality services at a decent price. Our highly efficient developers are dedicated towards catering the cut-edge services at a reasonable rate. Why worry when you can get the best software services delivered at a reduced price?"
          icon={<Image src="/images/angular/image2.png" alt="reusable components" width={80} height={80} />}
        />
        <InfoCard
          title="Top-notch services"
          description="Our products thrive the best in the market due to the endless efforts put forth by our determined team. Our clients have always been content with our services due to our high expertise in the industry and the fair experience."
          icon={<Image src="/images/angular/image3.png" alt="localization" width={80} height={80} />}
        />
        <InfoCard
          title="We believe in innovation"
          description="Delivering any product without an innovative strategy isn’t feasible and is worthless. We implement constant innovative strategies to always stand out in the market. You also get the leverage to reduce time-to-market with the best quality."
          icon={<Image src="/images/angular/image4.png" alt="validating forms" width={80} height={80} />}
        />
        <InfoCard
          title="Enhanced customer experience"
          description="With a team of highly skilled and qualified professionals, we have the expertise to build highly interactive applications that can help you build the best brand to catch the eye of target audiences."
          icon={<Image src="/images/angular/image5.png" alt="server communication" width={80} height={80} />}
        />
        <InfoCard
          title="Customer support"
          description="Our service is just not limited to the delivery of the product. We do provide customer support post the delivery of product by increasing conversion rates in accordance with market trends."
          icon={<Image src="/images/angular/image6.png" alt="injections" width={80} height={80} />}
        />
      </div>
    </div>
  );
}
