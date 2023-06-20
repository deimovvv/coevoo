import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const ProjectCard = ({ id, title, publisher, date, description }) => {

  const projectURL = `/assets/${id}.jpg`;

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
            <IMG src={projectURL} />
            <TitleContainer>{<H3> {description} </H3>}</TitleContainer>
          </Link>
        </ImageContainer>
      </Project>
    </motion.div>
  );
};

export default ProjectCard;
