"use client";

import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/ui/icons";

const visibilityThreshold = 600;

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > visibilityThreshold);
    };

    const frame = window.requestAnimationFrame(updateVisibility);
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Späť hore"
      onClick={scrollToTop}
      className={`fixed right-5 bottom-5 z-50 grid size-11 place-items-center rounded-full border border-ink/15 bg-paper/95 text-ink shadow-[0_10px_30px_rgba(33,31,28,.12)] backdrop-blur-sm transition-[opacity,transform,background-color] duration-300 ease-out hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:right-7 sm:bottom-7 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowIcon className="size-4 -rotate-90" />
    </button>
  );
}
