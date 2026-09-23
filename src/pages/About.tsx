export default function About() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">About RS Waters</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Water solutions made simpler</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            RS Waters serves households, offices, and business customers with drinking-water products, dispensers, filtration equipment, and related water-solution support.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 space-y-16">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-3">Our Approach</div>
            <h2 className="text-3xl font-black text-[#080f1e] mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>Start with the requirement, then find the right solution</h2>
            <p className="text-[#4a6080] leading-relaxed mb-4">
              Whether you need regular drinking-water supply, a dispenser for your office, or filtration equipment for a larger space, the right setup depends on where and how it will be used.
            </p>
            <p className="text-[#4a6080] leading-relaxed">
              Our team works directly with customers to understand the requirement, confirm availability for the relevant city, and guide the next step.
            </p>
          </div>
          <div
            className="h-80 rounded-2xl overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1606214554814-e8a9f97bdbb0?w=900&h=700&fit=crop&auto=format")' }}
          />
        </section>

        <section>
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">What We Focus On</div>
            <h2 className="text-3xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>Useful products. Clear communication. Practical support.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Everyday Water Needs", "Products and supply options for homes, offices, and routine requirements."],
              ["Filtration & Equipment", "Dispensers, RO systems, filters, and related equipment enquiries."],
              ["Business Requirements", "Direct discussion for bulk, recurring, commercial, or institutional needs."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white border border-[#cce0f5] rounded-xl p-7">
                <h3 className="font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                <p className="text-sm text-[#4a6080] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#e8f2ff] border border-[#cce0f5] rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Company Details</div>
              <h2 className="text-2xl font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>RS WATERS (PRIVATE) LIMITED</h2>
              <p className="text-sm text-[#4a6080] leading-relaxed">
                Established 10 November 2021. Head office: LDA 276, Shah Jamal Ichhra, Lahore, Pakistan.
              </p>
            </div>
            <a href="mailto:info@rswaters.store" className="px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm text-center">Contact the Team</a>
          </div>
        </section>
      </div>
    </div>
  );
}
