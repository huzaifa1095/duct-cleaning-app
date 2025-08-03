import React from "react";

const NewsSlide = ({ Img, Title, Para, Button }) => {
  return (
    <div className="hero bg-base-200 h-150 lg:h-100 ">
      <div className="hero-content flex-col lg:px-30 lg:flex-row-reverse">
        <img src={Img} className="w-md rounded-lg shadow-2xl" />

        <div>
          <h1 className="text-xl lg:text-5xl font-bold">{Title}</h1>
          <p className="py-6">{Para}</p>
          <button className="btn btn-primary">{Button}</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSlide;
