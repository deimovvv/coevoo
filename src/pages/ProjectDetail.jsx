import { Link, useParams } from "react-router-dom";
import getProjectByid from "../helpers/getProjectByid";
/* import getImage from '../helpers/getImage' */
import styled from "styled-components";
import LogoNegro from "../components/Logo";
import ReactPlayer from "react-player";
import "../css/style.css";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import Experience from "../components/experiences/Experience";
import MenuOverlay from "../components/MenuOverlay";

const Section = styled.div`
  margin: 150px 10px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 40em) {
    margin: 120px 10px;

  }

  .title{

@media screen and (max-width: 30em) {
display: grid;
padding-left: 17px;
}

}

.description{
@media screen and (max-width: 30em) {
display: grid;
padding-left: 17px;
}

}
`;

const CardProject = styled.div`
  margin: auto;

  & > h2,
  h3 {
    padding: 8px 0;
  }

  @media screen and (max-width: 40em) {
    & > h2 {
      font-size: medium;
    }
    & > h3 {
      font-size: small;
    }
  }
`;

const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const DivImagenes = styled.div`
  display: flex;
  justify-content: center;
 /*  width: 200px; */
  margin: auto;

  @media screen and (max-width: 30em) {
   /*  margin: auto; */


  }

`;
const Img2 = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
  object-position: 70%;

  @media screen and (max-width: 70em) {
    width: 740px;
    height: 740px;
  }
  @media screen and (max-width: 64em) {
    width: 640px;
    height: 640px;
  }
  @media screen and (max-width: 48em) {
    width: 540px;
    height: 540px;
  }
  @media screen and (max-width: 40em) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 30em) {
    width: 200px;
    height: 200px;
    padding-left: 5px;
  }
`;

const Img = styled.img`
  width: 1000px;
  height: 1000px;
  margin-top: 10px;

  @media screen and (max-width: 70em) {
    width: 740px;
    height: 740px;
  }
  @media screen and (max-width: 64em) {
    width: 640px;
    height: 640px;
  }
  @media screen and (max-width: 48em) {
    width: 540px;
    height: 540px;
  }
  @media screen and (max-width: 40em) {
    width: 400px;
    height: 400px;
  }
  @media screen and (max-width: 320px) {
    width: 300px;
    height: 300px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 40em) {
    & > h3 {
      font-size: small;
    }
  }

  @media screen and (max-width: 30em) {
    display: grid;
    padding-left: 17px;
  }

`;

const Project = () => {

  const { id } = useParams();

  const project = getProjectByid(id);
    



  const projectURL = `/assets/${project.id}.jpg`;


  

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Section id="project-section">
          <MenuOverlay/>
          <Logo />

          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0, ease: "circOut", duration: 1 }}
          >

            <CardProject>
              
            <h2 className="title"> {project.title} </h2>
              <h3 className="description">  {project.description} </h3>
              
              <TextContainer>
              
                <h3>
                  {" "}
                  <b> Technologies </b> - {project.technologies}{" "}
                </h3>
                <h3>
                  {" "}
                  <b> Date </b> - {project.date}{" "}
                </h3>
              </TextContainer>

              <DivImage className="animate__animated animate__fadeIn">
                <Img src={projectURL} alt="" />
                {project.image && project.image2 ? (

                  <DivImagenes>
                    <Img2 src={project.image} alt="" />{" "}
                    <Img2 src={project.image2} alt="" />{" "}
                  </DivImagenes>
                  
                ) : null}
                {project.video ? (
                  <ReactPlayer
                    className="video"
                    url={project.video}
                    controls
                    loop
                    width="100%"
                    height="500px"
                  />
                ) : null}
              </DivImage>
            </CardProject>
          </motion.div>
       
        </Section>
      )}
    </>
  );
};

export default Project;
