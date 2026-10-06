"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, CheckCircle, MessageCircle, Sparkles, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = (() => {
  const fromEnv = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (!fromEnv || fromEnv.includes("REPLACE_ME")) return "https://formspree.io/f/mvkzggeo";
  return fromEnv;
})();

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    emailOrPhone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          emailOrPhone: form.emailOrPhone,
          message: form.message,
          _subject: `New event enquiry from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error(`Formspree responded with ${res.status}`);
      setForm({ name: "", emailOrPhone: "", message: "" });
      setSubmitted(true);
    } catch {
      setError(
        "We could not send your message. Please try again, or use WhatsApp / call us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  // Generate the coil path loops along the bottom of the card
  const generateCoilPath = () => {
    let d = "M 85 295 C 75 320, 60 345, 80 355 C 95 362, 115 355, 130 355 ";
    const startX = 130;
    const endX = 760;
    const loopWidth = 14;
    const totalLoops = Math.floor((endX - startX) / loopWidth);

    for (let i = 0; i < totalLoops; i++) {
      const x = startX + i * loopWidth;
      // Elliptical spring loop
      d += `C ${x + 4} 340, ${x + 12} 340, ${x + 12} 355 C ${x + 12} 370, ${x + 4} 370, ${x} 355 `;
    }
    return d;
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#f8faf8] border-t border-neutral-200 overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.08)_0%,_transparent_60%)] pointer-events-none" />

      {/* Main floating card reproducing the reference image */}
      <div className="relative max-w-5xl mx-auto bg-white text-neutral-800 rounded-[36px] sm:rounded-[44px] p-6 sm:p-12 lg:p-16 shadow-xl shadow-neutral-900/5 border border-neutral-200/90 overflow-hidden">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* LEFT: Realistic Tactile Telephone Handset */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative select-none">
            <a
              href="tel:+251956457728"
              className="group relative cursor-pointer flex flex-col items-center"
              title="Click to dial Maswab Decor directly"
            >
              {/* Handset Vector Artwork */}
              <div className="relative w-32 h-64 sm:w-40 sm:h-80 drop-shadow-[0_20px_35px_rgba(22,163,74,0.25)] group-hover:scale-105 transition-transform duration-300">
                {/* Handset Body SVG */}
                <svg viewBox="0 0 160 320" className="w-full h-full" fill="none">
                  {/* Grip Bar */}
                  <rect
                    x="62"
                    y="75"
                    width="36"
                    height="170"
                    rx="18"
                    fill="url(#handset-gradient)"
                  />
                  {/* Grip Bar Highlight */}
                  <rect
                    x="66"
                    y="80"
                    width="8"
                    height="160"
                    rx="4"
                    fill="white"
                    opacity="0.25"
                  />

                  {/* Top Earpiece Bell */}
                  <circle cx="80" cy="70" r="50" fill="url(#handset-gradient)" />
                  <circle cx="80" cy="70" r="44" fill="#15803d" />
                  <circle cx="80" cy="70" r="38" fill="url(#handset-gradient)" />
                  {/* Concentric Acoustic Grooves */}
                  <circle cx="80" cy="70" r="30" stroke="#166534" strokeWidth="2.5" />
                  <circle cx="80" cy="70" r="22" stroke="#166534" strokeWidth="2.5" />
                  <circle cx="80" cy="70" r="14" stroke="#166534" strokeWidth="2.5" />
                  <circle cx="80" cy="70" r="6" fill="#14532d" />

                  {/* Bottom Mouthpiece Bell */}
                  <circle cx="80" cy="250" r="50" fill="url(#handset-gradient)" />
                  <circle cx="80" cy="250" r="44" fill="#15803d" />
                  <circle cx="80" cy="250" r="38" fill="url(#handset-gradient)" />
                  {/* Concentric Acoustic Grooves */}
                  <circle cx="80" cy="250" r="30" stroke="#166534" strokeWidth="2.5" />
                  <circle cx="80" cy="250" r="22" stroke="#166534" strokeWidth="2.5" />
                  <circle cx="80" cy="250" r="14" stroke="#166534" strokeWidth="2.5" />
                  <circle cx="80" cy="250" r="6" fill="#14532d" />

                  {/* Cord socket base */}
                  <rect x="74" y="295" width="12" height="10" rx="3" fill="#14532d" />

                  <defs>
                    <linearGradient id="handset-gradient" x1="0" y1="0" x2="160" y2="320" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#4ade80" />
                      <stop offset="45%" stopColor="#16a34a" />
                      <stop offset="100%" stopColor="#15803d" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Ringing pulse indicator */}
                <span className="absolute top-4 right-4 w-4 h-4 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Direct call hint below handset */}
              <div className="mt-2 text-center">
                <span className="font-mono text-[11px] font-semibold text-emerald-800 tracking-wider uppercase block">
                  Click to Call 0956 457 728
                </span>
                <span className="text-[11px] text-neutral-500 font-sans">
                  Direct Line · Instant Consultation
                </span>
              </div>
            </a>
          </div>

          {/* RIGHT: Minimalist Clean Contact Form */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight">
                Plan your event?
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base font-sans mt-1">
                Tell us your date, venue, and decor vision — we reply with a proposal within 24 hours.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle size={24} />
                </div>
                <h3 className="font-serif text-2xl text-neutral-900 font-semibold">Message Received</h3>
                <p className="text-neutral-600 text-sm max-w-sm mx-auto font-sans leading-relaxed">
                  Thank you! We have received your details and our team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-semibold hover:underline pt-2 block mx-auto"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-1">
                  <label className="font-sans text-xs font-medium text-neutral-700">
                    Name and surname
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Elena Vance"
                    className="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all font-sans"
                  />
                </div>

                {/* Email / Phone */}
                <div className="space-y-1">
                  <label className="font-sans text-xs font-medium text-neutral-700">
                    Email or phone number
                  </label>
                  <input
                    type="text"
                    name="emailOrPhone"
                    required
                    value={form.emailOrPhone}
                    onChange={handleChange}
                    placeholder="elena@example.com or 09..."
                    className="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all font-sans"
                  />
                </div>

                {/* Message / Details */}
                <div className="space-y-1">
                  <label className="font-sans text-xs font-medium text-neutral-700">
                    Please enter the details of your request.
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your event date, venue, guest count, or vision..."
                    className="w-full bg-neutral-100 border border-neutral-200 rounded-xl px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all font-sans resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs font-sans text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                {/* Submit Row matching the reference image */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://wa.me/251956457728"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-700 hover:text-emerald-800 hover:underline font-semibold"
                    >
                      <MessageCircle size={14} />
                      WhatsApp Direct
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xl shadow-lg shadow-emerald-600/30 active:scale-95 transition-all disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* The Coiled Spiral Phone Cord running horizontally along the bottom */}
        <div className="w-full mt-8 relative overflow-hidden select-none">
          <svg viewBox="0 0 850 60" className="w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* The Coil Path */}
            <path
              d={generateCoilPath()}
              stroke="#16a34a"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_4px_6px_rgba(22,163,74,0.2)]"
            />
            {/* Highlight line on coil */}
            <path
              d={generateCoilPath()}
              stroke="#86efac"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
          </svg>
        </div>

      </div>
    </section>
  );
}
