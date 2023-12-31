/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 1.glb --transform 
Files: 1.glb [4.54MB] > 1-transformed.glb [1.47MB] (68%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Area_1(props) {
  const { nodes, materials } = useGLTF('/1-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_1003.geometry} material={materials.Material_0} />
    </group>
  )
}

useGLTF.preload('/1-transformed.glb')
