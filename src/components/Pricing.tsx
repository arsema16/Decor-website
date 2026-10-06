"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const packages = [
  {
    id: "wedding",
    title: "WEDDING",
    subtitle: "Event Decoration",
    tagline: "The beginning of forever",
    price: "15,000",
    description:
      "A once-in-a-lifetime celebration deserves extraordinary beauty. We craft breathtaking floral arches, fairy-light canopies, and bespoke table arrangements that bring your dream wedding to life.",
    features: ["Floral arch & backdrop", "Table centerpieces", "Fairy-light canopy", "Bridal suite styling"],
    image: "/images/pricing-wedding.jpg",
    badge: "Most Popular",
  },
  {
    id: "birthday",
    title: "BIRTHDAY",
    subtitle: "Celebration Decor",
    tagline: "Make their day unforgettable",
    price: "5,000",
    description:
      "From whimsical balloon sculptures to luxe table set-ups, we turn every birthday into a vibrant, memory-filled celebration perfectly tailored to the guest of honour.",
    features: ["Balloon arrangements", "Theme backdrop", "Table dÃ©cor", "Colour coordination"],
    image: "/images/pricing-birthday.jpg",
  },
  {
    id: "graduation",
    title: "GRADUATION",
    subtitle: "Achievement Decor",
    tagline: "Celebrate new beginnings",
    price: "5,000",
    description:
      "Mark this milestone with pride. Class-themed backdrops, balloon columns, and a dedicated photo corner create the perfect celebration for academic achievement.",
    features: ["Achievement backdrop", "Class-themed dÃ©cor", "Balloon columns", "Photo corner"],
    image: "/images/pricing-graduation.jpg",
  },
  {
    id: "shimglina",
    title: "SHIMGLINA",
    subtitle: "Traditional Decor",
    tagline: "Heritage & elegance combined",
    price: "8,000",
    description:
      "Honouring tradition with elegance â€” our Shimglina packages blend cultural authenticity with refined aesthetics through hand-crafted floral arrangements and ambient lighting.",
    features: ["Traditional arch", "Cultural floral dÃ©cor", "Seating arrangement", "Ambient lighting"],
    image: "/images/pricing-shimglina.jpg",
  },
  {
    id: "bride-to-be",
    title: "BRIDE TO BE",
    subtitle: "Pre-Wedding Decor",
    tagline: "A glamorous pre-wedding moment",
    price: "6,000",
    description:
      "Celebrate the bride-to-be with a stunning flower wall, glam backdrop, and luxurious gold-and-floral accents that make this pre-wedding moment truly cinematic.",
    features: ["Glam backdrop", "Flower wall", "Luxury seating", "Gold & floral accents"],
    image: "/images/pricing-bride-to-be.jpg",
    badge: "Trending",
  },
  {
    id: "mom-to-be",
    title: "MOM TO BE",
    subtitle: "Baby Shower Decor",
    tagline: "A warm welcome to motherhood",
    price: "6,000",
    description:
      "Pastel balloon clouds, a dreamy baby-themed backdrop, and softly styled tables set the perfect scene to welcome the newest chapter of a mother's journey.",
    features: ["Pastel balloon dÃ©cor", "Baby-theme backdrop", "Table centerpieces", "Gift table styling"],
    image: "/images/pricing-mom-to-be.jpg",
  },
  {
    id: "engagement",
    title: "ENGAGEMENT",
    subtitle: "Proposal & Ring Ceremony",
    tagline: "Magical moments of love",
    price: "10,000",
    description:
      "Say yes surrounded by beauty. Rose petal pathways, candlelit arrangements, and a bespoke proposal arch create an unforgettable moment of pure magic.",
    features: ["Proposal arch", "Rose petal aisle", "Candle lighting", "Luxury backdrop"],
    image: "/images/pricing-engagement.jpg",
  },
  {
    id: "anniversary",
    title: "ANNIVERSARY",
    subtitle: "Milestone Celebration",
    tagline: "Celebrate your journey together",
    price: "8,000",
    description:
      "Relive the romance of your first day. From intimate candle-lit dinners to grand anniversary banquets, we set the scene for your most cherished milestone.",
    features: ["Romantic backdrop", "Floral centerpieces", "Candle dÃ©cor", "Personal touches"],
    image: "/images/pricing-anniversary.jpg",
  },
  {
    id: "custom",
    title: "CUSTOM EVENT",
    subtitle: "Maswab Decor",
    tagline: "Any occasion, we've got you",
    price: "10,000+",
    description:
      "Have a unique vision? We love a challenge. From corporate galas to intimate gatherings, our team designs a fully custom experience built around your exact dream.",
    features: ["Fully custom design", "Theme consultation", "Full venue styling", "Any occasion"],
    image: "/images/pricing-custom.jpg",
    badge: "Maswab Decor",
  },
];

const heroVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -40 : 40, transition: { duration: 0.3 } }),
};

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  }, [activeIndex]);

  const prev = () => goTo(Math.max(0, activeIndex - 1));
  const next = () => goTo(Math.min(packages.length - 1, activeIndex + 1));

  const active = packages[activeIndex];
  // Side cards: show the next 4 packages (cycling after the active one)
  const sideIndices = Array.from({ length: 4 }, (_, i) => (activeIndex + 1 + i) % packages.length);

  const padded = String(activeIndex + 1).padStart(2, "0");
  const total = String(packages.length).padStart(2, "0");

  return (
    <section id="pricing" className="relative w-full bg-white py-16 sm:py-20 overflow-hidden select-none">

      {/* â”€â”€ Section header â”€â”€ */}
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-emerald-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest text-emerald-700 uppercase mb-2"
        >
          Our Services & Prices
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight"
        >
          Turning Moments{" "}
          <span className="text-emerald-700">Into Memories</span>
        </motion.h2>
      </div>

      {/* â”€â”€ Main cinematic layout â”€â”€ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch">

          {/* â”€â”€ Hero Card (left, ~58% on desktop) â”€â”€ */}
          <div className="relative w-full lg:w-[58%] h-[440px] sm:h-[500px] lg:h-[520px] flex-shrink-0 rounded-2xl overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active.id}
                custom={direction}
                variants={heroVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
              >
                {/* Background photo */}
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 60vw, 740px"
                  priority
                />

                {/* Dark gradient overlays — light, so the photo shows through */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/15" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-7 sm:p-9">
                  {/* Top: subtitle + badge */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white/60 text-[11px] font-semibold tracking-widest uppercase font-mono mb-1">
                        {active.subtitle}
                      </p>
                      <h3 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase" style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}>
                        {active.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-2 font-medium">{active.tagline}</p>
                    </div>
                    {active.badge && (
                      <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 mt-1">
                        {active.badge}
                      </span>
                    )}
                  </div>

                  {/* Bottom info panel */}
                  <div className="bg-black/35 backdrop-blur-md rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border border-white/15">
                    <div className="flex-1 min-w-0">
                      <p className="text-white/60 text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {active.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {active.features.map((f) => (
                          <span key={f} className="text-[10px] text-emerald-300/80 bg-emerald-900/40 border border-emerald-700/40 px-2.5 py-0.5 rounded-full font-medium">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-3 flex-shrink-0">
                      <div className="text-left sm:text-right">
                        <span className="text-white/50 text-[10px] uppercase tracking-wider block font-mono">From</span>
                        <span className="text-white font-black text-2xl sm:text-3xl tracking-tight">
                          {active.price}
                        </span>
                        <span className="text-emerald-300 text-sm font-bold ml-1">ETB</span>
                      </div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                      >
                        Book Now
                        <ArrowUpRight size={12} strokeWidth={2.5} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* â”€â”€ Side Cards (right, ~42% on desktop, scrollable strip on mobile) â”€â”€ */}
          <div className="flex gap-3 overflow-x-auto lg:overflow-hidden lg:flex-1 no-scrollbar pb-1 lg:pb-0">
            {sideIndices.map((pkgIdx, pos) => {
              const pkg = packages[pkgIdx];
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: pos * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => goTo(pkgIdx)}
                  className="relative shrink-0 w-40 sm:w-48 lg:w-auto lg:flex-1 h-36 sm:h-44 lg:h-auto rounded-2xl overflow-hidden cursor-pointer group"
                  style={{ minWidth: 0 }}
                >
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 192px, 220px"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10 group-hover:from-black/40 transition-all duration-300" />

                  {/* Hover border */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-emerald-500/70 transition-all duration-300" />

                  {/* Text at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white/50 text-[9px] font-semibold tracking-widest uppercase font-mono mb-0.5">
                      {pkg.subtitle}
                    </p>
                    <p className="text-white font-black text-sm leading-tight uppercase tracking-wide line-clamp-2">
                      {pkg.title}
                    </p>
                    <p className="text-emerald-300 font-bold text-xs mt-1">{pkg.price} ETB</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* â”€â”€ Bottom bar: nav + counter â”€â”€ */}
        <div className="flex items-center justify-between mt-6">
          {/* Navigation arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={activeIndex === 0}
              aria-label="Previous"
              className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-emerald-400 text-neutral-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={activeIndex === packages.length - 1}
              aria-label="Next"
              className="w-11 h-11 rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-emerald-400 text-neutral-700 hover:text-emerald-700 flex items-center justify-center transition-all duration-200 disabled:opacity-25 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>

            {/* Dot indicators */}
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              {packages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${packages[i].title}`}
                  className="transition-all duration-300"
                  style={{
                    width: i === activeIndex ? "22px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    backgroundColor: i === activeIndex ? "#059669" : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Counter */}
          <div className="flex items-baseline gap-1">
            <span className="text-neutral-900 font-black text-2xl font-mono tracking-tight">{padded}</span>
            <span className="text-neutral-400 text-sm font-mono">/ {total}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
