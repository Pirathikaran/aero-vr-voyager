
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Internal component for the panorama sphere
const PanoramaSphere = ({ imagePath = "/textures/cabin-interior.jpg" }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(imagePath);
  
  // Make the texture render on the inside of the sphere
  texture.mapping = THREE.EquirectangularReflectionMapping;
  
  useFrame(() => {
    if (sphereRef.current) {
      // Very slow auto-rotation for immersive effect
      sphereRef.current.rotation.y += 0.0005;
    }
  });
  
  return (
    <mesh ref={sphereRef} scale={[-1, 1, 1]}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
};

const PanoramaViewer = () => {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-md">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 0.1]} fov={75} />
        <PanoramaSphere />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default PanoramaViewer;
