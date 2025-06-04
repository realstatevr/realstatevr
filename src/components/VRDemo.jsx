import React, { useRef } from "react";
import "aframe";
import { Entity, Scene } from "aframe-react";

export default function VRDemo({ modelUrl = "/models/apartment.glb" }) {
  const sceneRef = useRef();
  return (
    <div style={{ width: "100%", height: 500, margin: "0 auto", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px #0001" }}>
      <Scene embedded ref={sceneRef} style={{ width: "100%", height: "100%" }}>
        <a-assets>
          <a-asset-item id="model" src={modelUrl}></a-asset-item>
        </a-assets>
        <Entity primitive="a-sky" color="#ECECEC" />
        <Entity primitive="a-light" type="ambient" color="#fff" intensity={1} />
        <Entity primitive="a-light" type="directional" position="2 4 4" intensity={0.7} />
        <Entity primitive="a-gltf-model" src="#model" position="0 0 -2" scale="1 1 1" rotation="0 45 0" />
        <Entity primitive="a-camera" position="0 1.6 3" />
      </Scene>
      <div style={{ textAlign: "center", marginTop: 8, fontWeight: "bold" }}>
        يمكنك تدوير واستكشاف الوحدة بتقنية VR (بدون نظارة)
      </div>
    </div>
  );
}
