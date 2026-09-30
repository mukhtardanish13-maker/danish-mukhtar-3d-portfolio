'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import FloatingShape from './FloatingShape'

interface BlogPostSceneProps {
  geometryType?: 'torus' | 'icosahedron' | 'octahedron' | 'dodecahedron'
  color?: string
}

export default function BlogPostScene({ 
  geometryType = 'dodecahedron',
  color = '#8b5cf6' 
}: BlogPostSceneProps) {
  return (
    <div className="w-[200px] h-[200px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color={color} />
          <FloatingShape 
            geometryType={geometryType} 
            color={color} 
            speed={0.5} 
            scale={1.5} 
            wireframe={true}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
