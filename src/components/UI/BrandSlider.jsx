import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const logos = [
  // Añade aquí las URLs de los logos de las marcas
  "",
  "../assets/logos/logooxidian.png",
  "../assets/logos/BLKLOGOBLANCO.png",
  // ...
];

const SliderContainer = styled.div`
  width: 80%;
  opacity: 0.7;
  padding: 5px 0; /* Reducir padding superior/inferior */
  border-radius: 10px;
`;
const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Velocidad de la transición
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Velocidad de autoplay
    cssEase: "linear", // Transición continua
    arrows: false, // Oculta las flechas de navegación
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <Logo src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default BrandSlider;