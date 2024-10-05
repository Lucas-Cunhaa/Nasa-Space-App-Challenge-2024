import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RotatingSphere = () => {
  const meshRef = React.useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotação contínua
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} /> {/* Raio 1, 32 subdivisões */}
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Planet = () => {
  return (
    <Canvas style={{ height: '600px', width: '100%' }}>
      <ambientLight intensity={0.5} /> {/* Luz ambiente */}
      <pointLight position={[10, 10, 10]} intensity={555} /> {/* Luz pontual */}
      <RotatingSphere />
      <OrbitControls />
    </Canvas>
  );
};

export default Planet;
