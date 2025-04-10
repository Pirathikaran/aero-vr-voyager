
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Airplane } from "./Airplane";

export const Aircraft3DModel = () => {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
      <Canvas>
        <PerspectiveCamera makeDefault position={[10, 5, 10]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Airplane position={[0, 0, 0]} scale={[0.01, 0.01, 0.01]} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default Aircraft3DModel;
