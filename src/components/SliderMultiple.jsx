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

const awards = [
  {
    Img: "/awards/chamber-of-commerce.png",
    Title: "Chamber Of Commerce",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
  {
    Img: "/awards/nadca.png",
    Title: "NADCA",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
  {
    Img: "/awards/indoor-air.png",
    Title: "Indoor Air Quality Association Inc.",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
  {
    Img: "/awards/lead-safe-certified-firm.png",
    Title: "United States Environmental Protection Agency",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
  {
    Img: "/awards/iaqa-certification.jpg",
    Title: "indoor air quality association",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
  {
    Img: "/awards/acca.png",
    Title: "Air Conditioning Contractors of America Association, Inc.",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
  {
    Img: "/awards/osha.png",
    Title: "Occupational Safety and Health Administration",
    Para: "In this structure, a non-essential clause is simply inserted between the subject and the verb to distract from the fact that the subject is singular and the verb is plural or vice versa.",
  },
];

const SliderMultiple = () => {
  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 }, // Mobile
          640: { slidesPerView: 2 }, // iPad / tablets
          1024: { slidesPerView: 3 }, // Desktop
          1600: { slidesPerView: 4 }, //Bigger Desktop
        }}
        spaceBetween={20}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {awards.map((award) => (
          <SwiperSlide className="flex justify-center">
            <CardSlim Img={award.Img} Title={award.Title} Para={award.Para} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderMultiple;
