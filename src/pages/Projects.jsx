import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import { Suspense, useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Experience from "../components/experiences/Experience";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 4rem; /* Aumentado para más espacio */
  align-items: center;
  margin-bottom: 100px !important;
  z-index: -1;
  padding-top: 2rem; /* Padding adicional */

  @media (max-width: 768px) {
    margin-top: 3rem;
    padding-top: 1.5rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  margin-top: 1rem;
`;

const FilterTitle = styled.h2`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const FilterList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2.5rem;
    padding: 0 1.5rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }
  
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const Copirigth = styled.div`
  cursor: pointer;
  z-index: 99;
  position: relative;
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

const FilterButton = styled.button`
  background: ${props => props.active ? 'rgba(40, 40, 40, 0.4)' : 'transparent'};
  color: ${props => props.active ? 'rgb(170, 144, 165)' : 'rgba(255, 255, 255, 0.7)'};
  border: ${props => props.active ? '1px solid rgba(120, 120, 120, 0.3)' : '1px solid transparent'};
  border-radius: 25px;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1rem;
  font-weight: ${props => props.active ? '400' : '300'};
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active ? '80%' : '0%'};
    height: 1px;
    background: linear-gradient(90deg, rgba(173, 216, 230, 0.6), rgba(144, 238, 144, 0.6));
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${props => props.active ? 'rgb(170, 144, 165)' : 'rgba(255, 255, 255, 0.9)'};
    background: ${props => props.active ? 'rgba(60, 60, 60, 0.5)' : 'rgba(40, 40, 40, 0.2)'};
    border-color: rgba(120, 120, 120, 0.4);
    
    &:after {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
`;

const Collaborations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [highlightedIndex, setHighlightedIndex] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

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

  // Función para manejar el evento onLoad de las imágenes
  const handleImageLoad = () => {
    // Comprueba si todas las imágenes están cargadas
    // Puedes agregar una lógica adicional aquí si es necesario
    setIsLoading(false);
  };

  const translations = {
    ES: {
      title: 'Categorías de Proyectos',
      metaTitle: 'Proyectos - Coevo Studio | Portafolio 3D, RV/RA, IA y Audiovisual',
      metaDescription: 'Explora el portafolio innovador de Coevo Studio con entornos 3D, experiencias de RV/RA, campañas generadas por IA y producciones audiovisuales de vanguardia para las mejores marcas.',
      metaKeywords: 'proyectos 3D, experiencias RV, aplicaciones RA, campañas IA, portafolio audiovisual, proyectos creativos, arte digital, medios inmersivos',
      categories: {
        'All': 'Todos',
        '3D & Environment': '3D & Entorno',
        'AI': 'IA',
        'VR / AR': 'RV / RA',
        'Videoclips': 'Videoclips'
      }
    },
    EN: {
      title: 'Project Categories',
      metaTitle: 'Projects - Coevo Studio | 3D, VR/AR, AI & Audiovisual Portfolio',
      metaDescription: 'Explore Coevo Studio\'s innovative portfolio featuring 3D environments, VR/AR experiences, AI-generated campaigns, and cutting-edge audiovisual productions for top brands.',
      metaKeywords: '3D projects, VR experiences, AR applications, AI campaigns, audiovisual portfolio, creative projects, digital art, immersive media',
      categories: {
        'All': 'All',
        '3D & Environment': '3D & Environment',
        'AI': 'AI',
        'VR / AR': 'VR / AR',
        'Videoclips': 'Videoclips'
      }
    },
    DE: {
      title: 'Projektkategorien',
      metaTitle: 'Projekte - Coevo Studio | 3D, VR/AR, KI & Audiovisuelles Portfolio',
      metaDescription: 'Entdecken Sie Coevo Studios innovatives Portfolio mit 3D-Umgebungen, VR/AR-Erfahrungen, KI-generierten Kampagnen und modernsten audiovisuellen Produktionen für Top-Marken.',
      metaKeywords: '3D-Projekte, VR-Erfahrungen, AR-Anwendungen, KI-Kampagnen, audiovisuelles Portfolio, kreative Projekte, digitale Kunst, immersive Medien',
      categories: {
        'All': 'Alle',
        '3D & Environment': '3D & Umgebung',
        'AI': 'KI',
        'VR / AR': 'VR / AR',
        'Videoclips': 'Videoclips'
      }
    }
  };

  const t = translations[currentLanguage];
  
  // Categorías originales (en inglés para el filtrado)
  const originalCategories = ['All', '3D & Environment', 'AI', 'VR / AR', 'Videoclips'];

  return (
    <>
      <Helmet>
        <title>{t.metaTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <meta name="keywords" content={t.metaKeywords} />
        <link rel="canonical" href="https://coevo.studio/projects" />
        <meta property="og:title" content={t.metaTitle} />
        <meta property="og:description" content={t.metaDescription} />
        <meta property="og:url" content="https://coevo.studio/projects" />
        <meta property="og:type" content="website" />
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <Container>
            <FilterContainer>
              <FilterTitle>{t.title}</FilterTitle>
              <FilterList>
                {originalCategories.map((category) => (
                  <FilterButton
                    key={category}
                    active={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {t.categories[category]}
                  </FilterButton>
                ))}
              </FilterList>
            </FilterContainer>
            <Section>
              <ProjectList
                category={selectedCategory === 'All' ? '' : selectedCategory}
                onLoad={handleImageLoad}
                highlightedIndex={highlightedIndex}
                onHover={(index) => setHighlightedIndex(index)}
                onLeave={() => setHighlightedIndex(null)}
              />
            </Section>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default Collaborations;