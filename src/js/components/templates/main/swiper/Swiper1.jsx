import img1 from "../../../../../imges/swiper1/img1.jpg";
import img2 from "../../../../../imges/swiper1/img2.jpg";
import img3 from "../../../../../imges/swiper1/img3.jpg";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade,Autoplay} from 'swiper';

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export const Swiper1 = () =>{


    return (
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        speed={2000}
        autoplay={{
            delay: 10000,
            disableOnInteraction: false

        }}
        modules={[EffectFade, Autoplay]}
    >
      <SwiperSlide>
        <img src={img1} alt="" />
        <div className="text-box">
        <div>キャンプファイヤー</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={img2} alt="" />
        <div className="text-box">
        <div>月</div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <img src={img3} alt="" />
        <div className="text-box">
        <div>夜景</div>
        </div>
      </SwiperSlide>


    </Swiper>


    )
}