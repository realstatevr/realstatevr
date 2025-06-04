import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// وحدات وهمية متنوعة مع حالة البيع والموقع
const units = [
  // قصور
  { id: 1, type: "قصر", name: "قصر النيل", location: { longitude: 31.2357, latitude: 30.0444 }, country: "مصر", city: "القاهرة", status: "مباع", ownerType: "شركة تطوير", company: "شركة النيل", description: "قصر فاخر في قلب القاهرة.", sold: true },
  { id: 2, type: "قصر", name: "قصر البحرين", location: { longitude: 50.5577, latitude: 26.2235 }, country: "البحرين", city: "المنامة", status: "متاح", ownerType: "بروكر", company: "البحرين العقارية", description: "قصر ملكي في المنامة.", sold: false },
  { id: 3, type: "قصر", name: "قصر دبي", location: { longitude: 55.2962, latitude: 25.276987 }, country: "الإمارات", city: "دبي", status: "مباع", ownerType: "مالك خاص", company: "إعمار", description: "قصر عصري في دبي.", sold: true },
  { id: 4, type: "قصر", name: "قصر الرياض", location: { longitude: 46.6753, latitude: 24.7136 }, country: "السعودية", city: "الرياض", status: "متاح", ownerType: "شركة تطوير", company: "الرياض للتطوير", description: "قصر حديث في الرياض.", sold: false },
  { id: 5, type: "قصر", name: "قصر قطر", location: { longitude: 51.5310, latitude: 25.2854 }, country: "قطر", city: "الدوحة", status: "مباع", ownerType: "مالك خاص", company: "قطر للتطوير", description: "قصر فاخر في الدوحة.", sold: true },
  // فيلات
  { id: 6, type: "فيلا", name: "فيلا بالم هيلز", location: { longitude: 31.0206, latitude: 29.9944 }, country: "مصر", city: "6 أكتوبر", status: "متاح", ownerType: "شركة تطوير", company: "بالم هيلز", description: "فيلا راقية بمجمع بالم هيلز.", sold: false },
  { id: 7, type: "فيلا", name: "فيلا زايد", location: { longitude: 30.9782, latitude: 29.9934 }, country: "مصر", city: "الشيخ زايد", status: "مباع", ownerType: "مالك خاص", company: "ماونتن فيو", description: "فيلا فاخرة في الشيخ زايد.", sold: true },
  { id: 8, type: "فيلا", name: "فيلا دبي", location: { longitude: 55.2708, latitude: 25.2048 }, country: "الإمارات", city: "دبي", status: "متاح", ownerType: "شركة تطوير", company: "إعمار", description: "فيلا عصرية في دبي.", sold: false },
  { id: 9, type: "فيلا", name: "فيلا قطر", location: { longitude: 51.5310, latitude: 25.2854 }, country: "قطر", city: "الدوحة", status: "مباع", ownerType: "مالك خاص", company: "قطر للتطوير", description: "فيلا مميزة في الدوحة.", sold: true },
  { id: 10, type: "فيلا", name: "فيلا عمان", location: { longitude: 58.5453, latitude: 23.5859 }, country: "عمان", city: "مسقط", status: "متاح", ownerType: "شركة تطوير", company: "عمان العقارية", description: "فيلا فاخرة في مسقط.", sold: false },
  // شقق
  { id: 11, type: "شقة", name: "شقة ناوي التجريبية", location: { longitude: 54.3773, latitude: 24.4539 }, country: "الإمارات", city: "أبوظبي", status: "متاح", ownerType: "بروكر", company: "ناوي", description: "شقة حديثة في أبوظبي.", sold: false },
  { id: 12, type: "شقة", name: "شقة العاصمة الإدارية", location: { longitude: 31.6700, latitude: 30.0100 }, country: "مصر", city: "العاصمة الإدارية", status: "مباع", ownerType: "شركة تطوير", company: "العاصمة للتطوير", description: "شقة عصرية في العاصمة.", sold: true },
  { id: 13, type: "شقة", name: "شقة الرياض", location: { longitude: 46.6753, latitude: 24.7136 }, country: "السعودية", city: "الرياض", status: "متاح", ownerType: "شركة تطوير", company: "الرياض للتطوير", description: "شقة فاخرة في الرياض.", sold: false },
  { id: 14, type: "شقة", name: "شقة الكويت", location: { longitude: 47.9783, latitude: 29.3759 }, country: "الكويت", city: "الكويت", status: "مباع", ownerType: "شركة تطوير", company: "الكويت للتطوير", description: "شقة راقية في الكويت.", sold: true },
  { id: 15, type: "شقة", name: "شقة التجمع الخامس", location: { longitude: 31.4913, latitude: 30.0081 }, country: "مصر", city: "التجمع الخامس", status: "متاح", ownerType: "شركة تطوير", company: "ماونتن فيو", description: "شقة مميزة في التجمع.", sold: false },
  // وحدات ومحلات وعيادات
  { id: 16, type: "محل", name: "محل مول مصر", location: { longitude: 31.0157, latitude: 29.9950 }, country: "مصر", city: "6 أكتوبر", status: "متاح", ownerType: "شركة تطوير", company: "مول مصر", description: "محل تجاري في مول مصر.", sold: false },
  { id: 17, type: "عيادة", name: "عيادة القاهرة الجديدة", location: { longitude: 31.4913, latitude: 30.0081 }, country: "مصر", city: "القاهرة الجديدة", status: "مباع", ownerType: "مالك خاص", company: "ميديكال سنتر", description: "عيادة طبية مجهزة بالكامل.", sold: true },
  { id: 18, type: "مكتب", name: "مكتب إداري العاصمة", location: { longitude: 31.6700, latitude: 30.0100 }, country: "مصر", city: "العاصمة الإدارية", status: "متاح", ownerType: "شركة تطوير", company: "العاصمة للتطوير", description: "مكتب إداري حديث.", sold: false },
  { id: 19, type: "محل", name: "محل سيتي ستارز", location: { longitude: 31.3400, latitude: 30.0800 }, country: "مصر", city: "مدينة نصر", status: "مباع", ownerType: "بروكر", company: "سيتي ستارز", description: "محل تجاري في سيتي ستارز.", sold: true },
  { id: 20, type: "مكتب", name: "مكتب دبي المالي", location: { longitude: 55.2962, latitude: 25.276987 }, country: "الإمارات", city: "دبي", status: "متاح", ownerType: "شركة تطوير", company: "دبي المالي", description: "مكتب إداري في دبي المالي.", sold: false }
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
                  <div>الحالة: {unit.status} {unit.sold && <span style={{color:'#e11d48',fontWeight:'bold'}}> (تم البيع)</span>}</div>
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
