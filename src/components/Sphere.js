import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
 
export default function Sphere(props) {

    const diffuseMap = useLoader(TextureLoader, '/textures/sphereUV2.jpg')
    diffuseMap.flipY = false
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/Sphere.gltf')
    const { actions } = useAnimations(animations, group)
    return (
        <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        
        scale={0.4}
      >
        <meshPhysicalMaterial map={diffuseMap}/>
      </mesh>
    </group>
    )
}

useGLTF.preload('/models/Sphere.gltf')
