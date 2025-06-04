import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import ApartmentVR from "./pages/ApartmentVR";

const navStyle = {
  display: "flex",
  gap: 16,
  padding: 16,
  background: "#fff",
  borderBottom: "1px solid #eee",
  justifyContent: "center",
  position: "sticky",
  top: 0,
  zIndex: 1000
};

export default function App() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/">الرئيسية</Link>
        <Link to="/map">الخريطة</Link>
        <Link to="/vr">جولة VR</Link>
        <Link to="/units">الوحدات</Link>
        <Link to="/palaces">القصور</Link>
        <Link to="/villas">الفيلات</Link>
        <Link to="/apartments">الشقق</Link>
        <Link to="/shops">المحلات</Link>
        <Link to="/clinics">العيادات</Link>
        <Link to="/offices">المكاتب</Link>
        <Link to="/companies">شركات التطوير</Link>
        <Link to="/for-sale">للبيع</Link>
        <Link to="/for-rent">للإيجار</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/vr" element={<ApartmentVR />} />
        {/* صفحات الأقسام الأخرى تضاف لاحقًا */}
      </Routes>
    </BrowserRouter>
  );
}
