import React from "react";
import { features } from "../constants";

function FeatureSection() {
  return (
    <div id="feature" className="relative mt-20 border-b border-neutral-800 min-h-[700px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-2xl font-medium px-2 py-1 uppercase">
          FEATURE
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 bg-neutral-900 text-orange-700 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h5 className="text-xl font-semibold">{feature.text}</h5>
              </div>
            </div>
            <div className="ml-16">
              <p className="text-md text-neutral-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection;
