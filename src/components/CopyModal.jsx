import { useState } from 'react';
import Modal from 'react-modal'
import Experience from './experiences/Experience';
import Logo from './Logo';
import Navbar from './Navbar';
import styled from "styled-components";



const customStyles = {
    content: {
      top: '60%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-35%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

  const Copirigth = styled.div`
  z-index: 1000;
  position: fixed;
  top: 90%;
  left: 51%;
  transform: translateX(-51%);
  cursor: pointer;


  & > h5 {
    font-family: "Syncopate", sans-serif;
    font-size: 10px;
    color: white;
    font-weight: 1000;
  }

 
`;

const Copy = styled.h5`
font-size: small;
font-family: "Syncopate", sans-serif;
`


const CopyModal = () => {





  return (
    <div> 
     <Logo />
  <Navbar /> 
           
    <Modal
    isOpen={ true }
    onRequestClose={ false }
    style={ customStyles }
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={200}
    >
      <h3>
      All the content in this website is the copyrighted of Coevo Studio and their clients.
      Its prohibited distribute or publish any content without the prior written consent of the Studio.
      The design and develop of this website was created by Deimov and Keyla, for websites inquiries send to cortezgonzalo@outlook.es, thanks you for respecting.
   
      </h3>
      </Modal>  

        
            <Copirigth> 
            <Copy>  ©2023 Coevo Studio </Copy>  
            </Copirigth>
            

        <Experience/>
  
    
      </div>
  )
}

export default CopyModal