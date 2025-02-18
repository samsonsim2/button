/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber'
 
export default function RoundedRect(props) {
  const { nodes, materials } = useGLTF('/models/RoundedRect.gltf')
  const diffuseMap2 = useLoader(TextureLoader, '/textures/RoundedRectUV.jpg')
  const lightRef = useRef(null)
 
  diffuseMap2.flipY = false
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        rotation={[Math.PI / 2, 0, 0]}
        scale={3.06}
       >
      <meshBasicMaterial map={diffuseMap2} /></mesh>
    </group>
  )
}

useGLTF.preload('/RoundedRect.gltf')