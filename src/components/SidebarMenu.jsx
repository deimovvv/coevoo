import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import "../css/style.css"; // Asegúrate de tener tus estilos en esta hoja.

const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background-color: rgb(41, 41, 41);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
`;

const MenuButton = styled.div`
  position: fixed;
  top: 20px;
  right: 25px;
  z-index: 1003;
  cursor: pointer;

  & > box-icon {
    transition: transform 0.3s ease;
  }

  &:hover > box-icon {
    transform: scale(1.1);
  }
`;

const MenuItem = styled.a`
  font-family: "Syncopate", sans-serif;
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  margin: 15px 0;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: rgb(170, 144, 165);
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto; /* Empuja el logo hacia la parte inferior */
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const menuVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 },
};

const backdropVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const SidebarMenu = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botón del menú */}
      <MenuButton onClick={toggleMenu}>
        <box-icon name={isOpen ? "x" : "menu-alt-right"} color="#ffffff" size="40px"></box-icon>
      </MenuButton>

      {/* Backdrop para oscurecer el fondo */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={backdropVariants}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <Backdrop onClick={toggleMenu} />
        )}
      </motion.div>

      {/* Menú lateral */}
      <SidebarContainer
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.4 }}
      >
        <MenuItem href="/" onClick={toggleMenu}>
          Home
        </MenuItem>
        <MenuItem href="/projects" onClick={toggleMenu}>
          Projects
        </MenuItem>
        {/* <MenuItem onClick={() => { scrollToSection('services'); toggleMenu(); }}>
          Services
        </MenuItem> */}
        <MenuItem href="/aboutus" onClick={toggleMenu}>
          About Us
        </MenuItem>
       {/*  <MenuItem onClick={() => { scrollToSection('footer'); toggleMenu(); }}>
          Contact
        </MenuItem> */}
      </SidebarContainer>
    </>
  );
};

export default SidebarMenu;