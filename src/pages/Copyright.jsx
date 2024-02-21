import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Experience from "../components/experiences/Experience";
import Loader from "../components/Loader";
import Logo from "../components/Logo";
import MenuOverlay from "../components/MenuOverlay";

const Div = styled.div`
 width: 100%;
  position: fixed;
  z-index: 9999999;
  height: 100vh;
  background-color: rgba(2, 2, 2, 0.7);
  overflow-y: hidden;

  
`;

const DataContainer = styled.section`
 width: 50%;
    height: 100%;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    right: 350px;

    .developers{
      color: #1cb385;
    text-decoration: underline;
    font-size: 14px;
    }

`

const Data = styled.h3`
  color: white;
  z-index: 100;

  @media screen and (max-width: 64em) {
    font-size: 14px;
    margin-bottom: 100px;
  }
`;

const CopyRight = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  });


  return (
    <>
    {isLoading ? <Loader/> :   <Div>
      <Logo /> 
      <MenuOverlay/>

      <Experience />

      <DataContainer className="info">
        <Data className="animate__animated animate__fadeIn">
         The design and
          develop of this website was created by <a className="developers" href="https://www.instagram.com/_coevo_/"target="_blank"> Coevo</a>, for web
           services like this send email to coevo.agency@gmail.com
        </Data>
      </DataContainer>

      <Link className="link" to="/copyright">
        {" "}
        ©2024 Coevo Studio{" "}
      </Link>
    </Div> }
  
    </>
  );
};

export default CopyRight;
