import React from 'react';
import styled, { keyframes } from 'styled-components';

const expand = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
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

const LoaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
`;

const Dot = styled.div`
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${expand} 1.6s infinite ease-in-out;
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.4s;
  }
`;

const Loader = () => {
  return (
    <Div>
      <LoaderContainer>
        <Dot />
        <Dot />
        <Dot />
      </LoaderContainer>
    </Div>
  );
};

export default Loader;