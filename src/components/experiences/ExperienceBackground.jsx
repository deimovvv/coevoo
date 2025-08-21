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
  z-index: -2;
  margin: 0;
  padding: 0;
  background: rgba(12, 12, 12, 1);
  pointer-events: none;
  opacity: 0.3; /* Opacidad reducida para fondo */
`;

const ExperienceBackground = () => {
  const cameraRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (cameraRef.current) {
        cameraRef.current.position.y = scrollY * 0.001;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Canvas 
        camera={{ position: [-0.9, 0, -0.01] }} 
        onCreated={({ camera }) => (cameraRef.current = camera)}
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <OrbitControls 
          updateDefaultCamera={true} 
          enableZoom={false} 
          enablePan={false}
          enableRotate={false}
        />

        {/* Reduced intensity lighting for background */}
        <directionalLight position={[0, 5, 3]} intensity={1} />
        <pointLight color={"purple"} intensity={0.2} />
        <pointLight color={"green"} intensity={0.5} />

        {/* PostProcess with reduced intensity */}
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur intensity={0.8} luminanceThreshold={0.2} />
        </EffectComposer>
       
        <Suspense fallback={null}>
          <FBOParticles />
        </Suspense>
       
      </Canvas>
    </Container>
  );
};

export default ExperienceBackground;