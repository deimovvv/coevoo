import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import Loader from '../components/Loader';
import Logo from '../components/Logo';
import SidebarMenu from '../components/SidebarMenu';
import Team from '../components/Team';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica', 'Arial', sans-serif;
  }
`;

const Container = styled.div`
  /* Tus estilos existentes */
`;

const Section = styled.section`
  /* Tus estilos existentes */
`;

const SectionText = styled.div`
  /* Tus estilos existentes */
`;

const Gallery = styled.div`
  /* Tus estilos existentes */
`;

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  }, []);

  return (
    <>
      <GlobalStyle />
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="animate__animated animate__fadeIn">
          {/* <Navbar /> */}
          {/* <MenuOverlay/> */}
          {/* <LogoNegro color="white" /> */}
          <Logo />
          <SidebarMenu />
          <motion.div
            initial={{ y: 200, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, ease: "circOut", duration: 1.6 }}
          >
            <Section>
              <SectionText>
                <h3>Welcome to Coevo...</h3>
                {/* Resto del contenido */}
              </SectionText>
              <Gallery>
                {/* Contenido de la galería */}
              </Gallery>
              {/* Team Section */}
              <Team />
            </Section>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default AboutUs;