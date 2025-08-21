import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import Loader from '../components/Loader';
import Navigation from '../components/Navigation';
import ExperienceBackground from '../components/experiences/ExperienceBackground';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background-color: #000;
    color: #fff;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  padding: 6rem 20px 80px; /* Más espacio desde arriba y abajo */
  max-width: 1000px;
  margin: 0 auto;
  min-height: 90vh; /* Altura mínima aumentada */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrado vertical */

  @media (max-width: 768px) {
    padding: 4rem 16px 60px; /* Más espacio en móvil también */
    min-height: 85vh; /* Altura mínima aumentada en móvil */
  }
`;

const SectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Headline = styled.h1`
  font-size: 2.8rem;
  line-height: 1.1;
  font-weight: 700;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subheadline = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ListTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  color: #fff;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceItem = styled.li`
  font-size: 1rem;
  color: #bbb;
  margin-bottom: 8px;

  &::before {
    content: '▹';
    margin-right: 8px;
    color: rgb(170, 144, 165);
  }
`;

const CTASection = styled.section`
  position: relative;
  text-align: center;
  margin: 8vw 0;
  padding: 6vw 2rem;
  background: radial-gradient(ellipse at center, rgba(15, 15, 15, 0.4) 0%, transparent 70%);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled(motion.h2)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 3rem;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const CTAButtonsContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CTAPrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 35px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.8px;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(30px);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);

    &:before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 30px;
    font-size: 0.9rem;
  }
`;

const WhatsAppIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
`;


const AboutUs = () => {
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
      title: 'Nosotros - Coevo Studio | Conoce Nuestro Equipo Creativo',
      description: 'Conoce las mentes creativas detrás de Coevo Studio. Aprende sobre nuestro equipo interdisciplinario de artistas, desarrolladores y visionarios que crean experiencias digitales de vanguardia en Argentina.',
      keywords: 'sobre coevo studio, equipo creativo, artistas digitales, diseñadores 3D, desarrolladores RV, especialistas IA, agencia creativa Argentina',
      headline: 'Somos la alquimia entre visión y tecnología.',
      description1: 'Coevo es un estudio creativo con sede en Buenos Aires que trabaja en la intersección del arte, la IA, las experiencias inmersivas (sensores, xr, vr), y los entornos digitales. Construimos experiencias experimentales impulsadas por IA para una nueva era de narrativa.',
      description2: 'Combinamos biología, código, sonido y poesía visual para crear futuros significativos que viven más allá de la pantalla. Ya seas una marca, un artista, un investigador o un visionario — construyamos el futuro juntos.',
      servicesTitle: 'Lo que hacemos',
      services: [
        'Contenido de IA y Agentes Creativos',
        'Mundos Inmersivos (RV / RM / Web3D)',
        'Instalaciones Interactivas e Interfaces Espaciales',
        'Experiencias de Moda Digital y Captura de Movimiento',
        'Producción Audiovisual y Gráficos en Tiempo Real',
        'Desarrollo Web 3D y Sitios Web Artísticos'
      ],
      ctaTitle: '¿Listo para Crear Algo Extraordinario?',
      ctaSubtitle: 'Colaboremos para dar vida a tu visión con tecnología de vanguardia, experiencias inmersivas y excelencia creativa que cautive a tu audiencia.',
      ctaButton: 'Iniciar Tu Proyecto',
      whatsappMessage: '¡Hola! Estoy interesado en colaborar con Coevo Studio después de conocer más sobre su equipo y servicios.'
    },
    EN: {
      title: 'About Us - Coevo Studio | Meet Our Creative Team',
      description: 'Meet the creative minds behind Coevo Studio. Learn about our interdisciplinary team of artists, developers, and visionaries creating cutting-edge digital experiences in Argentina.',
      keywords: 'about coevo studio, creative team, digital artists, 3D designers, VR developers, AI specialists, Argentina creative agency',
      headline: 'We are the alchemy between vision and technology.',
      description1: 'Coevo is a creative studio based in Buenos Aires working at the intersection of art, AI, immersive experiences (sensors, xr, vr), and digital environments. We build experimental, AI-driven experiences for a new era of storytelling.',
      description2: 'We blend biology, code, sound, and visual poetry to create meaningful futures that live beyond the screen. Whether you\'re a brand, a performer, a researcher or a visionary — let\'s build the future together.',
      servicesTitle: 'What we do',
      services: [
        'AI Content & Creative Agents',
        'Immersive Worlds (VR / MR / Web3D)',
        'Interactive Installations & Spatial Interfaces',
        'Digital Fashion Experiences & Motion Capture',
        'Audiovisual Production & Real-Time Graphics',
        '3D Web Development & Artistic Websites'
      ],
      ctaTitle: 'Ready to Create Something Extraordinary?',
      ctaSubtitle: 'Let\'s collaborate to bring your vision to life with cutting-edge technology, immersive experiences, and creative excellence that captivates your audience.',
      ctaButton: 'Start Your Project',
      whatsappMessage: 'Hello! I\'m interested in collaborating with Coevo Studio after learning more about your team and services.'
    },
    DE: {
      title: 'Über Uns - Coevo Studio | Lernen Sie Unser Kreatives Team Kennen',
      description: 'Lernen Sie die kreativen Köpfe hinter Coevo Studio kennen. Erfahren Sie mehr über unser interdisziplinäres Team aus Künstlern, Entwicklern und Visionären, die modernste digitale Erlebnisse in Argentinien schaffen.',
      keywords: 'über coevo studio, kreatives team, digitale künstler, 3D-designer, VR-entwickler, KI-spezialisten, argentinische kreativagentur',
      headline: 'Wir sind die Alchemie zwischen Vision und Technologie.',
      description1: 'Coevo ist ein Kreativstudio mit Sitz in Buenos Aires, das an der Schnittstelle von Kunst, KI, immersiven Erfahrungen (Sensoren, XR, VR) und digitalen Umgebungen arbeitet. Wir entwickeln experimentelle, KI-gesteuerte Erfahrungen für eine neue Ära des Geschichtenerzählens.',
      description2: 'Wir verbinden Biologie, Code, Klang und visuelle Poesie, um bedeutungsvolle Zukünfte zu schaffen, die über den Bildschirm hinausleben. Ob Sie eine Marke, ein Künstler, ein Forscher oder ein Visionär sind — lassen Sie uns gemeinsam die Zukunft gestalten.',
      servicesTitle: 'Was wir tun',
      services: [
        'KI-Inhalte & Kreative Agenten',
        'Immersive Welten (VR / MR / Web3D)',
        'Interaktive Installationen & Räumliche Schnittstellen',
        'Digitale Mode-Erfahrungen & Motion Capture',
        'Audiovisuelle Produktion & Echtzeit-Grafiken',
        '3D-Webentwicklung & Künstlerische Websites'
      ],
      ctaTitle: 'Bereit, Etwas Außergewöhnliches zu Schaffen?',
      ctaSubtitle: 'Lassen Sie uns zusammenarbeiten, um Ihre Vision mit modernster Technologie, immersiven Erfahrungen und kreativer Exzellenz zum Leben zu erwecken, die Ihr Publikum fesselt.',
      ctaButton: 'Projekt Starten',
      whatsappMessage: 'Hallo! Ich interessiere mich für eine Zusammenarbeit mit Coevo Studio, nachdem ich mehr über Ihr Team und Ihre Dienstleistungen erfahren habe.'
    }
  };

  const t = translations[currentLanguage];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href="https://coevo.studio/aboutus" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content="https://coevo.studio/aboutus" />
        <meta property="og:type" content="website" />
      </Helmet>
      <GlobalStyle />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <ExperienceBackground />
          <Container className="animate__animated animate__fadeIn">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
          >
            <SectionText>
              <Headline>
                {t.headline}
              </Headline>
              <Subheadline>
                {t.description1}
              </Subheadline>
              <Subheadline>
                {t.description2}
              </Subheadline>

              <ListTitle>{t.servicesTitle}</ListTitle>
              <ServiceList>
                {t.services.map((service, index) => (
                  <ServiceItem key={index}>{service}</ServiceItem>
                ))}
              </ServiceList>

              {/* <TeamContainer>
                <Team />
              </TeamContainer> */}
            </SectionText>
          </motion.div>
          </Container>

          <CTASection>
            <CTAContainer>
              <CTATitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t.ctaTitle}
              </CTATitle>
              <CTASubtitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t.ctaSubtitle}
              </CTASubtitle>
              <CTAButtonsContainer
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <CTAPrimaryButton
                  href={`https://wa.me/5402345688262?text=${encodeURIComponent(t.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </WhatsAppIcon>
                  {t.ctaButton}
                </CTAPrimaryButton>
              </CTAButtonsContainer>
            </CTAContainer>
          </CTASection>

          <Footer />
        </>
      )}
    </>
  );
};

export default AboutUs;
