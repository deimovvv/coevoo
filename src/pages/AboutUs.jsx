import LogoNegro from "../components/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "boxicons";
import Team from "../components/Team";
import Navbar from "../components/Navbar";
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
                Coevo is an interdiciplinary studio based in Argentina...{" "}
              </h3>{" "}
              <br />
              <p>
                We create experiencies that cover 3D art, immersive
                installations, virtual reality, sound / inmersive Design,
                virtual worlds, art direction and visual effects. <br />
              </p>
              <br />
              <p>
                Our approach is to create an open space for experimentation and
                cooperation between the parties involved, hence our name Coevo,
                which refers to Co-evolution, <br /> That means every system,
                whether physical or digital, evolves thanks to the evolution of
                the others.
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
