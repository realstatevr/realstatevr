import React from "react";
import { useLocation } from "react-router-dom";
import VRDemo from "../components/VRDemo";

// وحدات وهمية مع نماذج ثلاثية الأبعاد واقعية (مثال: فيلا)
const units = [
	{
		id: 1,
		name: "قصر النيل",
		vrModel: "/models/apartment1.glb",
	},
	{
		id: 2,
		name: "فيلا بالم هيلز (نموذج واقعي)",
		vrModel: "/models/apartment.glb",
		video360: "https://www.youtube.com/embed/0XRk2XgE0gk",
	},
	{
		id: 3,
		name: "شقة ناوي التجريبية",
		vrModel: "/models/apartment.glb",
	},
	{
		id: 4,
		name: "شقة العاصمة الإدارية",
		vrModel: "/models/apartment1.glb",
	},
	{
		id: 5,
		name: "محل مول مصر",
		vrModel: "/models/apartment.glb",
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
			{unit.video360 ? (
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						marginBottom: 16,
					}}
				>
					<iframe
						width="800"
						height="450"
						src={unit.video360}
						title="360 VR Tour"
						frameBorder="0"
						allowFullScreen
						allow="xr-spatial-tracking; gyroscope; accelerometer"
					></iframe>
				</div>
			) : (
				<VRDemo modelUrl={unit.vrModel} />
			)}
			<p style={{ textAlign: "center" }}>
				يمكنك تدوير واستكشاف الوحدة. دعم VR (بدون نظارة) متاح. دعم VR بالنظارة
				قريبًا.
			</p>
		</div>
	);
}
