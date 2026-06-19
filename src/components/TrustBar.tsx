const items = [
  { icon: "✓", text: "Fully insured" },
  { icon: "✓", text: "Vetted & trusted team" },
  { icon: "✓", text: "Eco-friendly products" },
  { icon: "✓", text: "Flexible scheduling" },
  { icon: "✓", text: "Free quotes" },
  { icon: "✓", text: "5★ rated" },
];

export default function TrustBar() {
  return (
    <div
      className="bg-[#f5f5f7] border-b border-black/8 py-3 overflow-hidden"
      aria-label="Trust signals"
    >
      {/* Desktop: static row */}
      <div className="hidden sm:flex max-w-6xl mx-auto px-5 sm:px-8 items-center justify-center flex-wrap gap-x-8 gap-y-2">
        {items.map(({ icon, text }, i) => (
          <div key={text} className="flex items-center gap-2 text-[13px] text-[#6e6e73]">
            {i > 0 && <span className="text-[#d2d2d7]" aria-hidden="true">·</span>}
            <span className="text-[#0071e3] font-semibold" aria-hidden="true">{icon}</span>
            {text}
          </div>
        ))}
      </div>

      {/* Mobile: scrolling marquee */}
      <div className="sm:hidden flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 gap-8 pr-8">
          {[...items, ...items].map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 text-[13px] text-[#6e6e73] whitespace-nowrap">
              <span className="text-[#0071e3] font-semibold" aria-hidden="true">{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
