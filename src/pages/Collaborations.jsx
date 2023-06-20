import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import { Suspense,  useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px !important;
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
          
         
          <ProjectList publisher="collaborations"   onLoad={handleImageLoad} />
         

          </Section>
        </Container>
      
        
      )}
    </>
  );
};

export default Collaborations;
