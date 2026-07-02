"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["services", "our-work", "why-us", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-xl border-b border-black/8 shadow-sm"
            : "bg-white/70 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center" aria-label="Capital Cleaners home">
            <Image
              src="/logo.png"
              alt="Capital Cleaners logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            {links.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={label}>
                  <a
                    href={href}
                    className={`text-[13px] transition-colors duration-200 font-medium relative py-1 ${
                      isActive
                        ? "text-[#0071e3]"
                        : "text-[#6e6e73] hover:text-[#1d1d1f]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#0071e3] rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:07919936046"
              className="text-[13px] font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
              aria-label="Call Capital Cleaners"
            >
              07919 936046
            </a>
            <a
              href="#contact"
              className="bg-[#0071e3] hover:bg-[#0077ed] active:bg-[#006edb] text-white text-[13px] font-medium px-4 py-1.5 rounded-full transition-colors"
            >
              Get a quote
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px] cursor-pointer bg-transparent border-none p-0"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`w-5 h-[1.5px] bg-[#1d1d1f] block transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#1d1d1f] block transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-5 h-[1.5px] bg-[#1d1d1f] block transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={close} />
        <div
          className={`absolute top-14 inset-x-0 bg-white/95 backdrop-blur-xl border-b border-black/8 transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <div className="px-6 py-4 flex flex-col gap-0">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="text-[17px] font-medium text-[#1d1d1f] py-4 border-b border-black/6 last:border-0"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
              <a
                href="tel:07919936046"
                className="text-[15px] font-medium text-[#0071e3] text-center py-3 border border-[#0071e3] rounded-xl"
                aria-label="Call Capital Cleaners"
              >
                Call 07919 936046
              </a>
              <a
                href="#contact"
                onClick={close}
                className="text-[15px] font-medium text-white text-center py-3 bg-[#0071e3] rounded-xl"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
