// services/page.tsx

"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { HoverEffect } from "@/components/ui/card-hover-effect";

// Heroicons (outline)
import {
  DevicePhoneMobileIcon,
  CursorArrowRaysIcon,
  CubeIcon,
  CloudIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  CpuChipIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ShoppingCartIcon,
  PhotoIcon,
  WifiIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const servicesItems = [
  {
    title: "Mobile App Development",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    description:
      "From native iOS/Android to cross-platform Flutter and React Native, we build performant mobile experiences that delight users.",
    link: "/services/MobileApp",
  },
  {
    title: "UI/UX Designing",
    icon: <CursorArrowRaysIcon className="h-8 w-8" />,
    description:
      "User-centered research, wireframes, and pixel-perfect designs focused on usability, accessibility, and delightful interactions.",
    link: "/services/ui-ux-designing",
  },
  {
    title: "Blockchain Development",
    icon: <CubeIcon className="h-8 w-8" />,
    description:
      "Smart contracts, dApps, token economies, and private chains—secure, transparent, and tailored to your industry needs.",
    link: "/services/BlockChain",
  },
  {
    title: "Cloud Computing",
    icon: <CloudIcon className="h-8 w-8" />,
    description:
      "Scalable architecture on AWS, Azure, or GCP: microservices, serverless functions, container orchestration, and DevOps automation.",
    link: "/services/CloudComputing",
  },
  {
    title: "Web Development",
    icon: <ComputerDesktopIcon className="h-8 w-8" />,
    description:
      "Modern web apps with Next.js, React, Vue, or Angular—optimized for performance, SEO, and seamless user experiences.",
    link: "/services/web-development",
  },
  {
    title: "Quality Assurance",
    icon: <CheckBadgeIcon className="h-8 w-8" />,
    description:
      "Comprehensive testing strategies: automated, manual, performance, security, and accessibility testing to ensure rock-solid releases.",
    link: "/services/qualityAssurance",
  },
  {
    title: "AI Development",
    icon: <CpuChipIcon className="h-8 w-8" />,
    description:
      "From custom ML pipelines to LLM fine-tuning and computer vision, we build intelligent systems that drive business value.",
    link: "/services/ai-development",
  },
  {
    title: "Consulting Services",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />,
    description:
      "Technology strategy, architecture reviews, and roadmaps—aligning innovation with your goals to maximize ROI.",
    link: "/services/consulting-services",
  },
  {
    title: "Ecommerce & CMS",
    icon: <ShoppingCartIcon className="h-8 w-8" />,
    description:
      "Headless commerce, Shopify, Magento, and custom CMS solutions—streamlined product management and seamless checkout flows.",
    link: "/services/Ecommerce",
  },
  {
    title: "NFT Development",
    icon: <PhotoIcon className="h-8 w-8" />,
    description:
      "Minting platforms, marketplaces, and smart-contract hooks for issuing, trading, and managing NFTs.",
    link: "/services/NFTMarketplace",
  },
  {
    title: "IoT Development",
    icon: <WifiIcon className="h-8 w-8" />,
    description:
      "Edge-to-cloud IoT solutions: device firmware, real-time data pipelines, analytics dashboards, and remote management.",
    link: "/services/IOT",
  },
  {
    title: "Software Maintenance & Support",
    icon: <LifebuoyIcon className="h-8 w-8" />,
    description:
      "Ongoing updates, security patches, performance monitoring, and 24/7 support to keep your systems running smoothly.",
    link: "/services/maintenancesupport",
  },
];

const ServicesPage = () => (
  <section id="features" className="py-16 md:py-20 lg:py-28">
    <div className="container mx-auto max-w-5xl">
      <SectionTitle
        title="Our Services"
        paragraph="We offer end-to-end solutions across mobile, web, cloud, and emerging tech. Explore how we can help bring your vision to life."
        center
      />

      <HoverEffect items={servicesItems} className="mt-8" />
    </div>
  </section>
);

export default ServicesPage;
