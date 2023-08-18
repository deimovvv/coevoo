import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/style.css";
import { useState } from "react";

const NavBar = styled.div`
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 9999999;
  left: 0%;
  top: 0%;
  background-color: rgba(0.2, 0.2, 0.2, 0.8);
  overflow-y: hidden;
  transform: 0.5s;

  @media screen and (max-width: 30em) {
    h5 {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 40em) {
  }
`;

const Overlay = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40%;


`;

const Ul = styled.ul``;

const Li = styled.li`
  /* font-family: 'Orbitron', sans-serif; */
  font-family: "Syncopate", sans-serif;
  padding: 15px 0;
  list-style-type: none;
`;

const Menu = styled.h4`
font-family: "Syncopate", sans-serif;
font-size: 14px;
 color: white;
font-weight: 1000;
margin: 10px;


`

const NavMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 25px;
  cursor: pointer;
  height: 50px;
  z-index: 100000;
  display: flex;



  @media screen and (max-width: 30em) {
    top: 32px;
    right: 14px;
  }
`;

const Navbar = ({ color }) => {
  const nav = useRef();

  const cruz = useRef();
  const ham = useRef();
  const menu = useRef()
  const ul = useRef()

  const [open, setOpen] = useState(false)

  function openNav() {
    setOpen(!open)

    nav.current.style.height = `100%`;
    ul.current.style.animationDelay  = 2
    ul.current.style.opacity = "1"
    

    cruz.current ? (ham.current.style.display = `none`) : "null";
    cruz.current ? (menu.current.style.display = `none`) : "null";

  }

  function closeNav() {
    setOpen(open)
    
    nav.current.style.height = `0%`;
         
    cruz.current ? (ham.current.style.display = `block`) : "null";
    cruz.current ? (menu.current.style.display = `block`) : "null";


  }

  return (
    <>
      <NavBar ref={nav}>
        {/* Overlay close button */}


        <NavMenu onClick={openNav}>
          <Menu 
          ref={menu} >Menu</Menu>
            <box-icon
              ref={ham}
              name="menu-alt-right"
              color="#ffffff"
              size="32px"
            ></box-icon>
          </NavMenu>     

          <a onClick={closeNav} className="closeIcon">
            <box-icon
              ref={cruz}
              name="x"
              color="#ffffff"
              size="45px"
            ></box-icon>
          </a>
       
        
        {/* dropDow menu */}
        <Overlay >
          <Ul 
          ref={ul}>
            <Li>
              <Link to="/collaborations">
                <h5>Projects</h5>
              </Link>
            </Li>

            <Li>
              <Link to="/aboutus">
                <h5>ABOUT US</h5>
              </Link>
            </Li>

            <Li>
              <Link to="/contact">
                <h5>CONTACT</h5>
              </Link>
            </Li>
          </Ul>
        </Overlay> 

       
       

      </NavBar>
    </>
  );
};

export default Navbar;
