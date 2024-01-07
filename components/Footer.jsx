import { Environment, Sparkles, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import { Tree } from "./Scene";
import * as THREE from 'three'
import { GradientSphere } from "./Background";
import { Effects } from "./Effcts";

const Footer = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas className="w-screen h-screen ">
        <Tree position={[5, -11, 0]} scale={2} />
        <GradientSphere/>
        <Environment preset="park"/>
          <Sparkles scale={10} count={300} />

          <Effects />
          <directionalLight
            color={new THREE.Color(0xffd700)} // Set the color to gold
            intensity={3}
            position={[5, -10, 0]}
            castShadow
          />
      </Canvas>
    </div>
  );
};
export default Footer;
