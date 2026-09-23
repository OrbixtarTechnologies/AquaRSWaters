import { Link } from "react-router-dom";

const enquiries = [
  {
    title: "Home & Office Water Supply",
    description: "Contact RS Waters to ask about drinking-water supply options available for your area and required quantity.",
  },
  {
    title: "Corporate & Bulk Requirements",
    description: "Businesses and organizations can contact our team to discuss recurring or larger-volume requirements.",
  },
  {
    title: "Water Dispenser Enquiries",
    description: "Ask our team about currently available dispenser models, specifications, and commercial terms.",
  },
  {
    title: "Filtration System Enquiries",
    description: "Contact us to discuss your filtration requirement and the type of setup you are considering.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Service Enquiries</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            How RS Waters Can Help
          </h1>
          <p className="text-blue-100 text-base max-w-xl mx-auto">
            Tell us what you need and where you are located. Our team will confirm the applicable product or service options.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {enquiries.map((item) => (
            <div key={item.title} className="bg-white border border-[#cce0f5] rounded-xl p-7">
              <h2 className="text-lg font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{item.title}</h2>
              <p className="text-sm text-[#4a6080] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-br from-[#080f1e] to-[#0d1929] rounded-2xl p-10 text-white text-center">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Business Enquiries</div>
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Discuss your requirement directly</h2>
          <p className="text-[#8aa0b8] max-w-xl mx-auto mb-6 text-sm">
            Include your city, expected quantity or requirement, and preferred contact number so our team can respond accurately.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="mailto:sales@rswaters.store?subject=RS%20Waters%20Service%20Enquiry" className="px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm">
              Email Sales
            </a>
            <Link to="/contact" className="px-6 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">
              Contact Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
