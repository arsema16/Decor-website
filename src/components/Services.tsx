"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Sparkles, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  group: string;
  image: string;
  description: string;
  details?: {
    scope?: string;
    highlights?: string[];
    palette?: string[];
    timeline?: string;
  };
}

const serviceCategories = [
  "All Services",
  "Weddings",
  "Shimglna",
  "Florals",
  "Corporate",
  "Milestones",
];

const servicesItems: ServiceItem[] = [
  {
    id: "s1",
    title: "Couture Wedding Architecture",
    category: "Full Nuptial Scenography",
    group: "Weddings",
    image: "/images/wedding-decor.png",
    description:
      "End-to-end ceremony and ballroom design. We engineer custom structural floral arches, celestial lighting, bespoke lounge seating, and tailored bridal stages.",
    details: {
      scope: "Full-Venue Transformation",
      timeline: "4 to 8 Weeks Concept-to-Execution",
      palette: ["#FFFFFF", "#16A34A", "#86EFAC", "#070708"],
      highlights: [
        "Floor Plan & 3D Spatial Layout Mapping",
        "Monumental Ceremony & Altar Arches",
        "Custom Suspended Ceiling Botanicals",
        "Full Day-Of Styling Team Coordination",
      ],
    },
  },
  {
    id: "s2",
    title: "Traditional Shimglna Decor",
    category: "Cultural Reverence",
    group: "Shimglna",
    image: "/images/shimglna-decor.png",
    description:
      "Honoring ancestral heritage with majestic modern staging. Authentic hand-crafted artifacts, luxurious woven fabrics, bronze chalices, and traditional royal banquet styling.",
    details: {
      scope: "Cultural Heritage Celebration",
      timeline: "2 to 4 Weeks Custom Preparation",
      palette: ["#16A34A", "#14532D", "#86EFAC", "#18181D"],
      highlights: [
        "Authentic Cultural Ceremony Backdrop",
        "Traditional Carpet & Textile Layering",
        "Custom Bronze & Clay Vessel Dressing",
        "Elder & VIP Throne Staging",
      ],
    },
  },
  {
    id: "s3",
    title: "Sculptural Floral Installations",
    category: "Botanical Artistry",
    group: "Florals",
    image: "/images/table-arrangement.png",
    description:
      "Living sculptures tailored to your event's color harmony. Tablescape runners, suspended floral clouds, cascading bouquets, and entrance focal statements.",
    details: {
      scope: "Floral Design & Procurement",
      timeline: "Fresh Same-Day Conditioning & Build",
      palette: ["#FFFFFF", "#86EFAC", "#22C55E", "#15803D"],
      highlights: [
        "100% Premium Fresh-Cut Blooms",
        "Custom Gold-Plated Stands & Glassware",
        "Maswab Decor Bridal Party Bouquets & Boutonnieres",
        "Scent-Matched Botanical Environments",
      ],
    },
  },
  {
    id: "s4",
    title: "Corporate Summits & Galas",
    category: "Executive Environments",
    group: "Corporate",
    image: "/images/corporate-gala.jpg",
    description:
      "Brand-aligned spatial experiences for annual corporate galas, international conferences, awards presentations, and high-profile product launches.",
    details: {
      scope: "Institutional & Brand Scenography",
      timeline: "3 to 6 Weeks Technical Planning",
      palette: ["#070708", "#86EFAC", "#16A34A", "#FFFFFF"],
      highlights: [
        "Brand Identity-Compliant Stage Structures",
        "Dynamic Audio-Visual Lighting Integration",
        "Executive Keynote & VIP Lounge Decor",
        "High-Traffic Media Wall & Red Carpet",
      ],
    },
  },
  {
    id: "s5",
    title: "Luxury Birthday Celebrations",
    category: "Milestone Glamour",
    group: "Milestones",
    image: "/images/birthday-decor.png",
    description:
      "High-fashion private milestones featuring organic metallic balloon installations, custom neon monograms, acrylic dessert plinths, and photo lounge sets.",
    details: {
      scope: "Private Birthday Soirée",
      timeline: "1 to 2 Weeks Tailoring",
      palette: ["#86EFAC", "#FFFFFF", "#1E1E24", "#16A34A"],
      highlights: [
        "Organic Balloon Architecture & Sculpting",
        "Illuminated Neon Typography & Monograms",
        "Themed Sweet & Cake Pedestal Dressing",
        "Interactive Guest Photobooth Vignettes",
      ],
    },
  },
  {
    id: "s6",
    title: "Engagements & Baby Showers",
    category: "Tender Celebrations",
    group: "Milestones",
    image: "/images/engagement-decor.png",
    description:
      "Soft, poetic, and intimately styled spaces. Delicate floral rings, champagne welcome walls, plush seating lounges, and whimsical detail curation.",
    details: {
      scope: "Intimate Milestone Styling",
      timeline: "2 Weeks Custom Craft",
      palette: ["#FFFFFF", "#86EFAC", "#4ADE80", "#16A34A"],
      highlights: [
        "Romantic Floral Archways & Rings",
        "Champagne Greeting Bar & Sweet Table",
        "Custom Monogram Signage & Memory Books",
        "Ambient Fairy & Floor Uplighting",
      ],
    },
  },
];

const serviceSteps = [
  {
    number: "#01",
    title: "Concept & Design",
  },
  {
    number: "#02",
    title: "Material & Floral Curation",
  },
  {
    number: "#03",
    title: "Scenography & Light",
  },
  {
    number: "#04",
    title: "Flawless Day-Of Execution",
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [selectedItem, setSelectedItem] = useState<ServiceItem | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === "All Services"
      ? servicesItems
      : servicesItems.filter((item) => item.group === activeCategory);

  const updateArrows = () => {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };

  useEffect(() => {
    scrollRef.current?.scrollTo({ left: 0 });
    updateArrows();
  }, [activeCategory]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="services" className="relative bg-white border-t border-neutral-200 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/[0.04] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-300/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full py-12 sm:py-20 select-none">
        {/* ── Header ── */}
        <div className="max-w-3xl mx-auto text-center px-4 mb-8 sm:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs sm:text-[13px] font-semibold text-emerald-700 tracking-wide inline-block mb-2"
          >
            Behind the Craft
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-3xl sm:text-4xl lg:text-[46px] text-neutral-900 font-extrabold tracking-tight leading-[1.12]"
          >
            Curious How We Curate Every{" "}
            <span className="block sm:inline">Atmosphere?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 text-xs sm:text-sm mt-3.5 max-w-lg mx-auto font-sans leading-relaxed"
          >
            Explore our end-to-end event decor capabilities — from bespoke spatial layouts to
            monumental floral installations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex flex-col items-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full bg-white border border-neutral-200/90 text-neutral-700 hover:border-emerald-600 hover:text-neutral-950 transition-all duration-200 text-xs font-semibold shadow-sm hover:shadow group"
            >
              <span>View Service Details</span>
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs group-hover:scale-105 transition-transform">
                <ArrowRight size={12} strokeWidth={2.5} />
              </span>
            </a>

            {/* Category filter pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 bg-white border border-neutral-200/80 px-3 py-1.5 rounded-full shadow-sm">
              {serviceCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-emerald-600 text-white font-semibold shadow-sm"
                      : "text-neutral-600 hover:text-neutral-950"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Simple Horizontal Scrollable Cards ── */}
        <div className="relative">
          <button
            onClick={() => scrollByCards(-1)}
            disabled={atStart}
            aria-label="Scroll left"
            className="hidden sm:flex absolute left-3 lg:left-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/95 border border-neutral-200 text-neutral-700 hover:text-emerald-700 hover:border-emerald-500 hover:scale-105 items-center justify-center backdrop-blur-md transition-all shadow-md disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scrollByCards(1)}
            disabled={atEnd}
            aria-label="Scroll right"
            className="hidden sm:flex absolute right-3 lg:right-6 top-1/2 -translate-y-1/2 z-40 w-10 h-10 rounded-full bg-white/95 border border-neutral-200 text-neutral-700 hover:text-emerald-700 hover:border-emerald-500 hover:scale-105 items-center justify-center backdrop-blur-md transition-all shadow-md disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollRef}
            onScroll={updateArrows}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory px-4 sm:px-12 pb-4 no-scrollbar"
          >
            {filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group shrink-0 snap-start w-[260px] sm:w-[300px] text-left rounded-3xl overflow-hidden bg-white border border-neutral-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              >
                <div className="relative h-[320px] sm:h-[360px] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                  <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-emerald-200 bg-black/55 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full font-semibold">
                    {item.category}
                  </span>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-xl sm:text-2xl text-white font-medium leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex items-start justify-between gap-3">
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <span className="w-7 h-7 shrink-0 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <ArrowRight size={13} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Process Steps ── */}
        <div className="max-w-4xl mx-auto px-4 mt-8 sm:mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {serviceSteps.map((s) => (
              <div key={s.number} className="flex flex-col items-center">
                <span className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-emerald-700">
                  {s.number}
                </span>
                <span className="font-sans text-xs sm:text-[13px] text-neutral-850 font-medium mt-1 leading-snug">
                  {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, y: 28 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 28 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white border border-emerald-500/30 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-emerald-600 hover:text-white transition-colors shadow-md"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="overflow-y-auto p-6 sm:p-10 space-y-6">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 900px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="font-mono text-[10px] tracking-widest text-emerald-300 uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 font-semibold">
                      {selectedItem.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-4xl text-white font-light mt-2">
                      {selectedItem.title}
                    </h3>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <h4 className="font-mono text-xs tracking-widest text-emerald-700 uppercase font-bold">
                      SERVICE OVERVIEW
                    </h4>
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
                      {selectedItem.description}
                    </p>
                    {selectedItem.details?.highlights && (
                      <div className="pt-2">
                        <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider mb-2.5 font-semibold">
                          KEY ELEMENTS:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.details.highlights.map((h, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-neutral-700 font-sans"
                            >
                              • {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 bg-neutral-50 border border-neutral-200 p-5 rounded-2xl self-start">
                    <div>
                      <span className="font-mono text-[10px] tracking-wider text-emerald-700 uppercase block font-semibold">
                        SCOPE
                      </span>
                      <p className="text-neutral-800 text-sm font-sans mt-0.5">
                        {selectedItem.details?.scope || "Custom Full Venue"}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] tracking-wider text-emerald-700 uppercase block font-semibold">
                        TIMELINE
                      </span>
                      <p className="text-neutral-800 text-sm font-sans mt-0.5">
                        {selectedItem.details?.timeline || "2–6 Weeks Custom"}
                      </p>
                    </div>
                    {selectedItem.details?.palette && (
                      <div>
                        <span className="font-mono text-[10px] tracking-wider text-emerald-700 uppercase block mb-2 font-semibold">
                          PALETTE
                        </span>
                        <div className="flex gap-2">
                          {selectedItem.details.palette.map((color, i) => (
                            <div
                              key={i}
                              className="w-7 h-7 rounded-lg border border-neutral-300 shadow-sm"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                    <a
                      href="#contact"
                      onClick={() => setSelectedItem(null)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20"
                    >
                      <Sparkles size={13} />
                      Book This Design
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
