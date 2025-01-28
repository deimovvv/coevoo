import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ServicesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  align-items: center;
  justify-items: center;

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
  padding-right: 20px;
  



  @media screen and (max-width: 40em) {
    padding-top: 10px;
  padding-right: 0px;
    
    font-size: 13px;
    margin-bottom: 15px;
    text-align: center;
    width: 70%;
    

  }
`;

const Title = styled.h3`
  padding-bottom: 10px;
  @media screen and (max-width: 40em) {
    
    font-size: 13px;
    
    

  }
`;

const ImagenContainer = styled.div`
  @media screen and (max-width: 40em) {
  
     
  }
`;

const IMG = styled.img`
  width: 600px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 40em) {
    width: 380px;
  height: 280px;
  margin-top: 40px;
  margin-bottom: 40px;

  
   
  }
`;

const ServicesCard = ({ id, title, description }) => {
  const servicesURL = `assets/serviciosImagenes/${id}.jpg`;

  return (
    <motion.div
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1, ease: "circOut", duration: 1 }}
  >
    <ServicesDiv>
      <ImagenContainer>
        <IMG src={servicesURL} alt="" />
      </ImagenContainer>

      <DescripcionContainer>
        <Title> {title} </Title>
        <p>{description}</p>
      </DescripcionContainer>
    </ServicesDiv>
    </motion.div>
  );
};

export default ServicesCard;
