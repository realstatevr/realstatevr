import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  palaceModels,
  villaModels,
  apartmentModels,
  shopModels,
  clinicModels,
  officeModels
} from "../models3d";
import { useLang } from "../App";

// توليد بيانات وهمية تلقائيًا لكل قسم (50 وحدة)
const palaceImgs = [
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80"
];
const villaImgs = [
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
];
const apartmentImgs = [
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1430285561322-7808604715df?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
];
const shopImgs = [
  "https://images.unsplash.com/photo-1503389152951-9c3d0456e86c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503389152951-9c3d0456e86c?auto=format&fit=crop&w=600&q=80"
];
const clinicImgs = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
];
const officeImgs = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
];

function randomCoord(baseLat, baseLng, spread=1) {
  return [baseLat + (Math.random()-0.5)*spread, baseLng + (Math.random()-0.5)*spread];
}

function getRandomModel(modelsArr) {
  return modelsArr[Math.floor(Math.random() * modelsArr.length)];
}

function makeUnits(type, imgArr, baseLat, baseLng, icon, startId) {
  let modelsArr = apartmentModels;
  if (type === "قصر") modelsArr = palaceModels;
  else if (type === "فيلا") modelsArr = villaModels;
  else if (type === "محل") modelsArr = shopModels;
  else if (type === "عيادة") modelsArr = clinicModels;
  else if (type === "مكتب") modelsArr = officeModels;
  return Array.from({length: 50}).map((_,i) => {
    const [lat, lng] = randomCoord(baseLat, baseLng, 2);
    return {
      id: startId+i,
      type,
      name: `${type} رقم ${i+1}`,
      img: imgArr[i%imgArr.length],
      location: { latitude: lat, longitude: lng },
      country: "مصر",
      city: "القاهرة",
      status: Math.random() > 0.5 ? "للبيع" : "مباع",
      ownerType: "شركة تطوير",
      company: `${type} العالمية`,
      description: `وحدة ${type} فاخرة مع كافة الخدمات.`,
      sold: Math.random() > 0.5,
      vrModel: getRandomModel(modelsArr),
      icon
    };
  });
}

const units = [
  ...makeUnits("قصر", palaceImgs, 30.05, 31.23, "🏰", 1),
  ...makeUnits("فيلا", villaImgs, 29.99, 31.01, "🏡", 100),
  ...makeUnits("شقة", apartmentImgs, 30.01, 31.20, "🏢", 200),
  ...makeUnits("محل", shopImgs, 30.08, 31.34, "🏬", 300),
  ...makeUnits("عيادة", clinicImgs, 30.01, 31.22, "🏥", 400),
  ...makeUnits("مكتب", officeImgs, 30.02, 31.25, "🏢", 500)
];

const icons = {
  "قصر": "🏰",
  "فيلا": "🏡",
  "شقة": "🏢",
  "محل": "🏬",
  "عيادة": "🏥",
  "مكتب": "🏢"
};

export default function MapView() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState({ type: "", status: "", city: "", country: "" });
  const { lang } = useLang();

  // ترجمة بسيطة
  const t = (ar, en) => lang === "ar" ? ar : en;

  // استخراج المدن والدول الفريدة من البيانات
  const cities = Array.from(new Set(units.map(u => u.city)));
  const countries = Array.from(new Set(units.map(u => u.country)));
  const types = ["", "قصر", "فيلا", "شقة", "محل", "عيادة", "مكتب"];
  const statuses = ["", "للبيع", "مباع"];

  // تصفية الوحدات حسب الفلاتر
  const filteredUnits = units.filter(u =>
    (!filter.type || u.type === filter.type) &&
    (!filter.status || u.status === filter.status) &&
    (!filter.city || u.city === filter.city) &&
    (!filter.country || u.country === filter.country)
  );

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <h2>{t("خريطة الوحدات المتاحة", "Available Units Map")}</h2>
      {/* واجهة الفلترة */}
      <div style={{display:'flex',gap:16,marginBottom:16,flexWrap:'wrap',background:'#f8fafc',padding:12,borderRadius:12,boxShadow:'0 1px 6px #0001',maxWidth:900,margin:'0 auto 16px auto'}}>
        <select value={filter.type} onChange={e=>setFilter(f=>({...f,type:e.target.value}))} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
          <option value="">{t("كل الأنواع","All Types")}</option>
          {types.filter(t=>t).map(tn=>(<option key={tn}>{t(tn,tn)}</option>))}
        </select>
        <select value={filter.status} onChange={e=>setFilter(f=>({...f,status:e.target.value}))} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
          <option value="">{t("كل الحالات","All Statuses")}</option>
          {statuses.filter(s=>s).map(sn=>(<option key={sn}>{t(sn,sn)}</option>))}
        </select>
        <select value={filter.city} onChange={e=>setFilter(f=>({...f,city:e.target.value}))} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
          <option value="">{t("كل المدن","All Cities")}</option>
          {cities.map(c=>(<option key={c}>{c}</option>))}
        </select>
        <select value={filter.country} onChange={e=>setFilter(f=>({...f,country:e.target.value}))} style={{padding:8,borderRadius:8,border:'1px solid #ddd'}}>
          <option value="">{t("كل الدول","All Countries")}</option>
          {countries.map(cn=>(<option key={cn}>{cn}</option>))}
        </select>
        <button onClick={()=>setFilter({type:"",status:"",city:"",country:""})} style={{padding:8,borderRadius:8,background:'#e2e8f0',border:0}}>{t("إعادة تعيين","Reset")}</button>
      </div>
      <MapContainer center={[30.0444, 31.2357]} zoom={6} style={{ width: "100%", height: "70vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredUnits.map((unit) => (
          <Marker
            key={unit.id}
            position={[unit.location.latitude, unit.location.longitude]}
            eventHandlers={{
              click: () => setSelected(unit)
            }}
          >
            {selected && selected.id === unit.id && (
              <Popup onClose={() => setSelected(null)}>
                <div style={{ minWidth: 180 }}>
                  <b>{unit.name}</b>
                  <div>{unit.icon} {unit.type} - {unit.city}, {unit.country}</div>
                  <img src={unit.img} alt={unit.name} style={{width:'100%',borderRadius:8,margin:'8px 0'}} />
                  <div>المالك: {unit.ownerType}</div>
                  <div>الحالة: {unit.status} {unit.sold && <span style={{color:'#e11d48',fontWeight:'bold'}}> (تم البيع)</span>}</div>
                  <div>الشركة: {unit.company}</div>
                  <div style={{ margin: "8px 0" }}>{unit.description}</div>
                  <a href={`/unit/${unit.id}`}>تفاصيل الوحدة</a> | <a href={`/vr?unit=${unit.id}`}>جولة VR</a>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
      <p>{t("اضغط على أي رمز لرؤية تفاصيل الوحدة وتجربة VR.","Click any icon to view unit details and VR.")}</p>
    </div>
  );
}
