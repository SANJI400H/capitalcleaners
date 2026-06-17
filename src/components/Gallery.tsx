"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/work/work-01.jpeg", alt: "Capital Cleaners — recent work 1" },
  { src: "/work/work-06.jpeg", alt: "Capital Cleaners — recent work 2" },
  { src: "/work/work-11.jpeg", alt: "Capital Cleaners — recent work 3" },
  { src: "/work/work-16.jpeg", alt: "Capital Cleaners — recent work 4" },
  { src: "/work/work-21.jpeg", alt: "Capital Cleaners — recent work 5" },
  { src: "/work/work-26.jpeg", alt: "Capital Cleaners — recent work 6" },
  { src: "/work/work-31.jpeg", alt: "Capital Cleaners — recent work 7" },
  { src: "/work/work-36.jpeg", alt: "Capital Cleaners — recent work 8" },
  { src: "/work/work-43.jpeg", alt: "Capital Cleaners — recent work 9" },
  { src: "/work/work-50.jpeg", alt: "Capital Cleaners — recent work 10" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

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

  const onDragStart = (x: number) => { setDragging(false); dragStart.current = x; };
  const onDragEnd = (x: number) => {
    const diff = dragStart.current - x;
    if (Math.abs(diff) > 40) { diff > 0 ? next() : prev(); resetTimer(); }
  };

  return (
    <section id="our-work" className="py-28 px-0 bg-white overflow-hidden">
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
          className="relative mx-auto overflow-hidden rounded-none sm:rounded-3xl cursor-pointer"
          style={{ maxWidth: "900px", aspectRatio: "16/10" }}
          onClick={() => setLightbox(true)}
          onMouseDown={(e) => onDragStart(e.clientX)}
          onMouseUp={(e) => onDragEnd(e.clientX)}
          onTouchStart={(e) => onDragStart(e.touches[0].clientX)}
          onTouchEnd={(e) => onDragEnd(e.changedTouches[0].clientX)}
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
              />
            </div>
          ))}

          {/* Dark overlay hint */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Zoom hint */}
          <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white text-[12px] font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Click to expand
          </div>

          {/* Prev / Next on image */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); resetTimer(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] shadow-md transition-all hover:scale-105 active:scale-95 text-lg"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); resetTimer(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-[#1d1d1f] shadow-md transition-all hover:scale-105 active:scale-95 text-lg"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-[6px] bg-[#0071e3]" : "w-[6px] h-[6px] bg-[#d2d2d7] hover:bg-[#a1a1a6]"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <p className="text-center text-[13px] text-[#a1a1a6] mt-3">
          {current + 1} of {images.length}
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-lg transition-colors"
            onClick={() => setLightbox(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-[13px]">
            {current + 1} / {images.length}
          </p>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16" onClick={(e) => e.stopPropagation()}>
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
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
