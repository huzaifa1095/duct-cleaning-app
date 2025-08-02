import React from "react";

import SlideShow from "@/components/SlideShow";

const HeroSlideShow = () => {
  return (
    <div
      className="hero h-200 relative bg-transparent"
      // style={{
      //   backgroundImage:
      //     "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      // }}
    >
      <div className="absolute -z-10 h-auto w-full object-cover overflow-hidden">
        <SlideShow />
      </div>
      {/* <div className="hero-overlay"></div> */}
      <div className="hero-content z-5 text-neutral-content text-center">
        <div className="w-full">
          {/* <h1 className="mb-5 text-5xl text-shadow-xl text-shadow-black font-bold">
              Commercial Duct and Vent Cleaning
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p> */}
          <button className="btn btn-primary mr-8">Learn more</button>
          <button className="btn btn-success">Request a quote</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlideShow;
