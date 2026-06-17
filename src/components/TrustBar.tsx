const items = [
  { icon: "✓", text: "Fully Insured" },
  { icon: "🔒", text: "Vetted & Trusted Team" },
  { icon: "🌿", text: "Eco-Friendly Products" },
  { icon: "⚡", text: "Flexible Scheduling" },
  { icon: "💬", text: "Free Quotes" },
];

export default function TrustBar() {
  return (
    <div className="bg-blue-50 border-b border-blue-100 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map(({ icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-blue-800 text-sm font-medium">
            <span className="w-7 h-7 bg-blue-600 text-white rounded-md flex items-center justify-center text-xs font-bold">
              {icon}
            </span>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
