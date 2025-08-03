"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import NewsSlide from "./NewsSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const items = [
  {
    Img: "https://www.ductandvent.com/Data/components/home-first-feature/US-Naval-Ship.jpg",
    Title: "Box Office News! 1",
    Para: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    Button: "Get Started",
  },
  {
    Img: "https://www.ductandvent.com/Data/components/home-first-feature/US-Naval-Ship.jpg",
    Title: "Box Office News! 2",
    Para: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
    Button: "Get Started",
  },
];

const NewsSlider = () => {
  return (
    <div className=" md:px-60 bg-base-200">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {items.map((slide) => (
          <SwiperSlide>
            <NewsSlide
              Img={slide.Img}
              Title={slide.Title}
              Para={slide.Para}
              Button={slide.Button}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
