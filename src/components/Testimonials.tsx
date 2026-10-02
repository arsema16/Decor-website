"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & James",
    event: "Wedding — June 2024",
    text: "Maswab Decor turned our wedding into something out of a dream. Every corner was thoughtfully designed, and our guests kept asking who did the decor. We couldn't have asked for a more perfect day.",
    initials: "SJ",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Fatima Al-Rashid",
    event: "Corporate Gala — March 2024",
    text: "We hired Maswab Decor for our annual company gala and were absolutely blown away. The setup was elegant, professional, and completely aligned with our brand. Our team is still talking about it.",
    initials: "FA",
    color: "bg-gold-300/30 text-gold-600",
  },
  {
    name: "Layla & Omar",
    event: "Engagement Party — January 2024",
    text: "From our first call to the last petal on the table, the Maswab team was attentive, creative, and genuinely passionate. The engagement party looked like something from a magazine.",
    initials: "LO",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Michael Chen",
    event: "Birthday Celebration — October 2023",
    text: "I gave them a rough idea and a colour palette and they delivered something I never could have imagined on my own. The themed setup was incredible — my guests were speechless walking in.",
    initials: "MC",
    color: "bg-gold-300/30 text-gold-600",
  },
  {
    name: "Nadia Osman",
    event: "Baby Shower — August 2023",
    text: "Such a warm and talented team. They made our baby shower feel magical without us having to stress about a single detail. Totally worth every penny.",
    initials: "NO",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="relative bg-emerald-950 section-padding overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-900/95 to-emerald-950" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-gold-400 uppercase font-semibold mb-3">
            Client Stories
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            What Our Clients{" "}
            <span className="italic text-gold-300">Say</span>
          </h2>
        </motion.div>

        {/* Large carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 md:p-14">
            <Quote size={40} className="text-gold-400/40 mb-8" strokeWidth={1} />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-serif text-xl md:text-2xl text-white/90 leading-relaxed italic mb-10">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold tracking-wider ${testimonials[current].color}`}>
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">{testimonials[current].name}</p>
                    <p className="text-white/40 text-xs mt-0.5">{testimonials[current].event}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`transition-all duration-300 rounded-full ${
                      i === current ? "w-6 h-2 bg-gold-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} aria-label="Previous" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold-400 hover:text-gold-400 transition-all">
                  <ChevronLeft size={16} />
                </button>
                <button onClick={next} aria-label="Next" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-gold-400 hover:text-gold-400 transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3 compact cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-7 hover:bg-white/10 transition-colors"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold-400 text-xs">★</span>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-3">{t.text}</p>
              <p className="text-white/80 text-sm font-medium">{t.name}</p>
              <p className="text-white/30 text-xs mt-0.5">{t.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
