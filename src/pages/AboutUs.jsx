import LogoNegro from "../components/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "boxicons";
import Team from "../components/Team";
import Loader from "../components/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "../css/style.css";
import MenuOverlay from "../components/MenuOverlay";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
`;

const Section = styled.div`
  margin: 50px 20px;
  display: grid;
  justify-content: center;
  text-align: center;
  width: auto;


  @media screen and (max-width: 48em) {
  }
  @media screen and (max-width: 40em) {
    text-align: center;

    & > h3 {
      font-size: 13px;
    }
    & > p {
      font-size: 13px;
    }
  }
`;

const Gallery = styled.p`
  .gallery {
    color: #1cb385;
    text-decoration: underline;
  }

  .gallery:hover {
    color: whitesmoke;
  }
`;

const Manifiesto = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Container className="animate__animated animate__fadeIn">
         {/*  <Navbar /> */}
          <MenuOverlay/>
          <LogoNegro color="white" />

          <motion.div
            initial={{ y: 200, opacity: 0.9 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, ease: "circOut", duration: 1.6 }}
          >
            <Section>
              <h3>
                {" "}
                Welcome to Coevo...
              </h3>{" "}
              <br />
              <p>
                Where innovation meets imagination! We are an interdisciplinary studio based in Argentina that specializes in creating experiences encompassing 3D art, immersive installations, virtual reality, augmented reality, application design and development, sound/immersive design, virtual worlds, art direction, and visual effects.{" "}
              </p> 
              <br />
              <p>
              Our focus is on creating an open space for experimentation and cooperation among the different parties involved, hence our name, which refers to Co-evolution. This means that each system, whether physical or digital, evolves thanks to the development of the others. Join us on this journey where creativity and technology merge to create truly unique experiences. Let Coevo transform your vision into reality today!
              </p>
              <br />
              <Gallery>
                See our Virtual Gallery{" "}
                <Link
                  className="gallery"
                  to={"https://www.muse.place/coevogallery"}
                  target="_blank"
                >
                  {" "}
                  here{" "}
                </Link>
              </Gallery>
              {/* Team Section */}
              <Team />
            </Section>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default Manifiesto;
