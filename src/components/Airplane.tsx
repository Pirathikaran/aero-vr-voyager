
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const Airplane = (props: any) => {
  const meshRef = useRef<Mesh>(null!);
  
  // Rotate the airplane slightly
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh {...props} ref={meshRef}>
      {/* Fuselage */}
      <cylinderGeometry args={[1, 1, 10, 32]} />
      <meshStandardMaterial color="#E0E0E0" metalness={0.7} roughness={0.2} />
      
      {/* Nose cone */}
      <mesh position={[0, 5, 0]}>
        <coneGeometry args={[1, 2, 32]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.5, 8, 2]} />
        <meshStandardMaterial color="#D0D0D0" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Tail */}
      <mesh position={[0, -5, 0]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.5, 2, 2]} />
        <meshStandardMaterial color="#D0D0D0" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Vertical Stabilizer */}
      <mesh position={[0, -5, 0]}>
        <boxGeometry args={[0.3, 2, 2]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.5} roughness={0.3} />
      </mesh>
    </mesh>
  );
};
