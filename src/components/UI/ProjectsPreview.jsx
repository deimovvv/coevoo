import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsContainer = styled.div`
  padding: 50px;
  background: rgba(12, 12, 12, 0.6);
  text-align: center;
  height: 140vh; /* Aumenta la altura del contenedor */

  @media (max-width: 768px) {
    padding: 20px;
    height: 100vh;
  }
`;

const TitleContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start; /* Alinea el contenido a la derecha */
  position: relative; /* Necesario para posicionar el texto con opacidad */
  margin-bottom: 50px;
`;

const Title = styled(motion.h2)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 7.1rem;
  font-weight: 250;
  margin-top: 70px;
  margin-left: 100px;
  color: white; /* Alinea el texto a la derecha */
`;

const OpacityText = styled(motion.p)`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  color: white;
  opacity: 0.5; /* Ajusta la opacidad del texto */
  margin-left: 20px; /* Espacio entre el título y el texto con opacidad */
  margin-top: 150px; /* Ajusta la posición vertical */
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 80px;
  margin-top: 20px;
`;

const ProjectCardContainer = styled(motion.div)`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px; /* Reduce el tamaño de las tarjetas de fotos */
  overflow: hidden; /* Asegura que el contenido se recorte según el borde redondeado */
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;

  ${ProjectCardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 10px;
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  margin-top: 5px;
  color: #ccc;
`;

const SeeAllButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 25px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    background-color: rgb(170, 144, 165);
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 20px;
  }
`;

const projects = [
  {
    id: 'Aitana',
    mediaSrc: '../../public/assets/Aitana.jpg',
    title: 'Aitana',
    description: '3D and VFX video for Aitana',
  },
  {
    id: 'project2-video',
    mediaSrc: '../../public/assets/Artic.jpg',
    title: 'Artic',
    description: 'Realistic 3D Environment',
  },

  // Añade más proyectos aquí
];

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
    window.scrollTo(0, 0); // Desplaza la página hacia arriba
  };

  return (
    <ProjectsContainer>
      <TitleContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Works
        </Title>
        <OpacityText
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Our recent projects
        </OpacityText>
      </TitleContainer>
      <ProjectGrid>
        {projects.map((project, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <ProjectCardContainer
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={handleClick} // Maneja el clic para desplazar la página hacia arriba
            >
              <ProjectImage src={project.mediaSrc} alt={project.title} />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectCardContainer>
          );
        })}
      </ProjectGrid>
      <SeeAllButton to="/projects" onClick={() => window.scrollTo(0, 0)}>See All Projects</SeeAllButton>
    </ProjectsContainer>
  );
};

export default ProjectsPreview;