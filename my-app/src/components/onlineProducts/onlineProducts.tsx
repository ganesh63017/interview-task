// const OnlineProducts = () => {
//   return (
//     <div className="relative bg-primary-main min-h-24 pl-[230px] pt-[120px]">
//       <div className="flex flex-col gap-6">
//         <div className="gap-4 flex flex-col">
//           <h1 className="text-text-main text-4xl z-[500]">ONLINE PRODUCTS</h1>
//           <hr className="border-2 border-text-main w-[548px]" />
//         </div>
//         <h1 className="text-white text-lg w-[578px]">
//           Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
//           yourself and Thank us later.
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default OnlineProducts;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Product from "../../../public/images/onlineproducts1.png";
import Image from "next/image";

export default function OnlineProducts() {
  return (
    <div className="relative bg-primary-main min-h-24 pl-[150px] pt-[100px]">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper meet-chef-slider"
      >
        <div className="items-center flex flex-col gap-8 absolute top-[10%] left-[40%] z-[100] h-[76px] text-black w-[359px] text-base">
          <h1 className="text-4xl font-semibold">ONLINE ONLY</h1>
          <hr className="border-2 border-black w-[78px]" />
          <h1 className="text-xl text-center">
            GET 20% OFF YOUR ORDER OF $50 OR MORE Use code{" "}
            <span className="font-bold">“Chef20”</span>
          </h1>
          <button className="font-semibold border-black p-4 border-2 text-2xl z-[100] h-[76px] [359px]">
            SHOP NOW
          </button>
        </div>
        <SwiperSlide className="relative">
          <Image src={Product} alt="png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product} alt="png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product} alt="png" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product} alt="png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
