import { Link } from "react-router-dom";
import styled from "styled-components";
import Experience from "../components/experiences/Experience";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Div = styled.div`
 height: 100vh;
 background-color: rgba(0.8, 0.8, 0.8, 0.7);
  
  width: 100%;
  overflow: hidden;

  .info{
  
      width: 50%;
      /* position: absolute; */
  z-index: 10000;
  height: 100%;
   display: flex;
   margin: auto;
   justify-content: center;
   align-items: center;
  text-align: center;
  right: 350px;

 


  }

`

const Data = styled.h3`
color: white;

@media screen and (max-width: 64em) {
    font-size: 14px;
   
  }

`


const CopyRight = () => {
  return (
    <Div >
        <Logo/>
        <Navbar/>
        <Experience/>

        <div className="info" >
        <Data  className="animate__animated animate__fadeIn" >
      All the content in this website is the copyrighted of Coevo Studio and their clients.
      Its prohibited distribute or publish any content without the prior written consent of the Studio.
      The design and develop of this website was created by Deimov and Keyla, for websites inquiries send to cortezgonzalo@outlook.es, thanks you for respecting.
      </Data>
      </div>

    

      <Link className="link" to="/copyright">  ©2023 Coevo Studio   </Link>

           
       

    </Div>
  )
}

export default CopyRight