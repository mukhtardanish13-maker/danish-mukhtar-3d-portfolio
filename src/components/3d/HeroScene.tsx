'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import FloatingShape from './FloatingShape'

function Loader() {
  return (
    <Html center>
      <div className="text-purple-500 font-bold tracking-widest animate-pulse">LOADING...</div>
    </Html>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#c4b5fd" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <FloatingShape geometryType="torus" position={[-3, 1, 0]} speed={1.2} scale={1.2} />
          <FloatingShape geometryType="icosahedron" position={[0, -1, 2]} speed={0.8} scale={1.5} color="#c4b5fd" />
          <FloatingShape geometryType="octahedron" position={[3, 2, -1]} speed={1.5} scale={0.8} color="#a78bfa" />
          
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
