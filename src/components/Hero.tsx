"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ position: "relative" }}>
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src="/images/wedding-decor.png"
          alt="Elegant wedding decoration"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/50 to-emerald-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-emerald-950/40" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-12 md:left-24 w-16 h-16 border-2 border-gold-400/40 rounded-full hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-16 md:right-28 w-10 h-10 border-2 border-white/20 rounded-full hidden md:block"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-1/3 right-16 w-3 h-3 bg-gold-400 rounded-full hidden md:block"
      />

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles size={13} className="text-gold-300" />
          <span className="text-xs tracking-[0.3em] text-white/80 uppercase font-medium">
            Event Decoration Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight mb-6"
        >
          Where Every
          <br />
          <span className="italic text-gold-300">Moment</span>
          <br />
          Becomes Art
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-16 h-px bg-gold-400/60" />
          <span className="w-2 h-2 rounded-full bg-gold-400" />
          <span className="w-16 h-px bg-gold-400/60" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-12"
        >
          We craft unforgettable atmospheres for weddings, corporate events,
          and celebrations — tailored to your story.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection("#contact")}
            className="group px-8 py-4 bg-gold-500 text-white text-sm tracking-wider font-semibold rounded-full hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/30 hover:shadow-gold-400/40 hover:scale-105"
          >
            Book a Consultation
          </button>
          <button
            onClick={() => scrollToSection("#portfolio")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white text-sm tracking-wider font-medium rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-16 pt-10 border-t border-white/10"
        >
          {[["200+", "Events"], ["5+", "Years"], ["98%", "Satisfaction"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <p className="font-serif text-2xl md:text-3xl text-gold-300 font-light">{val}</p>
              <p className="text-[11px] tracking-widest text-white/50 uppercase mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold-300 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
