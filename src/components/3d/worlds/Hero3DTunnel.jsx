import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { HERO_TUNNEL_IMAGES } from "../../../constants/images";

/**
 * Hero 3D - Floating Image Grid with Depth Parallax
 * 12 images in 4x3 grid spread outward and drift up as user scrolls
 */
export default function Hero3DTunnel({ position }) {
  const groupRef = useRef();
  const scroll = useScroll();
  
  // Load first 12 images
  const textures = useTexture(HERO_TUNNEL_IMAGES.slice(0, 12));

  // Grid layout: 4 columns x 3 rows
  const gridImages = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const index = row * 4 + col;
      if (index >= 12) break;
      
      gridImages.push({
        index,
        col,
        row,
        baseX: (col - 1.5) * 3.5, // Center around 0
        baseY: (1 - row) * 3.5 + 2, // Top to bottom, offset up
        baseZ: -row * 2 // Depth variation per row
      });
    }
  }

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    const t = scroll.offset;
    
    // Spread outward and drift up as user scrolls through hero (0 to ~0.17)
    const expansion = Math.min(t * 6, 1); // 0 to 1
    
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Mesh' && i < 12) {
        const img = gridImages[i];
        
        // Spread from center
        const offsetX = img.baseX * (1 + expansion * 2);
        const offsetY = img.baseY * (1 + expansion * 1.5) + expansion * 3;
        const offsetZ = img.baseZ * (1 + expansion * 1.5);
        
        child.position.x = THREE.MathUtils.lerp(child.position.x, offsetX, delta * 2);
        child.position.y = THREE.MathUtils.lerp(child.position.y, offsetY, delta * 2);
        child.position.z = THREE.MathUtils.lerp(child.position.z, offsetZ, delta * 2);
      }
    });
    
    // Gentle rotation of whole group
    groupRef.current.rotation.y = t * 0.3;
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Image planes in grid */}
      {gridImages.map((img) => (
        <mesh
          key={img.index}
          position={[img.baseX, img.baseY, img.baseZ]}
        >
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial
            map={textures[img.index]}
            transparent
            opacity={0.95}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}

      {/* Title */}
      <Text
        position={[0, 12, 0]}
        fontSize={2.5}
        color="#d8bf89"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.08}
        outlineColor="#000000"
      >
        MASWAB DECOR
        <meshStandardMaterial
          color="#d8bf89"
          emissive="#d8bf89"
          emissiveIntensity={0.5}
        />
      </Text>

      {/* Subtitle */}
      <Text
        position={[0, 10, 0]}
        fontSize={1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        Bespoke Event Design
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </Text>
    </group>
  );
}
