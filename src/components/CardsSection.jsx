import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";


import Card from './Card'
const CardsSection = () => {
  return (
    <div className="cards-section">
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}

          breakpoints={{
            372: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            881: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
           1173: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
          }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>
        <SwiperSlide><Card /></SwiperSlide>

      </Swiper>
       

    </div>
  )
}

export default CardsSection