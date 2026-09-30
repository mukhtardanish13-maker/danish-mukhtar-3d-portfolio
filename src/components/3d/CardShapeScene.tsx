'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import FloatingShape from './FloatingShape';

interface CardShapeSceneProps {
  geometryType: 'torus' | 'icosahedron' | 'octahedron' | 'dodecahedron';
  color?: string;
  wireframe?: boolean;
}

export default function CardShapeScene({
  geometryType,
  color = '#8b5cf6',
  wireframe = true,
}: CardShapeSceneProps) {
  return (
    <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.7} />
          <pointLight position={[4, 4, 4]} intensity={2} color={color} />
          <pointLight position={[-4, -4, -4]} intensity={1} color="#ffffff" />
          <FloatingShape
            geometryType={geometryType}
            color={color}
            speed={1.2}
            scale={1.3}
            wireframe={wireframe}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
