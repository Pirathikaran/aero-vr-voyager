
import { useRef, useState, useEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import { Vector3, Euler } from "three";
import { Suspense } from "react";
import { OrthographicCamera } from "@react-three/drei";

// Simplified panorama sphere
const Panorama = ({ texture }: { texture: string }) => {
  const { size, camera } = useThree();
  const sphereRef = useRef<any>(null);
  const [rotation, setRotation] = useState(new Euler(0, 0, 0));
  const initialPosition = new Vector3(0, 0, 0);
  
  useEffect(() => {
    if (!camera) return;
    camera.position.set(0, 0, 0.1);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  
  const bind = useDrag(({ delta: [dx, dy] }) => {
    setRotation(new Euler(
      rotation.x + dy * 0.005,
      rotation.y + dx * 0.005,
      0,
      'YXZ'
    ));
  }, { filterTaps: true });
  
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = rotation.x;
      sphereRef.current.rotation.y = rotation.y;
    }
  });
  
  return (
    <group ref={sphereRef} position={initialPosition} {...bind()}>
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[10, 64, 64]} />
        <meshBasicMaterial map={null} color="#8DAAC4" side={2} />
      </mesh>
    </group>
  );
};

const PanoramaViewer = () => {
  return (
    <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
      <Canvas className="cursor-grab active:cursor-grabbing">
        <Suspense fallback={null}>
          <OrthographicCamera makeDefault position={[0, 0, 0.1]} zoom={1} />
          <Panorama texture="/placeholder.svg" />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
        Drag to look around
      </div>
    </div>
  );
};

export default PanoramaViewer;
