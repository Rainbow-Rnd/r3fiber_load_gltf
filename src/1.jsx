/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 1.glb --transform
Files: 1.glb [4.54MB] > 1-transformed.glb [1.47MB] (68%)
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Area1({ showModel }) {
  const { nodes, materials } = useGLTF("/1-transformed.glb");

  const param = "crack_1";

  return (
    <group dispose={null}>
      <mesh
        onClick={() => showModel(param)}
        geometry={nodes.Tile_1003.geometry}
        material={materials.Material_0}
      >
        <meshPhongMaterial color={new THREE.Color(0xeeeeee)} shininess={0} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/1-transformed.glb");
