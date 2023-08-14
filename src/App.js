import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
// import { Model } from "./yongin_blender_compressed";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// export function Model(props) {
//     const { nodes, materials } = useGLTF("/yongin_compressed.glb");
//     return (
//         <group {...props} dispose={null}>
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Tile_1.geometry}
//                 material={nodes.Tile_1.material}
//             />

//         </group>
//     );
// }

// useGLTF.preload("/yongin_compressed.glb");
export  function Model(props) {
  const { nodes, materials } = useGLTF("/yongin_compressed_400.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_1.geometry}
        material={materials.Tile_1_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_2.geometry}
        material={materials.Tile_2_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_3.geometry}
        material={materials.Tile_3_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_4.geometry}
        material={materials.Tile_4_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_5.geometry}
        material={materials.Tile_4_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_6.geometry}
        material={materials.Tile_5_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_7.geometry}
        material={materials.Tile_5_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_8.geometry}
        material={materials.Tile_6_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_9.geometry}
        material={materials.Tile_7_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_10.geometry}
        material={materials.Tile_7_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_11.geometry}
        material={materials.Tile_8_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_12.geometry}
        material={materials.Tile_8_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_13.geometry}
        material={materials.Tile_9_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_14.geometry}
        material={materials.Tile_9_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_15.geometry}
        material={materials.Tile_9_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_16.geometry}
        material={materials.Tile_10_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_17.geometry}
        material={materials.Tile_10_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_18.geometry}
        material={materials.Tile_11_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_19.geometry}
        material={materials.Tile_12_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_20.geometry}
        material={materials.Tile_12_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_21.geometry}
        material={materials.Tile_13_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_22.geometry}
        material={materials.Tile_14_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_23.geometry}
        material={materials.Tile_14_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_24.geometry}
        material={materials.Tile_15_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_25.geometry}
        material={materials.Tile_15_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_26.geometry}
        material={materials.Tile_15_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_27.geometry}
        material={materials.Tile_16_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_28.geometry}
        material={materials.Tile_16_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_29.geometry}
        material={materials.Tile_17_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_30.geometry}
        material={materials.Tile_17_1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1_31.geometry}
        material={materials.Tile_18_0}
      />
    </group>
  );
}

useGLTF.preload("/yongin_compressed_400.gltf");



export default function App() {
  return (
    <div className="App">
      <Canvas>
          <ambientLight />
        <Suspense fallback={null}>
          <Model scale={0.07} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
0