import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// بيانات وحدات تجريبية (قصور، فيلات، شقق، مشاريع شركات، دول مختلفة)
const units = [
  {
    id: 1,
    type: "قصر",
    name: "قصر النيل",
    location: { longitude: 31.2357, latitude: 30.0444 },
    country: "مصر",
    city: "القاهرة",
    company: "شركة النيل للتطوير",
    status: "للبيع",
    ownerType: "شركة تطوير",
    images: ["/models/apartment1.glb"],
    vrModel: "/models/apartment1.glb",
    description: "قصر فاخر في قلب القاهرة."
  },
  {
    id: 2,
    type: "فيلا",
    name: "فيلا بالم هيلز",
    location: { longitude: 31.0206, latitude: 29.9944 },
    country: "مصر",
    city: "6 أكتوبر",
    company: "بالم هيلز",
    status: "للإيجار",
    ownerType: "مالك خاص",
    images: ["/models/apartment.glb"],
    vrModel: "/models/apartment.glb",
    description: "فيلا راقية بمجمع بالم هيلز."
  },
  {
    id: 3,
    type: "شقة",
    name: "شقة ناوي التجريبية",
    location: { longitude: 54.3773, latitude: 24.4539 },
    country: "الإمارات",
    city: "أبوظبي",
    company: "ناوي",
    status: "للبيع",
    ownerType: "بروكر",
    images: ["/models/apartment.glb"],
    vrModel: "/models/apartment.glb",
    description: "شقة حديثة في أبوظبي."
  },
  {
    id: 4,
    type: "شقة",
    name: "شقة الرياض",
    location: { longitude: 46.6753, latitude: 24.7136 },
    country: "السعودية",
    city: "الرياض",
    company: "شركة الرياض للتطوير",
    status: "للبيع",
    ownerType: "شركة تطوير",
    images: ["/models/apartment1.glb"],
    vrModel: "/models/apartment1.glb",
    description: "شقة فاخرة في الرياض."
  },
  {
    id: 5,
    type: "فيلا",
    name: "فيلا قطر",
    location: { longitude: 51.5310, latitude: 25.2854 },
    country: "قطر",
    city: "الدوحة",
    company: "قطر للتطوير",
    status: "للإيجار",
    ownerType: "مالك خاص",
    images: ["/models/apartment.glb"],
    vrModel: "/models/apartment.glb",
    description: "فيلا مميزة في الدوحة."
  },
  {
    id: 6,
    type: "قصر",
    name: "قصر البحرين",
    location: { longitude: 50.5577, latitude: 26.2235 },
    country: "البحرين",
    city: "المنامة",
    company: "البحرين العقارية",
    status: "للبيع",
    ownerType: "بروكر",
    images: ["/models/apartment1.glb"],
    vrModel: "/models/apartment1.glb",
    description: "قصر فاخر في المنامة."
  },
  {
    id: 7,
    type: "شقة",
    name: "شقة الكويت",
    location: { longitude: 47.9783, latitude: 29.3759 },
    country: "الكويت",
    city: "الكويت",
    company: "الكويت للتطوير",
    status: "للبيع",
    ownerType: "شركة تطوير",
    images: ["/models/apartment.glb"],
    vrModel: "/models/apartment.glb",
    description: "شقة راقية في الكويت."
  },
  {
    id: 8,
    type: "فيلا",
    name: "فيلا عمان",
    location: { longitude: 58.5453, latitude: 23.5859 },
    country: "عمان",
    city: "مسقط",
    company: "عمان العقارية",
    status: "للإيجار",
    ownerType: "مالك خاص",
    images: ["/models/apartment1.glb"],
    vrModel: "/models/apartment1.glb",
    description: "فيلا فاخرة في مسقط."
  }
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
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <h2>خريطة الوحدات المتاحة</h2>
      <MapContainer center={[30.0444, 31.2357]} zoom={6} style={{ width: "100%", height: "70vh" }}>
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {units.map((unit) => (
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
                  <div>{unit.type} - {unit.city}, {unit.country}</div>
                  <div>المالك: {unit.ownerType}</div>
                  <div>الحالة: {unit.status}</div>
                  <div>الشركة: {unit.company}</div>
                  <div style={{ margin: "8px 0" }}>{unit.description}</div>
                  <a href={`/vr?unit=${unit.id}`}>جولة VR</a>
                </div>
              </Popup>
            )}
          </Marker>
        ))}
      </MapContainer>
      <p>اضغط على أي رمز لرؤية تفاصيل الوحدة وتجربة VR.</p>
    </div>
  );
}
