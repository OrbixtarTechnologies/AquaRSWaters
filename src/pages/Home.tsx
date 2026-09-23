import { Link } from "react-router-dom";

const serviceAreas = ["Lahore", "Islamabad", "Multan", "Peshawar", "Quetta", "Faisalabad"];

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden text-white bg-[#001228]">
        <img
          src="https://images.unsplash.com/photo-1514747975201-4715db583da9?w=1600&h=900&fit=crop&auto=format&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001228]/95 via-[#003f87]/75 to-[#001228]/55" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00b4d8]/15 border border-[#00b4d8]/40 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 tracking-wide text-[#7de8ff]">
              RS WATERS (PRIVATE) LIMITED
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Water solutions,
              <br />
              <span className="text-[#7de8ff]">backed by a real company.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl text-[#c8e6f7]">
              Established on 10 November 2021 and headquartered in Lahore, RS Waters provides a direct point of contact for
              customers seeking water products and related service information.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="px-7 py-3 bg-[#005fc5] text-white font-bold rounded-xl hover:bg-[#004ea3] transition-colors text-sm">
                View Products
              </Link>
              <Link to="/contact" className="px-7 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm">
                Contact RS Waters
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-7">
            <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-5">Company Information</div>
            <dl className="space-y-5">
              <div>
                <dt className="text-xs text-[#8ecbe8] mb-1">Legal name</dt>
                <dd className="font-bold">RS WATERS (PRIVATE) LIMITED</dd>
              </div>
              <div>
                <dt className="text-xs text-[#8ecbe8] mb-1">Established</dt>
                <dd className="font-bold">10 November 2021</dd>
              </div>
              <div>
                <dt className="text-xs text-[#8ecbe8] mb-1">Head office</dt>
                <dd className="font-bold">LDA 276, Shah Jamal Ichhra, Lahore, Pakistan</dd>
              </div>
              <div>
                <dt className="text-xs text-[#8ecbe8] mb-1">Phone</dt>
                <dd><a href="tel:+923117792837" className="font-bold hover:underline">0311-779-2837</a></dd>
              </div>
              <div>
                <dt className="text-xs text-[#8ecbe8] mb-1">Email</dt>
                <dd><a href="mailto:info@rswaters.store" className="font-bold hover:underline">info@rswaters.store</a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Service Coverage</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>
              Cities Currently Listed by RS Waters
            </h2>
            <p className="text-sm text-[#4a6080] max-w-2xl mx-auto mt-3">
              Availability may vary by product or service. Contact our team to confirm coverage for your exact address.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((city) => (
              <div key={city} className="bg-white border border-[#cce0f5] rounded-xl py-5 px-4 text-center font-semibold text-[#080f1e]">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Product Information",
              text: "Browse the product categories represented on this website and contact our team for current availability and pricing.",
              to: "/products",
              cta: "View Products",
            },
            {
              title: "Service Enquiries",
              text: "Tell us what you need and where you are located. We will confirm whether RS Waters can serve your requirement.",
              to: "/services",
              cta: "View Services",
            },
            {
              title: "Direct Contact",
              text: "Reach RS Waters through our company-domain email, phone number, or WhatsApp contact.",
              to: "/contact",
              cta: "Contact Us",
            },
          ].map((item) => (
            <div key={item.title} className="border border-[#cce0f5] rounded-2xl p-7 bg-[#f8fbff]">
              <h3 className="text-xl font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{item.title}</h3>
              <p className="text-sm text-[#4a6080] leading-relaxed mb-5">{item.text}</p>
              <Link to={item.to} className="text-sm font-bold text-[#005fc5] hover:underline">{item.cta} →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-[#005fc5] to-[#00b4d8] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
            Need to speak with RS Waters?
          </h2>
          <p className="text-blue-100 mb-7">
            Contact our team directly for product availability, service questions, or business enquiries.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+923117792837" className="px-7 py-3 bg-white text-[#005fc5] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">
              Call 0311-779-2837
            </a>
            <a href="mailto:info@rswaters.store" className="px-7 py-3 border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
