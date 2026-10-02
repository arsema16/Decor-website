"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Weddings", "Corporate", "Birthdays", "Florals", "Themed", "Shimglna"];

const projects = [
  {
    id: 1,
    title: "Golden Garden Wedding",
    category: "Weddings",
    image: "/images/wedding-decor.png",
    tall: true,
  },
  {
    id: 2,
    title: "Elegant Reception Hall",
    category: "Weddings",
    // wedding ceremony with floral arch
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=700",
    tall: false,
  },
  {
    id: 3,
    title: "Luxury Balloon Setup",
    category: "Birthdays",
    image: "/images/birthday-balloons.png",
    tall: false,
  },
  {
    id: 4,
    title: "Fresh Floral Centrepiece",
    category: "Florals",
    image: "/images/table-arrangement.png",
    tall: true,
  },
  {
    id: 5,
    title: "Graduation Celebration",
    category: "Themed",
    image: "/images/graduation-decor.png",
    tall: false,
  },
  {
    id: 6,
    title: "Welcome Baby Shower",
    category: "Birthdays",
    image: "/images/welcome-baby-decor.png",
    tall: false,
  },
  {
    id: 7,
    title: "Grand Wedding Ceremony",
    category: "Weddings",
    // wedding aisle with floral decor
    image: "https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=700",
    tall: true,
  },
  {
    id: 8,
    title: "Corporate Awards Gala",
    category: "Corporate",
    // corporate banquet tables setup
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=700",
    tall: false,
  },
  {
    id: 9,
    title: "Rose & Greenery Table",
    category: "Florals",
    image: "/images/table-arrangement.png",
    tall: false,
  },
  {
    id: 10,
    title: "Shimglna Celebration",
    category: "Shimglna",
    image: "/images/shimglna-decor.png",
    tall: true,
  },
  {
    id: 11,
    title: "Romantic Engagement",
    category: "Birthdays",
    image: "/images/engagement-decor.png",
    tall: false,
  },
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative bg-white section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.05)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.4em] text-emerald-600 uppercase font-semibold mb-3">
            Our Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-4">
            A Glimpse of{" "}
            <span className="italic text-gradient-emerald">Our Portfolio</span>
          </h2>
          <p className="text-emerald-800/60 text-sm max-w-xl mx-auto">
            Each event tells a story. Here are some of the spaces we have transformed.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                  : "bg-cream-100 text-emerald-700 hover:bg-emerald-50 border border-emerald-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 cursor-pointer"
              >
                <div className={`relative w-full ${project.tall ? "h-80" : "h-56"}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      project.image.startsWith("/images/")
                        ? "object-contain bg-white"
                        : "object-cover"
                    }`}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/60 transition-all duration-400 flex items-end p-5">
                    <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <span className="text-[10px] tracking-[0.2em] text-gold-300 uppercase font-medium">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-lg text-white mt-1">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  {/* Category tag (always visible) */}
                  <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-emerald-800 text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-white text-sm font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 shadow-gold-500/20"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
