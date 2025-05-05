import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import type { PlanetData } from '../lib/constants';
import { Mesh } from 'three';

interface PlanetProps extends PlanetData {
  orbitRadius?: number;
}

export function Planet({ radius, position, rotationSpeed, color, orbitRadius = 0 }: PlanetProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Self rotation
      meshRef.current.rotation.y += rotationSpeed;
      
      // Orbit rotation
      if (orbitRadius > 0) {
        const angle = state.clock.getElapsedTime() * (rotationSpeed * 0.5);
        meshRef.current.position.x = Math.cos(angle) * position;
        meshRef.current.position.z = Math.sin(angle) * position;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={[position, 0, 0]}>
      <Sphere args={[radius, 32, 32]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </mesh>
  );
}