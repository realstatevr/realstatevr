import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useLocation } from "react-router-dom";

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

function ApartmentModel({ url }) {
	const gltf = useGLTF(url);
	return <primitive object={gltf.scene} scale={1.5} />;
}

export default function ApartmentVR() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const unitId = params.get("unit");
	const unit = getUnitById(unitId);
	return (
		<div style={{ height: "80vh", width: "100%" }}>
			<h2>جولة ثلاثية الأبعاد: {unit.name}</h2>
			<Canvas camera={{ position: [0, 2, 5] }} shadows>
				<ambientLight intensity={0.7} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<ApartmentModel url={unit.vrModel} />
				<OrbitControls />
				<Environment preset="city" />
			</Canvas>
			<p>
				يمكنك تدوير واستكشاف الوحدة. دعم VR (بدون نظارة) متاح. دعم VR بالنظارة
				قريبًا.
			</p>
		</div>
	);
}
