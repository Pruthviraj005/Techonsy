"use client";

import { GiCyberEye, GiBrain, GiCloudUpload, GiNetworkBars, GiLockedChest, GiArtificialIntelligence, GiCube, GiPaintBrush, GiPieChart, GiRocket, GiCog, GiDigitalTrace, } from "react-icons/gi";
import { GiStarGate, GiProcessor, GiSprint, GiPerspectiveDiceSixFacesOne, GiChart, GiDatabase } from "react-icons/gi";
import { CiLocationArrow1 } from "react-icons/ci";

export const services = [
  { title: "Business Strategy", icon: <GiRocket className="text-blue-500 text-4xl mb-2" /> },
  { title: "IT Consulting", icon: <GiCog className="text-green-500 text-4xl mb-2" /> },
  { title: "Product Development", icon: <GiCube className="text-red-500 text-4xl mb-2" /> },
  { title: "Digital Transformation", icon: <GiDigitalTrace className="text-yellow-500 text-4xl mb-2" /> },
  { title: "Marketing Solutions", icon: <GiPieChart className="text-purple-500 text-4xl mb-2" /> },
  { title: "Custom Software", icon: <GiBrain className="text-pink-500 text-4xl mb-2" /> },
  { title: "Cloud Services", icon: <GiCloudUpload className="text-indigo-500 text-4xl mb-2" /> },
  { title: "Cybersecurity", icon: <GiLockedChest className="text-orange-500 text-4xl mb-2" /> },
  { title: "AI & Machine Learning", icon: <GiArtificialIntelligence className="text-teal-500 text-4xl mb-2" /> },
  { title: "Blockchain Solutions", icon: <GiNetworkBars className="text-blue-700 text-4xl mb-2" /> },
  { title: "UI/UX Design", icon: <GiPaintBrush className="text-red-600 text-4xl mb-2" /> },
  { title: "Data Analytics", icon: <GiCyberEye className="text-yellow-600 text-4xl mb-2" /> },
];

export const expertiseData = [
  {
    title: "Actionable Strategies",
    description: "We design strategies with a focus on real-time, actionable implementation for successful execution.",
    icon: <GiStarGate className="text-blue-500 text-4xl mb-2" />, // Strategic Planning Icon
  },
  {
    title: "Advanced Expertise",
    description: "Our team leverages cutting-edge technology and cognitive computing to drive digital transformation.",
    icon: <GiProcessor className="text-green-500 text-4xl mb-2" />, // CPU Processor (Represents Tech Expertise)
  },
  {
    title: "Agile Execution",
    description: "We break down silos and work responsively, enabling rapid project execution and staying ahead of the competition.",
    icon: <GiSprint className="text-red-500 text-4xl mb-2" />, // Running Person (Represents Agile Execution)
  },
  {
    title: "User-Centric Design",
    description: "Combining design-forward thinking with quick delivery to create seamless, user-centric prototypes.",
    icon: <GiPerspectiveDiceSixFacesOne className="text-purple-500 text-4xl mb-2" />, // Perspective Icon (Represents User-Centric Approach)
  },
  {
    title: "Innovative Perspective",
    description: "We bring fresh, creative ideas to every project, seamlessly blending creativity and technology.",
    icon: <GiChart className="text-pink-500 text-4xl mb-2" />, // Chart (Represents Innovation & Growth)
  },
  {
    title: "Data-Driven Insights",
    description: "Using powerful metrics analysis to gather real-time insights and understand customer and employee behavior.",
    icon: <GiDatabase className="text-yellow-500 text-4xl mb-2" />, // Database (Represents Data-Driven Insights)
  }
];


export const projects = [
  {
    title: "Project A",
    description: "Innovative approach to cloud computing solutions.",
    image: '/images/blog/blog-01.jpg',
  },
  {
    title: "Project B",
    description: "AI-powered systems for data-driven decision making.",
    image: '/images/blog/blog-01.jpg',
  },
  {
    title: "Project C",
    description: "Building scalable products with agile methodology.",
    image: '/images/blog/blog-01.jpg',
  },
  {
    title: "Project D",
    description: "UI/UX design for seamless user experiences.",
    image: '/images/blog/blog-01.jpg',
  },
];
export const blogs = [
  { title: 'Hello', description: 'Insights on emerging tech trends.', image: '/images/blog/blog-01.jpg' },
  { title: 'Blog Title 2', description: 'Strategies for business growth.', image: '/images/blog/blog-02.jpg' },
  { title: 'Blog Title 3', description: 'Expert advice on digital transformation.', image: '/images/blog/blog-03.jpg' }
]
export const btn =
{
  icon: <CiLocationArrow1 className="text-white-500 text-2xl mb-2" />,
}