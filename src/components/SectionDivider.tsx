export default function SectionDivider() {
  return (
    <div className="relative w-full h-[1px] overflow-hidden">
      {/* Base line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a443a]/20 to-transparent" />
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
        style={{
          animation: "shimmer-sweep 3s ease-in-out infinite",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
}
