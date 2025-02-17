"use client";

import React from "react";
import Technologies from "./data";
import RenderTechnologies from "./renderTechnologies";
import Link from "next/link";

const Technology = () => {
  return (
    <>
      <section className="container mx-auto max-w-5xl pb-8">
        {/* ✅ Heading Section */}
        <h2 className="mb-8 text-center text-5xl font-bold text-gray-900 dark:text-white">
          <span className="text-yellow-500">Our Technologies</span>
        </h2>
        <div className="flex flex-col flex-nowrap items-center justify-center gap-[5%] md:flex-row">
        <div className="w-full self-start md:w-[50%] pt-[6%]">
            <p className="mb-12 text-justify text-lg sm:text-xl">
              We Create New Solutions And Transform Existing Ones With
              Technologies That Beat Industry Best Timelines
            </p>
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-4 bg-opacity-50 p-4 shadow transition-all min-h-[250px] sm:min-h-[200px] md:h-auto">
              <p className="mb-12 text-justify text-lg text-white sm:text-xl">
                We Create New Solutions And Transform Existing Ones With
                Technologies That Beat Industry Best Timelines
              </p>
              <div className="flex items-center  space-x-8">
                <Link
                  href="/contact"
                  className="w-full rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-blue-700 sm:w-auto"
                >
                  Contact Us
                </Link>
              
              </div>
            </div> 
          </div>
          {/* Scrollable section */}
          <div
            className="h-[400px] w-full overflow-y-auto rounded-lg shadow-lg sm:h-[300px] md:h-[500px] md:w-[50%]"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
            }}
          >
            <style>
              {`
              /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
              div::-webkit-scrollbar {
                display: none;
              }
              `}
            </style>
            {/* Render rows dynamically */}
            {Technologies.map((technology, index) => (
              <React.Fragment key={technology.id}>
                <RenderTechnologies feature={technology} />
                {index !== Technologies.length - 1 && (
                  <div className="my-2" />
                )}{" "}
                {/* Add smaller spacing */}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
