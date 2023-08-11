import Experience from "./experiences/Experience";
import Navbar from "./Navbar";
import Logo from "./Logo";
import styled from "styled-components";
import "../css/style.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";



const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
           {/*  <Navbar /> */}
            <MenuOverlay/>

           

            <Link className="link" to="/copyright">
              ©2023 Coevo Studio
            </Link>

            <Experience />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
