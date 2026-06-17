export default function CtaBanner() {
  return (
    <section
      className="py-20 px-6 text-white text-center"
      style={{ background: "linear-gradient(135deg, #0f2d6e, #1a56db)" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for a Spotless Space?
        </h2>
        <p className="text-white/80 text-lg mb-10">
          Contact us today for a free, no-obligation quote. Referrals are always greatly appreciated!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="tel:07919936046"
            className="bg-white text-blue-700 hover:bg-blue-50 px-7 py-4 rounded-xl font-bold text-sm transition-colors"
          >
            📞 Call 07919 936046
          </a>
          <a
            href="mailto:capitalccleanersss@gmail.com"
            className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-7 py-4 rounded-xl font-semibold text-sm transition-colors"
          >
            ✉️ Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
