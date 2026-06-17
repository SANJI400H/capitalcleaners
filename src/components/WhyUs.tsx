const reasons = [
  {
    icon: "✅",
    title: "Reliable & Punctual",
    description: "We show up on time, every time. Your schedule matters and we respect it fully.",
  },
  {
    icon: "🧼",
    title: "Attention to Detail",
    description: "We don't cut corners — every surface, edge, and space receives the care it deserves.",
  },
  {
    icon: "💷",
    title: "Transparent Pricing",
    description: "No hidden fees or surprises. Clear quotes upfront so you always know what you're paying.",
  },
  {
    icon: "💬",
    title: "Excellent Communication",
    description: "Easy to reach, responsive, and always happy to discuss your specific requirements.",
  },
];

const reviews = [
  {
    initials: "JM",
    name: "James M.",
    role: "Office Manager, London",
    text: "Absolutely brilliant service — our office has never looked this clean. Would highly recommend Capital Cleaners to anyone!",
    color: "bg-blue-600",
  },
  {
    initials: "SR",
    name: "Sarah R.",
    role: "Tenant, UK",
    text: "Booked end of tenancy clean — got my full deposit back. Professional, thorough, and great value.",
    color: "bg-teal-600",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            A Service You Can Always Depend On
          </h2>
          <div className="flex flex-col gap-6">
            {reasons.map(({ icon, title, description }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-11 h-11 min-w-11 bg-emerald-100 rounded-xl flex items-center justify-center text-xl">
                  {icon}
                </div>
                <div>
                  <h4 className="font-semibold text-base mb-1">{title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 flex flex-col gap-5 items-center">
          {reviews.map(({ initials, name, role, text, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-5 shadow-md max-w-xs w-full"
            >
              <div className="text-yellow-400 text-base mb-2">★★★★★</div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${color} text-white flex items-center justify-center text-xs font-semibold`}>
                  {initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs text-gray-400">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
