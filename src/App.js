import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import Popup from "./8";

import { Building } from "./Buidling";
import { Area1 } from "./1";
import { Area3 } from "./3";
import { Area4 } from "./4";
import { Area5 } from "./5";
import { Area6 } from "./6";
import { Area7 } from "./7";

useGLTF.preload("/original.glb");

export default function App() {
  const [isModelOpen, setisModelOpen] = useState(false);

  const [imageFile, setImageFile] = useState('');

  const showModel = (imageFile) => {

    console.log(`showModel imageFile: ${imageFile}`)
    setisModelOpen(true);
    setImageFile(imageFile)
  };
  const onHide = () => {
    setisModelOpen(false);
  };

  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <Suspense fallback={null}>
          <group position-y={-0.75} dispose={null} scale={0.07}>
            <Building showModel={showModel} />
            <Area1 showModel={showModel} />
            <Area3 showModel={showModel} />
            <Area4 showModel={showModel} />
            <Area5 showModel={showModel} />
            <Area6 showModel={showModel} />
            <Area7 showModel={showModel} />
          </group>

          <OrbitControls />
        </Suspense>
      </Canvas>
      <Popup visible={isModelOpen} onHide={onHide} imageFile={imageFile}/>
    </div>
  );
}
