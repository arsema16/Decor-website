"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "251956457728";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello Maswab Decor! I'm interested in booking a consultation for my upcoming event."
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / prompt */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white border border-neutral-200 rounded-2xl px-4 py-3 max-w-[230px] shadow-xl"
          >
            <button
              onClick={() => setShowTooltip(false)}
              aria-label="Close"
              className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700"
            >
              <X size={12} />
            </button>
            <span className="font-mono text-[9px] tracking-wider text-emerald-700 uppercase block mb-1 font-semibold">
              Direct Line
            </span>
            <p className="text-neutral-700 text-xs leading-relaxed pr-3 font-sans">
              Chat directly with our design director on WhatsApp.
            </p>
            {/* Small arrow */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-neutral-200 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-black/60 bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:brightness-110 transition-all border border-emerald-300/30 group"
      >
        <MessageCircle size={26} className="text-white" />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />
      </motion.a>
    </div>
  );
}
