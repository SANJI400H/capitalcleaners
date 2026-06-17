"use client";

import { useState } from "react";

const contactItems = [
  { icon: "📞", label: "Phone", value: "07919 936046", href: "tel:07919936046" },
  { icon: "✉️", label: "Email", value: "capitalccleanersss@gmail.com", href: "mailto:capitalccleanersss@gmail.com" },
  { icon: "🎵", label: "TikTok", value: "@capital_cleaners", href: "https://www.tiktok.com/@capital_cleaners" },
];

const services = [
  "Domestic Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Move-In / Move-Out",
  "End of Tenancy",
  "General Property Cleaning",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contact" className="py-28 px-5 sm:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Get in touch</p>
          <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
            Let&apos;s get started
          </h2>
          <p className="text-[17px] text-[#6e6e73] mt-4 font-light">
            Reach out — we&apos;ll get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 bg-[#f5f5f7] hover:bg-[#e8e8ed] rounded-2xl px-6 py-5 transition-colors"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-[12px] text-[#a1a1a6] mb-0.5 uppercase tracking-wide font-medium">{label}</p>
                  <p className="text-[15px] font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">{value}</p>
                </div>
                <span className="ml-auto text-[#a1a1a6] group-hover:text-[#0071e3] transition-colors">›</span>
              </a>
            ))}

            <div className="mt-4 bg-[#f5f5f7] rounded-2xl px-6 py-6">
              <p className="text-[13px] text-[#6e6e73] leading-relaxed">
                We truly value the support of our clients and community. Recommendations and referrals are always greatly appreciated.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-[#f5f5f7] rounded-2xl p-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">First name</label>
                <input
                  type="text"
                  placeholder="Jane"
                  required
                  className="w-full bg-white border border-[#d2d2d7] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#a1a1a6] transition-all"
                />
              </div>
              <div>
                <label className="block text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Last name</label>
                <input
                  type="text"
                  placeholder="Smith"
                  required
                  className="w-full bg-white border border-[#d2d2d7] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#a1a1a6] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Email</label>
              <input
                type="email"
                placeholder="jane@example.com"
                required
                className="w-full bg-white border border-[#d2d2d7] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#a1a1a6] transition-all"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Phone</label>
              <input
                type="tel"
                placeholder="07700 000000"
                className="w-full bg-white border border-[#d2d2d7] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#a1a1a6] transition-all"
              />
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Service</label>
              <select
                required
                className="w-full bg-white border border-[#d2d2d7] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] transition-all"
              >
                <option value="">Select a service…</option>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-semibold text-[#6e6e73] uppercase tracking-wide mb-2">Message</label>
              <textarea
                rows={3}
                placeholder="Tell us about your property or preferred dates…"
                className="w-full bg-white border border-[#d2d2d7] focus:border-[#0071e3] focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 rounded-xl px-4 py-3 text-[15px] text-[#1d1d1f] placeholder:text-[#a1a1a6] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] text-white text-[15px] font-semibold py-4 rounded-xl transition-all"
            >
              Send enquiry
            </button>

            {submitted && (
              <p className="text-center text-[14px] text-[#34c759] font-medium">
                ✓ Thank you — we&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
