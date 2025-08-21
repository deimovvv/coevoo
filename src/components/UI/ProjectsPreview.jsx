import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  padding: 5vw 0;
  background: rgba(0, 0, 0, 0.85);
  text-align: center;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5vw 0;
    min-height: auto;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 4vw;
  padding: 0 5vw;
  z-index: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    height: auto;
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 2.5rem;
  font-weight: 250;
  margin-top: 1vw;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 5rem;
    text-align: left;
    margin-left: 5vw;
  }
`;

const OpacityText = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: 200;
  color: white;
  opacity: 0.5;
  margin-top: 1vw;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    margin-top: 3vw;
    text-align: left;
    margin-left: 2vw;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 0.8fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 4vw;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
`;


const ProjectCardContainer = styled(motion.div)`
  position: relative;
  height: ${props => {
    if (props.index === 0) return '450px';
    if (props.index === 1) return '520px';
    if (props.index === 2) return '380px';
    return '460px';
  }};
  overflow: hidden;
  border-radius: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  ${ProjectCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  padding: 40px 25px 25px;
  opacity: 0;
  transition: opacity 0.4s ease;

  ${ProjectCardContainer}:hover & {
    opacity: 1;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 400;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.4;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const SeeAllButton = styled(Link)`
  display: inline-block;
  margin-top: 4vw;
  margin-bottom: 6vw;
  padding: 15px 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  z-index: 1000;
  position: relative;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: white;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 12px 30px;
  }
`;

const CTASection = styled.section`
  position: relative;
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
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);

    &:before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 30px;
    font-size: 0.95rem;
  }
`;


const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border: 1px solid rgba(255, 255, 255, 0.02);
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
  }

  &:before {
    top: -150px;
    left: -150px;
    animation-delay: -10s;
  }

  &:after {
    bottom: -150px;
    right: -150px;
    animation-delay: -5s;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
`;

const BusinessTransformationSection = styled.section`
  position: relative;
  margin: 8vw 0;
  padding: 8vw 2rem;
  background: 
    radial-gradient(ellipse at 20% 10%, rgba(173, 216, 230, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 90%, rgba(255, 182, 193, 0.04) 0%, transparent 50%),
    rgba(15, 15, 15, 0.8);
  border-top: 1px solid rgba(120, 120, 120, 0.1);
  border-bottom: 1px solid rgba(120, 120, 120, 0.1);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(173, 216, 230, 0.4), transparent);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(144, 238, 144, 0.4), transparent);
  }
`;

const TransformationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const TransformationTitle = styled(motion.h2)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 4rem;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  letter-spacing: 3px;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff 0%, #add8e6 50%, #ffb6c1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }
`;

const TransformationSubtitle = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.3rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 5rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 4rem;
  }
`;

const PhasesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
  padding: 0 1rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const PhaseCard = styled(motion.div)`
  position: relative;
  background: rgba(40, 40, 40, 0.3);
  border: 1px solid rgba(120, 120, 120, 0.2);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  backdrop-filter: blur(30px);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(173, 216, 230, 0.5);
    box-shadow: 0 20px 60px rgba(173, 216, 230, 0.15);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #add8e6, #90ee90, #ffb6c1);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const PhaseNumber = styled.div`
  font-size: 3rem;
  font-weight: 100;
  color: rgb(170, 144, 165);
  margin-bottom: 1rem;
  font-family: 'Helvetica', 'Arial', sans-serif;
`;

const PhaseContent = styled.div`
  text-align: left;
`;

const PhaseTitle = styled.h3`
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const PhaseDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.6;
  font-weight: 300;
`;

const PhaseConnector = styled.div`
  position: absolute;
  top: 50%;
  right: -1rem;
  width: 2rem;
  height: 1px;
  background: linear-gradient(90deg, rgba(144, 238, 144, 0.6), transparent);
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const DifferentiatorsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`;

const DifferentiatorIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 40, 40, 0.4);
  border: 1px solid rgba(120, 120, 120, 0.3);
  border-radius: 50%;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(173, 216, 230, 0.1), rgba(144, 238, 144, 0.1), rgba(255, 182, 193, 0.1));
    opacity: 0;
    transition: opacity 0.4s ease;
    border-radius: 50%;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 2px;
    background: rgb(170, 144, 165);
    border-radius: 50%;
    opacity: 0.6;
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0.2;
    }
  }
`;

const DifferentiatorCard = styled(motion.div)`
  text-align: center;
  padding: 2rem 1.5rem;
  background: rgba(40, 40, 40, 0.2);
  border: 1px solid rgba(120, 120, 120, 0.15);
  border-radius: 15px;
  backdrop-filter: blur(20px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 182, 193, 0.4);
    background: rgba(60, 60, 60, 0.3);
    
    ${DifferentiatorIcon} {
      transform: scale(1.1);
      border-color: rgba(173, 216, 230, 0.5);
      
      &:before {
        opacity: 1;
      }
    }
  }
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(170, 144, 165, 0.03) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
`;

const DifferentiatorTitle = styled.h4`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  font-weight: 400;
`;

const DifferentiatorDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
  font-weight: 300;
`;

const ValueProposition = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  text-align: center;
  font-style: italic;
  position: relative;

  &:before, &:after {
    content: '"';
    font-size: 4rem;
    color: rgba(144, 238, 144, 0.4);
    position: absolute;
  }

  &:before {
    top: 0;
    left: 1rem;
  }

  &:after {
    bottom: 0;
    right: 1rem;
    transform: rotate(180deg);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 2rem 1rem;
  }
`;

const projects = [
  {
    id: 'volvo',
    mediaSrc: 'assets/volvo011.jpg',
    title: 'Volvo',
    description: 'AI Cinematic Campaign',
  },
  {
    id: 'rauw',
    mediaSrc: 'assets/rauw.jpg',
    title: 'Rauw Alejandro',
    description: 'Videoclip Production',
  },
  {
    id: '999_2',
    mediaSrc: 'assets/999_2.jpg',
    title: 'VR 999',
    description: 'VR Experience',
  },
  {
    id: 'altopalermo',
    mediaSrc: 'assets/AltoPalermo.jpg',
    title: 'Alto Palermo',
    description: '3D Environment',
  },
];

const ProjectsPreview = () => {
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(localStorage.getItem('language') || 'EN');
    };

    window.addEventListener('storage', handleLanguageChange);
    
    // También escuchar cambios directos (custom event)
    window.addEventListener('languageChange', handleLanguageChange);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, []);

  const translations = {
    ES: {
      works: 'Trabajos',
      recentProjects: 'Nuestros proyectos recientes',
      seeAllProjects: 'Ver Todos los Proyectos',
      businessTransformation: 'Business Transformations',
      transformationDescription: 'Diseñamos ecosistemas empresariales integrales impulsados por IA que potencian cómo las empresas operan, escalan y se conectan con sus clientes.',
      phase1Title: 'Diagnóstico Estratégico',
      phase1Description: 'Análisis profundo de procesos, oportunidades y puntos críticos.',
      phase2Title: 'Diseño de la Transformación',
      phase2Description: 'Roadmap visual con objetivos claros de eficiencia, ingresos y experiencia del cliente.',
      phase3Title: 'Implementación',
      phase3Description: 'Integración de IA, automatización, creatividad y branding inteligente en áreas clave.',
      phase4Title: 'Escalado y Optimización',
      phase4Description: 'Monitoreo de KPIs, iteración y evolución constante.',
      diff1Title: 'IA como Motor',
      diff1Description: 'No como "extra", sino como núcleo de la transformación.',
      diff2Title: 'Soluciones Llave en Mano',
      diff2Description: 'De diagnóstico a resultados medibles.',
      diff3Title: 'Creatividad + Tecnología',
      diff3Description: 'Un solo equipo, soluciones integrales.',
      diff4Title: 'Impacto Medible',
      diff4Description: 'En ingresos, eficiencia y posicionamiento.',
      valueProposition: 'COEVO entrega transformaciones empresariales completas que evolucionan compañías hacia sistemas ágiles, rentables y preparados para el futuro.',
      readyToCreate: '¿Listo para Crear Algo Extraordinario?',
      letCollaborate: 'Colaboremos para dar vida a tu visión con tecnología de vanguardia, experiencias inmersivas y excelencia creativa que cautive a tu audiencia.',
      startProject: 'Iniciar Tu Proyecto',
      whatsappMessage: '¡Hola! Estoy interesado en iniciar un proyecto con Coevo Studio.'
    },
    EN: {
      works: 'Works',
      recentProjects: 'Our recent projects',
      seeAllProjects: 'See All Projects',
      businessTransformation: 'Business Transformations',
      transformationDescription: "We design comprehensive AI-powered business ecosystems that enhance how companies operate, scale and engage with their customers.",
      phase1Title: 'Strategic Diagnosis',
      phase1Description: 'Deep analysis of processes, opportunities and critical points.',
      phase2Title: 'Transformation Design',
      phase2Description: 'Visual roadmap with clear objectives for efficiency, revenue and customer experience.',
      phase3Title: 'Implementation',
      phase3Description: 'Integration of AI, automation, creativity and intelligent branding in key areas.',
      phase4Title: 'Scaling & Optimization',
      phase4Description: 'KPI monitoring, iteration and constant evolution.',
      diff1Title: 'AI as Engine',
      diff1Description: 'Not as an "extra", but as the core of transformation.',
      diff2Title: 'Turnkey Solutions',
      diff2Description: 'From diagnosis to measurable results.',
      diff3Title: 'Creativity + Technology',
      diff3Description: 'One team, comprehensive solutions.',
      diff4Title: 'Measurable Impact',
      diff4Description: 'On revenue, efficiency and positioning.',
      valueProposition: 'COEVO delivers complete business transformations that evolve companies into agile, profitable systems prepared for the future.',
      readyToCreate: 'Ready to Create Something Extraordinary?',
      letCollaborate: "Let's collaborate to bring your vision to life with cutting-edge technology, immersive experiences, and creative excellence that captivates your audience.",
      startProject: 'Start Your Project',
      whatsappMessage: "Hi! I'm interested in starting a project with Coevo Studio."
    },
    DE: {
      works: 'Arbeiten',
      recentProjects: 'Unsere neuesten Projekte',
      seeAllProjects: 'Alle Projekte anzeigen',
      businessTransformation: 'Business Transformations',
      transformationDescription: 'Wir entwickeln umfassende KI-gestützte Geschäftsökosysteme, die verbessern, wie Unternehmen operieren, skalieren und mit ihren Kunden interagieren.',
      phase1Title: 'Strategische Diagnose',
      phase1Description: 'Tiefgreifende Analyse von Prozessen, Chancen und kritischen Punkten.',
      phase2Title: 'Transformationsdesign',
      phase2Description: 'Visuelle Roadmap mit klaren Zielen für Effizienz, Umsatz und Kundenerfahrung.',
      phase3Title: 'Implementierung',
      phase3Description: 'Integration von KI, Automatisierung, Kreativität und intelligentem Branding in Schlüsselbereichen.',
      phase4Title: 'Skalierung & Optimierung',
      phase4Description: 'KPI-Überwachung, Iteration und kontinuierliche Entwicklung.',
      diff1Title: 'KI als Motor',
      diff1Description: 'Nicht als "Extra", sondern als Kern der Transformation.',
      diff2Title: 'Schlüsselfertige Lösungen',
      diff2Description: 'Von der Diagnose zu messbaren Ergebnissen.',
      diff3Title: 'Kreativität + Technologie',
      diff3Description: 'Ein Team, umfassende Lösungen.',
      diff4Title: 'Messbarer Einfluss',
      diff4Description: 'Auf Umsatz, Effizienz und Positionierung.',
      valueProposition: 'COEVO liefert komplette Geschäftstransformationen, die Unternehmen zu agilen, profitablen und zukunftsfähigen Systemen entwickeln.',
      readyToCreate: 'Bereit, etwas Außergewöhnliches zu schaffen?',
      letCollaborate: 'Lassen Sie uns zusammenarbeiten, um Ihre Vision mit modernster Technologie, immersiven Erlebnissen und kreativer Exzellenz zum Leben zu erwecken, die Ihr Publikum fesselt.',
      startProject: 'Projekt starten',
      whatsappMessage: 'Hallo! Ich bin daran interessiert, ein Projekt mit Coevo Studio zu starten.'
    }
  };

  const t = translations[currentLanguage];

  return (
    <ProjectsContainer>
      <TitleContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t.works}
        </Title>
        <OpacityText
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {t.recentProjects}
        </OpacityText>
      </TitleContainer>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCardContainer
            key={project.id}
            index={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
              <ProjectImage src={project.mediaSrc} alt={project.title} />
              <ProjectOverlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectOverlay>
            </Link>
          </ProjectCardContainer>
        ))}
      </ProjectsGrid>
      
      <SeeAllButton to="/projects">{t.seeAllProjects}</SeeAllButton>
      
      <BusinessTransformationSection>
        <FloatingElements />
        <TransformationContainer>
          <TransformationTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.businessTransformation}
          </TransformationTitle>
          
          <TransformationSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.transformationDescription}
          </TransformationSubtitle>

          <PhasesContainer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[
              { phase: '01', title: t.phase1Title, description: t.phase1Description },
              { phase: '02', title: t.phase2Title, description: t.phase2Description },
              { phase: '03', title: t.phase3Title, description: t.phase3Description },
              { phase: '04', title: t.phase4Title, description: t.phase4Description }
            ].map((item, index) => (
              <PhaseCard
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <PhaseNumber>{item.phase}</PhaseNumber>
                <PhaseContent>
                  <PhaseTitle>{item.title}</PhaseTitle>
                  <PhaseDescription>{item.description}</PhaseDescription>
                </PhaseContent>
                <PhaseConnector />
              </PhaseCard>
            ))}
          </PhasesContainer>


          <ValueProposition
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            "{t.valueProposition}"
          </ValueProposition>
        </TransformationContainer>
      </BusinessTransformationSection>
      
      <CTASection>
        <FloatingElements />
        <CTAContainer>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.readyToCreate}
          </CTATitle>
          
          <CTASubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.letCollaborate}
          </CTASubtitle>
          
          <CTAButtonsContainer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <CTAPrimaryButton 
              href={`https://wa.me/234688262?text=${encodeURIComponent(t.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              {t.startProject}
            </CTAPrimaryButton>
          </CTAButtonsContainer>
        </CTAContainer>
      </CTASection>
    </ProjectsContainer>
  );
};

export default ProjectsPreview;