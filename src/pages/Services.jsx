import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import ServicesList from "../components/ServicesList";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

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
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

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

  const handleBack = () => {
    navigate(-1); // Navega hacia atrás
  };

  const translations = {
    ES: {
      title: 'Servicios - Coevo Studio | Diseño 3D, RV/RA, IA y Producción Audiovisual',
      description: 'Explora los servicios integrales de Coevo Studio: diseño de entornos 3D, experiencias inmersivas de RV/RA, creación de contenido generado por IA y producción audiovisual de alta gama para marcas de todo el mundo.',
      keywords: 'servicios diseño 3D, desarrollo RV RA, creación contenido IA, producción audiovisual, producción videoclips, experiencias inmersivas, agencia diseño digital',
      backButton: 'atrás'
    },
    EN: {
      title: 'Services - Coevo Studio | 3D Design, VR/AR, AI & Audiovisual Production',
      description: 'Explore Coevo Studio\'s comprehensive services: 3D environment design, immersive VR/AR experiences, AI-generated content creation, and high-end audiovisual production for brands worldwide.',
      keywords: '3D design services, VR AR development, AI content creation, audiovisual production, videoclip production, immersive experiences, digital design agency',
      backButton: 'back'
    },
    DE: {
      title: 'Dienstleistungen - Coevo Studio | 3D-Design, VR/AR, KI & Audiovisuelle Produktion',
      description: 'Entdecken Sie Coevo Studios umfassende Dienstleistungen: 3D-Umgebungsdesign, immersive VR/AR-Erfahrungen, KI-generierte Inhaltserstellung und hochwertige audiovisuelle Produktion für Marken weltweit.',
      keywords: '3D-Design-Services, VR AR Entwicklung, KI-Inhaltserstellung, audiovisuelle Produktion, Videoclip-Produktion, immersive Erfahrungen, digitale Designagentur',
      backButton: 'zurück'
    }
  };

  const t = translations[currentLanguage];


  
  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href="https://coevo.studio/services" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content="https://coevo.studio/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      {isLoading ? (
        // Renderiza el Loader mientras isLoading sea true
        <Loader />
      ) : (
        // Renderiza contenido sobre servicios
        <Container>
           {/*  <Navbar /> */}
          <Navigation />

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

            <ButtonBack >{t.backButton}</ButtonBack>
           </Back>

        </Container>
      )}
    </>
  );
};

export default Services;
