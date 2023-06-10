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

const Iconcontainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Emailcontainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Gallery = styled.p`
  .gallery {
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
          <Navbar />
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
                  Here{" "}
                </Link>
              </Gallery>
              <Emailcontainer>
                <Link
                  className="emailLink"
                  to={"https://coevo.agency@gmail.com"}
                  target="_blank"
                >
                  {" "}
                  coevo.agency@gmail.com{" "}
                </Link>
              </Emailcontainer>
              <Iconcontainer>
                <Link
                  className="iconContainer"
                  to={"https://www.linkedin.com/in/coevo-studio-38b3a5265/"}
                  target="_blank"
                >
                  <box-icon
                    type="logo"
                    name="linkedin-square"
                    color="grey"
                  ></box-icon>
                </Link>

                <Link
                  className="iconContainer"
                  to={"https://www.youtube.com/@coevostudio/videos"}
                  target="_blank"
                >
                  <box-icon type="logo" name="youtube" color="grey"></box-icon>
                </Link>

                <Link
                  className="iconContainer"
                  to={"https://www.instagram.com/_coevo_/"}
                  target="_blank"
                >
                  <box-icon
                    type="logo"
                    name="instagram-alt"
                    color="grey"
                  ></box-icon>
                </Link>

              </Iconcontainer>

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
