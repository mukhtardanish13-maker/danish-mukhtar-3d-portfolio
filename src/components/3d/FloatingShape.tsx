'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface FloatingShapeProps {
  position?: [number, number, number]
  geometryType: 'torus' | 'icosahedron' | 'octahedron' | 'dodecahedron'
  color?: string
  speed?: number
  scale?: number
  wireframe?: boolean
}

export default function FloatingShape({
  position = [0, 0, 0],
  geometryType,
  color = '#8b5cf6',
  speed = 1,
  scale = 1,
  wireframe = true,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    
    meshRef.current.rotation.x += delta * 0.2 * speed
    meshRef.current.rotation.y += delta * 0.3 * speed
    
    // Float up and down
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.2
  })

  const getGeometry = () => {
    switch (geometryType) {
      case 'torus':
        return <torusGeometry args={[1, 0.4, 16, 100]} />
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />
      case 'octahedron':
        return <octahedronGeometry args={[1, 0]} />
      case 'dodecahedron':
        return <dodecahedronGeometry args={[1, 0]} />
      default:
        return <boxGeometry args={[1, 1, 1]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        wireframe={wireframe}
      />
    </mesh>
  )
}
