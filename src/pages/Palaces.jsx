import React from "react";
import VRDemo from "../components/VRDemo";

const palaces = [
  { id: 1, name: "قصر النيل", model: "/models/apartment1.glb", desc: "قصر فاخر في القاهرة" },
  { id: 2, name: "قصر البحرين", model: "/models/apartment1.glb", desc: "قصر ملكي في المنامة" },
  { id: 3, name: "قصر الرياض", model: "/models/apartment1.glb", desc: "قصر حديث في الرياض" },
  { id: 4, name: "قصر دبي", model: "/models/apartment1.glb", desc: "قصر عصري في دبي" },
  { id: 5, name: "قصر الكويت", model: "/models/apartment1.glb", desc: "قصر فاخر في الكويت" },
  { id: 6, name: "قصر قطر", model: "/models/apartment1.glb", desc: "قصر فاخر في الدوحة" },
  { id: 7, name: "قصر أبوظبي", model: "/models/apartment1.glb", desc: "قصر فاخر في أبوظبي" },
  { id: 8, name: "قصر الشيخ زايد", model: "/models/apartment1.glb", desc: "قصر فاخر في الشيخ زايد" },
  { id: 9, name: "قصر التجمع الخامس", model: "/models/apartment1.glb", desc: "قصر فاخر في التجمع الخامس" },
  { id: 10, name: "قصر العاصمة الإدارية", model: "/models/apartment1.glb", desc: "قصر فاخر في العاصمة الإدارية" }
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
