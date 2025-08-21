import { Link, useParams,  useNavigate } from "react-router-dom";
import getProjectByid from "../helpers/getProjectByid";
import styled from "styled-components";
import ReactPlayer from "react-player";
import "../css/style.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import { Helmet } from "react-helmet";


const Section = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: 
    radial-gradient(ellipse at 20% 10%, rgba(173, 216, 230, 0.02) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 90%, rgba(255, 182, 193, 0.02) 0%, transparent 50%),
    radial-gradient(ellipse at center, rgba(15,15,15,0.98) 0%, rgba(5,5,5,0.99) 100%);

  @media screen and (max-width: 768px) {
    padding-top: 70px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;

  @media screen and (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const ProjectCard = styled.div`
  background: transparent;
  border-radius: 0;
  border: none;
  padding: 40px 0;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
`;

const MediaSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;

const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const MainImage = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  border-radius: 20px;
  border: 1px solid rgba(120, 120, 120, 0.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.01);
    border-color: rgba(170, 144, 165, 0.2);
  }

  @media screen and (max-width: 768px) {
    height: 50vh;
    border-radius: 15px;
  }
`;

const ImageDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  padding: 40px 30px 30px;
  border-radius: 0 0 20px 20px;
  
  @media screen and (max-width: 768px) {
    padding: 30px 20px 20px;
    border-radius: 0 0 15px 15px;
  }
`;

const ImageTitle = styled.h3`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ImageSubtitle = styled.p`
  color: rgba(255,255,255,0.9);
  font-size: 1rem;
  line-height: 1.4;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SecondaryImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SecondaryImageContainer = styled.div`
  position: relative;
  height: 400px;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(120, 120, 120, 0.08);
  box-shadow: 0 15px 30px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(144, 238, 144, 0.2);
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const SecondaryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(120, 120, 120, 0.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  
  .video {
    border-radius: 20px;
  }

  @media screen and (max-width: 768px) {
    border-radius: 15px;
    
    .video {
      border-radius: 15px;
    }
  }
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 40px 0;
  padding: 30px 0;
  background: rgba(40, 40, 40, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(120, 120, 120, 0.08);
  backdrop-filter: blur(10px);
  padding: 30px 25px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 25px 0;
  }
`;

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 60px;
  padding: 15px 30px;
  background: rgba(40, 40, 40, 0.2);
  border: 1px solid rgba(120, 120, 120, 0.1);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(60, 60, 60, 0.3);
    border-color: rgba(170, 144, 165, 0.3);
    transform: translateY(-2px);
  }

  .flecha {
    transition: transform 0.3s ease;
  }

  &:hover .flecha {
    transform: translateX(-3px);
  }
`

const ButtonBack = styled.button`
  font-family: "Syncopate", sans-serif;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease;
  text-transform: uppercase;

  &:hover {
    color: rgba(170, 144, 165, 0.9);
  }
`

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(120, 120, 120, 0.15);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(170, 144, 165, 0.4), transparent);
  }
`

const ProjectTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`

const ProjectSubtitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 300;
  color: rgba(255,255,255,0.8);
  margin-bottom: 20px;
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`

const ProjectClient = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    color: rgba(170, 144, 165, 0.9);
    font-weight: 600;
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const InfoLabel = styled.span`
  font-size: 0.85rem;
  color: rgba(170, 144, 165, 0.8);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 500;
`

const InfoValue = styled.span`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.4;
`

const Project = () => {

  const { id } = useParams();

  const project = getProjectByid(id);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language') || 'EN');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
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
      client: 'Cliente',
      technologies: 'Tecnologías',
      date: 'Fecha',
      backButton: 'atrás'
    },
    EN: {
      client: 'Client',
      technologies: 'Technologies',
      date: 'Date',
      backButton: 'back'
    },
    DE: {
      client: 'Kunde',
      technologies: 'Technologien',
      date: 'Datum',
      backButton: 'zurück'
    }
  };

  const t = translations[currentLanguage];


  return (
    <>
      <Helmet>
        <title>{project.title} - {project.description} | Coevo Studio</title>
        <meta name="description" content={`Discover ${project.title}, a ${project.category} project by Coevo Studio. ${project.description} created for ${project.client} using ${project.technologies}.`} />
        <meta name="keywords" content={`${project.title}, ${project.category}, ${project.client}, ${project.technologies}, coevo studio project`} />
        <link rel="canonical" href={`https://coevo.studio/project/${project.id}`} />
        <meta property="og:title" content={`${project.title} - ${project.description} | Coevo Studio`} />
        <meta property="og:description" content={`Discover ${project.title}, a ${project.category} project by Coevo Studio. ${project.description} created for ${project.client} using ${project.technologies}.`} />
        <meta property="og:url" content={`https://coevo.studio/project/${project.id}`} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`https://coevo.studio/assets/${project.id}.jpg`} />
        <meta property="article:author" content="Coevo Studio" />
        <meta property="article:section" content={project.category} />
      </Helmet>
      <Navigation/>
      
      {isLoading ? (
        <Loader />
      ) : (
        <Section id="project-section">
          <Container>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, ease: "circOut", duration: 1 }}
            >
              <ProjectCard>
                <ProjectHeader>
                  <ProjectTitle>{project.description}</ProjectTitle>
                  <ProjectSubtitle>{project.title}</ProjectSubtitle>
                  <ProjectClient>{t.client}: <span>{project.client}</span></ProjectClient>
                </ProjectHeader>
                
                <TextContainer>
                  <ProjectInfo>
                    <InfoLabel>{t.technologies}</InfoLabel>
                    <InfoValue>{project.technologies}</InfoValue>
                  </ProjectInfo>
                  <ProjectInfo>
                    <InfoLabel>{t.date}</InfoLabel>
                    <InfoValue>{project.date}</InfoValue>
                  </ProjectInfo>
                </TextContainer>
              </ProjectCard>

              <MediaSection className="animate__animated animate__fadeIn">
                <MainImageContainer>
                  <MainImage src={`/assets/${project.id}.jpg`} alt={project.title} />
                  <ImageDescription>
                    <ImageTitle>{project.title}</ImageTitle>
                    <ImageSubtitle>{project.description}</ImageSubtitle>
                  </ImageDescription>
                </MainImageContainer>

                {project.image && project.image2 && (
                  <SecondaryImages>
                    <SecondaryImageContainer>
                      <SecondaryImage src={project.image} alt={`${project.title} - Image 1`} />
                    </SecondaryImageContainer>
                    <SecondaryImageContainer>
                      <SecondaryImage src={project.image2} alt={`${project.title} - Image 2`} />
                    </SecondaryImageContainer>
                  </SecondaryImages>
                )}

                {project.video && (
                  <VideoContainer>
                    <ReactPlayer
                      className="video"
                      url={project.video}
                      controls
                      loop
                      width="100%"
                      height="600px"
                    />
                  </VideoContainer>
                )}
              </MediaSection>

              <Back onClick={handleBack}>
                <box-icon
                  className="flecha"
                  animation="flashing"
                  name="left-arrow-alt"
                  flip="vertical"
                  color="#ffffff"
                ></box-icon>
                <ButtonBack>{t.backButton}</ButtonBack>
              </Back>
            </motion.div>
          </Container>
        </Section>
      )}
    </>
  );
};

export default Project;
