import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/models/slider1.jpg",
  "/models/slider2.jpg",
  "/models/slider3.jpg",
  "/models/slider4.jpg"
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    rtl: true
  };
  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", marginTop: 16, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px #0001" }}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt="slider" style={{ width: "100%", height: 400, objectFit: "cover" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
