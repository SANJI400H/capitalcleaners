export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-14 bg-white overflow-hidden"
      aria-label="Capital Cleaners — professional cleaning services UK"
    >
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,113,227,0.08),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d2d2d7]/60 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 bg-[#0071e3]/8 border border-[#0071e3]/15 text-[#0071e3] text-[12px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] animate-pulse" aria-hidden="true" />
          Professional Cleaning Services — United Kingdom
        </div>

        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1d1d1f] mb-6">
          Every space,{" "}
          <span className="text-[#0071e3] relative">
            spotless.
            <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#0071e3]/20 rounded-full" aria-hidden="true" />
          </span>
        </h1>

        <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Trusted domestic &amp; commercial cleaning services across the UK —
          deep cleaning, end of tenancy, office cleaning &amp; more. Vetted, insured, and free quotes always.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] text-white text-[17px] font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-[#0071e3]/25 hover:shadow-[#0071e3]/40"
          >
            Get a free quote
          </a>
          <a
            href="tel:07919936046"
            className="w-full sm:w-auto border border-[#d2d2d7] hover:border-[#0071e3] bg-white text-[#1d1d1f] hover:text-[#0071e3] text-[17px] font-semibold px-8 py-4 rounded-full transition-all duration-200"
            aria-label="Call Capital Cleaners on 07919 936046"
          >
            07919 936046
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16 border-t border-[#f5f5f7] pt-12">
          {[
            { num: "6+", label: "Service types" },
            { num: "100%", label: "Satisfaction guaranteed" },
            { num: "5★", label: "Rated by clients" },
          ].map(({ num, label }) => (
            <div key={label} className="group cursor-default">
              <div className="text-[32px] sm:text-[40px] font-bold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors duration-300">
                {num}
              </div>
              <div className="text-[13px] sm:text-[15px] text-[#6e6e73] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
