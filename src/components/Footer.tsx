import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-black/8 px-5 sm:px-8 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-[#0071e3] rounded-lg flex items-center justify-center text-white font-bold text-xs">CC</div>
              <span className="text-[15px] font-semibold text-[#1d1d1f] tracking-tight">Capital Cleaners</span>
            </Link>
            <p className="text-[13px] text-[#6e6e73] leading-relaxed max-w-xs">
              Delivering reliable, high-quality cleaning services across the UK with attention to detail and customer satisfaction.
            </p>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              {["Domestic Cleaning", "Office Cleaning", "Deep Cleaning", "End of Tenancy", "Move-In / Move-Out"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold text-[#1d1d1f] uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href="tel:07919936046" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">07919 936046</a></li>
              <li><a href="mailto:capitalccleanersss@gmail.com" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">capitalccleanersss@gmail.com</a></li>
              <li>
                <a href="https://www.tiktok.com/@capital_cleaners" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
                  TikTok — @capital_cleaners
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-[#a1a1a6]">
            © {new Date().getFullYear()} Capital Cleaners. All rights reserved.
          </p>
          <p className="text-[12px] text-[#a1a1a6]">🇬🇧 United Kingdom</p>
        </div>
      </div>
    </footer>
  );
}
