import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Tree(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const ref = useRef();
  useFrame(()=>{
    if(!ref.current){return}
    ref.current.rotation.y += 0.0005
  })
  useEffect(()=>{
    if(!ref.current){return}
  })
  return (

    <group {...props} dispose={null} position={[0,-7,0]} scale={1.2} ref={ref} rotation={[0, 0, 0]}>
      <group scale={0.01}>
        <mesh geometry={nodes.Tree_0_Tree_0Mat_0.geometry} material={materials.Tree_0Mat} />
        <mesh geometry={nodes.Tree_1_Tree_1Mat_0.geometry} material={materials.Tree_1Mat} />
        <mesh geometry={nodes.Tree_2_Tree_2Mat_0.geometry} material={materials.Tree_2Mat} />
        <mesh geometry={nodes.Tree_3_Tree_3Mat_0.geometry} material={materials.Tree_3Mat} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
