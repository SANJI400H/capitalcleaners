"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/work/work-01.jpeg", alt: "Capital Cleaners — professional domestic cleaning results, UK" },
  { src: "/work/work-06.jpeg", alt: "Capital Cleaners — deep cleaning service completed, kitchen detail" },
  { src: "/work/work-11.jpeg", alt: "Capital Cleaners — office cleaning service, workplace after clean" },
  { src: "/work/work-16.jpeg", alt: "Capital Cleaners — end of tenancy clean completed, UK property" },
  { src: "/work/work-21.jpeg", alt: "Capital Cleaners — move-out cleaning service results" },
  { src: "/work/work-26.jpeg", alt: "Capital Cleaners — residential deep clean, bathroom detail" },
  { src: "/work/work-31.jpeg", alt: "Capital Cleaners — general property cleaning, communal area" },
  { src: "/work/work-36.jpeg", alt: "Capital Cleaners — professional home cleaning service, bedroom" },
  { src: "/work/work-43.jpeg", alt: "Capital Cleaners — commercial cleaning service, after results" },
  { src: "/work/work-50.jpeg", alt: "Capital Cleaners — move-in cleaning, property prepared for new tenant" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragStart = useRef(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [resetTimer]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { prev(); resetTimer(); }
      else if (e.key === "ArrowRight") { next(); resetTimer(); }
      else if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next, resetTimer]);

  const goTo = (i: number) => { setCurrent(i); resetTimer(); };

  const onDragStart = (x: number) => { dragStart.current = x; };
  const onDragEnd = (x: number) => {
    const diff = dragStart.current - x;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetTimer(); }
  };

  return (
    <section id="our-work" className="py-28 px-0 bg-white overflow-hidden" aria-label="Our work gallery">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-12 text-center">
        <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Our work</p>
        <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
          See the results
        </h2>
        <p className="text-[17px] text-[#6e6e73] mt-4 max-w-md mx-auto font-light">
          Real jobs, real results. Every photo from an actual clean by our team.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative select-none">
        {/* Main image */}
        <div
          className="group relative mx-auto overflow-hidden rounded-none sm:rounded-3xl cursor-pointer shadow-xl"
          style={{ maxWidth: "900px", aspectRatio: "16/10" }}
          onClick={() => setLightbox(true)}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
          role="img"
          aria-label={images[current].alt}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />

          {/* Zoom hint — now correctly uses group-hover */}
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white text-[12px] font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Click to expand
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); resetTimer(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] shadow-md transition-all hover:scale-105 active:scale-95 text-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); resetTimer(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] shadow-md transition-all hover:scale-105 active:scale-95 text-lg"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Image navigation">
          {images.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-[6px] bg-[#0071e3]" : "w-[6px] h-[6px] bg-[#d2d2d7] hover:bg-[#a1a1a6]"}`}
              aria-label={`Image ${i + 1} of ${images.length}`}
            />
          ))}
        </div>

        <p className="text-center text-[13px] text-[#a1a1a6] mt-3" aria-live="polite">
          {current + 1} of {images.length}
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors"
            onClick={() => setLightbox(false)}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-[13px]">
            {current + 1} / {images.length}
          </p>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
