import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { CTA_PORTAL_IMAGES } from "../../../constants/images";

/**
 * CTA - Glowing Arch with Orbiting Panels
 * Gold torus arch, 3 orbiting images, CTA button, ambient spheres
 */
export default function CTA3DPortal({ position }) {
  const groupRef = useRef();
  const archRef = useRef();
  const buttonRef = useRef();
  const scroll = useScroll();
  
  // Load 3 images for orbiting panels
  const textures = useTexture(CTA_PORTAL_IMAGES.slice(0, 3));

  // Ambient sphere positions
  const ambientSpheres = [];
  for (let i = 0; i < 40; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 12 + Math.random() * 8;
    const y = (Math.random() - 0.5) * 15;
    ambientSpheres.push({
      x: Math.cos(angle) * radius,
      y,
      z: Math.sin(angle) * radius,
      size: 0.1 + Math.random() * 0.15,
      speed: 0.5 + Math.random() * 0.5
    });
  }

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    // Section progress: page 6 of 6 (offset 0.833 to 1)
    const sectionProgress = scroll.range(5/6, 1/6);
    
    // Rotate arch into view
    if (archRef.current) {
      archRef.current.rotation.z = time * 0.2;
    }
    
    // Orbit image panels
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Mesh' && child.geometry.type === 'PlaneGeometry') {
        const orbitIndex = child.userData.orbitIndex;
        if (orbitIndex !== undefined) {
          const angle = time * 0.5 + (orbitIndex * Math.PI * 2 / 3);
          child.position.x = Math.cos(angle) * 8;
          child.position.z = Math.sin(angle) * 8;
          child.rotation.y = -angle + Math.PI / 2;
        }
      }
    });
    
    // Animate ambient spheres
    ambientSpheres.forEach((sphere, i) => {
      const sphereMesh = groupRef.current.children[i + 10]; // After arch and panels
      if (sphereMesh && sphereMesh.type === 'Mesh' && sphereMesh.geometry.type === 'SphereGeometry') {
        sphereMesh.position.y = sphere.y + Math.sin(time * sphere.speed + i) * 1;
      }
    });
    
    // Button glow effect - time-based, no hover state
    if (buttonRef.current) {
      const glowPulse = 0.5 + Math.sin(time * 2) * 0.3;
      buttonRef.current.userData.glowIntensity = glowPulse;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Title */}
      <Text
        position={[0, 12, 0]}
        fontSize={2}
        color="#d8bf89"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        LET'S CREATE MAGIC
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 9, 0]}
        fontSize={1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Your celebration awaits
      </Text>

      {/* Gold arch - 3 nested rings */}
      <group ref={archRef}>
        <mesh>
          <torusGeometry args={[4, 0.2, 16, 100]} />
          <meshStandardMaterial
            color="#d8bf89"
            emissive="#d8bf89"
            emissiveIntensity={0.8}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[5, 0.15, 16, 100]} />
          <meshStandardMaterial
            color="#d8bf89"
            emissive="#d8bf89"
            emissiveIntensity={0.6}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[6, 0.1, 16, 100]} />
          <meshStandardMaterial
            color="#d8bf89"
            emissive="#d8bf89"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Orbiting image panels */}
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          userData={{ orbitIndex: i }}
        >
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial
            map={textures[i]}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* CTA Button */}
      <group ref={buttonRef} position={[0, -8, 2]}>
        <RoundedBox
          args={[4, 1.5, 0.5]}
          radius={0.3}
        >
          <meshStandardMaterial
            color="#d8bf89"
            emissive="#d8bf89"
            emissiveIntensity={0.5}
          />
        </RoundedBox>
        <Text
          position={[0, 0, 0.3]}
          fontSize={0.6}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          BOOK NOW
        </Text>
      </group>

      {/* Ambient floating spheres */}
      {ambientSpheres.map((sphere, i) => (
        <mesh key={i} position={[sphere.x, sphere.y, sphere.z]}>
          <sphereGeometry args={[sphere.size, 8, 8]} />
          <meshStandardMaterial
            color="#d8bf89"
            emissive="#d8bf89"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
}
