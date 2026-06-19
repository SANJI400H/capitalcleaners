const reasons = [
  {
    icon: "✦",
    title: "Reliable & punctual",
    description:
      "We show up on time, every time. As a trusted cleaning company across the UK, your schedule matters and we respect it fully.",
  },
  {
    icon: "✦",
    title: "Fully insured & vetted",
    description:
      "Every member of our team is fully vetted and we carry comprehensive insurance — so you can book with complete peace of mind.",
  },
  {
    icon: "✦",
    title: "Eco-friendly products",
    description:
      "We use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment — without sacrificing results.",
  },
  {
    icon: "✦",
    title: "Transparent, affordable pricing",
    description:
      "No hidden fees or surprises. Clear, affordable quotes upfront — and free, no-obligation estimates for every job.",
  },
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
    <section id="why-us" className="py-28 px-5 sm:px-8 bg-[#f5f5f7]" aria-label="Why choose Capital Cleaners">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-4">Why choose us</p>
          <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
            A cleaning company you can depend on
          </h2>
          <p className="text-[17px] text-[#6e6e73] mt-4 font-light max-w-xl mx-auto">
            Vetted, insured, and 5-star rated — Capital Cleaners is the reliable choice for professional cleaning services near you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-20">
          {reasons.map(({ icon, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-8 flex gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className="text-[#0071e3] text-xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                {icon}
              </span>
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
          <div className="flex items-center justify-center gap-0.5 mt-2" aria-label="5 stars out of 5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#f5a623] text-[18px]" aria-hidden="true">★</span>
            ))}
            <span className="ml-2 text-[13px] text-[#6e6e73] font-medium">5.0 · 3 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reviews.map(({ initials, name, role, text }) => (
            <figure
              key={name}
              className="bg-white rounded-2xl p-7 relative hover:shadow-lg transition-shadow duration-300"
            >
              {/* Large decorative quote mark */}
              <span
                className="absolute top-5 right-6 text-[64px] leading-none text-[#f5f5f7] font-serif select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="flex gap-0.5 mb-4" aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#f5a623] text-[14px]" aria-hidden="true">★</span>
                ))}
              </div>

              <blockquote className="text-[15px] text-[#1d1d1f] leading-relaxed mb-6 font-light relative z-10">
                &ldquo;{text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full bg-[#0071e3] text-white text-[12px] font-semibold flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  {initials}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-[#1d1d1f]">{name}</p>
                  <p className="text-[12px] text-[#a1a1a6]">{role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
