"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MoodBoardMosaic from "./MoodBoardMosaic";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92svh] bg-[#fcfbf9] text-neutral-900 lg:pt-28 lg:pb-14 flex items-center"
      style={{ overflowX: "clip" }}
    >
      {/* Main Container - Padded on left, Flush to right border */}
      <div className="relative z-10 w-full pl-5 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-20 pr-0 mr-0">
        
        {/* ── DESKTOP LAYOUT (lg:grid) ── */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-x-8 xl:gap-x-12 lg:min-h-[calc(92svh_-_168px)]">
          
          {/* Left Column: Editorial Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-5 flex flex-col justify-center space-y-5 xl:space-y-6 pr-4 xl:pr-6"
          >
            {/* Title with Cursive "Maswab Decor" Script */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Alex Brush', 'Great Vibes', cursive" }}
                className="text-[52px] xl:text-[66px] text-[#0a443a] block -mb-3 xl:-mb-4 select-none leading-none pl-0.5"
              >
                Maswab Decor
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-[44px] xl:text-[56px] font-bold tracking-tight text-[#0a443a] leading-none uppercase"
              >
                EVENT DECOR
              </motion.h1>

              {/* Decorative Teal Underline */}
              <div className="w-14 sm:w-16 h-[2px] bg-[#0a443a] mt-2.5 mb-4" />
            </div>

            {/* What We Do Kicker & Body Text */}
            <div className="space-y-2 pt-1">
              <span className="text-[10.5px] font-mono tracking-[0.25em] text-[#0a443a] font-semibold uppercase block">
                WHAT WE DO
              </span>
              <p className="text-[11.5px] xl:text-[12px] text-neutral-600 leading-relaxed font-sans uppercase tracking-[0.04em] font-medium max-w-lg">
                MASWAB DECOR DESIGNS AND STYLES FULL VENUES FOR WEDDINGS, SHIMGINA CEREMONIES, BIRTHDAYS, ENGAGEMENTS, AND CORPORATE GALAS — FRESH FLORALS, DRAPERY, LIGHTING, BALLOONS, AND STAGING, HANDLED END TO END FROM OUR ADDIS ABABA STUDIO.
              </p>
            </div>

            {/* Studio Meta Line */}
            <div className="pt-1 text-[10.5px] font-mono tracking-[0.22em] text-[#0a443a] uppercase font-semibold">
              <span>MASWAB DECOR</span>
              <span className="mx-2.5 text-neutral-300 font-normal">|</span>
              <span className="text-neutral-500 font-normal">FLORALS</span>
              <span className="mx-2.5 text-neutral-300 font-normal">|</span>
              <span>STYLING</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-row gap-3.5 items-center">
              <button
                onClick={() => scrollToSection("#contact")}
                className="group px-8 py-3.5 bg-[#0a443a] hover:bg-[#063028] text-white font-mono text-xs font-semibold tracking-widest uppercase rounded-full transition-all shadow-md shadow-[#0a443a]/20 active:scale-95 flex items-center justify-center gap-2"
              >
                <span>BOOK EVENT</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("#services")}
                className="px-8 py-3.5 bg-transparent hover:bg-[#0a443a]/5 border border-[#0a443a] text-[#0a443a] font-mono text-xs font-semibold tracking-widest uppercase rounded-full transition-all active:scale-95 text-center"
              >
                SERVICES
              </button>
            </div>
          </motion.div>

          {/* Right Column: Diamond Mosaic — bleeds to viewport edge */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="col-span-7 w-full pr-0 mr-0 self-start lg:-mt-28"
            style={{ overflow: "visible" }}
          >
            <MoodBoardMosaic />
          </motion.div>

        </div>

        {/* ── MOBILE / TABLET LAYOUT ── */}
        {/* Full-bleed background image with overlay, text pops on top */}
        {/* Negative margins escape the parent container padding to go edge-to-edge */}
        <div
          className="lg:hidden relative flex flex-col justify-end -ml-5 sm:-ml-8 md:-ml-12 -mr-0 -mt-20 sm:-mt-24 min-h-[calc(100svh-2.5rem)] sm:min-h-[calc(100svh-3.5rem)]"
          style={{
            backgroundImage: "url('/images/hero-main.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        >
          {/* Dark gradient overlay — strong at bottom where text lives */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,68,58,0.18) 0%, rgba(10,68,58,0.35) 40%, rgba(6,32,28,0.82) 72%, rgba(4,22,18,0.96) 100%)",
            }}
          />

          {/* Subtle top-left vignette so logo area stays clean */}
          <div
            className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, rgba(4,22,18,0.45) 0%, transparent 100%)",
            }}
          />

          {/* Content — sits above overlay */}
          <div className="relative z-10 pl-6 pr-6 sm:pl-10 sm:pr-10 pb-16 sm:pb-20 pt-24 sm:pt-28 flex flex-col items-center text-center">

            {/* Tag line */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-2 mb-5 sm:mb-6"
            >
              <div className="w-8 h-[1px] bg-[#a8d5c8]" />
              <span className="text-[9.5px] font-mono tracking-[0.32em] text-[#a8d5c8] uppercase font-semibold">
                ADDIS ABABA STUDIO
              </span>
              <div className="w-8 h-[1px] bg-[#a8d5c8]" />
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="mb-5 sm:mb-6"
            >
              <span
                style={{ fontFamily: "'Alex Brush', 'Great Vibes', cursive" }}
                className="text-[46px] sm:text-[64px] md:text-[76px] text-white block -mb-2 select-none leading-none drop-shadow-lg"
              >
                Maswab Decor
              </span>
              <h1
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                className="text-[42px] sm:text-[54px] md:text-[64px] font-bold tracking-tight text-white leading-none uppercase drop-shadow-lg"
              >
                EVENT DECOR
              </h1>
              <div className="w-16 sm:w-20 h-[2px] bg-[#a8d5c8] mt-4 mx-auto" />
            </motion.div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="text-[11px] sm:text-[12px] md:text-[13px] text-white/75 leading-relaxed font-sans uppercase tracking-[0.06em] font-medium max-w-[280px] sm:max-w-sm md:max-w-md mb-4"
            >
              WEDDINGS · BIRTHDAYS · ENGAGEMENTS · SHIMGINA CEREMONIES · CORPORATE GALAS
            </motion.p>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="text-[9px] sm:text-[10px] font-mono tracking-[0.22em] text-white/40 uppercase font-semibold mb-8"
            >
              <span>MASWAB DECOR</span>
              <span className="mx-2 text-white/20">|</span>
              <span>FLORALS</span>
              <span className="mx-2 text-white/20">|</span>
              <span>STYLING</span>
            </motion.div>

            {/* Buttons — side by side, fixed width, centered */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-row gap-3 sm:gap-4 justify-center w-full max-w-xs"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="flex-1 py-3.5 sm:py-4 bg-white text-[#0a443a] font-mono text-[10px] font-bold tracking-widest uppercase rounded-full shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>BOOK EVENT</span>
                <ArrowRight size={12} />
              </button>
              <button
                onClick={() => scrollToSection("#services")}
                className="flex-1 py-3.5 sm:py-4 bg-transparent border border-white/50 text-white font-mono text-[10px] font-semibold tracking-widest uppercase rounded-full active:scale-95 text-center"
              >
                SERVICES
              </button>
            </motion.div>

          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1"
            >
              <div className="w-1 h-2 rounded-full bg-white/70" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
