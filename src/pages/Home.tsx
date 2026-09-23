import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const categories = [
  { title: "Drinking Water", copy: "Bottled water and 19L gallons for homes, offices, events, and everyday use.", link: "/products" },
  { title: "Water Dispensers", copy: "Hot and cold dispensing options designed for convenient home and workplace use.", link: "/products" },
  { title: "Filtration Systems", copy: "RO, UV, replacement filters, and water-treatment equipment for different requirements.", link: "/products" },
];

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white">
      <section className="relative min-h-[620px] overflow-hidden bg-[#031a33] text-white">
        <img
          src="https://images.unsplash.com/photo-1564419320461-6870880221ad?w=1800&h=1000&fit=crop&auto=format&q=85"
          alt="Fresh drinking water"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#031a33] via-[#063d70]/90 to-[#063d70]/20" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.22em] text-[#77ddff]">RS Waters</p>
            <h1 className="mb-6 text-5xl font-black leading-[1.02] md:text-7xl" style={{ fontFamily: "Outfit, sans-serif" }}>
              Water for home,
              <br />work & everyday life.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-[#d9efff]">
              Shop drinking water, dispensers, filtration systems and accessories, or talk to our team about regular and business water requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/products" className="rounded-xl bg-[#00aee8] px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#0098cb]">Shop Products</Link>
              <a href="https://wa.me/923117792837" target="_blank" rel="noreferrer" className="rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold backdrop-blur hover:bg-white/20">Order on WhatsApp</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-[#c6deef]">
              <span>Home & office supply</span><span>Filtration solutions</span><span>Business enquiries</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e3eef8] bg-[#f7fbff]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 sm:px-6 md:grid-cols-4">
          {[
            ["0311-779-2837", "Call RS Waters"],
            ["WhatsApp", "Quick order enquiry"],
            ["6 Cities", "Current service network"],
            ["Lahore", "Head office"],
          ].map(([value, label]) => (
            <div key={value} className="px-4 py-3 text-center">
              <div className="font-black text-[#07396b]" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</div>
              <div className="mt-1 text-xs text-[#637b91]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0077c8]">Shop by need</p>
          <h2 className="text-3xl font-black text-[#071727] md:text-4xl" style={{ fontFamily: "Outfit, sans-serif" }}>Everything you need for better water access</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((item, i) => (
            <Link key={item.title} to={item.link} className="group relative min-h-64 overflow-hidden rounded-2xl bg-[#eaf6ff] p-7">
              <div className="absolute -bottom-14 -right-12 h-48 w-48 rounded-full bg-[#56cfff]/20 transition-transform group-hover:scale-125" />
              <div className="relative">
                <div className="mb-12 text-sm font-black text-[#0099d7]">0{i + 1}</div>
                <h3 className="mb-3 text-2xl font-black text-[#071727]" style={{ fontFamily: "Outfit, sans-serif" }}>{item.title}</h3>
                <p className="max-w-sm text-sm leading-6 text-[#536b80]">{item.copy}</p>
                <span className="mt-6 inline-block text-sm font-bold text-[#006bb3]">Explore products →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f7fbff] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0077c8]">Featured products</p>
              <h2 className="text-3xl font-black text-[#071727] md:text-4xl" style={{ fontFamily: "Outfit, sans-serif" }}>Popular picks</h2>
            </div>
            <Link to="/products" className="text-sm font-bold text-[#006bb3]">View all products →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <article key={p.id} className="overflow-hidden rounded-2xl border border-[#dbe9f4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-52 overflow-hidden bg-[#eef8ff]"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" /></div>
                <div className="p-5">
                  <p className="mb-1 text-xs font-semibold text-[#0077c8]">{p.category}</p>
                  <h3 className="min-h-10 text-sm font-bold text-[#071727]">{p.name}</h3>
                  <div className="mt-5 flex items-end justify-between gap-3">
                    <div><div className="text-lg font-black text-[#006bb3]">Rs. {p.price.toLocaleString()}</div><div className="text-xs text-[#71879a]">{p.unit}</div></div>
                    <button onClick={() => addToCart(p)} className="rounded-lg bg-[#07396b] px-4 py-2 text-xs font-bold text-white hover:bg-[#005a9c]">Add to Cart</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl">
          <img src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1000&h=750&fit=crop&auto=format&q=80" alt="Water service" className="h-[430px] w-full object-cover" />
        </div>
        <div className="lg:pl-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-[#0077c8]">For offices & businesses</p>
          <h2 className="mb-5 text-4xl font-black leading-tight text-[#071727]" style={{ fontFamily: "Outfit, sans-serif" }}>Need water supply on a regular basis?</h2>
          <p className="mb-7 leading-7 text-[#536b80]">Tell us your city, quantity and requirement. RS Waters can discuss recurring supply, dispensers, filtration equipment and larger commercial needs directly with your team.</p>
          <div className="mb-8 grid grid-cols-2 gap-3 text-sm font-semibold text-[#29465f]">
            {["Lahore","Islamabad","Multan","Peshawar","Quetta","Faisalabad"].map(city => <div key={city} className="rounded-lg bg-[#f3f8fc] px-4 py-3">{city}</div>)}
          </div>
          <Link to="/contact" className="inline-flex rounded-xl bg-[#0077c8] px-6 py-3 text-sm font-bold text-white hover:bg-[#0066ad]">Business Enquiry</Link>
        </div>
      </section>

      <section className="bg-[#07396b] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center">
          <div><h2 className="text-3xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Need help with an order?</h2><p className="mt-2 text-[#c8e4f7]">Talk directly with RS Waters for product availability and delivery enquiries.</p></div>
          <div className="flex flex-wrap gap-3"><a href="tel:+923117792837" className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#07396b]">Call 0311-779-2837</a><a href="https://wa.me/923117792837" target="_blank" rel="noreferrer" className="rounded-xl border border-white/35 px-6 py-3 text-sm font-bold text-white">WhatsApp Us</a></div>
        </div>
      </section>
    </div>
  );
}
