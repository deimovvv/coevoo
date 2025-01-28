import React from 'react';
import styled, { keyframes } from 'styled-components';
import coevoLogo from '../.././public/assets/Logo33.png'; // Asegúrate de ajustar la ruta al logo de Coevo

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  position: fixed; /* Cambia a fixed para cubrir toda la pantalla */
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000; /* Asegúrate de que el loader esté por encima de otros elementos */
`;


const Logo = styled.img`
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => {
  return (
    <Div>
      <Logo src={coevoLogo} alt="Coevo Logo" />
    </Div>
  );
};

export default Loader;