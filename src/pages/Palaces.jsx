import React from "react";
import VRDemo from "../components/VRDemo";

const palaces = [
  { id: 1, name: "قصر النيل", model: "/models/apartment1.glb", desc: "قصر فاخر في القاهرة" },
  { id: 2, name: "قصر البحرين", model: "/models/apartment1.glb", desc: "قصر ملكي في المنامة" },
  { id: 3, name: "قصر الرياض", model: "/models/apartment1.glb", desc: "قصر حديث في الرياض" },
  { id: 4, name: "قصر دبي", model: "/models/apartment1.glb", desc: "قصر عصري في دبي" },
  { id: 5, name: "قصر الكويت", model: "/models/apartment1.glb", desc: "قصر فاخر في الكويت" }
];

export default function Palaces() {
  return (
    <div style={{ padding: 24 }}>
      <h2>نماذج القصور</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {palaces.map((p) => (
          <div key={p.id} style={{ width: 350, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001", padding: 16 }}>
            <h3 style={{ textAlign: "center" }}>{p.name}</h3>
            <VRDemo modelUrl={p.model} />
            <div style={{ textAlign: "center", marginTop: 8 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
