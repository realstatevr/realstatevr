import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// صور خلفيات عقارية مجانية (Unsplash)
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
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
