import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Experience from "../components/experiences/Experience";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import MenuOverlay from "../components/MenuOverlay";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999999;
  height: 100vh;
  overflow-y: hidden;
  background-color: rgba(0.2, 0.2, 0.2, 0.6);

  @media screen and (max-width: 64em) {
    padding-bottom: 100px;
   
  }
`;

const Iconcontainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Contactos = styled.div`
  position: relative;
  top: 40%;
  z-index: 0;

   @media screen and (max-width: 64em) {
    font-size: 14px;
   
  }
`;

const Emailcontainer = styled.div`
  text-align: center;

  .work-us {
    font-family: "Syncopate", sans-serif;
    padding-bottom: 40px;
    font-size: 16px;
  }
`;


const Contact = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  });


  return (
    <>
    { isLoading ? <Loader/> : 
    <Container>
      
      <Logo />
      <Experience />
     
      <MenuOverlay/>

      <Contactos className="animate__animated animate__fadeIn">
        <Emailcontainer>
          <h2 className="work-us">Work with us</h2>

          <Link
            className="emailLink"
            to={"https://coevo.agency@gmail.com"}
            target="_blank"
          >
            {" "}
            coevo.agency@gmail.com{" "}
          </Link>
        </Emailcontainer>
        <Iconcontainer>
          <Link
            className="iconContainer"
            to={"https://www.linkedin.com/in/coevo-studio-38b3a5265/"}
            target="_blank"
          >
            <box-icon
              type="logo"
              name="linkedin-square"
              color="#bfbfbf"
            ></box-icon>
          </Link>

          <Link
            className="iconContainer"
            to={"https://www.youtube.com/@coevostudio/videos"}
            target="_blank"
          >
            <box-icon type="logo" name="youtube" color="#bfbfbf"></box-icon>
          </Link>

          <Link
            className="iconContainer"
            to={"https://www.instagram.com/_coevo_/"}
            target="_blank"
          >
            <box-icon type="logo" name="instagram-alt" color="#bfbfbf"></box-icon>
          </Link>
        </Iconcontainer>
      </Contactos>

      <Link className="link" to="/copyright">
        {" "}
        ©2023 Coevo Studio{" "}
      </Link>
    </Container>
  }
  </>
  );
};

export default Contact;
