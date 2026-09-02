export default function About() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* Hero */}
      <div className="relative bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=1400&h=500&fit=crop&auto=format")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">Our Story</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>About AquaRS</h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto">
            Born out of a vision to provide every Pakistani household with access to certified pure water.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        {/* Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-3">The Beginning</div>
            <h2 className="text-3xl font-black text-[#080f1e] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
              Purity Is Our Promise
            </h2>
            <p className="text-[#4a6080] leading-relaxed mb-4">
              AquaRS was founded under RS Waters Private Limited with a single mission: to make safe, clean, and mineral-rich water accessible to every home, office, and factory in Pakistan.
            </p>
            <p className="text-[#4a6080] leading-relaxed mb-4">
              Over the years, we've grown from a local delivery service into a comprehensive water solutions company — offering everything from 500ml bottles to industrial filtration plant installations.
            </p>
            <p className="text-[#4a6080] leading-relaxed">
              We are proud to be backed by RS Waters Private Limited, a trusted name in the water industry, ensuring the highest standards in quality control and customer service.
            </p>
          </div>
          <div
            className="h-72 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1606214554814-e8a9f97bdbb0?w=700&h=500&fit=crop&auto=format")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "2014", label: "Founded" },
            { val: "50,000+", label: "Customers Served" },
            { val: "20+", label: "Cities" },
            { val: "99.9%", label: "Purity Rate" },
          ].map((s) => (
            <div key={s.label} className="bg-white border border-[#cce0f5] rounded-xl p-6 text-center">
              <div className="text-3xl font-black text-[#005fc5] mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{s.val}</div>
              <div className="text-sm text-[#4a6080]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Our Values</div>
            <h2 className="text-3xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>
              What We Stand For
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "💎",
                title: "Quality First",
                desc: "Every product we sell undergoes rigorous multi-stage testing. Our water meets and exceeds PSQCA standards.",
              },
              {
                icon: "🤝",
                title: "Trust & Transparency",
                desc: "We believe in honest pricing, clear policies, and no hidden charges. What you see is what you get.",
              },
              {
                icon: "🌿",
                title: "Sustainability",
                desc: "We invest in eco-friendly packaging, reusable gallons, and energy-efficient filtration to protect Pakistan's future.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white border border-[#cce0f5] rounded-xl p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{v.title}</h3>
                <p className="text-sm text-[#4a6080] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RS Waters note */}
        <div className="bg-gradient-to-r from-[#e8f2ff] to-[#f0f7ff] border border-[#cce0f5] rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#005fc5] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity="0.9"/>
              <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <div>
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-1">Parent Company</div>
            <h3 className="text-xl font-black text-[#080f1e] mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>RS WATERS (PRIVATE) LIMITED</h3>
            <p className="text-sm text-[#4a6080] leading-relaxed">
              AquaRS is proudly operated under RS WATERS (PRIVATE) LIMITED — a registered and licensed company committed to delivering safe water solutions across Pakistan. Our infrastructure, cold chain, and quality labs are owned and operated in-house.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
