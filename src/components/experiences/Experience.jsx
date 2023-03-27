import { Canvas, useThree } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
} from "@react-three/postprocessing";
import styled from "styled-components";
import '../../css/style.css'
import { Suspense } from "react";
import Model from "./Model";
import Bicho9 from "./Model";



const Container = styled.div`
  position: fixed !important;
  width: 100%;
  height: 100vh;
  z-index: 1;
  margin: 0;
  padding: 0;
  background-color: #171717;
 

`;

const Experience = () => {
  return (
    <Container>
      <Canvas   camera={{position:[0,0,-4]}} >

       <OrbitControls updateDefaultCamera ={true}  enableZoom={false}  />

        <directionalLight position={[0, 5, 3]} intensity={0.3} />
     
        <pointLight color={"purple"} intensity={0.5}></pointLight>
        <pointLight color={"green"} intensity={1.2}></pointLight> 

      <Environment preset="warehouse" blur={0} />


       <EffectComposer>
          <Bloom mipmapBlur intensity={0.001} luminanceThreshold={0} />
          <DepthOfField
            focusDistance={0.25}
            focalLength={0.75}
            bokehScale={2.3}
          />
        </EffectComposer>
 
        

        {/* 3D MODEL */}
       {/*  <Model /> */}

       <Suspense fallback={null}>
    
       {/* <Model/> */}
       <Bicho9/>
        </Suspense>
      

      </Canvas>
    </Container>
  );
};

export default Experience;
