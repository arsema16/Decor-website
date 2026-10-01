import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, Line } from "@react-three/drei";
import * as THREE from "three";

/**
 * Why Choose Us - Connected Node Network
 * 8 glowing spheres with text labels, connected by lines
 */
export default function WhyChooseUs3DParticles({ position }) {
  const groupRef = useRef();
  const scroll = useScroll();
  
  const features = [
    'BESPOKE DESIGN',
    'EXPERT TEAM',
    '200+ EVENTS',
    'ATTENTION TO DETAIL',
    'ON-TIME DELIVERY',
    'CUSTOM THEMES',
    'PREMIUM MATERIALS',
    'FULL SERVICE'
  ];

  // Node positions in 3D constellation
  const nodes = useMemo(() => [
    { pos: [0, 3, 0], index: 0 },
    { pos: [4, 2, 2], index: 1 },
    { pos: [-4, 2, -2], index: 2 },
    { pos: [3, -1, -3], index: 3 },
    { pos: [-3, -1, 3], index: 4 },
    { pos: [2, 0, -4], index: 5 },
    { pos: [-2, 1, 4], index: 6 },
    { pos: [0, -3, 0], index: 7 }
  ], []);

  // Connecting lines
  const connections = useMemo(() => [
    [0, 1], [0, 2], [0, 6],
    [1, 3], [1, 5],
    [2, 4], [2, 5],
    [3, 7], [4, 7],
    [5, 6], [6, 4]
  ], []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const t = scroll.offset;
    
    // Gentle rotation
    groupRef.current.rotation.y += delta * 0.2;
    
    // Pulse nodes
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Mesh' && i < nodes.length) {
        const pulse = 0.9 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.1;
        child.scale.setScalar(pulse);
      }
    });
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Title */}
      <Text
        position={[0, 10, 0]}
        fontSize={2}
        color="#d8bf89"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        WHY CHOOSE US
      </Text>

      {/* Nodes */}
      {nodes.map((node, i) => (
        <group key={i}>
          <mesh position={node.pos}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial
              color="#d8bf89"
              emissive="#d8bf89"
              emissiveIntensity={0.6}
            />
          </mesh>
          
          {/* Label */}
          <Text
            position={[node.pos[0], node.pos[1] + 1, node.pos[2]]}
            fontSize={0.4}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            maxWidth={3}
            textAlign="center"
          >
            {features[i]}
          </Text>
        </group>
      ))}

      {/* Connecting lines */}
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={[nodes[conn[0]].pos, nodes[conn[1]].pos]}
          color="#d8bf89"
          lineWidth={2}
          transparent
          opacity={0.4}
        />
      ))}
    </group>
  );
}
