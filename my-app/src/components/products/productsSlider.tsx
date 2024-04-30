import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Product1 from "../../../public/images/product1.png";
import Product2 from "../../../public/images/product2.png";
import Product3 from "../../../public/images/product3.png";
import Product4 from "../../../public/images/product4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

export default function ProductsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="Swiper product-swiper"
      >
        <SwiperSlide>
          <Image src={Product1} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product2} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product3} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product4} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product2} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product1} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product2} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product4} alt="product" height={335} width={255} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Product3} alt="product" height={335} width={255} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
