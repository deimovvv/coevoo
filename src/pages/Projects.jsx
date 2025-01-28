import styled from "styled-components";
import ProjectList from "../components/ProjectList";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import { useEffect } from "react";
import SidebarMenu from "../components/SidebarMenu";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
  margin-bottom: 100px !important;
  z-index: -1;
`;

const Filter = styled.div`
  color: white;
  margin-bottom: 40px;
  

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-right: 7px;
    cursor: pointer;
  }

  li:hover {
    border-bottom: 0.5px solid;
  }
`;

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;

  @media screen and (max-width: 64em) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: 1fr;
  }
`;

const Copirigth = styled.div`
  cursor: pointer;
  z-index: 99;
  position: relative;
  left: 45%;
  margin-bottom: 5%;

  & > h5 {
    font-family: "Syncopate", sans-serif;
    font-size: 10px;
    color: white;
    font-weight: 1000;
  }
`;

const Copy = styled.h5`
  font-size: 10px;
  font-family: "Syncopate", sans-serif;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  padding-right: 16px;
  cursor: pointer;
  transition: 0s transform;
  text-transform: uppercase;
  font-family: "Syncopate", sans-serif;
  font-size: .95rem;

  @media screen and (max-width: 40em) {
    font-size: 10px;
  }

  &:hover {
    text-decoration: underline;
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

const Collaborations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  });

  // Función para manejar el evento onLoad de las imágenes
  const handleImageLoad = () => {
    // Comprueba si todas las imágenes están cargadas
    // Puedes agregar una lógica adicional aquí si es necesario
    setIsLoading(false);
  };

  // Tu lista de categorías
  const categories = ['All', '3D & Environment', 'AI', 'VR / AR', 'Videoclips'];

  return (
    <>
      {isLoading ? (
        // Renderiza el Loader mientras isLoading sea true
        <Loader />
      ) : (
        <Container>
          <Filter className="prueba">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'active' : ''}
              >
                {category}
              </Button>
            ))}
          </Filter>
          <Section>
            <ProjectList
              category={selectedCategory === 'All' ? '' : selectedCategory}
              onLoad={handleImageLoad}
              highlightedIndex={highlightedIndex}
              onHover={(index) => setHighlightedIndex(index)}
              onLeave={() => setHighlightedIndex(null)}
            />
          </Section>
        </Container>
      )}
      <Logo />
      <SidebarMenu />
    </>
  );
};

export default Collaborations;