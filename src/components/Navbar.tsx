"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#our-work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm"
            : "bg-white/70 backdrop-blur-xl border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-[#0071e3] rounded-lg flex items-center justify-center text-white font-bold text-xs tracking-tight">
              CC
            </div>
            <span className="text-[15px] font-semibold text-[#1d1d1f] tracking-tight">
              Capital Cleaners
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-7 list-none">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors duration-200 font-medium"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:07919936046"
              className="text-[13px] font-medium text-[#0071e3] hover:text-[#0077ed] transition-colors"
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
            aria-label="Toggle menu"
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
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-14 inset-x-0 bg-white/95 backdrop-blur-xl border-b border-black/8 transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <div className="px-6 py-4 flex flex-col gap-0">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[17px] font-medium text-[#1d1d1f] py-4 border-b border-black/6 last:border-0"
              >
                {label}
              </a>
            ))}
            <div className="pt-4 pb-2 flex flex-col gap-3">
              <a
                href="tel:07919936046"
                className="text-[15px] font-medium text-[#0071e3] text-center py-3 border border-[#0071e3] rounded-xl"
              >
                Call 07919 936046
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
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
