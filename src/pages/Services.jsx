import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import MenuOverlay from "../components/MenuOverlay";
import Logo from "../components/Logo";
import ServicesList from "../components/ServicesList";
import { motion } from "framer-motion";

const Container = styled.div`
  
  margin-top: 150px;
  text-align: center;
  margin-bottom: 100px !important;
  z-index: -1;

    
`;

const Section = styled.div`
  display: grid;
  justify-content: center;

  @media screen and (max-width: 40em) {
    text-align: center;

    & > h3 {
      font-size: 13px;
    }
    & > p {
      font-size: 13px;
    }
  }

`

const Back = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
flex-direction:column;
width: 95%;
margin-top: 20px;
cursor: pointer;
@media screen and (max-width: 40em) {
  right: 10px;



  }

`

const ButtonBack = styled.button`
font-family: "Syncopate", sans-serif;
display:flex;
justify-content:flex-end;
background-color: transparent;
border: none;
color: whitesmoke;
cursor: pointer;
margin-top: 5px;
font-size: 12px;

@media screen and (max-width: 40em) {
  font-size: 10px;
  right: 10px;



  }

`





const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  const handleBack = () => {
    navigate(-1); // Navega hacia atrás
  };


  
  return (
    <>
      {isLoading ? (
        // Renderiza el Loader mientras isLoading sea true
        <Loader />
      ) : (
        // Renderiza contenido sobre servicios
        <Container>
           {/*  <Navbar /> */}
          <MenuOverlay />
          <Logo />

          <motion.div
           initial={{ y: 200, opacity: 0.9 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.1, ease: "circOut", duration: 1.6 }}
          >
          <Section>
          <ServicesList category={"servicios"} />

          </Section>
          </motion.div>

          <Back onClick={handleBack}>
           
           <box-icon
             className="flecha"
             animation="flashing"
             name="left-arrow-alt"
             flip="vertical"
             color="#ffffff"
           ></box-icon>

            <ButtonBack > back </ButtonBack>
           </Back>

        </Container>
      )}
    </>
  );
};

export default Services;
