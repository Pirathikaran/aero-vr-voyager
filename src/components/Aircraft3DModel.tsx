
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Airplane } from "./Airplane";
import { ErrorBoundary } from "react-error-boundary";

// Fallback component when 3D model fails to load
const ModelErrorFallback = () => (
  <div className="h-full w-full flex items-center justify-center bg-gray-100 rounded-xl p-6">
    <div className="text-center">
      <h3 className="text-lg font-medium text-gray-900">3D Model could not be loaded</h3>
      <p className="mt-2 text-sm text-gray-500">Please try again later</p>
    </div>
  </div>
);

export const Aircraft3DModel = () => {
  return (
    <div className="h-[500px] w-full rounded-xl overflow-hidden shadow-xl">
      <ErrorBoundary FallbackComponent={ModelErrorFallback}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[10, 5, 10]} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <Airplane position={[0, 0, 0]} scale={0.01} />
            <Environment preset="city" />
          </Suspense>
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
};

export default Aircraft3DModel;
