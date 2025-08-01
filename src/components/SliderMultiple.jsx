"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardSlim from "@/components/CardSlim";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const SliderMultiple = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center">
          <CardSlim />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SliderMultiple;
