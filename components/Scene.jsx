import React, {  useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();
  useFrame(() => {
    // console.log(scroll.offset)
    tl.current.seek(scroll.offset * tl.current.duration());
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        x: 4,
        y:-6,
        z:1.4
      },
      0,
    );

    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        x: 0,
        y:-6,
        z:1.4
      },
      2,
    );
    tl.current.to(
      ref.current.rotation,
      {
        duration: 2,
        y: Math.PI/2
      },
      0,
    );

    tl.current.to(
      ref.current.rotation,
      {
        duration: 2,
        y: -Math.PI/4
      },
      2,
    );
  });
  return (
    <group {...props} dispose={null} ref={ref} rotation={[0, 0, 0]}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.Tree_0_Tree_0Mat_0.geometry}
          material={materials.Tree_0Mat}
        />
        <mesh
          geometry={nodes.Tree_1_Tree_1Mat_0.geometry}
          material={materials.Tree_1Mat}
        />
        <mesh
          geometry={nodes.Tree_2_Tree_2Mat_0.geometry}
          material={materials.Tree_2Mat}
        />
        <mesh
          geometry={nodes.Tree_3_Tree_3Mat_0.geometry}
          material={materials.Tree_3Mat}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
