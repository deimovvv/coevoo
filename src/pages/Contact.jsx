import { Link } from "react-router-dom";
import styled from "styled-components";
import Experience from "../components/experiences/Experience";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Container = styled.div`
  height: 100vh;
  background-color: rgba(0.8, 0.8, 0.8, 0.7);
 

`;

const Iconcontainer = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Contactos = styled.div`
    position: relative;
    top: 40%;
  z-index: 100000;



`

const Emailcontainer = styled.div`
  text-align: center;

  .work-us{
  font-family: "Syncopate", sans-serif;
  padding-bottom: 40px;
  font-size: 16px;
  

  }
 
`;

const Copirigth = styled.div`
  /* transform: translateX(-51%);  */
  cursor: pointer;
  z-index: 99;
  position: relative;
  top: 68.5%;
  left: 46%;

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

const Contact = () => {


  return (
    <Container>
        
      <Logo />
      <Experience />
      <Navbar />
      
      <Contactos  className="animate__animated animate__fadeIn">
          
        <Emailcontainer>
        <h2 className="work-us" >Work with us</h2>
        
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
              color="grey"
            ></box-icon>
          </Link>

          <Link
            className="iconContainer"
            to={"https://www.youtube.com/@coevostudio/videos"}
            target="_blank"
          >
            <box-icon type="logo" name="youtube" color="grey"></box-icon>
          </Link>

          <Link
            className="iconContainer"
            to={"https://www.instagram.com/_coevo_/"}
            target="_blank"
          >
            <box-icon type="logo" name="instagram-alt" color="grey"></box-icon>
          </Link>
        </Iconcontainer>
      </Contactos>

      <Link className="link" to="/copyright">  ©2023 Coevo Studio   </Link>

     
    </Container>
  );
};

export default Contact;
