"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SHOW_MS = 1600;

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setShow(false), reduced ? 0 : SHOW_MS);
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          aria-hidden="true"
        >
          {/* Soft ambient glow behind the wordmark */}
          <div className="absolute w-[420px] h-[420px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-4xl sm:text-5xl font-light tracking-[0.3em] text-neutral-900 pl-[0.3em]">
                MASWAB
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.5em] text-emerald-700 uppercase font-semibold mt-2 pl-[0.5em]">
              Decor Studio
            </span>
          </motion.div>

          {/* Loading line sweeping across */}
          <div className="relative mt-10 h-px w-44 bg-neutral-200 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 bg-emerald-600"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
