import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 100px !important;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* height: 400px; */

  gap: 0px;

  @media screen and (max-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const Copirigth = styled.div`
 
  
  /* transform: translateX(-51%);  */
  cursor: pointer;
  z-index: 99;
  position:relative;
  left: 45%;
  margin-bottom: 5%;
  

  & > h5 {
    font-family: "Syncopate", sans-serif;
    font-size: 10px;
    color: white;
    font-weight: 1000;
  }
`;

const Copy = styled.h5`
font-size: 10px;
  font-family: "Syncopate", sans-serif;
`;

const Collaborations = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  // Función para manejar el evento onLoad de las imágenes
  const handleImageLoad = () => {
    // Comprueba si todas las imágenes están cargadas
    // Puedes agregar una lógica adicional aquí si es necesario
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        // Renderiza el Loader mientras isLoading sea true
        <Loader />
      ) : (
        <Container>
          
          <Navbar />
          <Section>
            <Logo />

            <ProjectList publisher="collaborations" onLoad={handleImageLoad} />
          </Section>

          
        </Container>
      )}

      {/* <Link className="link" to="/copyright">  ©2023 Coevo Studio   </Link> */}
           
    


    </>

  );
};

export default Collaborations;
