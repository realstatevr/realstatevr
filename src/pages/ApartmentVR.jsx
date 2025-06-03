import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function ApartmentModel() {
  const gltf = useGLTF("/models/apartment.glb");
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function ApartmentVR() {
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <h2>جولة ثلاثية الأبعاد داخل الشقة</h2>
      <Canvas camera={{ position: [0, 2, 5] }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ApartmentModel />
        <OrbitControls />
        <Environment preset="city" />
      </Canvas>
      <p>يمكنك تدوير واستكشاف الشقة. دعم VR قادم قريبًا.</p>
    </div>
  );
}
