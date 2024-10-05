import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const RotatingCube = () => {
  return (
    <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

const Planet = () => {
  return (
    <Canvas style={{ height: '500px', width: '100%' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingCube />
      <OrbitControls />
    </Canvas>
  );
};

export default Planet;