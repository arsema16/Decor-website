"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const values = [
  { icon: "✦", text: "Bespoke aesthetic tailored to your unique story or brand" },
  { icon: "✦", text: "Architectural florals, ambient lighting & spatial scenography" },
  { icon: "✦", text: "End-to-end planning with zero day-of stress" },
  { icon: "✦", text: "Curated color harmonies, luxurious textiles & custom structures" },
];

const metrics = [
  { value: "200+", label: "Celebrations" },
  { value: "5+", label: "Years" },
  { value: "100%", label: "Custom" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="relative bg-[#fcfbf9] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/[0.035] rounded-full blur-[160px] pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 lg:py-28">

        {/* ── Section Label ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <div className="w-8 h-[1.5px] bg-[#0a443a]" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-[#0a443a] uppercase font-semibold">
            OUR PHILOSOPHY
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Images ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/15">
              <Image
                src="/images/wedding-decor.png"
                alt="Maswab Decor luxury event styling"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061a14]/70 via-transparent to-transparent" />

              {/* Quote on image */}
              <div className="absolute bottom-6 left-6 right-6">
                <p
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                  className="text-xl sm:text-2xl text-white italic leading-snug"
                >
                  &ldquo;Every space holds a ceremony waiting to be unveiled.&rdquo;
                </p>
              </div>
            </div>

            {/* Floating secondary image — desktop only, positioned top-right of main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-5 -right-4 w-36 sm:w-44 aspect-square rounded-xl overflow-hidden border-2 border-white shadow-xl hidden sm:block"
            >
              <Image
                src="/images/table-arrangement.png"
                alt="Artisanal table decor"
                fill
                sizes="180px"
                className="object-cover"
              />
            </motion.div>

            {/* Metrics bar — sits below image on mobile, overlaps on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 sm:mt-8 grid grid-cols-3 gap-0 bg-[#0a443a] rounded-2xl overflow-hidden"
            >
              {metrics.map((m, i) => (
                <div
                  key={m.label}
                  className={`py-5 px-4 flex flex-col items-center text-center ${i < metrics.length - 1 ? "border-r border-white/10" : ""}`}
                >
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                    className="text-3xl sm:text-4xl font-light text-white leading-none mb-1"
                  >
                    {m.value}
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.25em] text-white/50 uppercase">
                    {m.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Text Content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Heading */}
            <div>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-4xl sm:text-5xl lg:text-[54px] text-[#0a443a] font-light tracking-tight leading-[1.1]"
              >
                Where Scenography
                <br />
                <span className="italic">Meets Poetic Design</span>
              </h2>
            </div>

            {/* Body */}
            <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
              Maswab Decor was founded on the conviction that meaningful milestones require more
              than generic decoration — they demand evocative atmospheres. We blend architectural
              compositions, sculptural florals, and warm ambient palettes to fashion events that
              feel timeless and deeply personal.
            </p>
            <p className="text-neutral-600 text-[13px] sm:text-sm leading-relaxed">
              From grand Shimgina celebrations and opulent wedding receptions to intimate
              soirées and prestige galas, every element is curated with relentless precision.
            </p>

            {/* Values list */}
            <ul className="space-y-3 pt-1">
              {values.map((v, i) => (
                <motion.li
                  key={v.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-[#0a443a] text-[10px] mt-1 shrink-0">{v.icon}</span>
                  <span className="text-neutral-700 text-[13px] sm:text-sm leading-relaxed">{v.text}</span>
                </motion.li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-[#0a443a]/20 via-[#0a443a]/10 to-transparent" />

            {/* CTA */}
            <div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0a443a] hover:bg-[#063028] text-white font-mono text-[10px] font-semibold tracking-widest uppercase rounded-full transition-all shadow-lg shadow-[#0a443a]/20 active:scale-95 group"
              >
                Inquire For Your Date
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
