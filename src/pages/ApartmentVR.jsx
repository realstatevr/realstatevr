import React from "react";
import { useLocation } from "react-router-dom";
import VRDemo from "../components/VRDemo";

// نفس بيانات الوحدات من MapView
const units = [
	{
		id: 1,
		name: "قصر النيل",
		vrModel: "/models/apartment1.glb",
	},
	{
		id: 2,
		name: "فيلا بالم هيلز",
		vrModel: "/models/apartment.glb",
	},
	{
		id: 3,
		name: "شقة ناوي التجريبية",
		vrModel: "/models/apartment.glb",
	},
	{
		id: 4,
		name: "شقة الرياض",
		vrModel: "/models/apartment1.glb",
	},
	{
		id: 5,
		name: "فيلا قطر",
		vrModel: "/models/apartment.glb",
	},
	{
		id: 6,
		name: "قصر البحرين",
		vrModel: "/models/apartment1.glb",
	},
	{
		id: 7,
		name: "شقة الكويت",
		vrModel: "/models/apartment.glb",
	},
	{
		id: 8,
		name: "فيلا عمان",
		vrModel: "/models/apartment1.glb",
	},
];

function getUnitById(id) {
	return units.find((u) => u.id === Number(id)) || units[0];
}

export default function ApartmentVR() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const unitId = params.get("unit");
	const unit = getUnitById(unitId);
	return (
		<div style={{ height: "auto", width: "100%" }}>
			<h2>جولة ثلاثية الأبعاد: {unit.name}</h2>
			<VRDemo modelUrl={unit.vrModel} />
			<p style={{ textAlign: "center" }}>
				يمكنك تدوير واستكشاف الوحدة. دعم VR (بدون نظارة) متاح. دعم VR بالنظارة
				قريبًا.
			</p>
		</div>
	);
}
