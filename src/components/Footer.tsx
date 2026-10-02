"use client";

import { Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "TikTok", href: "#" },
];

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="relative bg-emerald-950 overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-600 via-gold-400 to-emerald-600" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div className="space-y-5">
            <div>
              <p className="font-serif text-2xl font-semibold tracking-widest text-white">MASWAB</p>
              <p className="text-[10px] tracking-[0.35em] text-gold-400 uppercase font-medium">Decor</p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Transforming events into unforgettable experiences. Every detail, every moment — crafted with intention.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label} href={href}
                  className="text-[10px] tracking-wider border border-white/15 px-3 py-1.5 text-white/40 hover:border-gold-400 hover:text-gold-400 transition-all duration-300 uppercase rounded-full"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-5 font-medium">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                    className="text-sm text-white/50 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-5 font-medium">Contact</p>
            <ul className="space-y-4">
              <li>
                <a href="tel:+251956457728" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors group">
                  <Phone size={14} strokeWidth={1.5} className="text-gold-500/50 group-hover:text-gold-400" />
                  0956 457 728
                </a>
              </li>
              <li>
                <a href="tel:+251904382752" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors group">
                  <Phone size={14} strokeWidth={1.5} className="text-gold-500/50 group-hover:text-gold-400" />
                  0904 382 752
                </a>
              </li>
              <li>
                <a href="mailto:hello@maswabdecor.com" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors group">
                  <Mail size={14} strokeWidth={1.5} className="text-gold-500/50 group-hover:text-gold-400" />
                  hello@maswabdecor.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                  className="inline-flex items-center gap-2 text-xs tracking-wider text-gold-400 border border-gold-500/40 px-4 py-2 rounded-full hover:bg-gold-500/10 transition-colors font-medium"
                >
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/8 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Maswab Decor. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Crafted with care for every occasion</p>
        </div>
      </div>
    </footer>
  );
}
