import { OrbitControls, SoftShadows, useScroll } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { BoxGeometry, DoubleSide } from 'three';
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { gsap } from 'gsap';
import Sphere from '../components/Sphere';
 
import * as THREE from "three";
import RoundedRect from '../components/RoundedRect';
const Roller = () => {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(5, 10, 5);
 
  const sphereRef = useRef(null)
  const [direction, setDirection] = useState(true)
  const diffuseMap = useLoader(TextureLoader, '/textures/sphereUV2.jpg')
  const lightRef = useRef(null)
  diffuseMap.flipY = false
  const handleClick = () => {
    console.log("hi")
    console.log(lightRef.current)

    setDirection(!direction)
    gsap.to(sphereRef.current.position, {
      x: direction ? 2 : -2, // Scale position for visibility

      duration: 1,
      ease: "power1.out",
    });
    gsap.to(sphereRef.current.rotation, {
      y: direction ? 17 :  -1.2, // Scale position for visibility

      duration: 1,
      ease: "power1.out",
    });

    playSound()

  }
  const playSound = () => {
    const audio = new Audio('/audio/swoosh.wav'); // Replace with your sound file path
    audio.volume = 0.3; 
    audio.play();
  };
  useEffect(()=>{
    console.log(lightRef.current)
  },[])
  return (
    <Canvas shadow  
    gl={{ antialias: true, toneMapping: THREE.NoToneMapping }} 
    shadows 
    style={{ height: '100vh', background: '#282c34' }}

     onClick={() => { handleClick() }}>
      <SoftShadows size={50} samples={20} focus={0.5}/>
      <ambientLight ref={lightRef} intensity={2} />
      <directionalLight position={[-5,5, 7]} castShadow  intensity={1}   shadow-mapSize-width={2048}  blurSamples={25} radius={10}  // Increase resolution (512, 1024, 2048, etc.)
  shadow-mapSize-height={ 2048} />
      <mesh
        ref={sphereRef}
        position={[-2, 0, 0]}
        rotation={[0, -1.2, 0]} 
        scale={.3}
        castShadow>
   
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial map={diffuseMap} roughness={0.4} />
      </mesh>

      <mesh
      receiveShadow
      position={[0,0,-0.1]}
    >
        <planeGeometry args={[100,100]}  />
        <meshStandardMaterial color={"white"} side={DoubleSide}/>
      </mesh>

  <RoundedRect/>
 
    </Canvas>
  );
};

export default Roller;