import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BrandSlider from "./BrandSlider";
import Services from "./Services";

const Container = styled.div`
  background: rgba(12, 12, 12, 1); /* Fondo de ruido con opacidad negra */
  padding: 10px;
  border-radius: 10px;
  height: 1050px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente */
  justify-content: flex-start; /* Mueve el contenido hacia arriba */
  gap: 20px; /* Espacio uniforme entre los elementos */
`;

const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start; /* Alinea el contenido a la derecha */
  position: relative; /* Necesario para posicionar el texto con opacidad */
  align-items: center; /* Alinea verticalmente los elementos */
`;

const Title = styled(motion.h1)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 7.1rem;
  font-weight: 250;
  margin-top: 140px;
  color: white;
  /* Alinea el texto a la derecha */
`;

const OpacityText = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.3rem;
  font-weight: 200;
  color: white;
  opacity: 0.5; /* Ajusta la opacidad del texto */
  margin-left: 20px; /* Espacio entre el título y el texto con opacidad */
  margin-top: 207px; 
 
`;

const BrandAndServices = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container ref={ref}>
      <BrandSlider />
      <TitleContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Skills
        </Title>
        <OpacityText
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our expertise in various fields
        </OpacityText>
      </TitleContainer>
      <Services />
    </Container>
  );
};

export default BrandAndServices;