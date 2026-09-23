export default function About() {
  const facts = [
    { value: "10 Nov 2021", label: "Established" },
    { value: "6", label: "Service Cities" },
    { value: "Lahore", label: "Head Office" },
    { value: "Direct", label: "Customer Support" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fbff]">
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
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Company Profile</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
            RS WATERS (PRIVATE) LIMITED
          </h1>
          <p className="text-blue-100 text-base max-w-2xl mx-auto">
            A Pakistan-based water solutions company established on 10 November 2021, with its head office in Lahore.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-3">Who We Are</div>
            <h2 className="text-3xl font-black text-[#080f1e] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>
              Clear company identity. Direct customer contact.
            </h2>
            <p className="text-[#4a6080] leading-relaxed mb-4">
              RS Waters operates under the legal name <strong className="text-[#080f1e]">RS WATERS (PRIVATE) LIMITED</strong>.
              This website, rswaters.store, is the company's official online presence for product information, service enquiries,
              customer support, and contact with our team.
            </p>
            <p className="text-[#4a6080] leading-relaxed">
              Our listed service coverage includes Lahore, Islamabad, Multan, Peshawar, Quetta, and Faisalabad.
              Customers can contact us directly by phone, WhatsApp, or company-domain email.
            </p>
          </div>
          <div
            className="h-72 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1606214554814-e8a9f97bdbb0?w=700&h=500&fit=crop&auto=format")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            role="img"
            aria-label="Water solutions"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {facts.map((item) => (
            <div key={item.label} className="bg-white border border-[#cce0f5] rounded-xl p-6 text-center">
              <div className="text-2xl md:text-3xl font-black text-[#005fc5] mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                {item.value}
              </div>
              <div className="text-sm text-[#4a6080]">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#cce0f5] rounded-2xl p-8">
          <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Business Information</div>
          <h2 className="text-2xl font-black text-[#080f1e] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
            Official Contact Details
          </h2>
          <dl className="grid md:grid-cols-2 gap-x-10 gap-y-5 text-sm">
            <div>
              <dt className="text-[#4a6080]">Legal business name</dt>
              <dd className="font-semibold text-[#080f1e]">RS WATERS (PRIVATE) LIMITED</dd>
            </div>
            <div>
              <dt className="text-[#4a6080]">Established</dt>
              <dd className="font-semibold text-[#080f1e]">10 November 2021</dd>
            </div>
            <div>
              <dt className="text-[#4a6080]">Head office</dt>
              <dd className="font-semibold text-[#080f1e]">LDA 276, Shah Jamal Ichhra, Lahore, Pakistan</dd>
            </div>
            <div>
              <dt className="text-[#4a6080]">Phone</dt>
              <dd><a href="tel:+923117792837" className="font-semibold text-[#005fc5] hover:underline">0311-779-2837</a></dd>
            </div>
            <div>
              <dt className="text-[#4a6080]">General email</dt>
              <dd><a href="mailto:info@rswaters.store" className="font-semibold text-[#005fc5] hover:underline">info@rswaters.store</a></dd>
            </div>
            <div>
              <dt className="text-[#4a6080]">Sales email</dt>
              <dd><a href="mailto:sales@rswaters.store" className="font-semibold text-[#005fc5] hover:underline">sales@rswaters.store</a></dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
