import Experience from "./experiences/Experience";
import "../css/style.css";
import "animate.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { motion } from "framer-motion";

import Footer from "./Footer";
import Navigation from "./Navigation";
import ProjectsPreview from "./UI/ProjectsPreview";
import BrandAndServices from "./UI/BrandAndServices";

const CenteredText = styled.div`
  display: flex;
  flex-direction: column;
  z-index: -1;
  justify-content: center; /* Cambiado para empujar hacia abajo */
  align-items: center; /* Mantiene alineación a la izquierda */
  text-align: center; /* Asegura que el texto esté alineado a la izquierda */
  height: 80vh; /* Ajustado para mejor balance */
  width: 90%;
  color: white;
  padding: 0 20px;
  opacity: 0;
  animation: fadeIn 5s forwards;
  text-shadow: 2px 2px 8px rgba(120, 120, 120, 0.4); 
  margin-left: 10px;

  @media (min-width: 768px) {
    padding-top: 50px;
    height: 75vh; /* Ajustado para desktop también */
    justify-content: flex-end;
    align-items: flex-start; /* Mantiene alineación a la izquierda */
    text-align: left;
    margin-left: 50px;
  }
`;

const Headline = styled.h1`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 2.7rem;
  font-weight: 400;
  line-height: 1.2; /* Ajusta el espacio entre líneas */
  margin: 0;

  @media (min-width: 768px) {
    font-size: 6.5rem; /* Tamaño más grande para pantallas grandes */
  }
`;

const HighlightedText = styled.span`
  color: rgb(170, 144, 165);
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


/* Contenedor que envuelve el Loader */
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15, 15, 15, 1); /* Fondo casi negro mientras carga */
  height: 100vh; /* Ocupa toda la altura del viewport */
  width: 100vw; /* Asegura que ocupe todo el ancho */
  z-index: 1000; /* Asegúrate de que el Loader esté por debajo del menú */
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(localStorage.getItem('language') || 'EN');
    };

    window.addEventListener('storage', handleLanguageChange);
    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const translations = {
    ES: {
      title: 'Coevo Studio - Agencia Creativa | Producciones 3D, RV/RA, IA y Audiovisuales',
      description: 'Descubre Coevo Studio, una agencia creativa interdisciplinaria de Argentina especializada en entornos 3D de vanguardia, experiencias inmersivas de RV/RA, contenido generado por IA y producciones audiovisuales de alta calidad.',
      keywords: 'agencia creativa, diseño 3D, realidad virtual, realidad aumentada, contenido IA, producción audiovisual, Argentina, videoclips, experiencias inmersivas',
      subtitle: 'Agencia-High-Tech',
      headline1: 'Somos la',
      headline2: 'alquimia entre',
      headline3: 'visión y tecnología'
    },
    EN: {
      title: 'Coevo Studio - Creative Agency | 3D, VR/AR, AI & Audiovisual Productions',
      description: 'Discover Coevo Studio, an interdisciplinary creative agency from Argentina specializing in cutting-edge 3D environments, immersive VR/AR experiences, AI-generated content, and high-quality audiovisual productions.',
      keywords: 'creative agency, 3D design, virtual reality, augmented reality, AI content, audiovisual production, Argentina, videoclips, immersive experiences',
      subtitle: 'High-Tech-Agency',
      headline1: 'We\'re the',
      headline2: 'alchemy between',
      headline3: 'vision and technology'
    },
    DE: {
      title: 'Coevo Studio - Kreativagentur | 3D, VR/AR, KI & Audiovisuelle Produktionen',
      description: 'Entdecken Sie Coevo Studio, eine interdisziplinäre Kreativagentur aus Argentinien, spezialisiert auf modernste 3D-Umgebungen, immersive VR/AR-Erlebnisse, KI-generierte Inhalte und hochwertige audiovisuelle Produktionen.',
      keywords: 'Kreativagentur, 3D-Design, Virtual Reality, Augmented Reality, KI-Inhalte, audiovisuelle Produktion, Argentinien, Videoclips, immersive Erfahrungen',
      subtitle: 'High-Tech-Agentur',
      headline1: 'Wir sind die',
      headline2: 'Alchemie zwischen',
      headline3: 'Vision und Technologie'
    }
  };

  const t = translations[currentLanguage];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href="https://coevo.studio/" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content="https://coevo.studio/" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <>
          <Navigation />
          <div className="wrapper">
            {/* Centrado del texto */}
            <CenteredText className="animate__animated animate__fadeIn">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <SubHeadline>{t.subtitle}</SubHeadline>
                <Headline>
                  {t.headline1} <br /> {t.headline2} <br />
                  <HighlightedText>{t.headline3}</HighlightedText>
                </Headline>
              </motion.div>
            </CenteredText>
            <Experience />
          </div>

          <BrandAndServices />
          <ProjectsPreview />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;