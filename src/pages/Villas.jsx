import React from "react";
import VRDemo from "../components/VRDemo";

const villas = [
  { id: 1, name: "فيلا بالم هيلز", model: "/models/apartment.glb", desc: "فيلا راقية في 6 أكتوبر" },
  { id: 2, name: "فيلا قطر", model: "/models/apartment.glb", desc: "فيلا مميزة في الدوحة" },
  { id: 3, name: "فيلا دبي", model: "/models/apartment.glb", desc: "فيلا عصرية في دبي" },
  { id: 4, name: "فيلا الشيخ زايد", model: "/models/apartment.glb", desc: "فيلا فاخرة في الشيخ زايد" },
  { id: 5, name: "فيلا عمان", model: "/models/apartment.glb", desc: "فيلا فاخرة في مسقط" }
];

export default function Villas() {
  return (
    <div style={{ padding: 24 }}>
      <h2>نماذج الفيلات</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {villas.map((v) => (
          <div key={v.id} style={{ width: 350, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001", padding: 16 }}>
            <h3 style={{ textAlign: "center" }}>{v.name}</h3>
            <VRDemo modelUrl={v.model} />
            <div style={{ textAlign: "center", marginTop: 8 }}>{v.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
