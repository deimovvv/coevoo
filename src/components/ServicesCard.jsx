import React from "react";
import styled from "styled-components";

const Section = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 15px;

@media screen and (max-width: 64em) {
    grid-template-columns: 1fr;
  }


@media screen and (max-width: 40em) {
grid-template-columns: 1fr;
  

};
`

const DescripcionContainer = styled.div`
  color: white;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;


  @media screen and (max-width: 40em) {
    padding-top: 10px;
    font-size: 12px;
    margin-bottom: 15px
    text-align: center;
  }
`;

const Title = styled.h3`
  padding-bottom: 10px;
`;

const ImagenContainer = styled.div`
  @media screen and (max-width: 40em) {
    width: 70%;
     
  }
`;

const IMG = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 40em) {
    width: 500px;
  height: 300px;
  
   
  }
`;

const ServicesCard = ({ id, title, description }) => {
  const servicesURL = `assets/serviciosImagenes/${id}.jpg`;

  return (
    <Section>
      <ImagenContainer>
        <IMG src={servicesURL} alt="" />
      </ImagenContainer>

      <DescripcionContainer>
        <Title> {title} </Title>
        <p>{description}</p>
      </DescripcionContainer>
    </Section>
  );
};

export default ServicesCard;
