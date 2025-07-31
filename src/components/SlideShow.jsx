"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

const imgs = [
  "https://www.ductandvent.com/Data/components/sliderImages/Duct-and-Vent-Cleaning-Riverpoint-on-the-Connecticut-East-Hartford-CT.jpg",
  "https://www.ductandvent.com/Data/components/sliderImages/Duct-and-Vent-Cleaning-Sage-Park-Middle-School-Windsor-CT.jpg",
  "https://www.ductandvent.com/Data/components/sliderImages/Duct-and-Vent-Cleaning-Seabury-Bloomfield-CT.jpg",
];

const SlideShow = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper"
      >
        {imgs.map((img) => (
          <SwiperSlide>
            <Image
              width={1710}
              height={800}
              alt="slide"
              className="mx-auto h-200 object-cover"
              src={img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SlideShow;
