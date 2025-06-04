import React, { useState, createContext, useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import ApartmentVR from "./pages/ApartmentVR";
import Palaces from "./pages/Palaces";
import Villas from "./pages/Villas";
import Apartments from "./pages/Apartments";
import Units from "./pages/Units";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import AddUnit from "./pages/AddUnit";
import Register from "./pages/Register";
import UnitDetails from "./pages/UnitDetails";

// سياق اللغة
export const LangContext = createContext();

export function useLang() {
  return useContext(LangContext);
}

const sections = [
  { label: "القصور", path: "/palaces" },
  { label: "الفيلات", path: "/villas" },
  { label: "الشقق", path: "/apartments" },
  { label: "الوحدات", path: "/units" },
  { label: "الخريطة", path: "/map" },
  { label: "عن الموقع", path: "/about" },
  { label: "تواصل معنا", path: "/contact" },
  { label: "تسجيل الدخول", path: "/login" }
];

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
  const [lang, setLang] = useState("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <LangContext.Provider value={{lang, setLang}}>
      <BrowserRouter>
        <header style={{
          background: "linear-gradient(90deg,#1e293b 0%,#334155 100%)",
          color: "#fff",
          padding: "0 0 0 0",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 2px 16px #0002"
        }}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1200,margin:'0 auto',padding:'8px 16px'}}>
            <Link to="/" style={{fontWeight:'bold',fontSize:28,color:'#fff',textDecoration:'none'}}>Real Estate VR</Link>
            <nav style={{display:'flex',gap:16}}>
              <button onClick={()=>setMenuOpen(!menuOpen)} style={{display:'none',background:'none',border:0,color:'#fff',fontSize:24}} aria-label="القائمة">☰</button>
              <ul style={{display:'flex',gap:16,listStyle:'none',margin:0,padding:0}}>
                {sections.map(s => (
                  <li key={s.path}><Link to={s.path} style={{color:'#fff',textDecoration:'none',fontWeight:500}}>{s.label}</Link></li>
                ))}
                <li>
                  <select value={lang} onChange={e=>setLang(e.target.value)} style={{padding:4,borderRadius:6,border:0,fontWeight:'bold'}}>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/vr" element={<ApartmentVR />} />
          <Route path="/palaces" element={<Palaces />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/apartments" element={<Apartments />} />
          <Route path="/units" element={<Units />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-unit" element={<AddUnit />} />
          <Route path="/register" element={<Register />} />
          <Route path="/unit/:id" element={<UnitDetails />} />
          {/* صفحات الأقسام الأخرى تضاف لاحقًا */}
        </Routes>
      </BrowserRouter>
    </LangContext.Provider>
  );
}
