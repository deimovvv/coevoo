import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { useRef, useEffect, useState } from "react";

const Project = styled.div`
  margin: 0%;
  padding: 0%;
`;

const IMG = styled.img`
  width: 440px;
  height: 440px;
  margin-top: 0%;
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.6s;

  &:hover {
    opacity: 1;
  }

  & > * {
    transform: translateY(25px);
    transition: transform 0.6s;
  }
  &:hover > * {
    transform: translateY(0px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 440px;
`;

const H3 = styled.h3`
  font-weight: 200;
  font-size: 1rem;
  color: white;
  position: absolute;
  bottom: 25px;
  

`;

const Video = styled.video`
  width: 440px;
  height: 440px;
  margin-top: 0%;
`;

const DescriptionContainer = styled.div`
   text-align: center;
  margin-top: 10px;
  color: white;
  padding: 0 50px; /* Ajusta el valor del padding según sea necesario */
  box-sizing: border-box; 
`;

const cld = new Cloudinary({
  cloud: {
    cloudName: "djkkxjn4u",
  },
});

const ProjectCard = ({ id, title, category, date, description, type }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Accede al elemento de video utilizando videoRef.current
    const videoElement = videoRef.current;

    // Verifica si el video está pausado y si no lo está, llama al método play()
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }
  }, []);

  const projectURL = `assets/${id}.jpg`;
  const projectVideo = `assets/videos/${id}.mp4`;

  // Determina si la pantalla es lo suficientemente pequeña como para aplicar el estilo móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767); // Puedes ajustar este valor según tus necesidades

  // Función para manejar el cambio de tamaño de la ventana
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  // Agrega un evento de cambio de tamaño para verificar si cambia el estado móvil
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 1 }}
    >
      <Project className="animate__animated animate__fadeIn">
        <ImageContainer>
          <Link
            onClick={() => handleClick("project-section")}
            to={`/project/${id}`}
          >
            {type === "image" && <IMG src={projectURL} />}
            {type === "video" && (
              <Video
                preload="auto"
                controls
                ref={videoRef}
                width="100%"
                height="100%"
                playsInline
                src={projectVideo}
                muted
                loop
              />
            )}
            {isMobile && (
              <DescriptionContainer>
                <H3>{description}</H3>
              </DescriptionContainer>
            )}
          </Link>
          {!isMobile && (
            <TitleContainer>
              <H3>{description}</H3>
            </TitleContainer>
          )}
        </ImageContainer>
      </Project>
    </motion.div>
  );
};

export default ProjectCard;
