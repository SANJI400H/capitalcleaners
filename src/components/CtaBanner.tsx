export default function CtaBanner() {
  return (
    <section className="py-28 px-5 sm:px-8 bg-[#1d1d1f] text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] leading-tight mb-5">
          Ready for a spotless space?
        </h2>
        <p className="text-[19px] text-white/60 font-light mb-10 max-w-lg mx-auto">
          Contact us today for a free, no-obligation quote. Referrals are always greatly appreciated.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:07919936046"
            className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#1d1d1f] text-[17px] font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Call 07919 936046
          </a>
          <a
            href="mailto:capitalccleanersss@gmail.com"
            className="w-full sm:w-auto border border-white/20 hover:border-white/40 text-white text-[17px] font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  );
}
