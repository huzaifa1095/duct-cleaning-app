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
    Img: "/news/pic1.jpg",
    Title: "Box Office News!",
    Para: `
### DuctsandVents is Breaking Records Across America!
From coast to coast, **DuctsandVents** is making _clean air history_!  
Here's what's lighting up the charts:

- 🌟 **Over 50,000 HVAC Systems Cleaned Nationwide**
- 📍 **Active in 30+ Major States – and expanding fast**
- 🏆 **Top-rated NADCA-Certified Crews in the U.S.**
- 🏢 **Trusted by Government Agencies, Hospitals & Fortune 500 Companies**
- ⭐ **98% Customer Satisfaction & 5-Star Service Ratings**

This isn’t just duct cleaning — **It’s a nationwide clean air movement.**

**Book your service today** and be part of the cleanest success story in America!
`,
    Button: "Book Now!",
  },
  {
    Img: "/news/pic2.jpg",
    Title: "Box Office News!",
    Para: `
# DuctsandVents Reaches a New Milestone in Clean Air Excellence!

## ✅ Recent Highlights
- 🏛️ **U.S. Federal Courthouses**  
- 🏢 **Department of Veterans Affairs Medical Centers**  
- 🏛️ **State Capitol Buildings & City Halls**  
- 🏢 **IRS and Social Security Administration Offices**  
- 🏛️ **Environmental Protection Agency (EPA) Facilities**  
- 🏢 **GSA-Managed Federal Office Buildings**  
- 🏢 **Multi-Tower Corporate Headquarters & Financial Institutions**  

---

## 🛠️ Ready to bring this level of professionalism to your building?
**Book your inspection today** and join the ranks of America’s most trusted institutions.

    `,
    Button: "Book Now!",
  },
];

const NewsSlider = () => {
  return (
    <div className="xl:px-20 pt-10 bg-base-200">
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwipe"
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
