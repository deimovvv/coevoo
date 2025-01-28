import Experience from "./experiences/Experience";
import Logo from "./Logo";
import "../css/style.css";
import "animate.css"; // Importa animate.css
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import MenuOverlay from "./others/MenuOverlay";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { FaArrowDown } from "react-icons/fa"; // Importa el ícono de flecha
import { motion } from "framer-motion"; // Importa framer-motion

import Chatbot from "./UI/Chatbot";
import Menu from "./others/Menu";
import Footer from "./Footer";
import SidebarMenu from "./SidebarMenu";
import ProjectsPreview from "./UI/ProjectsPreview";
import BrandAndServices from "./UI/BrandAndServices";

const CenteredText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -1;
  justify-content: center; /* Cambiado para empujar hacia abajo */
  align-items: center; /* Mantiene alineación a la izquierda */
  text-align: center; /* Asegura que el texto esté alineado a la izquierda */
  height: 100vh; /* Ocupa toda la pantalla */
  width: 90%;
  color: white;
  padding: 0 20px; /* Espaciado para pantallas pequeñas */
  opacity: 0; /* Inicialmente invisible */
  animation: fadeIn 5s forwards;
  text-shadow: 2px 2px 8px rgba(142, 142, 142, 0.6); 
  margin-left: 10px;

  @media (min-width: 768px) {
    padding-top: 50px; /* Ajusta el espaciado superior en pantallas más grandes */
    height: 92vh;
    justify-content: flex-end;
    align-items: flex-start; /* Mantiene alineación a la izquierda */
    text-align: left;
    margin-left: 50px;
  }
`;

const Headline = styled.h1`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 2.5rem;
  font-weight: 1000;
  line-height: 1.2; /* Ajusta el espacio entre líneas */
  margin: 0;

  @media (min-width: 768px) {
    font-size: 6.5rem; /* Tamaño más grande para pantallas grandes */
  }
`;

const HighlightedText = styled.span`
  color: rgb(170, 144, 165); /* Cambia esto al color que prefieras (por ejemplo, dorado o un tono brillante) */
`;

const SubHeadline = styled.h3`
  font-size: 0.7rem;
  font-weight: normal;
  opacity: 0.7;
  margin: 20px 10px;
  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Button = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  margin-top: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  :hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ArrowDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 20px;
`;

const ArrowDown = styled(FaArrowDown)`
  font-size: 2rem;
  color: white;
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

/* Contenedor que envuelve el Loader */
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black; /* Fondo negro mientras carga */
  height: 100vh; /* Ocupa toda la altura del viewport */
  width: 100vw; /* Asegura que ocupe todo el ancho */
  z-index: 1000; /* Asegúrate de que el Loader esté por debajo del menú */
`;

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  }, []);

  return (
    <>
      <div className="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Coevo Studio</title>
          <link rel="canonical" href="https://coevo-studio.com/" />
          <meta name="Coevo Website" content="Coevo Studio" />
        </Helmet>
        {isLoading ? (
          /* Ajuste del contenedor del Loader */
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        ) : (
          <div className="animate__animated animate__fadeIn">
            <Logo />
            {/* <Menu /> */}
            {/* <MenuOverlay /> */} {/* Asegúrate de que el menú tenga un z-index alto */}
            {/* <Link className="link" to="/copyright">
              ©2025 Coevo Studio
            </Link> */}
            <SidebarMenu />
          </div>
        )}

        {/* Centrado del texto */}
        <CenteredText className="animate__animated animate__fadeIn">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <SubHeadline>High-Tech-Agency</SubHeadline>
            <Headline>
              We're the <br /> alchemy between <br />
              <HighlightedText>vision and technology</HighlightedText>
            </Headline>
            {/* <Button className="cta-button" onClick={() => window.location.href = "mailto:https://coevo.agency@gmail.com"}>
              Let's Talk
            </Button> */}
          </motion.div>
        </CenteredText>
        {/* <ArrowDownContainer>
          <ArrowDown />
        </ArrowDownContainer> */}
        <Experience />
      </div>

      <BrandAndServices /> {/* Usa el nuevo componente aquí */}
      <ProjectsPreview />
      <Footer />
      <Chatbot />
    </>
  );
};

export default Home;