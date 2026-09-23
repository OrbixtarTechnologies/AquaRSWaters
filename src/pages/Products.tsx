import { Link } from "react-router-dom";

const categories = [
  {
    title: "Drinking Water",
    description: "Packaged and bulk drinking-water enquiries for home, office, or organizational requirements.",
  },
  {
    title: "Water Dispensers",
    description: "Contact our sales team for current dispenser options, availability, specifications, and pricing.",
  },
  {
    title: "Filtration Systems",
    description: "Enquiries related to domestic or commercial water filtration equipment and suitable configurations.",
  },
  {
    title: "Replacement Filters & Accessories",
    description: "Contact us regarding replacement cartridges, filters, and compatible accessories.",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-2">Product Enquiries</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>RS Waters Product Categories</h1>
          <p className="text-blue-100 mt-2 text-sm max-w-2xl">
            This page provides product-category information only. Please contact RS Waters for current stock, specifications, and pricing.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((item) => (
            <div key={item.title} className="bg-white border border-[#cce0f5] rounded-2xl p-7">
              <h2 className="text-xl font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{item.title}</h2>
              <p className="text-sm text-[#4a6080] leading-relaxed mb-5">{item.description}</p>
              <a
                href={`mailto:sales@rswaters.store?subject=${encodeURIComponent(`RS Waters enquiry: ${item.title}`)}`}
                className="inline-flex text-sm font-bold text-[#005fc5] hover:underline"
              >
                Ask Sales About This Category →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-[#080f1e] text-white rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div>
            <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-2">Current Availability</div>
            <h2 className="text-2xl font-black mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>Confirm before ordering</h2>
            <p className="text-sm text-[#8aa0b8] max-w-2xl">
              Product availability, pricing, delivery timing, and technical specifications can change. RS Waters will confirm these directly with you.
            </p>
          </div>
          <Link to="/contact" className="shrink-0 px-6 py-3 bg-[#005fc5] text-white rounded-lg text-sm font-bold hover:bg-[#004ea3] transition-colors">
            Contact RS Waters
          </Link>
        </div>
      </div>
    </div>
  );
}
