import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import { Suspense,  useState } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
import { useLayoutEffect } from "react";

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

  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense  fallback="null">
          <Container>
          <Navbar />
          <Section>
            <Logo />

            <ProjectList publisher="collaborations" />
          </Section>
        </Container>
        </Suspense>
        
      )}
    </>
  );
};

export default Collaborations;
