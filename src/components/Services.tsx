const services = [
  {
    icon: "🏠",
    title: "Domestic Cleaning",
    description:
      "Regular home cleaning tailored to your schedule. Kitchens, bathrooms, bedrooms. Everything kept pristine. Weekly, fortnightly, or one-off cleans available.",
    tag: "Most popular",
  },
  {
    icon: "🏢",
    title: "Office Cleaning",
    description:
      "Professional commercial cleaning before or after office hours. Keep your workplace hygienic and your team in a healthy, productive environment.",
    tag: null,
  },
  {
    icon: "🧹",
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom deep clean covering every nook and cranny. Ideal for a seasonal refresh, post-renovation, or moving into a new home.",
    tag: null,
  },
  {
    icon: "📦",
    title: "Move-In / Move-Out",
    description:
      "Starting fresh or vacating a property? Our move-in and move-out cleaning service ensures the space is spotless from day one.",
    tag: null,
  },
  {
    icon: "🔑",
    title: "End of Tenancy",
    description:
      "Our comprehensive end-of-tenancy clean meets landlord and letting agency standards, giving you the best chance of getting your full deposit back.",
    tag: "Deposit guarantee",
  },
  {
    icon: "🏗️",
    title: "General Property",
    description:
      "Flexible residential and commercial property cleaning. Communal areas, vacant units, shared spaces and anywhere that needs a professional touch.",
    tag: null,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-5 sm:px-8 bg-[#f5f5f7]" aria-label="Our cleaning services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-4">What we offer</p>
          <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
            Our cleaning services
          </h2>
          <p className="text-[17px] text-[#6e6e73] mt-4 font-light max-w-xl mx-auto">
            Professional cleaning solutions for homes and businesses across the UK, all at affordable, transparent prices.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none m-0 p-0">
          {services.map(({ icon, title, description, tag }) => (
            <li key={title}>
              <a
                href="#contact"
                className="group flex flex-col h-full bg-white rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                aria-label={`${title} — get a free quote`}
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3]/0 to-[#0071e3]/0 group-hover:from-[#0071e3]/[0.03] group-hover:to-transparent transition-all duration-300 rounded-2xl pointer-events-none" />

                {tag && (
                  <span className="self-start mb-4 text-[11px] font-semibold tracking-wide uppercase text-[#0071e3] bg-[#0071e3]/8 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                )}

                <div className="text-3xl mb-5" aria-hidden="true">{icon}</div>
                <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3 tracking-tight group-hover:text-[#0071e3] transition-colors duration-200">
                  {title}
                </h3>
                <p className="text-[15px] text-[#6e6e73] leading-relaxed flex-1">{description}</p>
                <p className="text-[13px] font-semibold text-[#0071e3] mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Get a free quote →
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
