import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const serviceAreas = ["Lahore", "Islamabad", "Multan", "Peshawar", "Quetta", "Faisalabad"];

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden text-white bg-[#001228]">
        <img
          src="https://images.unsplash.com/photo-1514747975201-4715db583da9?w=1600&h=900&fit=crop&auto=format&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(0,18,40,.93) 0%, rgba(0,54,118,.74) 52%, rgba(0,18,40,.45) 100%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#00b4d8]/20 border border-[#00b4d8]/40 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 tracking-wide text-[#7de8ff]">
              Water products • filtration • supply solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.03] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Pure water for
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#38d9f5,#b9f4ff)" }}>
                everyday life.
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-xl text-[#c8e6f7]">
              RS Waters supplies drinking-water products and water-solution equipment for homes, offices, and business requirements across selected Pakistani cities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="px-7 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#38d9f5] to-[#005fc5] shadow-lg shadow-[#00b4d8]/25 hover:scale-[1.02] transition-transform">
                Shop Products
              </Link>
              <Link to="/services" className="px-7 py-3 border border-white/35 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-sm">
                Explore Services
              </Link>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative w-[390px] h-[390px] flex items-center justify-center">
              <div className="absolute inset-2 rounded-full border border-dashed border-[#7de8ff]/20" />
              <div className="absolute inset-14 rounded-full border border-[#7de8ff]/15" />
              <div className="relative w-56 h-56 rounded-full flex flex-col items-center justify-center"
                style={{ background: "radial-gradient(circle at 35% 30%,rgba(125,232,255,.55),rgba(0,95,197,.78) 52%,rgba(0,26,77,.96))", boxShadow: "0 0 80px rgba(0,180,216,.32)" }}>
                <svg width="62" height="62" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity=".95"/>
                  <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity=".35"/>
                </svg>
                <div className="mt-3 font-black tracking-wider" style={{ fontFamily: "Outfit, sans-serif" }}>RS WATERS</div>
              </div>
              <div className="absolute top-7 right-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                <div className="text-[10px] text-[#7de8ff] uppercase tracking-wider">For</div>
                <div className="font-bold">Home & Office</div>
              </div>
              <div className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3">
                <div className="text-[10px] text-[#7de8ff] uppercase tracking-wider">Solutions</div>
                <div className="font-bold">Supply & Filtration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-11">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Why RS Waters</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>Simple water solutions, built around your needs</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["Water Supply", "Options for household, office, and larger recurring requirements."],
              ["Filtration Systems", "Water filtration equipment for different spaces and use cases."],
              ["Business Enquiries", "Direct support for bulk, commercial, and institutional requirements."],
              ["Local Support", "Phone, WhatsApp, and company-domain email for customer communication."],
            ].map(([title, text]) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-[#cce0f5] hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-[#e8f2ff] mb-4 flex items-center justify-center text-[#005fc5] font-black">✓</div>
                <h3 className="font-bold text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{title}</h3>
                <p className="text-sm text-[#4a6080] leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Featured</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>Popular Products</h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-[#005fc5] hover:underline">View all →</Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <div key={p.id} className="group bg-white border border-[#cce0f5] rounded-xl overflow-hidden hover:shadow-lg hover:border-[#005fc5]/35 transition-all">
                <div className="relative h-48 bg-[#f0f7ff] overflow-hidden">
                  {p.badge && <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold bg-[#005fc5] text-white rounded-full">{p.badge}</span>}
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#4a6080] mb-1">{p.category}</div>
                  <h3 className="font-bold text-[#080f1e] text-sm leading-snug mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{p.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-black text-[#005fc5]">Rs. {p.price.toLocaleString()}</span>
                      <span className="text-xs text-[#4a6080] ml-1">{p.unit}</span>
                    </div>
                    <button onClick={() => addToCart(p)} className="px-3 py-1.5 bg-[#005fc5] text-white text-xs font-semibold rounded-lg hover:bg-[#004ea3] transition-colors">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#080f1e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">For Business</div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
              Water requirements beyond the everyday?
            </h2>
            <p className="text-[#8aa0b8] leading-relaxed mb-7">
              Speak with RS Waters about recurring supply, office requirements, filtration equipment, or larger commercial needs. We will confirm the options available for your city and requirement.
            </p>
            <Link to="/contact" className="inline-flex px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm">Discuss Your Requirement →</Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {serviceAreas.map((city) => <div key={city} className="rounded-xl border border-white/10 bg-white/5 p-5 font-semibold text-[#c8d8e8]">{city}</div>)}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gradient-to-r from-[#005fc5] to-[#00b4d8] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>Need help choosing the right option?</h2>
          <p className="text-blue-100 mb-7">Call, WhatsApp, or email RS Waters and tell us what you need.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="tel:+923117792837" className="px-7 py-3 bg-white text-[#005fc5] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm">Call 0311-779-2837</a>
            <Link to="/contact" className="px-7 py-3 border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
