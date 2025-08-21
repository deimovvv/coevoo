import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';

const Container = styled.div`
  min-height: 100vh;
  background: rgba(15, 15, 15, 1);
  position: relative;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 2rem 80px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(120, 120, 120, 0.02) 0%, transparent 70%),
      radial-gradient(circle at 70% 80%, rgba(120, 120, 120, 0.02) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 4.5rem;
  font-weight: 100;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 2rem;
  letter-spacing: 3px;
  line-height: 1.1;
  
  .highlight {
    color: rgb(170, 144, 165);
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 1px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 20px 40px;
  background: rgba(40, 40, 40, 0.3);
  border: 1px solid rgba(120, 120, 120, 0.2);
  color: rgba(255, 255, 255, 0.95);
  text-decoration: none;
  font-size: 1.1rem;
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    background: rgba(60, 60, 60, 0.3);
    border-color: rgba(120, 120, 120, 0.4);

    &:before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 30px;
    font-size: 1rem;
  }
`;

const NodesSection = styled.section`
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const NodesContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  margin: 4rem 0 8rem;
  background: rgba(40, 40, 40, 0.1);
  border: 1px solid rgba(120, 120, 120, 0.1);
  border-radius: 20px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 400px;
    margin: 3rem 0 6rem;
  }
`;

const Node = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const NodeInner = styled.div`
  background: rgba(40, 40, 40, 0.8);
  border: 1px solid rgba(120, 120, 120, 0.3);
  border-radius: 50px;
  padding: 12px 20px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background: rgba(60, 60, 60, 0.9);
    border-color: rgba(170, 144, 165, 0.4);
    transform: scale(1.1);
  }
`;

const NodeTitle = styled.span`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 400;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const ConnectionLine = styled.div`
  position: absolute;
  background: linear-gradient(90deg, rgba(120, 120, 120, 0.3), rgba(170, 144, 165, 0.2));
  height: 1px;
  z-index: 1;
  
  &:after {
    content: '';
    position: absolute;
    right: -3px;
    top: -2px;
    width: 0;
    height: 0;
    border-left: 6px solid rgba(170, 144, 165, 0.4);
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
  }
`;

const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 3rem;
  font-weight: 200;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
  margin-bottom: 4rem;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(40, 40, 40, 0.2);
  border: 1px solid rgba(120, 120, 120, 0.15);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  backdrop-filter: blur(30px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(120, 120, 120, 0.3);
    background: rgba(60, 60, 60, 0.25);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(170, 144, 165, 0.6), rgba(170, 144, 165, 0.3));
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover:before {
    opacity: 1;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(40, 40, 40, 0.2);
  border: 1px solid rgba(120, 120, 120, 0.2);
  border-radius: 50%;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.4s ease;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 1rem;
  font-weight: 400;
  text-align: center;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  text-align: center;
  font-weight: 300;
`;

const ComingSoonBadge = styled(motion.div)`
  display: inline-block;
  background: rgba(40, 40, 40, 0.3);
  border: 1px solid rgba(120, 120, 120, 0.3);
  color: rgb(170, 144, 165);
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const CreativeFlowAI = () => {
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

  const getConnectionStyle = (index) => {
    const connections = [
      { width: '200px', left: '45px', top: '50px', transform: 'rotate(25deg)' },
      { width: '180px', left: '-60px', top: '80px', transform: 'rotate(-35deg)' },
      { width: '220px', left: '45px', top: '20px', transform: 'rotate(15deg)' },
      { width: '150px', left: '-40px', top: '0px', transform: 'rotate(-45deg)' }
    ];
    return connections[index] || {};
  };

  const translations = {
    ES: {
      title: 'CreativeFlow AI - Coevo Studio | Automatización Publicitaria con IA',
      description: 'Descubre CreativeFlow AI, la solución todo en uno de Coevo Studio para generar publicidades automáticamente usando inteligencia artificial avanzada.',
      keywords: 'CreativeFlow AI, automatización publicitaria, IA creativa, generación automática anuncios, coevo studio, inteligencia artificial marketing',
      heroTitle: 'El Futuro de la',
      heroTitleHighlight: 'Publicidad Automática',
      heroSubtitle: 'CreativeFlow AI transforma ideas en campañas publicitarias completas usando inteligencia artificial avanzada. Desde concepto hasta ejecución, todo automatizado.',
      ctaButton: 'Solicitar Acceso Anticipado',
      comingSoon: 'Próximamente',
      workflowTitle: 'Flujo de Trabajo Inteligente',
      node1: 'Input de Datos',
      node2: 'Procesamiento IA',
      node3: 'Generación Creative',
      node4: 'Optimización',
      node5: 'Hub Central',
      featuresTitle: 'Características Revolucionarias',
      feature1Title: 'Generación Automática',
      feature1Description: 'Crea campañas publicitarias completas desde una simple descripción de producto.',
      feature2Title: 'Contenido Multiformat',
      feature2Description: 'Genera imágenes, videos, copy y estrategias adaptadas a cada plataforma.',
      feature3Title: 'Optimización en Tiempo Real',
      feature3Description: 'Aprende y mejora continuamente el rendimiento de tus anuncios.',
      feature4Title: 'Integración Total',
      feature4Description: 'Conecta directamente con plataformas publicitarias para lanzamiento automático.',
      whatsappMessage: '¡Hola! Estoy interesado en obtener acceso anticipado a CreativeFlow AI.'
    },
    EN: {
      title: 'CreativeFlow AI - Coevo Studio | AI-Powered Advertising Automation',
      description: 'Discover CreativeFlow AI, Coevo Studio\'s all-in-one solution for automatically generating advertisements using advanced artificial intelligence.',
      keywords: 'CreativeFlow AI, advertising automation, creative AI, automatic ad generation, coevo studio, artificial intelligence marketing',
      heroTitle: 'The Future of',
      heroTitleHighlight: 'Automatic Advertising',
      heroSubtitle: 'CreativeFlow AI transforms ideas into complete advertising campaigns using advanced artificial intelligence. From concept to execution, everything automated.',
      ctaButton: 'Request Early Access',
      comingSoon: 'Coming Soon',
      workflowTitle: 'Intelligent Workflow',
      node1: 'Data Input',
      node2: 'AI Processing',
      node3: 'Creative Generation',
      node4: 'Optimization',
      node5: 'Central Hub',
      featuresTitle: 'Revolutionary Features',
      feature1Title: 'Automatic Generation',
      feature1Description: 'Create complete advertising campaigns from a simple product description.',
      feature2Title: 'Multi-Format Content',
      feature2Description: 'Generate images, videos, copy and strategies adapted to each platform.',
      feature3Title: 'Real-Time Optimization',
      feature3Description: 'Continuously learns and improves the performance of your ads.',
      feature4Title: 'Total Integration',
      feature4Description: 'Connect directly with advertising platforms for automatic launching.',
      whatsappMessage: 'Hello! I\'m interested in getting early access to CreativeFlow AI.'
    },
    DE: {
      title: 'CreativeFlow AI - Coevo Studio | KI-gesteuerte Werbeautomatisierung',
      description: 'Entdecken Sie CreativeFlow AI, Coevo Studios All-in-One-Lösung zur automatischen Generierung von Werbeanzeigen mit fortschrittlicher künstlicher Intelligenz.',
      keywords: 'CreativeFlow AI, Werbeautomatisierung, kreative KI, automatische Anzeigenerstellung, coevo studio, künstliche intelligenz marketing',
      heroTitle: 'Die Zukunft der',
      heroTitleHighlight: 'Automatischen Werbung',
      heroSubtitle: 'CreativeFlow AI verwandelt Ideen in komplette Werbekampagnen mit fortschrittlicher künstlicher Intelligenz. Vom Konzept bis zur Ausführung, alles automatisiert.',
      ctaButton: 'Frühen Zugang Anfordern',
      comingSoon: 'Demnächst',
      workflowTitle: 'Intelligenter Workflow',
      node1: 'Dateneingabe',
      node2: 'KI-Verarbeitung',
      node3: 'Kreative Generierung',
      node4: 'Optimierung',
      node5: 'Zentrale Hub',
      featuresTitle: 'Revolutionäre Funktionen',
      feature1Title: 'Automatische Generierung',
      feature1Description: 'Erstellen Sie komplette Werbekampagnen aus einer einfachen Produktbeschreibung.',
      feature2Title: 'Multi-Format-Inhalt',
      feature2Description: 'Generieren Sie Bilder, Videos, Texte und Strategien für jede Plattform.',
      feature3Title: 'Echtzeit-Optimierung',
      feature3Description: 'Lernt kontinuierlich und verbessert die Leistung Ihrer Anzeigen.',
      feature4Title: 'Vollständige Integration',
      feature4Description: 'Direkter Anschluss an Werbeplattformen für automatischen Start.',
      whatsappMessage: 'Hallo! Ich interessiere mich für frühen Zugang zu CreativeFlow AI.'
    }
  };

  const t = translations[currentLanguage];

  return (
    <>
      <Helmet>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href="https://coevo.studio/creativeflow-ai" />
        <meta property="og:title" content={t.title} />
        <meta property="og:description" content={t.description} />
        <meta property="og:url" content="https://coevo.studio/creativeflow-ai" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          <Navigation />
          
          <HeroSection>
            <HeroContent>
              <ComingSoonBadge
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {t.comingSoon}
              </ComingSoonBadge>
              
              <HeroTitle
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {t.heroTitle}<br />
                <span className="highlight">{t.heroTitleHighlight}</span>
              </HeroTitle>
              
              <HeroSubtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {t.heroSubtitle}
              </HeroSubtitle>
              
              <CTAButton
                href={`https://wa.me/5402345688262?text=${encodeURIComponent(t.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                {t.ctaButton}
              </CTAButton>
            </HeroContent>
          </HeroSection>
          
          <NodesSection>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {t.workflowTitle}
            </SectionTitle>
            
            <NodesContainer
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {[
                { id: 1, title: t.node1, position: { top: '10%', left: '20%' } },
                { id: 2, title: t.node2, position: { top: '30%', left: '60%' } },
                { id: 3, title: t.node3, position: { top: '60%', left: '15%' } },
                { id: 4, title: t.node4, position: { top: '70%', left: '70%' } },
                { id: 5, title: t.node5, position: { top: '45%', left: '45%' } }
              ].map((node, index) => (
                <Node
                  key={node.id}
                  style={node.position}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <NodeInner>
                    <NodeTitle>{node.title}</NodeTitle>
                  </NodeInner>
                  {index < 4 && <ConnectionLine style={getConnectionStyle(index)} />}
                </Node>
              ))}
            </NodesContainer>
          </NodesSection>
          
          <FeaturesSection>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {t.featuresTitle}
            </SectionTitle>
            
            <FeaturesGrid>
              {[
                { icon: '◉', title: t.feature1Title, description: t.feature1Description },
                { icon: '◊', title: t.feature2Title, description: t.feature2Description },
                { icon: '⟡', title: t.feature3Title, description: t.feature3Description },
                { icon: '◈', title: t.feature4Title, description: t.feature4Description }
              ].map((feature, index) => (
                <FeatureCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeaturesGrid>
          </FeaturesSection>
          
          <Footer />
        </Container>
      )}
    </>
  );
};

export default CreativeFlowAI;