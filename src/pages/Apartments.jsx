import React from "react";
import VRDemo from "../components/VRDemo";

const apartments = [
  { id: 1, name: "شقة ناوي التجريبية", model: "/models/apartment.glb", desc: "شقة حديثة في أبوظبي" },
  { id: 2, name: "شقة الرياض", model: "/models/apartment1.glb", desc: "شقة فاخرة في الرياض" },
  { id: 3, name: "شقة الكويت", model: "/models/apartment.glb", desc: "شقة راقية في الكويت" },
  { id: 4, name: "شقة التجمع الخامس", model: "/models/apartment1.glb", desc: "شقة مميزة في التجمع" },
  { id: 5, name: "شقة العاصمة الإدارية", model: "/models/apartment.glb", desc: "شقة عصرية في العاصمة" }
];

export default function Apartments() {
  return (
    <div style={{ padding: 24 }}>
      <h2>نماذج الشقق</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {apartments.map((a) => (
          <div key={a.id} style={{ width: 350, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001", padding: 16 }}>
            <h3 style={{ textAlign: "center" }}>{a.name}</h3>
            <VRDemo modelUrl={a.model} />
            <div style={{ textAlign: "center", marginTop: 8 }}>{a.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
