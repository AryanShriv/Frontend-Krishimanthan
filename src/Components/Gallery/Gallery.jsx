import React from "react";
import image1 from "../../Assets/Swiper/slider-4.jpg";
import img1 from "../../Assets/Swiper/adv.jpg";

import "./Gallery.css";
const gallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="heading">
          <h1>गेलरी</h1>
        </div>
        <div className="images">
          <img src={image1} alt="" />
          <img src={image1} alt="" />
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default gallery;
