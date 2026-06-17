export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden text-white text-center px-6 py-24 md:py-36"
      style={{
        background: "linear-gradient(135deg, #0f2d6e 0%, #1a56db 60%, #0d9e75 100%)",
      }}
    >
      {/* subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <span className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
          ✨ Trusted Cleaning Professionals — United Kingdom
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
          We Leave Every Space{" "}
          <span className="text-emerald-300">Spotless &amp; Fresh</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-10 leading-relaxed">
          Professional, reliable cleaning services for homes and businesses
          across the UK. Attention to detail, every single time.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-blue-700 hover:bg-blue-50 px-7 py-4 rounded-xl font-bold text-sm transition-colors"
          >
            📋 Get a Free Quote
          </a>
          <a
            href="tel:07919936046"
            className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-7 py-4 rounded-xl font-semibold text-sm transition-colors"
          >
            📞 07919 936046
          </a>
        </div>

        <div className="flex flex-wrap gap-10 justify-center mt-16">
          {[
            { num: "100%", label: "Satisfaction Guaranteed" },
            { num: "6+", label: "Service Types" },
            { num: "⭐ 5-Star", label: "Rated Service" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-bold">{num}</div>
              <div className="text-white/60 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
