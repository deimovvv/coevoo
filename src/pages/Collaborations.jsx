import LogoNegro from "../components/LogoNegro";
import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

/* import '../css/style.css' */

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px !important;
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* height: 400px; */

  gap: 0px;

  @media screen and (max-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const Collaborations = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  });

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      { isLoading ?  <Loader/>  : 
        <Container>
          {/* <Link
           className="arrow" to="/">
            <box-icon name="arrow-back" color="#000000"></box-icon>
          </Link> */}

           <Navbar  color={true} />
          <Section>
            <LogoNegro />

            <ProjectList publisher="collaborations" />
          </Section>
        </Container>
      }
    </>
  );
};

export default Collaborations;

