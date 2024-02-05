import React, { useRef } from "react";
import { shaderMaterial, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import fragmentShader from "../../shaders/fragment.glsl";
import vertexShader from "../../shaders/vertex.glsl";
import { useFrame, extend } from "@react-three/fiber";
import Loader from "../Loader";
import { useState } from "react";

const BackgroundMaterial = shaderMaterial(
  {
    time: 0,
    uDisplacement: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ BackgroundMaterial });

function Model(props) {
  const { nodes, materials } = useGLTF("/bicho10.glb");
  const [isLoading, setIsLoading] = useState(true);

  const mat = useRef();

  useFrame((state, delta) => {
    mat.current.time += delta;
  });

  return (
    <>
      {isLoading && (
        <group {...props} dispose={null}>
          <mesh
            geometry={nodes.mesh_0.geometry}
            material={materials["Material.001"]}
            position={[0, -0.05, 1]}
            scale={0.2}
            rotation={[-1.5, 0, 0]}
          >
             <backgroundMaterial ref={mat} side={THREE.DoubleSide} />
          </mesh>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/logomj.glb");

export default Model;
