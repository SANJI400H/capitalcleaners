const items = [
  "Fully insured",
  "Vetted & trusted team",
  "Eco-friendly products",
  "Flexible scheduling",
  "Free quotes",
];

export default function TrustBar() {
  return (
    <div className="bg-[#f5f5f7] border-b border-black/8 py-3.5 px-5 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-2 text-[13px] text-[#6e6e73]">
            {i > 0 && <span className="hidden sm:block text-[#d2d2d7]">·</span>}
            <span className="text-[#0071e3] font-semibold">✓</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
