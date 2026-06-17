const reasons = [
  { icon: "✦", title: "Reliable & punctual", description: "We show up on time, every time. Your schedule matters and we respect it fully." },
  { icon: "✦", title: "Attention to detail", description: "We don't cut corners — every surface, edge, and space receives the care it deserves." },
  { icon: "✦", title: "Transparent pricing", description: "No hidden fees or surprises. Clear quotes upfront so you always know what you're paying." },
  { icon: "✦", title: "Excellent communication", description: "Easy to reach, responsive, and always happy to discuss your specific requirements." },
];

const reviews = [
  {
    initials: "JM",
    name: "James M.",
    role: "Office Manager, London",
    text: "Absolutely brilliant service — our office has never looked this clean. Would highly recommend Capital Cleaners to anyone.",
  },
  {
    initials: "SR",
    name: "Sarah R.",
    role: "Tenant, UK",
    text: "Booked end of tenancy clean and got my full deposit back. Professional, thorough, and genuinely great value.",
  },
  {
    initials: "AP",
    name: "Alex P.",
    role: "Homeowner",
    text: "The deep clean they did on my house was incredible. Could not believe the difference. Will definitely be booking again.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-28 px-5 sm:px-8 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Why choose us</p>
          <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
            A service you can depend on
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {reasons.map(({ icon, title, description }) => (
            <div key={title} className="bg-white rounded-2xl p-8 flex gap-5">
              <span className="text-[#0071e3] text-xl mt-0.5 flex-shrink-0">{icon}</span>
              <div>
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-2 tracking-tight">{title}</h3>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-10">
          <p className="text-[19px] font-semibold text-[#1d1d1f]">What our clients say</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map(({ initials, name, role, text }) => (
            <div key={name} className="bg-white rounded-2xl p-7">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#f5a623] text-[15px]">★</span>
                ))}
              </div>
              <p className="text-[15px] text-[#1d1d1f] leading-relaxed mb-6 font-light">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#0071e3] text-white text-[12px] font-semibold flex items-center justify-center flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1d1d1f]">{name}</p>
                  <p className="text-[12px] text-[#a1a1a6]">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
