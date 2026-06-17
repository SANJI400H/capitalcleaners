export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 pt-14 bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,113,227,0.07),transparent)]" />

      <div className="relative max-w-4xl mx-auto">
        <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-6">
          Professional Cleaning — United Kingdom
        </p>

        <h1 className="text-[48px] sm:text-[64px] md:text-[80px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1d1d1f] mb-6">
          Every space,{" "}
          <span className="text-[#0071e3]">spotless.</span>
        </h1>

        <p className="text-[19px] sm:text-[21px] text-[#6e6e73] max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Reliable cleaning services for homes and businesses across the UK.
          Attention to detail, every single time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] text-white text-[17px] font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            Get a free quote
          </a>
          <a
            href="tel:07919936046"
            className="w-full sm:w-auto border border-[#d2d2d7] hover:border-[#0071e3] text-[#1d1d1f] hover:text-[#0071e3] text-[17px] font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            07919 936046
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16 border-t border-[#f5f5f7] pt-12">
          {[
            { num: "6+", label: "Service types" },
            { num: "100%", label: "Satisfaction guaranteed" },
            { num: "5★", label: "Rated by clients" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="text-[32px] sm:text-[40px] font-bold tracking-tight text-[#1d1d1f]">{num}</div>
              <div className="text-[13px] sm:text-[15px] text-[#6e6e73] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
