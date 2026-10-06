"use client";

import { Mail, Phone, ArrowUp, Instagram, Facebook, Sparkles, MessageCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Wedding Architecture", href: "#services" },
  { label: "Traditional Shimglna", href: "#services" },
  { label: "Artisanal Florals", href: "#services" },
  { label: "Corporate Galas", href: "#services" },
  { label: "Milestone Birthdays", href: "#services" },
  { label: "Baby Showers & Engagements", href: "#services" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com", icon: Sparkles },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "WhatsApp", href: "https://wa.me/251956457728", icon: MessageCircle },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#f8faf8] text-neutral-600 overflow-hidden border-t border-neutral-200 select-none">
      {/* Top subtle emerald gradient line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 relative z-10">
        
        {/* TOP CALLOUT BANNER */}
        <div className="bg-white border border-neutral-200/90 rounded-3xl p-8 sm:p-12 mb-16 shadow-xl shadow-neutral-900/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] tracking-[0.35em] text-emerald-700 uppercase font-semibold block mb-2">
              START YOUR CELEBRATION
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-light">
              Ready to transform your moment into <span className="italic text-gradient-gold">enduring art?</span>
            </h3>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 rounded-full bg-emerald-600 text-white font-mono text-xs font-bold tracking-widest uppercase hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 active:scale-95 shrink-0"
          >
            Book Free Consultation
          </button>
        </div>

        {/* 4 EDITORIAL COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand & Atelier (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-neutral-900">
                MASWAB
              </span>
              <span className="font-mono text-[10px] tracking-[0.45em] text-emerald-700 uppercase font-semibold mt-1">
                DECOR STUDIO & SCENOGRAPHY
              </span>
            </div>

            <p className="text-neutral-600 text-sm leading-relaxed max-w-sm font-sans pt-1">
              Addis Ababa&apos;s premier event architecture atelier. We curate bespoke wedding
              atmospheres, cultural Shimglna celebrations, sculptural florals, and high-impact
              corporate galas tailored to your story.
            </p>

            {/* Social pills */}
            <div className="flex flex-wrap gap-2 pt-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider border border-neutral-200 px-3.5 py-1.5 text-neutral-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-all rounded-full uppercase shadow-sm"
                >
                  <Icon size={12} className="text-emerald-600" />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Curated Disciplines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-[11px] tracking-[0.3em] text-emerald-800 uppercase font-semibold mb-4">
              DISCIPLINES
            </p>
            <ul className="space-y-2.5 font-sans text-sm">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(s.href);
                    }}
                    className="text-neutral-600 hover:text-emerald-700 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-emerald-500/50 group-hover:bg-emerald-600 transition-colors" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-[11px] tracking-[0.3em] text-emerald-800 uppercase font-semibold mb-4">
              INDEX
            </p>
            <ul className="space-y-2.5 font-mono text-xs uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-neutral-600 hover:text-emerald-700 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Studio Direct Contacts (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-[11px] tracking-[0.3em] text-emerald-800 uppercase font-semibold mb-4">
              CONTACT
            </p>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href="tel:+251956457728"
                  className="flex items-center gap-2 text-neutral-700 hover:text-emerald-700 transition-colors"
                >
                  <Phone size={13} className="text-emerald-600 shrink-0" />
                  <span>0956 457 728</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+251904382752"
                  className="flex items-center gap-2 text-neutral-700 hover:text-emerald-700 transition-colors"
                >
                  <Phone size={13} className="text-emerald-600 shrink-0" />
                  <span>0904 382 752</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@maswabdecor.com"
                  className="flex items-center gap-2 text-neutral-700 hover:text-emerald-700 transition-colors"
                >
                  <Mail size={13} className="text-emerald-600 shrink-0" />
                  <span className="truncate">hello@maswabdecor.com</span>
                </a>
              </li>
              <li className="pt-1">
                <span className="text-xs text-neutral-500 font-sans block">
                  Addis Ababa, Ethiopia · Available Worldwide
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* GIANT EDITORIAL BRAND WATERMARK */}
        <div className="pt-10 pb-6 border-t border-neutral-200 text-center select-none overflow-hidden">
          <p className="font-serif text-[13vw] lg:text-[140px] leading-none font-bold tracking-[0.18em] text-neutral-900/[0.04] uppercase">
            MASWAB
          </p>
        </div>

        {/* BOTTOM METADATA & BACK TO TOP BAR */}
        <div className="pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} MASWAB DECOR STUDIO. ALL RIGHTS RESERVED.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-emerald-700/60 hidden sm:inline">MINIMAL · LUXURY · SCENOGRAPHY</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:text-emerald-700 hover:border-emerald-500 transition-all font-mono text-[11px] uppercase tracking-wider shadow-sm"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={13} className="text-emerald-600" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
