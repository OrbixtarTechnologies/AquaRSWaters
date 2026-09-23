const serviceAreas = ["Lahore", "Islamabad", "Multan", "Peshawar", "Quetta", "Faisalabad"];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Official Contact</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Contact RS Waters</h1>
          <p className="text-blue-100 mt-2">Reach RS WATERS (PRIVATE) LIMITED directly through the channels below.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-black text-[#080f1e] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Company Contact Details
            </h2>

            <div className="space-y-4">
              <a href="tel:+923117792837" className="block p-5 bg-white border border-[#cce0f5] rounded-xl hover:border-[#005fc5]/50 transition-colors">
                <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">Phone & WhatsApp</div>
                <div className="font-semibold text-[#080f1e]">0311-779-2837</div>
              </a>

              <a href="mailto:info@rswaters.store" className="block p-5 bg-white border border-[#cce0f5] rounded-xl hover:border-[#005fc5]/50 transition-colors">
                <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">General Enquiries</div>
                <div className="font-semibold text-[#080f1e]">info@rswaters.store</div>
              </a>

              <a href="mailto:info@rswaters.store" className="block p-5 bg-white border border-[#cce0f5] rounded-xl hover:border-[#005fc5]/50 transition-colors">
                <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">Business Enquiries</div>
                <div className="font-semibold text-[#080f1e]">info@rswaters.store</div>
              </a>

              <div className="p-5 bg-white border border-[#cce0f5] rounded-xl">
                <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-1">Head Office</div>
                <address className="font-semibold text-[#080f1e] not-italic">
                  LDA 276, Shah Jamal Ichhra, Lahore, Pakistan
                </address>
                <div className="text-xs text-[#4a6080] mt-2">RS WATERS (PRIVATE) LIMITED</div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-[#cce0f5] rounded-2xl p-8">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Coverage</div>
            <h2 className="text-2xl font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
              Listed Service Areas
            </h2>
            <p className="text-sm text-[#4a6080] leading-relaxed mb-6">
              Current service coverage listed by RS Waters includes the following cities. Contact our team to confirm product
              or service availability for your specific address.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.map((city) => (
                <div key={city} className="px-4 py-3 bg-[#f0f7ff] border border-[#cce0f5] rounded-lg text-sm font-semibold text-[#080f1e]">
                  {city}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-[#080f1e] text-white p-6">
              <div className="text-sm font-bold mb-2">Need product or service information?</div>
              <p className="text-sm text-[#8aa0b8] mb-4">
                Email our sales team and include your city, required product or service, and preferred contact number.
              </p>
              <a
                href="mailto:info@rswaters.store?subject=RS%20Waters%20Sales%20Enquiry"
                className="inline-flex px-5 py-2.5 bg-[#005fc5] rounded-lg text-sm font-bold hover:bg-[#004ea3] transition-colors"
              >
                Email RS Waters
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
