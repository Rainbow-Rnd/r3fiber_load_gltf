/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 4.glb --transform
Files: 4.glb [4.54MB] > 4-transformed.glb [1.46MB] (68%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Area4({ showModel }) {
  const { nodes, materials } = useGLTF("/4-transformed.glb");

    const param = 'crack_4'

  return (
    <group dispose={null}>
      <mesh
          onClick={()=>showModel(param)}
        geometry={nodes.Tile_1005.geometry}
        material={materials.Material_0}
      >
          <meshPhongMaterial
              color={new THREE.Color(0xeeeeee)}
              shininess={0}
          />
      </mesh>

    </group>
  );
}

useGLTF.preload("/4-transformed.glb");
