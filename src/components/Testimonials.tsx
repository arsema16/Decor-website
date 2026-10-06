"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle } from "lucide-react";

const filterTabs = ["All Stories", "Weddings", "Galas", "Shimglna", "Milestones"];

const stories = [
  {
    id: 1,
    name: "Sarah & James",
    category: "Weddings",
    event: "Grand Palace Ballroom Nuptials",
    quote:
      "Maswab Decor translated our wildest ideas into a breathtaking reality. The moment we stepped into the ballroom, we were speechless. Every flower, every light beam, and every texture was executed with royal elegance.",
    rating: 5,
    tag: "500 Guests",
    year: "2024",
    image: "/images/wedding-decor.png",
  },
  {
    id: 2,
    name: "Fatima Al-Rashid",
    category: "Galas",
    event: "Annual Global Summit Gala",
    quote:
      "We entrusted Maswab Decor with our annual global summit dinner. The ambiance was sophisticated, razor-sharp, and completely aligned with our luxury brand identity. Exceptional professionalism from start to finish.",
    rating: 5,
    tag: "Executive Summit",
    year: "2024",
    image: "/images/corporate-gala.jpg",
  },
  {
    id: 3,
    name: "Layla & Omar",
    category: "Shimglna",
    event: "Royal Cultural Shimglna",
    quote:
      "Our families were overwhelmed by the beauty of the Shimglna decor. It blended traditional cultural honor with ultra-modern editorial aesthetics. The photos look like a high-fashion magazine spread.",
    rating: 5,
    tag: "Traditional Royalty",
    year: "2024",
    image: "/images/shimglna-decor.png",
  },
  {
    id: 4,
    name: "Michael Chen",
    category: "Milestones",
    event: "Maswab Decor 40th Milestone Soirée",
    quote:
      "The balloon architecture and twilight lighting setup transformed an ordinary venue into a high-end luxury lounge. Guests are still talking about the atmosphere months later.",
    rating: 5,
    tag: "Private Milestone",
    year: "2023",
    image: "/images/birthday-balloons.png",
  },
  {
    id: 5,
    name: "Nadia Osman",
    category: "Milestones",
    event: "Couture Baby Shower Soirée",
    quote:
      "From botanical curation to custom dessert tablescapes, everything was soft, poetic, and effortlessly luxurious. Maswab took care of every single detail so we could purely celebrate.",
    rating: 5,
    tag: "Botanical Cloud",
    year: "2023",
    image: "/images/table-arrangement.png",
  },
];

const stats = [
  { value: "200+", label: "Celebrations" },
  { value: "5+ Years", label: "Atelier Craft" },
  { value: "100%", label: "Maswab Decor Design" },
];

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoKey, setAutoKey] = useState(0);
  const pausedRef = useRef(false);

  const filteredStories =
    activeTab === "All Stories"
      ? stories
      : stories.filter((s) => s.category === activeTab);

  const current = filteredStories[currentIndex % filteredStories.length] || stories[0];

  // Auto-advance: cycle stories every 6s; restart timer on manual navigation
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
      }
    }, 6000);
    return () => clearInterval(id);
  }, [filteredStories.length, autoKey]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredStories.length - 1 : prev - 1));
    setAutoKey((k) => k + 1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredStories.length);
    setAutoKey((k) => k + 1);
  };

  return (
    <section id="testimonials" className="relative bg-white py-20 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-neutral-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      {/* Main Container Card — Recreating the exact Card UI from the reference image */}
      <div className="relative max-w-6xl mx-auto bg-[#fafbfa] border border-neutral-200/90 rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-14 shadow-xl shadow-neutral-900/5">
        
        {/* TOP ROW: Logo Icon + Pill Navigation Bar + Action Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-neutral-200">
          {/* Logo Mark in Rounded Square */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-emerald-700 shadow-sm">
              <Sparkles size={18} className="text-emerald-600" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg text-neutral-900 font-medium tracking-wider">MASWAB</span>
              <span className="font-mono text-[9px] text-emerald-700 uppercase tracking-widest font-semibold">Client Stories</span>
            </div>
          </div>

          {/* Frosted Pill Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white border border-neutral-200/80 px-3 py-1.5 rounded-2xl sm:rounded-full shadow-sm">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentIndex(0);
                  setAutoKey((k) => k + 1);
                }}
                className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-emerald-600 text-white font-semibold shadow-sm"
                    : "text-neutral-600 hover:text-neutral-950"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Action Button */}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-mono text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 active:scale-95"
          >
            Start Event
          </a>
        </div>

        {/* HEADLINE & INTRODUCTION (Matching exact typography layout from reference) */}
        <div className="grid md:grid-cols-12 gap-8 items-start pt-10 pb-8">
          <div className="md:col-span-7">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-light leading-tight tracking-tight">
              Pushing the boundaries between{" "}
              <span className="font-semibold text-gradient-gold">Space &amp; Art</span>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-neutral-600 text-xs sm:text-sm font-sans leading-relaxed">
              We merge architectural decor and poetic floral design to create evocative, unforgettable
              atmospheres. Our mission is to deliver experiences that are both visually monumental and
              deeply personal, redefining what is possible in event scenography.
            </p>
          </div>
        </div>

        {/* INTERACTIVE CLIENT STORY QUOTE BOX */}
        <div
          className="relative bg-white border border-emerald-500/20 rounded-3xl p-6 sm:p-8 mb-10 shadow-md"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <div className="flex flex-wrap items-center justify-between gap-y-3 mb-4">
            <div className="flex items-center gap-1.5 text-emerald-600">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
              <span className="font-mono text-[10px] sm:text-xs text-neutral-500 ml-2 font-medium">Verified Host · {current.year}</span>
            </div>

            {/* Nav Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous story"
                className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-emerald-700 hover:border-emerald-500 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next story"
                className="w-9 h-9 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-700 hover:text-emerald-700 hover:border-emerald-500 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="font-serif text-lg sm:text-2xl text-neutral-800 font-light italic leading-relaxed mb-4">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-neutral-200">
                <div>
                  <span className="font-serif text-base text-emerald-800 font-medium">{current.name}</span>
                  <span className="text-neutral-400 mx-2">·</span>
                  <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider">{current.event}</span>
                </div>
                <span className="font-mono text-[10px] text-emerald-700 uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 self-start sm:self-auto font-medium">
                  {current.tag}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* THE SIGNATURE FLUID S-CURVE CAPSULE & STATS (Recreating the exact centerpiece visual) */}
        <div className="relative w-full pt-4">
          {/* SVG Definition of the Stepped S-Curve Shape */}
          <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
            <defs>
              <clipPath id="s-curve-shape" clipPathUnits="objectBoundingBox">
                {/* Normalized S-Curve: Top capsule on left, lower capsule on right */}
                <path d="M 0.08,0.06 L 0.58,0.06 C 0.65,0.06 0.68,0.18 0.69,0.32 C 0.70,0.44 0.73,0.52 0.78,0.52 L 0.92,0.52 C 0.96,0.52 1.0,0.62 1.0,0.74 C 1.0,0.86 0.96,0.96 0.92,0.96 L 0.58,0.96 C 0.51,0.96 0.48,0.84 0.47,0.70 C 0.46,0.58 0.43,0.50 0.38,0.50 L 0.08,0.50 C 0.04,0.50 0,0.40 0,0.28 C 0,0.16 0.04,0.06 0.08,0.06 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* S-Curve Graphic Container */}
          <div className="relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/6] w-full max-w-5xl mx-auto">
            {/* The Cutout Window revealing active client celebration imagery */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden shadow-2xl transition-all duration-700"
              style={{ clipPath: "url(#s-curve-shape)" }}
            >
              <Image
                src={current.image}
                alt={current.event}
                fill
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="object-cover transition-transform duration-1000 scale-105 hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/30 via-transparent to-black/50 mix-blend-multiply" />
            </div>

            {/* TOP-RIGHT METRIC (Positioned in the space above the lower capsule, exactly like 5000+ Clients in reference) */}
            <div className="absolute top-2 right-1 sm:right-3 lg:right-4 text-right select-none">
              <p className="font-serif text-xl sm:text-4xl lg:text-6xl text-neutral-900 font-light leading-none tracking-tight">
                5000+
              </p>
              <p className="font-mono text-[10px] sm:text-xs lg:text-sm text-emerald-700 uppercase tracking-widest mt-1 font-semibold">
                Happy Guests
              </p>
            </div>

            {/* BOTTOM-LEFT 3 METRICS — desktop only (fits inside the empty corner of the S-curve) */}
            <div className="hidden lg:flex absolute bottom-2 left-6 items-center gap-8 select-none">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-[clamp(18px,2.4vw,36px)] text-neutral-900 font-light leading-none">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* METRICS BELOW THE SHAPE — small screens & tablets (never overlap or overflow the S-curve) */}
          <div className="lg:hidden max-w-5xl mx-auto mt-6 pt-5 border-t border-neutral-200 grid grid-cols-3 gap-3 sm:gap-6 select-none">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-lg sm:text-2xl md:text-3xl text-neutral-900 font-light leading-none">
                  {stat.value}
                </p>
                <p className="font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-wider mt-1 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
