import React from "react";
import styled from "styled-components";

const DescripcionContainer = styled.div`
  color: white;
  padding-top: 50px;
  height: 400px;
  width: 600px;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 30em) {
    padding-top: 10px;
    font-size: 12px;

    text-align: center;
  }
`;

const Title = styled.h3`
  padding-bottom: 10px;
`;

const ImagenContainer = styled.div`
  grid-column: 1;
  @media screen and (max-width: 30em) {
    display: flex;
     
  }
`;

const IMG = styled.img`
  width: 600px;
  height: 400px;
  @media screen and (max-width: 30em) {
    margin-bottom: 15px;
   
  }
`;

const ServicesCard = ({ id, title, description }) => {
  const servicesURL = `assets/serviciosImagenes/${id}.jpg`;

  return (
    <>
      <ImagenContainer>
        <IMG src={servicesURL} alt="" />
      </ImagenContainer>

      <DescripcionContainer>
        <Title> {title} </Title>
        <p>{description}</p>
      </DescripcionContainer>
    </>
  );
};

export default ServicesCard;
