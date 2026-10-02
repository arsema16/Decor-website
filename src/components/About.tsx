"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const values = [
  "Custom designs tailored to your vision",
  "End-to-end event decoration service",
  "Premium quality florals and materials",
  "On-time setup and professional team",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative bg-white section-padding overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20">
              <Image
                src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Beautiful wedding table decoration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/30 to-transparent" />
            </div>

            {/* Floating small image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl shadow-emerald-900/20"
            >
              <Image
                src="/images/table-arrangement.png"
                alt="Floral centrepiece decoration"
                fill
                sizes="192px"
                className="object-cover"
              />
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-6 -right-4 bg-emerald-700 text-white px-5 py-4 rounded-2xl shadow-lg text-center"
            >
              <p className="font-serif text-3xl font-light leading-none">5+</p>
              <p className="text-[10px] tracking-wider uppercase mt-1 opacity-80">Years</p>
            </motion.div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-7 pb-8"
          >
            <div>
              <p className="text-xs tracking-[0.4em] text-emerald-600 uppercase font-semibold mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 leading-tight">
                Passion for{" "}
                <span className="italic text-gradient-emerald">Beautiful Spaces</span>
              </h2>
            </div>

            <p className="text-emerald-800/70 text-base leading-relaxed">
              Maswab Decor was born from a simple belief — that every event
              deserves to feel extraordinary. We started as a small team of
              passionate designers and have grown into a trusted decoration
              studio that has brought hundreds of visions to life.
            </p>
            <p className="text-emerald-800/70 text-base leading-relaxed">
              From the first conversation to the final flower arrangement, we
              work closely with each client to ensure the atmosphere is a true
              reflection of their story, their taste, and their moment.
            </p>

            {/* Values list */}
            <ul className="space-y-3">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-600 mt-0.5 shrink-0" />
                  <span className="text-emerald-800/80 text-sm">{v}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-emerald-700 text-white text-sm font-semibold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 shadow-emerald-900/20"
            >
              Let&apos;s Plan Your Event
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
