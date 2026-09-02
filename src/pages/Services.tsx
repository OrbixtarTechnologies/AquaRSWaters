import { Link } from "react-router-dom";

const services = [
  {
    icon: "🏠",
    title: "Home Water Delivery",
    desc: "Regular delivery of 19L mineral water gallons directly to your home. Choose from daily, weekly, or custom schedules.",
    points: ["Same-day delivery available", "Subscription plans", "Free first delivery", "SMS reminders"],
  },
  {
    icon: "🏢",
    title: "Office & Corporate Supply",
    desc: "Bulk water supply for offices with dedicated account management and priority delivery.",
    points: ["Bulk gallon supply", "Dispenser rental option", "Monthly billing", "Priority support line"],
  },
  {
    icon: "🏭",
    title: "Industrial & Plant Supply",
    desc: "Large-scale water supply for factories, manufacturing plants, and industrial facilities.",
    points: ["Tanker-load delivery", "Custom contracts", "Quality certificates", "Scheduled delivery"],
  },
  {
    icon: "🔧",
    title: "RO System Installation",
    desc: "Professional installation of Reverse Osmosis filtration systems for homes and commercial spaces.",
    points: ["Survey & consultation", "Certified technicians", "1-year warranty", "Annual maintenance plans"],
  },
  {
    icon: "🧪",
    title: "Water Quality Testing",
    desc: "Comprehensive water quality analysis — TDS, pH, bacteria, heavy metals, and mineral content.",
    points: ["On-site lab testing", "Detailed reports", "Actionable recommendations", "PSQCA standards"],
  },
  {
    icon: "❄️",
    title: "Water Dispenser Sales & Rental",
    desc: "Hot & cold water dispensers for home and office. Available for outright purchase or monthly rental.",
    points: ["Top-loading models", "Hot, cold & ambient", "Maintenance included", "19L compatible"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">What We Do</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            Our Services
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            From home delivery to industrial supply — AquaRS is your complete water solution partner in Pakistan.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white border border-[#cce0f5] rounded-xl p-6 hover:shadow-lg hover:border-[#005fc5]/40 transition-all group">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{s.title}</h3>
              <p className="text-sm text-[#4a6080] leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-[#4a6080]">
                    <span className="w-4 h-4 shrink-0 rounded-full bg-[#e8f2ff] flex items-center justify-center">
                      <svg width="7" height="7" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#005fc5" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* B2B CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#080f1e] to-[#0d1929] rounded-2xl p-10 text-white text-center">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">Get a Quote</div>
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Need a Custom Solution?</h2>
          <p className="text-[#8aa0b8] max-w-lg mx-auto mb-6 text-sm">
            We work with factories, hospitals, schools, and real estate developers. Contact us for a tailored proposal and pricing.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm">
              Get a Free Quote
            </Link>
            <a href="tel:03117792837" className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">
              📞 Call Us Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
