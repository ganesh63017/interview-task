import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SliderImage from "../../../public/images/person.png";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function MeetChef() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper meet-chef-slider"
      >
        <button className="font-semibold text-xl absolute top-[70%] left-[40%] z-[100] h-[76px] border-4 border-white w-[359px] text-white">
          MEET CHEF MATT
        </button>
        <SwiperSlide className="relative">
          <Image src={SliderImage} alt="png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SliderImage} alt="png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={SliderImage} alt="png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
