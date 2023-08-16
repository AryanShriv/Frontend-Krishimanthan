import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Carousel.css";

import slider1 from "../../Assets/Swiper/slider1.jpg";
import slider2 from "../../Assets/Swiper/slider2.jpg";
import slider3 from "../../Assets/Swiper/slider-3.jpg";
import slider4 from "../../Assets/Swiper/slider-4.jpg";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image1">
              <img src={slider1} alt="" />
              <div className="color-overlay"></div>
              <div className="slider-text">
                <h1>समाचार अद्यतन</h1>
                <p>
                  हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान
                  की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए
                  उत्थान की दौड़!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image1">
              <img src={slider2} alt="" />
              <div className="color-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image1">
              <img src={slider3} alt="" />
              <div className="color-overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image1">
              <img src={slider4} alt="" />
              <div className="color-overlay"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
