"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Image from "next/image";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Celebration",
  "Engagement / Baby Shower",
  "Themed Event",
  "Other",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "0956 457 728  ·  0904 382 752",
    href: "tel:+251956457728",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@maswabdecor.com",
    href: "mailto:hello@maswabdecor.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available across the city & surroundings",
    href: null,
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
};

const initialForm: FormState = {
  name: "", email: "", phone: "", eventType: "", eventDate: "", message: "",
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-cream-50 section-padding overflow-hidden">
      {/* Decorative background image strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-500" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-emerald-600 uppercase font-semibold mb-3">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-emerald-950 mb-4">
            Let&apos;s Plan Your{" "}
            <span className="italic text-gradient-emerald">Dream Event</span>
          </h2>
          <p className="text-emerald-800/60 text-sm max-w-xl mx-auto">
            Tell us about your event and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — info + image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Image */}
            <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Wedding ceremony decoration"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif text-white text-lg italic">Ready to create magic?</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 shrink-0">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs tracking-wider text-emerald-600 uppercase font-semibold mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-emerald-900 text-sm hover:text-emerald-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-emerald-900/70 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-emerald-700/50 text-xs leading-relaxed">
              We typically respond within 24 hours. For urgent enquiries, reach us directly on WhatsApp.
            </p>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center flex flex-col items-center gap-5 shadow-lg"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={32} className="text-emerald-600" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-emerald-950">Message Received</h3>
                <p className="text-emerald-800/60 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. We&apos;ll review your enquiry and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-2 text-emerald-600 text-xs tracking-wider hover:text-emerald-500 transition-colors font-medium"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 shadow-lg space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs tracking-wider text-emerald-700 uppercase font-semibold">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className="bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-900/30 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs tracking-wider text-emerald-700 uppercase font-semibold">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-900/30 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs tracking-wider text-emerald-700 uppercase font-semibold">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+251 000 000 000"
                      className="bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-900/30 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs tracking-wider text-emerald-700 uppercase font-semibold">
                      Event Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="eventType" required value={form.eventType} onChange={handleChange}
                      className="bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-sm text-emerald-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all appearance-none"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wider text-emerald-700 uppercase font-semibold">
                    Event Date
                  </label>
                  <input
                    type="date" name="eventDate" value={form.eventDate} onChange={handleChange}
                    className="bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-sm text-emerald-900/70 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all"
                    style={{ colorScheme: "light" }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs tracking-wider text-emerald-700 uppercase font-semibold">
                    Tell Us About Your Event <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Describe your vision, number of guests, budget, or anything you'd like us to know..."
                    className="bg-cream-50 border border-cream-300 rounded-xl px-4 py-3 text-sm text-emerald-900 placeholder:text-emerald-900/30 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-emerald-700 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
