import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
// import { useGLTF } from '@react-three/drei'
//
// const Model = () => {
//
//     const { scene } = useGLTF('/yongin_compressed.glb')
//
//     return (
//     <>
//       <primitive object={scene} scale={0.05} />
//     </>
//   );
// };

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import {Building} from './Buidling'
import {Area1} from './1'
import {Area3} from './3'
import {Area4} from './4'
import {Area5} from './5'
import {Area6} from './6'
import {Area7} from './7'

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
//
//         </group>
//     );
// }
//
// useGLTF.preload("/yongin_compressed.glb");


useGLTF.preload("/original.glb");


export default function App() {
  return (
    <div className="App">
      <Canvas>
          <ambientLight />
        <Suspense fallback={null}>
            <group position-y={-0.75} dispose={null}>
                <Building />
                <Area1/>
                <Area3/>
                <Area4/>
                <Area5/>
                <Area6/>
                <Area7/>
            </group>

          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
