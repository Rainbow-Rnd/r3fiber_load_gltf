import "./styles.css";
import { Canvas } from "@react-three/fiber";
import {  OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { useGLTF } from '@react-three/drei'

const Model = () => {

    const { scene } = useGLTF('/yongin_compressed.glb')

    return (
    <>
      <primitive object={scene} scale={0.05} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas>
          <ambientLight />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
0