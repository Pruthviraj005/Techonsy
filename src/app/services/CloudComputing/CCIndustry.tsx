import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FaHeartbeat, FaBook, FaLandmark, FaPlane, FaShippingFast, FaNetworkWired, FaUtensils } from "react-icons/fa";
import { IoMdCash } from "react-icons/io";

const services = [
  { title: "Healthcare", icon: <FaHeartbeat />, description: "Cloud-based solutions to modernize patient care with integrated health records and real-time updates.", link: "#" },
  { title: "Education", icon: <FaBook />, description: "Cloud-based EdTech platforms for adaptive learning and administrative task automation.", link: "#" },
  { title: "FinTech", icon: <IoMdCash />, description: "Secure cloud solutions for real-time transaction processing and financial analytics.", link: "#" },
  { title: "Real Estate", icon: <FaLandmark />, description: "Cloud-powered solutions for property management and seamless transactions.", link: "#" },
  { title: "Aviation", icon: <FaPlane />, description: "Advanced cloud solutions to optimize flight operations and improve safety protocols.", link: "#" },
  { title: "Logistics", icon: <FaShippingFast />, description: "Cloud solutions for real-time supply chain tracking and management.", link: "#" },
  { title: "Telecom", icon: <FaNetworkWired />, description: "Scalable cloud infrastructure for improved connectivity and network management.", link: "#" },
  { title: "Restaurant", icon: <FaUtensils />, description: "Cloud-based management tools for streamlining restaurant operations.", link: "#" },
];

export default function CCIndustry() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Next-Gen Cloud Solutions for Diverse Industry Landscapes
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-12">
          Experience the future of industry innovation with our tailored cloud solutions. 
          Elevate your business with seamless integration and efficiency.
        </p>
      </div>

      {/* Responsive Hover Effect Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8">
        <HoverEffect items={services} />
      </div>
    </section>
  );
}
