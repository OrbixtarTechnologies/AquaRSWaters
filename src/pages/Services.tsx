import { Link } from "react-router-dom";

const services = [
  {
    title: "Home Water Delivery",
    desc: "Drinking-water supply for household requirements, with availability confirmed for your area.",
    points: ["19L gallon enquiries", "Recurring requirements", "Home & apartment supply"],
  },
  {
    title: "Office & Corporate Supply",
    desc: "Water supply options for offices and organizations requiring regular or larger quantities.",
    points: ["Bulk requirements", "Office supply", "Business enquiries"],
  },
  {
    title: "Industrial & Commercial Supply",
    desc: "Discuss larger-volume water requirements for commercial and industrial environments.",
    points: ["Custom requirements", "Scheduled supply enquiries", "Commercial coordination"],
  },
  {
    title: "RO & Filtration Systems",
    desc: "Filtration equipment enquiries for domestic, office, and commercial applications.",
    points: ["RO systems", "Replacement filters", "Installation enquiries"],
  },
  {
    title: "Water Dispensers",
    desc: "Hot and cold water dispenser options for home and office use.",
    points: ["Product availability", "Model selection", "Accessory enquiries"],
  },
  {
    title: "Water-Solution Consultation",
    desc: "Not sure what setup fits your space? Contact our team with your requirement and location.",
    points: ["Requirement review", "Product guidance", "Direct support"],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="relative bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">What We Do</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Water Solutions for Home & Business</h1>
          <p className="text-blue-100 text-base max-w-xl mx-auto">From everyday supply to filtration equipment and commercial requirements, talk to RS Waters about the right option for your needs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={service.title} className="bg-white border border-[#cce0f5] rounded-xl p-6 hover:shadow-lg hover:border-[#005fc5]/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-[#e8f2ff] text-[#005fc5] flex items-center justify-center font-black mb-4">{String(index + 1).padStart(2, "0")}</div>
              <h2 className="text-lg font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{service.title}</h2>
              <p className="text-sm text-[#4a6080] leading-relaxed mb-4">{service.desc}</p>
              <ul className="space-y-1.5">
                {service.points.map((point) => <li key={point} className="text-sm text-[#4a6080] flex gap-2"><span className="text-[#005fc5]">✓</span>{point}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#080f1e] to-[#0d1929] rounded-2xl p-10 text-white grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">Business & Bulk</div>
            <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Tell us what you need</h2>
            <p className="text-[#8aa0b8] max-w-2xl text-sm">Share your city, expected quantity, and type of requirement. Our team will confirm the available options and commercial details.</p>
          </div>
          <Link to="/contact" className="px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm text-center">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
