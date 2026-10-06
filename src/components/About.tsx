"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Check, Sparkles } from "lucide-react";

const values = [
  "Maswab Decor aesthetic tailored to your unique love story or brand",
  "Architectural floral styling, ambient lighting & spatial scenography",
  "Meticulous end-to-end planning with zero day-of stress",
  "Curated color harmonies, luxurious textiles & custom structures",
];

const metrics = [
  { value: "200+", label: "Celebrations Styled" },
  { value: "5+", label: "Years of Craft" },
  { value: "100%", label: "Custom Architecture" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative bg-[#f8faf8] section-padding overflow-hidden border-t border-neutral-200">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Montage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Image */}
            <div className="relative h-[480px] sm:h-[540px] rounded-3xl overflow-hidden border border-neutral-200 shadow-xl shadow-neutral-900/10">
              <Image
                src="/images/wedding-decor.png"
                alt="Maswab Decor luxury event styling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-300 uppercase block mb-1 font-semibold">
                  ATELIER STANDARDS
                </span>
                <p className="font-serif text-2xl text-white italic">
                  &ldquo;Every space holds a ceremony waiting to be unveiled.&rdquo;
                </p>
              </div>
            </div>

            {/* Overlapping Floating Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-xl shadow-neutral-900/10 hidden sm:block"
            >
              <Image
                src="/images/table-arrangement.png"
                alt="Artisanal table decor"
                fill
                sizes="240px"
                className="object-cover"
              />
            </motion.div>

            {/* Experience Pill */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-200 text-xs font-mono tracking-widest text-emerald-800 uppercase flex items-center gap-2 shadow-sm">
              <Sparkles size={12} className="text-emerald-600" />
              EST. ADDIS ABABA
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 space-y-7"
          >
            <div>
              <span className="font-mono text-xs tracking-[0.35em] text-emerald-700 uppercase font-semibold">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-light tracking-wide mt-2 leading-tight">
                Where Scenography Meets{" "}
                <span className="italic text-gradient-gold">Poetic Design</span>
              </h2>
            </div>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
              Maswab Decor was founded on the conviction that meaningful milestones require more
              than generic decoration — they demand evocative atmospheres. We blend architectural
              compositions, sculptural florals, and warm ambient palettes to fashion events that
              feel timeless and deeply personal.
            </p>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-sans">
              From grand cultural Shimglna celebrations and opulent wedding receptions to intimate
              soirées and prestige galas, our team curates every element with relentless precision.
            </p>

            {/* Core Values */}
            <ul className="space-y-3 pt-2">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mt-0.5 shrink-0">
                    <Check size={12} />
                  </div>
                  <span className="text-neutral-700 text-sm">{v}</span>
                </li>
              ))}
            </ul>

            {/* Metrics Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-neutral-200">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-serif text-2xl sm:text-3xl font-light text-emerald-700">
                    {m.value}
                  </p>
                  <p className="font-mono text-[10px] tracking-wider text-neutral-500 uppercase mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                Inquire For Your Date
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
