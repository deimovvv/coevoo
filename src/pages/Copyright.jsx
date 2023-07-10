import styled from "styled-components";
import Experience from "../components/experiences/Experience";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Div = styled.div`
 height: 100vh;
  background-color: rgba(0.8, 0.8, 0.8, 0.7);
  width: 100%;

  .info{
  
      width: 50%;
      position: absolute;
  z-index: 1000;

  }

`

const Data = styled.h3`
color: white;

`


const CopyRight = () => {
  return (
    <Div >
        <Logo/>
        <Navbar/>

        <div className="info" >
        <Data  className="animate__animated animate__fadeIn" >
      All the content in this website is the copyrighted of Coevo Studio and their clients.
      Its prohibited distribute or publish any content without the prior written consent of the Studio.
      The design and develop of this website was created by Deimov and Keyla, for websites inquiries send to cortezgonzalo@outlook.es, thanks you for respecting.
      </Data>
      </div>

      <Experience/>
       

    </Div>
  )
}

export default CopyRight