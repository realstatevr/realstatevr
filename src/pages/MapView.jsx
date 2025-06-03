import React from "react";
import MapGL from "react-map-gl";

export default function MapView() {
  // ملاحظة: يجب إضافة مفتاح Mapbox في ملف .env لاحقًا
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <h2>خريطة الوحدات المتاحة</h2>
      <MapGL
        initialViewState={{ longitude: 31.2357, latitude: 30.0444, zoom: 10 }}
        style={{ width: "100%", height: "70vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
      <p>سيتم عرض مواقع الشقق والوحدات هنا قريبًا.</p>
    </div>
  );
}
