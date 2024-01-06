import { useFrame } from "@react-three/fiber";
import { LayerMaterial, Depth, Color } from "lamina";
import { useRef } from "react";
import * as THREE from 'three'

export function GradientSphere() {
  const ref = useRef()
  useFrame(()=>{
    if(!ref.current){return}
    ref.current.rotation.x = 
    ref.current.rotation.z = 
    ref.current.rotation.y += 0.001
  })
  return (
    <mesh scale={100} ref={ref}>
      <sphereGeometry args={[1, 64, 64]} />
      <LayerMaterial side={THREE.BackSide}>
        <Color color="#444" alpha={1} mode="normal" />
        <Depth
          colorA="green"
          colorB="black"
          alpha={0.5}
          mode="normal"
          near={0}
          far={300}
          origin={[100, 100, 100]}
        />
      </LayerMaterial>
    </mesh>
  );
}
