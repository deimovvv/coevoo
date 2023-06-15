import Experience from "./experiences/Experience";
import Navbar from "./Navbar";
import Logo from "./Logo";
import styled from "styled-components";
import "../css/style.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Copirigth = styled.div`
  z-index: 99;
  position: fixed;
  top: 90%;
  left: 51%;
  transform: translateX(-51%);
  cursor: pointer;


  & > h5 {
    font-family: "Syncopate", sans-serif;
    font-size: 9px;
    color: white;
    font-weight: 1000;
  }

 
`;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Simula el tiempo de carga de la página
  }, []);

  return (
    <>
      <div className="wrapper">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="animate__animated animate__fadeIn">
            <Logo />
            <Navbar /> 
           

            <Copirigth>
            <h5 onClick={() => {}}>  ©2023 Coevo Studio  </h5>
            </Copirigth>

            <Experience />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
