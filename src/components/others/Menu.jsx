import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../Logo"; // Importa el componente Logo

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 58px;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 5px;
  z-index: 1000;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-family: "Syncopate", sans-serif;
  font-size: 1rem;
  color: white;
  font-weight: 1000;
  margin: 0 10px;
  text-decoration: none;
  &:hover {
    color:rgb(206, 124, 158);
  }
`;

const Menu = () => {

    const location = useLocation();

  const handleServicesClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("services-section").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Nav>
      <Logo /> {/* Añade el logo aquí */}
      <MenuItems>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/projects" >Projects</MenuItem>
        <MenuItem to="/services" onClick={handleServicesClick}>Services</MenuItem>
        <MenuItem to="/aboutus">About Us</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </MenuItems>
    </Nav>
  );
};

export default Menu;