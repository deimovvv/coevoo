  import React from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import styled from "styled-components";

  const logos = [
    // Añade aquí las URLs de los logos de las marcas
    "../assets/logos/logooxidian.png",
    "../assets/logos/BLKLOGOBLANCO.png",
    "../assets/logos/ALTOPALERMO1.png",
    "../assets/logos/FOLCK_LOGO.png",
    "../assets/logos/HERNANCATTANEO_LOGO.png",
    "../assets/logos/team23.png",



    // ...
  ];

  const SliderContainer = styled.div`
    width: 77%;
    opacity: 0.7;
    padding: 10px 0; /* Reducir padding superior/inferior */
    border-radius: 10px;
    margin: 0 auto; /* Centrar el slider */
z-index: 1;
    @media (max-width: 768px) {
      width: 100%; /* Ajustar el ancho para pantallas pequeñas */
    }
  `;

  const Logo = styled.img`
    width: 100px;
    height: auto;

    @media (max-width: 768px) {
      width: 80px; /* Ajustar el tamaño del logo para pantallas pequeñas */
    }
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
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