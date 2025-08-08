import React from "react";

import SliderMultiple from "./SliderMultiple";

const SliderSection = () => {
  return (
    <div className="bg-base-200">
      <h2 className="w-full text-center text-5xl py-10">
        Awards and Accreditation
      </h2>
      <div className="flex h-auto justify-center items-center p-5 md:px-20 lg:px-40 w-full bg-base-200">
        <SliderMultiple />
      </div>
    </div>
  );
};

export default SliderSection;
