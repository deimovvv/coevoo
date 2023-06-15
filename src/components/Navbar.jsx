import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/style.css";
import { useState } from "react";
import { motion } from "framer-motion";

const NavBar = styled.div`
  height: 0%;
  width: 100%;
  position: fixed;
  z-index: 9999999;
  left: 0%;
  top: 0%;
  /* background-color: #bfbdbdb8; */
  background-color: rgba(0.8, 0.8, 0.8, 0.7);
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
font-size: 15px;
 color: white;
font-weight: 1000;
margin: 10px;


`

const NavMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 25px;
  cursor: pointer;
  height: 1000px;
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
    setOpen(true)

    nav.current.style.height = `100%`;
    ul.current.style.animationDelay  = 2
    ul.current.style.opacity = "1"

    cruz.current ? (ham.current.style.display = `none`) : "null";
    cruz.current ? (menu.current.style.display = `none`) : "null";

  }

  function closeNav() {
    setOpen(false)
    
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
       

       
          <Link className="closeIcon" onClick={closeNav}>
            <box-icon
              ref={cruz}
              name="x"
              color="#ffffff"
              size=" 37px"
            ></box-icon>
          </Link>
       
        
        {/* dropDow menu */}
        
        <Overlay>
          <Ul 
          
          ref={ul}>
            <Li>
              <Link to="/collaborations">
                <h5>COLLABORATIONS</h5>
              </Link>
            </Li>

            <Li>
              <Link to="/aboutus">
                <h5>ABOUT US</h5>
              </Link>
            </Li>
          </Ul>
        </Overlay> 

       
       

      </NavBar>
    </>
  );
};

export default Navbar;
