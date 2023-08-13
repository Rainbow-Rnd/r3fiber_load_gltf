/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 5.glb --transform
Files: 5.glb [4.54MB] > 5-transformed.glb [1.47MB] (68%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Area5({ showModel }) {
  const { nodes, materials } = useGLTF("/5-transformed.glb");

    const param = 'crack_5'

  return (
    <group dispose={null}>
      <mesh onClick={()=>showModel(param)}
        geometry={nodes.Tile_1006.geometry}
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

useGLTF.preload("/5-transformed.glb");
