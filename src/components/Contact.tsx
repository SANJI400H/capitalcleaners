"use client";

import { useState } from "react";

const contactItems = [
  {
    icon: "📞",
    bg: "bg-blue-600",
    label: "Phone",
    value: "07919 936046",
    href: "tel:07919936046",
  },
  {
    icon: "✉️",
    bg: "bg-blue-600",
    label: "Email",
    value: "capitalccleanersss@gmail.com",
    href: "mailto:capitalccleanersss@gmail.com",
  },
  {
    icon: "🎵",
    bg: "bg-gray-900",
    label: "TikTok",
    value: "@capital_cleaners",
    href: "https://www.tiktok.com/@capital_cleaners",
  },
];

const serviceOptions = [
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
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 max-w-xs">
            Let&apos;s Get Your Space Cleaned
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Reach out via any of the options below — we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-4">
            {contactItems.map(({ icon, bg, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-xl p-4 transition-colors group"
              >
                <div className={`w-11 h-11 min-w-11 ${bg} rounded-xl flex items-center justify-center text-lg`}>
                  {icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-0.5">{label}</div>
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                    {value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://www.tiktok.com/@capital_cleaners"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 hover:border-blue-400 hover:text-blue-600 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              🎵 Follow us on TikTok
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-1">Request a Free Quote</h3>
          <p className="text-gray-400 text-sm mb-6">
            Fill in the form and we&apos;ll get back to you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  required
                  className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jane@example.com"
                required
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="07700 000000"
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Service Required
              </label>
              <select
                required
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">
                Additional Details
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your property, preferred dates, or any special requirements…"
                className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              Send Enquiry →
            </button>

            {submitted && (
              <p className="text-emerald-600 text-sm font-medium text-center">
                ✅ Thank you! We&apos;ll be in touch shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
