import React from "react";
import ReactMarkdown from "react-markdown";

const NewsSlide = ({ Img, Title, Para, Button }) => {
  return (
    <div className="hero bg-base-200 h-350 md:h-250  ">
      <div className="hero-content flex-col px-10 md:px-0 xl:px-20 xl:flex-row-reverse">
        <img src={Img} className="w-md rounded-lg shadow-2xl" />

        <div>
          <h1 className="text-xl lg:text-5xl font-bold">{Title}</h1>
          <div className="prose prose-lg lg:prose-xl">
            <ReactMarkdown>{Para}</ReactMarkdown>
          </div>
          <button className="btn btn-primary mt-5">{Button}</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSlide;
