import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Cloudinary } from "@cloudinary/url-gen";
import { useEffect, useState, useRef } from "react";
import Loader from "./Loader";

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

const cld = new Cloudinary({
  cloud: {
    cloudName: "djkkxjn4u",
  },
});

const ProjectCard = ({ id, title, category, date, description, type }) => {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Verifica si videoElement no es nulo
      // Detectar cuándo el video se ha cargado
      videoElement.addEventListener("loadeddata", () => {
        // El video se ha cargado, así que oculta el loader
        setIsLoading(false);

        // Verificar si el video está en pausa y, si lo está, reproducirlo
        if (videoElement.paused) {
          videoElement.play();
        }
      });
    }

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      if (videoElement) {
        // Verifica si videoElement no es nulo antes de limpiar
        videoElement.removeEventListener("loadeddata", () => {});
      }
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
        <ImageContainer>
          <Link
            onClick={() => handleClick("project-section")}
            to={`/project/${id}`}
          >
            {type === "image" && <IMG src={projectURL} />}
            {type === "video" && (
              /*  <Video 
              controls  
              src={cld.video(`/assets/videos/${id}.mp4`).toURL}
             /> */
              <>
                {isLoading && <Loader />}{" "}
                {/* Muestra el loader mientras se carga */}
                <Video
                  ref={videoRef}
                  width="100%"
                  height="100%"
                  playsInline
                  src={projectVideo}
                  muted
                  loop
                />
              </>
            )}

        

            <TitleContainer>{<H3> {description} </H3>}</TitleContainer>
          </Link>
        </ImageContainer>
      </Project>
    </motion.div>
  );
};

export default ProjectCard;

