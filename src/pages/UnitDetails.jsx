import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VRDemo from "../components/VRDemo";
import { palaceModels, villaModels, apartmentModels, shopModels, clinicModels, officeModels } from "../models3d";
import { units as allUnits } from "./MapView";

function getUnitById(id) {
  return allUnits.find((u) => u.id === Number(id));
}

export default function UnitDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const unit = getUnitById(id);
  if (!unit) return <div>الوحدة غير موجودة</div>;
  return (
    <div style={{maxWidth:900,margin:"40px auto",background:"#fff",borderRadius:16,padding:32,boxShadow:"0 2px 16px #0001"}}>
      <button onClick={()=>navigate(-1)} style={{marginBottom:16}}>⬅ عودة</button>
      <h2>{unit.icon} {unit.name}</h2>
      <div style={{display:'flex',gap:32,flexWrap:'wrap'}}>
        <div style={{flex:1,minWidth:300}}>
          <img src={unit.img} alt={unit.name} style={{width:'100%',borderRadius:12,marginBottom:12}} />
          <div><b>النوع:</b> {unit.type}</div>
          <div><b>الموقع:</b> {unit.city}, {unit.country}</div>
          <div><b>الحالة:</b> {unit.status} {unit.sold && <span style={{color:'#e11d48',fontWeight:'bold'}}> (تم البيع)</span>}</div>
          <div><b>الشركة:</b> {unit.company}</div>
          <div><b>الوصف:</b> {unit.description}</div>
        </div>
        <div style={{flex:1,minWidth:300}}>
          <VRDemo modelUrl={unit.vrModel} />
        </div>
      </div>
    </div>
  );
}