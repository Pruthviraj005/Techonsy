"use client";

import React from "react";
import SingleFeature from "../Features/SingleFeature";
import Technologies from "./data";
import RenderTechnologies from "./renderTechnologies";

const Technology = () => {
  return (
    <>
      <section className="container mx-auto max-w-5xl">
        {/* ✅ Heading Section */}
        <h2 className="mb-8 text-center text-5xl font-bold text-gray-900 dark:text-white">
          <span className="text-yellow-500">Our Technologies</span>
        </h2>
        <div className="flex flex-col flex-nowrap items-center justify-center gap-[5%] md:flex-row">
          <div className="w-full self-start md:w-[50%]">
            <p className="mb-12 text-justify text-lg sm:text-xl">
              We Create New Solutions And Transform Existing Ones With
              Technologies That Beat Industry Best Timelines
            </p>
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
