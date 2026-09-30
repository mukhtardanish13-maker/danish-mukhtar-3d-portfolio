'use client';

import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1.4, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          distort={0.4}
          speed={2}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

export default function ContactScene() {
  return (
    <div className="w-full h-[320px] lg:h-[450px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" />
          <AnimatedOrb />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
        </Suspense>
      </Canvas>
    </div>
  );
}
