import { Link } from "react-router-dom";
import styled from "styled-components";
import Experience from "../components/experiences/Experience";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Div = styled.div`
 width: 100%;
  position: fixed;
  z-index: 9999999;
  height: 762px;
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
  return (
    <Div>
      <Logo />
      <Navbar />
      <Experience />

      <DataContainer className="info">
        <Data className="animate__animated animate__fadeIn">
          All the content in this website is the copyrighted of Coevo Studio and
          their clients. Its prohibited distribute or publish any content
          without the prior written consent of the Studio. The design and
          develop of this website was created by <a className="developers" href="https://www.instagram.com/deimovvv"target="_blank"> Deimov </a>and <a className="developers" href="https://www.instagram.com/keyla___000/" target="_blank">Keyla</a> , for web
           services like this send email to cortezgonzalo@outlook.es, thanks you for respecting.
        </Data>
      </DataContainer>

      <Link className="link" to="/copyright">
        {" "}
        ©2023 Coevo Studio{" "}
      </Link>
    </Div>
  );
};

export default CopyRight;
