const serviceAreas = ["Lahore", "Islamabad", "Multan", "Peshawar", "Quetta", "Faisalabad"];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <section className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Get in Touch</div>
          <h1 className="text-4xl md:text-5xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>How can we help?</h1>
          <p className="text-blue-100 mt-3 max-w-xl mx-auto">For product availability, orders, water-solution enquiries, or business requirements, contact RS Waters directly.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <a href="tel:+923117792837" className="block p-6 bg-white border border-[#cce0f5] rounded-xl hover:shadow-md hover:border-[#005fc5]/40 transition-all">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">Call</div>
            <div className="text-lg font-black text-[#080f1e]">0311-779-2837</div>
            <div className="text-sm text-[#4a6080] mt-1">Talk to our team about products, supply, or service requirements.</div>
          </a>

          <a href="https://wa.me/923117792837" target="_blank" rel="noreferrer" className="block p-6 bg-white border border-[#cce0f5] rounded-xl hover:shadow-md hover:border-[#005fc5]/40 transition-all">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">WhatsApp</div>
            <div className="text-lg font-black text-[#080f1e]">Message RS Waters</div>
            <div className="text-sm text-[#4a6080] mt-1">Send your city and requirement for a quicker response.</div>
          </a>

          <a href="mailto:info@rswaters.store" className="block p-6 bg-white border border-[#cce0f5] rounded-xl hover:shadow-md hover:border-[#005fc5]/40 transition-all">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">Email</div>
            <div className="text-lg font-black text-[#080f1e]">info@rswaters.store</div>
            <div className="text-sm text-[#4a6080] mt-1">For general, sales, and business enquiries.</div>
          </a>
        </div>

        <div className="bg-white border border-[#cce0f5] rounded-2xl p-8">
          <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Where We Serve</div>
          <h2 className="text-2xl font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Selected service cities</h2>
          <p className="text-sm text-[#4a6080] leading-relaxed mb-6">Availability can vary by product and requirement. Contact us with your exact area before placing an order.</p>
          <div className="grid grid-cols-2 gap-3 mb-8">
            {serviceAreas.map((city) => <div key={city} className="px-4 py-3 bg-[#f0f7ff] border border-[#cce0f5] rounded-lg text-sm font-semibold text-[#080f1e]">{city}</div>)}
          </div>

          <div className="border-t border-[#eef4fb] pt-6">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-2">Head Office</div>
            <address className="not-italic font-semibold text-[#080f1e] leading-relaxed">LDA 276, Shah Jamal Ichhra,<br/>Lahore, Pakistan</address>
            <div className="text-xs text-[#4a6080] mt-2">RS WATERS (PRIVATE) LIMITED</div>
          </div>
        </div>
      </div>
    </div>
  );
}
