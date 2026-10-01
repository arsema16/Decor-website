import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/**
 * Testimonials - Fan of Quote Cards
 * 5 flat cards with quotes, slowly rotating to face camera
 */
export default function Testimonials3DBubbles({ position }) {
  const groupRef = useRef();
  const scroll = useScroll();
  
  const testimonials = [
    {
      quote: "Maswab made our wedding absolutely magical. Every detail was perfect!",
      author: "Sarah & Ahmed",
      rating: 5
    },
    {
      quote: "The team understood our vision perfectly. Our engagement party was stunning.",
      author: "Layla M.",
      rating: 5
    },
    {
      quote: "Professional, creative, and reliable. They made our daughter's birthday unforgettable.",
      author: "Mohammed F.",
      rating: 5
    },
    {
      quote: "From concept to execution, everything was flawless. Highly recommend!",
      author: "Fatima & Omar",
      rating: 5
    },
    {
      quote: "Exceeded all expectations. The attention to detail was incredible.",
      author: "Noor A.",
      rating: 5
    }
  ];

  // Fan layout
  const cards = testimonials.map((testimonial, i) => {
    const angle = -Math.PI / 4 + (i / (testimonials.length - 1)) * (Math.PI / 2);
    const radius = 10;
    return {
      ...testimonial,
      x: Math.sin(angle) * radius,
      y: (i - 2) * 2, // Vertical spread
      z: -Math.cos(angle) * radius,
      angle,
      index: i
    };
  });

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Section progress: page 5 of 6 (offset 0.667 to 0.833)
    const sectionProgress = scroll.range(4/6, 1/6);
    
    const camera = state.camera;
    
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Group' && i < cards.length) {
        const card = cards[i];
        
        // Drift inward from edges
        const driftX = THREE.MathUtils.lerp(card.x * 1.5, card.x, sectionProgress);
        child.position.x = THREE.MathUtils.lerp(child.position.x, driftX, delta * 2);
        
        // Billboard rotation to face camera
        const targetRotY = Math.atan2(
          camera.position.x - child.position.x,
          camera.position.z - child.position.z
        );
        child.rotation.y = THREE.MathUtils.lerp(child.rotation.y, targetRotY, delta * 0.5);
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
        TESTIMONIALS
      </Text>

      {/* Quote cards */}
      {cards.map((card) => (
        <group
          key={card.index}
          position={[card.x, card.y, card.z]}
        >
          {/* Card background */}
          <RoundedBox args={[4, 5, 0.2]} radius={0.2}>
            <meshStandardMaterial
              color="#1a1a1a"
              transparent
              opacity={0.9}
            />
          </RoundedBox>

          {/* Quote text */}
          <Text
            position={[0, 0.8, 0.15]}
            fontSize={0.3}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            maxWidth={3.5}
            textAlign="center"
          >
            {card.quote}
          </Text>

          {/* Author */}
          <Text
            position={[0, -1.2, 0.15]}
            fontSize={0.35}
            color="#d8bf89"
            anchorX="center"
            anchorY="middle"
          >
            {card.author}
          </Text>

          {/* Stars */}
          {[...Array(5)].map((_, i) => (
            <mesh key={i} position={[i * 0.4 - 0.8, -1.8, 0.15]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial
                color="#d8bf89"
                emissive="#d8bf89"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}
