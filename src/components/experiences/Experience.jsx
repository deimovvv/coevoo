import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
} from "@react-three/postprocessing";
import styled from "styled-components";
import "../../css/style.css";
import { Suspense } from "react";
import { FBOParticles } from './FBOParticles'
import Model from "./Model";


const Container = styled.div`
  position: fixed !important;
  width: 100%;
  height: 100vh;
  z-index: -1;
  margin: 0;
  padding: 0;
  /* background-color: rgba(2, 2, 2, 0.7); */
  background-color: rgba(2, 2, 2, 0.7);


`;

// componenente para renderizar three.js
// que adentro renderizo el modelo
const Experience = () => {
  return (
    <Container>
      <Canvas camera={{ position: [-0.7, 0, -1] }}> {/* -4 */}
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
         {/*  <Model/> */}
          < FBOParticles/>
         
        </Suspense>

        
      </Canvas>
    </Container>
  );
};

export default Experience;
