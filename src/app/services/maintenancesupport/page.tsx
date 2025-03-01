"use client";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { btn } from "../consulting-services/data";

// Lazy Load Components for Faster Performance
const MaintenanceAndSupport = dynamic(() => import("./MaintenanceAndSupport"), { ssr: false });
const OptimizationAndServices = dynamic(() => import("./OptimizationAndServices"), { ssr: false });
const OurApproach = dynamic(() => import("./OurApproach"), { ssr: false });
const MaintenanceForSeamlessUser = dynamic(() => import("./MaintenanceForSeamlessUser"), { ssr: false });
const SoftwareMaintenance = dynamic(() => import("./SoftwareMaintenance"), { ssr: false });

export default function Home() {
    return (
        <div className="w-screen flex flex-col justify-center bg-gray-900 relative">
            <Head>
                <title>Software Maintenance & Optimization | Expert Services</title>
                <meta name="description" content="Optimize your business with expert software maintenance and ensure long-term success with flexible and scalable solutions." />
            </Head>

            <div className="text-white max-w-[1000px] mx-auto">

                {/* 🚀 Hero Section */}
                <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] py-10">
                    <div className="h-full bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 absolute w-full border-b border-cyan-600"></div>
                    <div className="absolute bg-black w-full mx-auto bg-opacity-70 h-full"></div>

                    <div className="relative z-10 px-6 flex flex-col gap-10 mt-16">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Optimize Your Business with Expert Software Maintenance
                            </h1>
                            <p className="text-lg md:text-xl text-gray-300 mt-8 font-light">
                                Enhance productivity and ensure long-term success with flexible and scalable software maintenance solutions.
                            </p>
                        </div>

                        <button className="bg-blue-600 px-6 py-3 text-lg font-medium rounded-md hover:bg-blue-900 max-w-[450px] mx-auto transition-all transform hover:scale-105 duration-300 ease-in-out">
                            Consult Software Maintenance Experts →
                        </button>
                    </div>
                </section>

                {/* 🚀 Lazy Loaded Components for Faster Performance */}
                <Suspense fallback={<div className="text-center text-white py-10">Loading Services...</div>}>
                    <MaintenanceAndSupport />
                    <OptimizationAndServices />
                    <OurApproach />
                    <MaintenanceForSeamlessUser />
                    <SoftwareMaintenance />
                </Suspense>

                {/* 🚀 Get in Touch Section */}
                <section className="px-6 text-center lg:mt-[90%] mb-10">
                    <div className="w-11/12 max-w-4xl mx-auto border border-gray-700 rounded-lg bg-gray-900/50 p-10 flex flex-col items-center text-center shadow-lg">
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">Get in Touch</h1>
                        <p className="mt-3 text-lg sm:text-xl font-light text-gray-300">
                            Connect with our expert strategy consulting team for a strategy that brings results.
                        </p>

                        {/* 🚀 Contact Button */}
                        <button className="mt-6 flex items-center px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 
                            border border-blue-600 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
                            <span className="mr-3">{btn.icon}</span>
                            Contact Our Experts
                        </button>
                    </div>
                </section>

            </div>
        </div>
    );
}
