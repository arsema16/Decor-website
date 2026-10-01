import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { SERVICE_HOLOGRAMS } from "../../../constants/images";

/**
 * Services - Tilting Image Cards in Arc
 * 5 service cards that tilt up from flat as section scrolls in
 */
export default function Services3DHolograms({ position }) {
  const groupRef = useRef();
  const scroll = useScroll();
  
  const services = ['weddings', 'engagements', 'birthdays', 'babyShowers', 'graduations'];
  const serviceLabels = {
    weddings: 'WEDDINGS',
    engagements: 'ENGAGEMENTS',
    birthdays: 'BIRTHDAYS',
    babyShowers: 'BABY SHOWERS',
    graduations: 'GRADUATIONS'
  };
  
  // Load service images
  const textures = useTexture(services.map(s => SERVICE_HOLOGRAMS[s].main));

  // Arc layout
  const arcRadius = 12;
  const arcSpan = Math.PI; // 180 degrees
  const cards = services.map((service, i) => {
    const angle = -arcSpan / 2 + (i / (services.length - 1)) * arcSpan;
    return {
      service,
      angle,
      x: Math.sin(angle) * arcRadius,
      y: Math.sin(i * 0.5) * 0.5, // Slight Y variation
      z: -Math.cos(angle) * arcRadius,
      index: i
    };
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Section progress: page 2 of 6 (offset 0.167 to 0.333)
    const sectionProgress = scroll.range(1/6, 1/6);
    
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Group' && i < cards.length) {
        const card = cards[i];
        
        // Tilt from -45° to 0° (flat to facing camera)
        const targetRotX = THREE.MathUtils.lerp(-Math.PI / 4, 0, sectionProgress);
        child.rotation.x = THREE.MathUtils.lerp(child.rotation.x, targetRotX, delta * 3);
        
        // Face center
        child.rotation.y = card.angle;
        
        // Gentle hover pulse
        const hoverOffset = Math.sin(state.clock.elapsedTime * 2 + i) * 0.15;
        child.position.y = card.y + hoverOffset;
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
        OUR SERVICES
      </Text>

      {/* Service cards */}
      {cards.map((card, i) => (
        <group
          key={card.service}
          position={[card.x, card.y, card.z]}
          rotation={[-Math.PI / 4, card.angle, 0]}
        >
          {/* Image card */}
          <mesh>
            <planeGeometry args={[3, 4]} />
            <meshStandardMaterial
              map={textures[i]}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Label below card */}
          <Text
            position={[0, -2.5, 0]}
            fontSize={0.6}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            {serviceLabels[card.service]}
          </Text>
        </group>
      ))}
    </group>
  );
}
