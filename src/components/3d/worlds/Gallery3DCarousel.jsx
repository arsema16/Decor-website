import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GALLERY_CAROUSEL_IMAGES } from "../../../constants/images";

/**
 * Gallery - 3D Staggered Grid Wall
 * 12 images in masonry layout, pop forward on scroll
 */
export default function Gallery3DCarousel({ position }) {
  const groupRef = useRef();
  const scroll = useScroll();
  
  // Use first 12 images
  const images = GALLERY_CAROUSEL_IMAGES.slice(0, 12);
  const textures = useTexture(images.map(img => img.url));

  // Grid layout: 4 columns x 3 rows with staggered Z
  const gridImages = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const index = row * 4 + col;
      if (index >= 12) break;
      
      gridImages.push({
        index,
        col,
        row,
        x: (col - 1.5) * 3.5,
        y: (1 - row) * 3.5 + 3,
        baseZ: -Math.random() * 3, // Staggered depth
        popDelay: index * 0.08 // Staggered timing
      });
    }
  }

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Section progress: page 4 of 6 (offset 0.5 to 0.667)
    const sectionProgress = scroll.range(3/6, 1/6);
    
    groupRef.current.children.forEach((child, i) => {
      if (child.type === 'Mesh' && i < 12) {
        const img = gridImages[i];
        
        // Pop forward with staggered timing
        const popProgress = Math.max(0, Math.min(1, (sectionProgress - img.popDelay) * 3));
        const targetZ = img.baseZ + popProgress * 4;
        
        child.position.z = THREE.MathUtils.lerp(child.position.z, targetZ, delta * 3);
      }
    });
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Title */}
      <Text
        position={[0, 15, 0]}
        fontSize={2}
        color="#d8bf89"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        OUR GALLERY
      </Text>

      {/* Image grid */}
      {gridImages.map((img) => (
        <mesh
          key={img.index}
          position={[img.x, img.y, img.baseZ]}
        >
          <planeGeometry args={[3, 3]} />
          <meshStandardMaterial
            map={textures[img.index]}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}
