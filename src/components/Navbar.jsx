import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../css/style.css";
import { motion } from "framer-motion";
import gsap from "gsap";

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
   h5{
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

const NavMenu = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  height: 1000px;
  z-index: 100000;
`;

const Navbar = ({ color}) => {
  const nav = useRef();
  /*   console.log(nav.current,'da'); */

  const cruz = useRef();
  const ham = useRef();




  function openNav() {
    nav.current.style.height = `100%`;
   
    cruz.current ? (ham.current.style.display = `none`) : "null";
  }

  function closeNav() {
    nav.current.style.height = `0%`;
    cruz.current ? (ham.current.style.display = `block`) : "null";
  }
 
 

  return (
    <>
     
      <NavBar ref={nav}>
        {/* Overlay close button */}

        {color ? (
          <Link className="closeIcon" onClick={closeNav}>
            <box-icon
              ref={cruz}
              name="x"
              color="#ffffff"
              size=" 37px"
            ></box-icon>
          </Link>
        ) : (
          <Link className="closeIcon" onClick={closeNav}>
            <box-icon
              ref={cruz}
              name="x"
              color="#ffffff"
              size=" 37px"
            ></box-icon>
          </Link>
        )}

        {/* dropDow menu */}

             <Overlay>
            <Ul>
            <Li>
              {" "}
              <Link to="/collaborations">
                {" "}
                <h5>COLLABORATIONS</h5>{" "}
              </Link>{" "}
            </Li>

            <Li >
              {" "}
              <Link to="/aboutus">
                {" "}
                <h5>ABOUT US</h5>{" "}
              </Link>{" "}
            </Li>
            </Ul> 
          </Overlay>
       
     
      {color ? (
        <NavMenu onClick={openNav}>
          <box-icon
            ref={ham}
            name="menu-alt-right"
            color="#222222"
            size="32px"
          ></box-icon>
        </NavMenu>
      ) : (
        <NavMenu onClick={openNav}>
          <box-icon
            ref={ham}
            name="menu-alt-right"
            color="#ffffff"
            size="32px"
          ></box-icon>
        </NavMenu>
      )}

      {/*  <NavMenu onClick={openNav}  >
    <box-icon ref={ham} name='menu-alt-right' color='#ffffff' size='32px'></box-icon>
    </NavMenu>
 */}
    </NavBar>

    </>
  );
};

export default Navbar;

if (true) {
  // ejecuta
} else {
  // esto
}

true ? "esto" : "esto otro";
