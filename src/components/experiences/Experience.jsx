import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import styled from "styled-components";
import "../../css/style.css";
import { Suspense, useRef, useEffect } from "react";
import { FBOParticles } from './FBOParticles';
import Model from "./Model";


const Container = styled.div`
  position: fixed !important;
  width: 100%;
  height: 100vh;
  z-index: -2 ;
  margin: 0;
  padding: 0;
   background:  rgba(12, 12, 12, 1); /* Fondo de ruido con opacidad negra */
`;

const Experience = () => {
  const cameraRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (cameraRef.current) {
        cameraRef.current.position.y = scrollY * 0.001; // Ajusta el factor de desplazamiento según sea necesario
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Canvas camera={{ position: [-0.9, 0, -0.01] }} onCreated={({ camera }) => (cameraRef.current = camera)}>
        <OrbitControls updateDefaultCamera={true} enableZoom={false} />

        {/* Lighting */}
        <directionalLight position={[0, 5, 3]} intensity={2} />
        <pointLight color={"purple"} intensity={0.5}></pointLight>
        <pointLight color={"green"} intensity={1.2}></pointLight>

        {/* PostProcess */}
        <EffectComposer>
          <Bloom mipmapBlur intensity={3.8} luminanceThreshold={0} />
        </EffectComposer>
       
        {/* 3D MODEL */}
        <Suspense fallback={null}>
          {/* <Model/> */}
          <FBOParticles />
        </Suspense>
       
      </Canvas>
      
    </Container>
  );
};

export default Experience;