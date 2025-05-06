// app/technology/page.tsx

"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import { HoverEffect } from "@/components/ui/card-hover-effect";

// Heroicons
import {
  CpuChipIcon,
  CodeBracketIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  CubeIcon,
  CloudArrowUpIcon,
  ServerIcon,
  TableCellsIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  SparklesIcon,
  CheckBadgeIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";

// === Category definitions ===

const frontendItems = [
  {
    title: "React.js",
    icon: <CubeIcon className="h-8 w-8" />,
    description: "A declarative, component-based library for building fast, scalable user interfaces.",
    link: "/technology/frontend/reactjs",
  },
  {
    title: "Angular",
    icon: <CodeBracketIcon className="h-8 w-8" />,
    description: "A full-featured TypeScript framework for building enterprise-grade web applications.",
    link: "/technology/frontend/Angular",
  },
  {
    title: "JavaScript",
    icon: <CpuChipIcon className="h-8 w-8" />,
    description: "The language of the web—driving interactive browser experiences and server-side apps alike.",
    link: "/technology/frontend/javascript",
  },
];

const backendItems = [
  {
    title: "Node.js",
    icon: <CloudIcon className="h-8 w-8" />,
    description: "A fast, event-driven JavaScript runtime for building scalable network applications.",
    link: "/technology/backend/nodejs",
  },
  {
    title: "Python",
    icon: <ServerIcon className="h-8 w-8" />,
    description: "A versatile, high-level language known for its readability and vast ecosystem.",
    link: "/technology/backend/python",
  },
  {
    title: "Java",
    icon: <CheckBadgeIcon className="h-8 w-8" />,
    description: "A robust, class-based language widely used in enterprise systems and Android development.",
    link: "/technology/backend/java",
  },
];

const mobileItems = [
  {
    title: "Android",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    description: "Google’s open-source mobile OS powering billions of devices worldwide.",
    link: "/technology/MobileDevelopment/Android",
  },
  {
    title: "iOS",
    icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
    description: "Apple’s mobile platform for building high-performance iPhone and iPad apps.",
    link: "/technology/MobileDevelopment/IOS",
  },
  {
    title: "Flutter",
    icon: <SparklesIcon className="h-8 w-8" />,
    description: "Google’s UI toolkit for crafting natively compiled, cross-platform mobile applications.",
    link: "/technology/MobileDevelopment/flutter",
  },
  {
    title: "React Native",
    icon: <CubeIcon className="h-8 w-8" />,
    description: "Build native mobile apps using React’s component model and JavaScript.",
    link: "/technology/MobileDevelopment/react_native",
  },
];

const databaseItems = [
  {
    title: "MySQL",
    icon: <TableCellsIcon className="h-8 w-8" />,
    description: "The world’s most popular open-source relational database.",
    link: "/technology/Databases/mysql",
  },
  {
    title: "PostgreSQL",
    icon: <TableCellsIcon className="h-8 w-8" />,
    description: "An advanced, open-source relational database with strong SQL compliance.",
    link: "/technology/Databases/PostgreSQL",
  },
  {
    title: "MongoDB",
    icon: <TableCellsIcon className="h-8 w-8" />,
    description: "A flexible, document-oriented NoSQL database for modern applications.",
    link: "/technology/Databases/mongodb",
  },
  {
    title: "Firebase",
    icon: <CloudArrowUpIcon className="h-8 w-8" />,
    description: "Google’s real-time database and backend as a service for web & mobile.",
    link: "/technology/Databases/firebase",
  },
  {
    title: "Supabase",
    icon: <SparklesIcon className="h-8 w-8" />,
    description: "An open-source Firebase alternative with instant APIs and realtime functionality.",
    link: "/technology/Databases/supabase",
  },
];

const fullStackItems = [
  {
    title: "MERN Stack",
    icon: <CubeIcon className="h-8 w-8" />,
    description: "MongoDB, Express, React, Node.js—a full-JavaScript stack for rapid development.",
    link: "/technology/full-stack-frameworks/mern-stack",
  },
  {
    title: "MEAN Stack",
    icon: <CubeIcon className="h-8 w-8" />,
    description: "MongoDB, Express, Angular, Node.js—a comprehensive TypeScript-centric stack.",
    link: "/technology/full-stack-frameworks/mean-stack",
  },
  {
    title: "Next.js",
    icon: <CodeBracketSquareIcon className="h-8 w-8" />,
    description: "The React framework for server-side rendering, static exports, and more.",
    link: "/technology/full-stack-frameworks/next",
  },
  {
    title: "Nest.js",
    icon: <ServerIcon className="h-8 w-8" />,
    description: "A progressive Node.js framework for building scalable, maintainable server apps.",
    link: "/technology/full-stack-frameworks/nest",
  },
];

const cloudItems = [
  {
    title: "Google Cloud",
    icon: <CloudIcon className="h-8 w-8" />,
    description: "A suite of cloud computing services from Google for analytics, AI, and more.",
    link: "/technology/cloud-services/google-cloud",
  },
  {
    title: "AWS",
    icon: <CloudIcon className="h-8 w-8" />,
    description: "Amazon’s broad and deep cloud platform powering countless startups and enterprises.",
    link: "/technology/cloud-services/aws",
  },
  {
    title: "Microsoft Azure",
    icon: <CloudIcon className="h-8 w-8" />,
    description: "Microsoft’s integrated cloud services for compute, storage, networking, and AI.",
    link: "/technology/cloud-services/azure",
  },
];

const emergingItems = [
  {
    title: "Blockchain",
    icon: <CubeIcon className="h-8 w-8" />,
    description: "Decentralized ledger tech for transparent, tamper-proof transactions.",
    link: "/technology/blockchain",
  },
  {
    title: "Internet of Things",
    icon: <SparklesIcon className="h-8 w-8" />,
    description: "Connecting devices at the edge to the cloud for real-time insights.",
    link: "/technology/iot",
  },
  {
    title: "Artificial Intelligence",
    icon: <CpuChipIcon className="h-8 w-8" />,
    description: "Tech that simulates human intelligence processes—ML, CV, NLP, and more.",
    link: "/technology/ai",
  },
  {
    title: "Generative AI",
    icon: <SparklesIcon className="h-8 w-8" />,
    description: "AI models that create new content—images, text, music—on demand.",
    link: "/technology/generative-ai",
  },
];

const devopsItems = [
  {
    title: "DevOps",
    icon: <CheckBadgeIcon className="h-8 w-8" />,
    description: "Practices and tools for continuous integration, delivery, and collaboration.",
    link: "/technology/devops_infrastructure/devops",
  },
  {
    title: "RAG",
    icon: <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />,
    description: "Retrieval-Augmented Generation to boost LLM outputs with external knowledge.",
    link: "/technology/devops_infrastructure/rag",
  },
  {
    title: "Jenkins",
    icon: <CheckBadgeIcon className="h-8 w-8" />,
    description: "Open-source automation server for building, testing, and deploying projects.",
    link: "/technology/devops_infrastructure/jenkins",
  },
];

// === Page component ===

const TechnologyPage = () => (
  <section id="technologies" className="py-16 md:py-20 lg:py-28">
    <div className="container mx-auto max-w-5xl space-y-16">
      <SectionTitle
        title="Technologies We Work With"
        paragraph="From front-end frameworks to cloud platforms and emerging tech, here’s our toolbox."
        center
      />

      {/* Repeat one block for each category */}
      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Frontend</h3>
        <HoverEffect items={frontendItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Backend</h3>
        <HoverEffect items={backendItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Mobile Development</h3>
        <HoverEffect items={mobileItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Databases</h3>
        <HoverEffect items={databaseItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Full-Stack Frameworks & Stacks</h3>
        <HoverEffect items={fullStackItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Cloud Services</h3>
        <HoverEffect items={cloudItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">Emerging Technologies</h3>
        <HoverEffect items={emergingItems} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-zinc-100 mb-6">DevOps & Infrastructure</h3>
        <HoverEffect items={devopsItems} />
      </div>
    </div>
  </section>
);

export default TechnologyPage;
