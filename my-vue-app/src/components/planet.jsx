import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RotatingSphere = () => {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; 
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} /> {}
      <meshStandardMaterial color="#FF8C00" />
    </mesh>
  );
};

const Planet = () => {
  return (
    <Canvas style={{ height: '600px', width: '800px', display: 'flex' }}>
      <ambientLight intensity={0.5} /> {}
      <pointLight position={[10, 10, 10]} intensity={555} /> {}
      <RotatingSphere />
      <OrbitControls />
    </Canvas>
  );
};

export default Planet;