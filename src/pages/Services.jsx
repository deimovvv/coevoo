import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import MenuOverlay from "../components/MenuOverlay";
import Logo from "../components/Logo";
import ServicesList from "../components/ServicesList";

const Container = styled.div`
  
  margin-top: 150px;
  text-align: center;
  width: 100%;

  margin-bottom: 100px !important;
  z-index: -1;
    
`;

const Back = styled.div`
display:flex;
justify-content:flex-end;
align-items:flex-end;
flex-direction:column;
margin-top: 20px;
cursor: pointer;`

const ButtonBack = styled.button`
font-family: "Syncopate", sans-serif;
display:flex;
justify-content:flex-end;
background-color: transparent;
border: none;
color: whitesmoke;
cursor: pointer;
margin-top: 5px;
font-size: 12px;`





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
          <MenuOverlay />
          <Logo />

          <ServicesList category={"servicios"} />

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
