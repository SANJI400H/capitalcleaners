"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-base">
            CC
          </div>
          <span className="text-gray-900 font-bold text-lg">
            Capital <span className="text-blue-600">Cleaners</span>
          </span>
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: "Services", href: "#services" },
            { label: "Our Work", href: "#our-work" },
            { label: "Why Us", href: "#why-us" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:07919936046"
          className="hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
        >
          📞 Call Us
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer bg-transparent border-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 block transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 block transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 block transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 pb-4 flex flex-col gap-3">
          {[
              { label: "Services", href: "#services" },
              { label: "Our Work", href: "#our-work" },
              { label: "Why Us", href: "#why-us" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-gray-800 font-medium py-2 border-b border-gray-100 text-sm"
              >
                {label}
              </a>
            ))}
          <a href="tel:07919936046" className="text-blue-600 font-semibold text-sm py-2">
            📞 07919 936046
          </a>
        </div>
      )}
    </nav>
  );
}
