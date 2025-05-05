import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Planet } from './Planet';
import { PLANETS } from '../lib/constants';

export function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 35], fov: 60 }}>
      <color attach="background" args={['#000010']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} color="white" />
      
      {/* Sun */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial color="#FDB813" emissive="#FDB813" emissiveIntensity={2} />
      </mesh>

      {/* Planets */}
      {PLANETS.map((planet) => (
        <Planet key={planet.name} {...planet} orbitRadius={planet.position} />
      ))}

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Controls */}
      <OrbitControls 
        enablePan={false}
        minDistance={10}
        maxDistance={100}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}