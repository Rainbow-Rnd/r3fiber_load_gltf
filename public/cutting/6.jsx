/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 6.glb --transform 
Files: 6.glb [4.54MB] > 6-transformed.glb [1.46MB] (68%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/6-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tile_1008.geometry} material={materials.Material_0} />
    </group>
  )
}

useGLTF.preload('/6-transformed.glb')