import React from "react";
import VRDemo from "../components/VRDemo";

const units = [
  { id: 1, name: "محل مول مصر", model: "/models/apartment.glb", desc: "محل تجاري في مول مصر" },
  { id: 2, name: "عيادة التجمع الطبي", model: "/models/apartment1.glb", desc: "عيادة حديثة في التجمع" },
  { id: 3, name: "مكتب إداري العاصمة", model: "/models/apartment.glb", desc: "مكتب إداري في العاصمة الإدارية" },
  { id: 4, name: "محل سيتي ستارز", model: "/models/apartment1.glb", desc: "محل تجاري في سيتي ستارز" },
  { id: 5, name: "عيادة الشيخ زايد", model: "/models/apartment.glb", desc: "عيادة متخصصة في الشيخ زايد" }
];

export default function Units() {
  return (
    <div style={{ padding: 24 }}>
      <h2>نماذج الوحدات (محلات - عيادات - مكاتب)</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center" }}>
        {units.map((u) => (
          <div key={u.id} style={{ width: 350, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001", padding: 16 }}>
            <h3 style={{ textAlign: "center" }}>{u.name}</h3>
            <VRDemo modelUrl={u.model} />
            <div style={{ textAlign: "center", marginTop: 8 }}>{u.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
