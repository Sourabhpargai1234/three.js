import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from '../components/Avatar'

function AvatarApp() {
  return (
    <Canvas>
      {/* Optional OrbitControls for interaction */}
      <OrbitControls />
      
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Avatar Model */}
      <Avatar />
    </Canvas>
  )
}

export default AvatarApp
