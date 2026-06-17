const services = [
  { icon: "🏠", title: "Domestic Cleaning", description: "Regular home cleaning tailored to your schedule. Kitchens, bathrooms, bedrooms — everything kept pristine." },
  { icon: "🏢", title: "Office Cleaning", description: "Professional workplace cleaning before or after office hours to keep your team in a healthy environment." },
  { icon: "🧹", title: "Deep Cleaning", description: "A thorough top-to-bottom clean covering every nook and cranny. Perfect for a serious seasonal refresh." },
  { icon: "📦", title: "Move-In / Move-Out", description: "Starting fresh or leaving a property? We'll make sure it's spotless for the next chapter." },
  { icon: "🔑", title: "End of Tenancy", description: "Meet landlord and agency standards with our comprehensive end-of-tenancy clean. Get your deposit back." },
  { icon: "🏗️", title: "General Property", description: "Flexible cleaning for commercial units, communal areas, and any space that needs professional attention." },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-5 sm:px-8 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold tracking-widest text-[#0071e3] uppercase mb-4">What we offer</p>
          <h2 className="text-[40px] sm:text-[52px] font-bold tracking-[-0.02em] text-[#1d1d1f] leading-tight">
            Our services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-3xl mb-5">{icon}</div>
              <h3 className="text-[19px] font-semibold text-[#1d1d1f] mb-3 tracking-tight">{title}</h3>
              <p className="text-[15px] text-[#6e6e73] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
