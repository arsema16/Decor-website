"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flower2, Building2, Cake, Star, Sparkles, Heart } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Heart,
    title: "Wedding Decoration",
    description: "From intimate ceremonies to grand receptions, we design every detail to reflect your love story — florals, lighting, and full ambiance.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional, polished, and on-brand setups for conferences, product launches, and awards galas.",
    image: "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
    highlight: false,
  },
  {
    icon: Cake,
    title: "Birthday Celebrations",
    description: "Themed decor setups with balloon arches, floral walls, and custom centrepieces that make every guest feel the magic.",
    image: "/images/birthday-balloons.png",
    highlight: false,
  },
  {
    icon: Flower2,
    title: "Floral Arrangements",
    description: "Custom floral designs — bridal bouquets, centrepieces, and full venue floral installations crafted fresh.",
    image: "/images/table-arrangement.png",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Themed Events",
    description: "Seasonal themes, cultural celebrations, fantasy setups — we bring even the most imaginative ideas to life.",
    image: "/images/graduation-decor.png",
    highlight: false,
  },
  {
    icon: Star,
    title: "Baby Showers & Engagements",
    description: "Soft, elegant, and personal decor for life's most tender milestones — we handle every detail.",
    image: "/images/engagement-decor.png",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Shimglna",
    description: "Traditional and cultural Shimglna celebrations decorated with rich, vibrant, and meaningful setups that honour every tradition.",
    image: "/images/shimglna-decor.png",
    highlight: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative bg-cream-100 section-padding overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(16,185,129,0.07)_0%,_transparent_60%)]" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-emerald-600 uppercase font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-4">
            Our <span className="italic text-gradient-emerald">Services</span>
          </h2>
          <p className="text-emerald-800/60 text-sm max-w-xl mx-auto">
            Every event is unique. We offer a full range of decoration services tailored to your vision and budget.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 ${
                  service.highlight ? "ring-2 ring-gold-400" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      service.image.startsWith("/images/")
                        ? "object-contain bg-white p-2"
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent" />
                  {service.highlight && (
                    <span className="absolute top-3 right-3 bg-gold-500 text-white text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-semibold">
                      Popular
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="bg-white p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>
                    <h3 className="font-serif text-lg text-emerald-950 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-emerald-800/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white text-sm font-semibold rounded-full hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 shadow-emerald-900/20"
          >
            Get a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
