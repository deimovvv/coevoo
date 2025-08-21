import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { useRef, useEffect, useState } from "react";

const Project = styled.div`
  margin: 20px; /* Agrega margen para la distancia entre proyectos */
  padding: 0%;
`;

const IMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const TitleContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: rgba(15, 15, 15, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.6s;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  
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
  height: 560px;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(120, 120, 120, 0.1);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(170, 144, 165, 0.3);
  }

  &:hover ${IMG} {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    height: 480px;
  }
  
  @media screen and (max-width: 480px) {
    height: 400px;
  }
`;

const H3 = styled.h3`
  font-family: 'Helvetica', 'Arial', sans-serif;
  font-weight: 200;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.95);
  position: absolute;
  bottom: 25px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
`;

const Video = styled.video`
  width: 440px;
  height: 440px;
  margin-top: 0%;
  display: ${(props) => (props.mobile ? "none" : "block")};
  border-radius: 8px; /* Ajusta el borde redondeado */
`;

const DescriptionContainer = styled.div`
  text-align: center;
  margin-top: 10px;
  color: white;
  padding: 0 50px; /* Ajusta el valor del padding según sea necesario */
  box-sizing: border-box;
`;

const PosterImage = styled.img`
  width: 440px;
  height: 440px;
  object-fit: cover;
  display: ${(props) => (props.mobile ? "block" : "none")};
  border-radius: 8px; /* Ajusta el borde redondeado */
`;

const cld = new Cloudinary({
  cloud: {
    cloudName: "djkkxjn4u",
  },
});

const ProjectCard = ({ id, title, category, date, description, type }) => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Accede al elemento de video utilizando videoRef.current
    const videoElement = videoRef.current;

    // Verifica si el video está pausado y si no lo está, llama al método play()
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }

    const handleResize = () => {
      // Detecta si el ancho de la ventana es menor que cierto valor (ajusta este valor según tus necesidades)
      setIsMobile(window.innerWidth <= 767);
    };

    // Agrega un oyente para manejar cambios de tamaño de ventana
    window.addEventListener("resize", handleResize);

    // Llama a handleResize inicialmente para establecer isMobile correctamente en el montaje inicial
    handleResize();

    // Limpia el oyente cuando se desmonta el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectURL = `assets/${id}.jpg`;
  const projectVideo = `assets/videos/${id}.mp4`;

  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0, ease: "circOut", duration: 1 }}
    >
      <Project className="animate__animated animate__fadeIn">
        <Link to={`/project/${id}`}>
          <ImageContainer>
            {type === "image" && <IMG src={projectURL} />}
            {type === "video" && (
              <>
                <Video
                  preload="metadata"
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  playsInline
                  src={projectVideo}
                  mobile={isMobile} // Propiedad para controlar la visibilidad en dispositivos móviles
                  muted
                  loop
                />
                <PosterImage
                  src={projectURL}
                  alt="Preview Image"
                  mobile={isMobile} // Propiedad para controlar la visibilidad en dispositivos móviles
                />
              </>
            )}
            {isMobile && (
              <DescriptionContainer>
                <H3>{description}</H3>
              </DescriptionContainer>
            )}
            {!isMobile && (
              <TitleContainer>
                <H3>{description}</H3>
              </TitleContainer>
            )}
          </ImageContainer>
        </Link>
      </Project>
    </motion.div>
  );
};

export default ProjectCard;