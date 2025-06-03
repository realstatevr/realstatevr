import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import ApartmentVR from "./pages/ApartmentVR";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: 16, padding: 16, background: "#fff", borderBottom: "1px solid #eee", justifyContent: "center" }}>
        <Link to="/">الرئيسية</Link>
        <Link to="/map">الخريطة</Link>
        <Link to="/vr">جولة ثلاثية الأبعاد</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/vr" element={<ApartmentVR />} />
      </Routes>
    </BrowserRouter>
  );
}
