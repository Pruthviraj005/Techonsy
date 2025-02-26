"use client";
import React from "react";
import { FaPencilRuler, FaCode, FaCheckCircle, FaRocket } from "react-icons/fa";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import Image from "next/image";

export default function IosProcess() {
  return (
    <section className="bg-slate-950 text-slate-200 py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-yellow-400">
          Streamlined Approach to iOS App Development

        </h2>

        {/* Description */}
        <p className="mt-6 text-center text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          We specialize in helping businesses enhance their strategy, develop innovative solutions, create seamless user experiences,
          and build high-quality iOS apps that add real value to users' lives.
        </p>

        <Image src="/images/ios/process.png" alt="process" width={1200} height={1200} className="mt-20" />

      </div>
    </section>
  );
}