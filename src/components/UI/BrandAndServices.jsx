import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BrandSlider from "./BrandSlider";
import Services from "./Services";

const Container = styled.div`
background: linear-gradient(to bottom, rgba(15, 15, 15, 0.2) 0%, rgba(15, 15, 15, 1) 3%);
  padding: 0;
  margin-top: 2rem; /* Agregado para empujar la sección hacia abajo */
  border-radius: 10px;
  border-top: 1px solid rgba(120, 120, 120, 0.1);
  min-height: 800px; /* Altura mínima para evitar choques */
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding-bottom: 2rem; /* Espacio adicional en la parte inferior */

  @media (min-width: 768px) {
    height: 1200px; /* Aumentado para evitar choques */
    margin-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const TitleContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column; /* Cambia a columna para pantallas pequeñas */
  justify-content: center; /* Centra el contenido horizontalmente */
  position: relative; /* Necesario para posicionar el texto con opacidad */
  align-items: center; /* Alinea verticalmente los elementos */

  @media (min-width: 768px) {
    width: 80%;
    flex-direction: row; /* Cambia a fila para pantallas más grandes */
    justify-content: flex-start; /* Alinea el contenido a la izquierda */
    align-items: flex-start; /* Alinea el contenido a la izquierda */
    height: 30vh;
    
  }
`;

const Title = styled(motion.h1)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 3rem;
  font-weight: 250;
  margin-top: 50px;
  color: white;
  text-align: center; /* Centra el texto */

  @media (min-width: 768px) {
    font-size: 7.1rem;
    margin-top: 120px;
    text-align: left; /* Alinea el texto a la izquierda */
  }
`;

const OpacityText = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: white;
  opacity: 0.5; /* Ajusta la opacidad del texto */
  margin-top: 20px; /* Espacio entre el título y el texto con opacidad */
  text-align: center; /* Centra el texto */

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-left: 20px; /* Espacio entre el título y el texto con opacidad */
    margin-top: 207px;
    text-align: left; /* Alinea el texto a la izquierda */
  }
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