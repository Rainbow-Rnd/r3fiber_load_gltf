import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import {Building} from './Buidling'
import {Area1} from './1'
import {Area3} from './3'
import {Area4} from './4'
import {Area5} from './5'
import {Area6} from './6'
import {Area7} from './7'


useGLTF.preload("/original.glb");


export default function App() {
  return (
    <div className="App">
      <Canvas>
          <ambientLight />
        <Suspense fallback={null}>
            <group position-y={-0.75} dispose={null} scale={0.07}>
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
