import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import ApartmentVR from "./pages/ApartmentVR";

function App() {
  return (
    <Router>
      <nav style={{ padding: 16, background: "#222", color: "#fff" }}>
        <Link to="/" style={{ margin: 8, color: "#fff" }}>الرئيسية</Link>
        <Link to="/map" style={{ margin: 8, color: "#fff" }}>الخريطة</Link>
        <Link to="/vr" style={{ margin: 8, color: "#fff" }}>جولة VR</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/vr" element={<ApartmentVR />} />
      </Routes>
    </Router>
  );
}

export default App;
