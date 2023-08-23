import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

import slider1 from "../../Assets/Swiper/slider1.jpg";

const slidesData = [
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  {
    image: slider1,
    title: "समाचार अद्यतन",
    description:
      "हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़! हेडलाइन: सौर ऊर्जा से सहायिता, खेती के क्षेत्र में नए उत्थान की दौड़!",
  },
  // Add more slide data here
];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} // Add Autoplay module
        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay settings
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.image} alt="" />
              <div className="color-overlay"></div>
              <div className="slider-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
