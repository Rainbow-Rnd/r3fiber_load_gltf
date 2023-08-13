import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/yongin_compressed.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tile_1.geometry}
        material={nodes.Tile_1.material}
      />
    </group>
  );
}

useGLTF.preload("/yongin_compressed.glb");

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
0;
