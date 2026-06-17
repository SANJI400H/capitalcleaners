const services = [
  {
    icon: "🏠",
    bg: "bg-blue-50",
    title: "Domestic Cleaning",
    description:
      "Regular home cleaning tailored to your schedule. Kitchens, bathrooms, bedrooms — everything kept pristine and fresh for everyday living.",
  },
  {
    icon: "🏢",
    bg: "bg-green-50",
    title: "Office Cleaning",
    description:
      "Professional workplace cleaning to maintain a healthy, productive environment. Before or after office hours to suit your business.",
  },
  {
    icon: "🧹",
    bg: "bg-amber-50",
    title: "Deep Cleaning",
    description:
      "A thorough top-to-bottom clean covering every nook and cranny. Perfect for properties that need a serious refresh or seasonal reset.",
  },
  {
    icon: "📦",
    bg: "bg-indigo-50",
    title: "Move-In / Move-Out",
    description:
      "Starting fresh in a new home or leaving one behind? We'll make sure it's spotless for the next chapter — stress-free moving made easy.",
  },
  {
    icon: "🔑",
    bg: "bg-pink-50",
    title: "End of Tenancy",
    description:
      "Comprehensive end-of-tenancy cleans to meet landlord and letting agency standards — helping you secure that deposit back.",
  },
  {
    icon: "🏗️",
    bg: "bg-teal-50",
    title: "General Property Cleaning",
    description:
      "Flexible property cleaning for any space or situation. Commercial units, communal areas, and everything in between.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
          What We Offer
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services</h2>
        <p className="text-gray-500 text-lg max-w-lg mb-12">
          From regular domestic cleans to specialist deep cleans — we&apos;ve got every corner covered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon, bg, title, description }) => (
            <div
              key={title}
              className="border border-gray-200 rounded-2xl p-7 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-default"
            >
              <div className={`w-14 h-14 ${bg} rounded-xl flex items-center justify-center text-2xl mb-5`}>
                {icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
