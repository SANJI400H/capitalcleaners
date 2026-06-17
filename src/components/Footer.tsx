import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/70 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-base">
                CC
              </div>
              <span className="text-white font-bold text-lg">
                Capital <span className="text-blue-400">Cleaners</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Delivering reliable, high-quality cleaning services with attention to detail and customer satisfaction at the heart of everything we do.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {[
                "Domestic Cleaning",
                "Office Cleaning",
                "Deep Cleaning",
                "End of Tenancy",
                "Move-In / Move-Out",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-white transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:07919936046" className="text-white/50 hover:text-white transition-colors">
                  📞 07919 936046
                </a>
              </li>
              <li>
                <a href="mailto:capitalccleanersss@gmail.com" className="text-white/50 hover:text-white transition-colors">
                  ✉️ capitalccleanersss@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@capital_cleaners"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  🎵 @capital_cleaners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Capital Cleaners. All rights reserved. United Kingdom.
          </p>
          <span className="bg-white/10 border border-white/15 text-white/50 px-4 py-1.5 rounded-full text-xs">
            🇬🇧 Serving the UK
          </span>
        </div>
      </div>
    </footer>
  );
}
