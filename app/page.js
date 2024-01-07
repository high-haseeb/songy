"use client";
import { GradientSphere } from "@/components/Background";
import TextContent from "@/components/Content";
import CustomCursor from "@/components/Cursor";
import { Effects } from "@/components/Effcts";
import Footer from "@/components/Footer";
import { Overlay } from "@/components/Overlay";
import { Tree } from "@/components/Scene";
import {
  CameraShake,
  Environment,
  OrbitControls,
  ScrollControls,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AnimatedCursor from "react-animated-cursor";
import * as THREE from "three";

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="bg-black w-screen h-screen text-white text-5xl flex items-center justify-center">
          loading...
        </div>
      }
    >
      <div className="w-screen h-screen">
        {/* <TextContent /> */}
        <Canvas className=" w-screen h-screen z-0">
          <Experience />
        </Canvas>
        <AnimatedCursor
          innerSize={10}
          outerSize={70}
          outerScale={1.2}
          outerStyle={{
            border: "2px solid grey",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          innerStyle={{
            backgroundColor: "grey",
          }}
        />
      </div>
    </Suspense>
  );
}
const Experience = () => {
  return (
    <ScrollControls pages={3}  damping={0.25} maxSpeed={0.3}>
      <Environment preset="forest" />
      <Tree position={[0, -7, 0]} scale={1.2} />
      <GradientSphere />
      <Sparkles scale={10} count={300} />
      <CameraShake maxPitch={0.01} maxRoll={0.01} maxYaw={0.04} />
      <Effects />
      <directionalLight
        color={new THREE.Color(0xffd700)} // Set the color to gold
        intensity={3}
        position={[0, -10, 0]}
        castShadow
      />
      <Overlay/>
    </ScrollControls>
  );
};
