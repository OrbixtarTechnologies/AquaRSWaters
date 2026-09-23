import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const serviceAreas = ["Lahore", "Islamabad", "Multan", "Peshawar", "Quetta", "Faisalabad"];

const solutionCards = [
  {
    title: "Drinking Water",
    copy: "Everyday bottled water and 19L gallon options for homes, offices, events, and recurring needs.",
    href: "/products",
    accent: "01",
  },
  {
    title: "Dispensers",
    copy: "Practical hot-and-cold dispensing options for kitchens, workplaces, reception areas, and shared spaces.",
    href: "/products",
    accent: "02",
  },
  {
    title: "Filtration",
    copy: "RO, UV, cartridges, and filtration equipment for domestic, office, and commercial requirements.",
    href: "/products",
    accent: "03",
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DropMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M32 6C22.5 19.7 15 29.1 15 40.1C15 49.98 22.61 58 32 58C41.39 58 49 49.98 49 40.1C49 29.1 41.5 19.7 32 6Z" fill="currentColor" />
      <path d="M32 22C27.8 28.2 24.5 32.7 24.5 38.2C24.5 42.56 27.86 46.1 32 46.1C36.14 46.1 39.5 42.56 39.5 38.2C39.5 32.7 36.2 28.2 32 22Z" fill="white" fillOpacity=".24" />
    </svg>
  );
}

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="overflow-hidden bg-[#f8fcfe] text-[#071b2b]">
      <section className="relative isolate overflow-hidden border-b border-[#d8eaf2] bg-[#f8fcfe]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[-10%] top-[-28%] h-[580px] w-[580px] rounded-full bg-[#9fe6f5]/25 blur-3xl" />
          <div className="absolute bottom-[-35%] right-[-8%] h-[600px] w-[600px] rounded-full bg-[#0d8fcf]/12 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.34]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(8,67,100,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(8,67,100,.055) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
              maskImage: "linear-gradient(to right, black, transparent 78%)",
            }}
          />
        </div>

        <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-20 xl:px-16">
          <div className="relative z-10 max-w-[650px]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#c7e7f2] bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0b78a7] shadow-[0_10px_40px_rgba(5,63,91,.06)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#2cc5e8] shadow-[0_0_0_5px_rgba(44,197,232,.12)]" />
              Water, made simple
            </div>

            <h1
              className="max-w-[620px] text-[clamp(3.4rem,6.7vw,6.75rem)] font-black leading-[0.92] tracking-[-0.055em] text-[#071b2b]"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Better water.
              <span className="mt-2 block text-[#0d8fcf]">Beautifully simple.</span>
            </h1>

            <p className="mt-7 max-w-[590px] text-base leading-8 text-[#526d7e] sm:text-lg">
              RS Waters brings drinking water, dispensers, filtration systems, and direct customer support together in one clear place—for home, work, and business.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#071b2b] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(7,27,43,.18)] transition hover:-translate-y-0.5 hover:bg-[#0b304a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d8fcf]"
              >
                Shop products <ArrowIcon />
              </Link>
              <a
                href="https://wa.me/923258917527"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-[#bcdbe8] bg-white/85 px-6 py-3 text-sm font-bold text-[#0a628c] shadow-[0_10px_28px_rgba(5,63,91,.06)] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#8bc9df] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d8fcf]"
              >
                Order on WhatsApp <ArrowIcon />
              </a>
            </div>

            <div className="mt-11 grid max-w-[600px] grid-cols-3 gap-3 border-t border-[#d8e8ef] pt-6">
              {[
                ["Home", "Daily water needs"],
                ["Office", "Teams & workplaces"],
                ["Business", "Recurring supply"],
              ].map(([label, copy]) => (
                <div key={label}>
                  <div className="text-sm font-extrabold text-[#173a4f]">{label}</div>
                  <div className="mt-1 text-[11px] leading-4 text-[#7890a0]">{copy}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto hidden h-[610px] w-full max-w-[690px] lg:block">
            <div className="absolute inset-y-0 right-0 w-[82%] overflow-hidden rounded-[40px] border border-white/70 bg-[#d8eef7] shadow-[0_30px_90px_rgba(9,61,86,.18)]">
              <img
                src="https://images.unsplash.com/photo-1564419320461-6870880221ad?w=1200&h=1300&fit=crop&auto=format&q=88"
                alt="Clear water surface"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031d33]/65 via-transparent to-white/5" />
              <div className="absolute inset-x-7 bottom-7 rounded-[26px] border border-white/20 bg-[#061f32]/58 p-6 text-white backdrop-blur-xl">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#aeeeff]">RS Waters</p>
                    <p className="mt-2 max-w-[330px] text-2xl font-black leading-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Water solutions that fit the way you live and work.
                    </p>
                  </div>
                  <div className="shrink-0 text-[#6ad9f2]"><DropMark size={56} /></div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 top-16 w-[260px] rounded-[28px] border border-white/80 bg-white/88 p-5 shadow-[0_24px_60px_rgba(10,68,96,.16)] backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#79a0b3]">Popular now</p>
                  <p className="mt-1 text-base font-black text-[#071b2b]">19L Water Gallon</p>
                </div>
                <div className="text-[#0d8fcf]"><DropMark size={34} /></div>
              </div>
              <div className="overflow-hidden rounded-2xl bg-[#edf8fc]">
                <img src={products[0]?.image} alt={products[0]?.name ?? "19L Water Gallon"} className="h-40 w-full object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-black text-[#0d6d9b]">Rs. {products[0]?.price.toLocaleString()}</span>
                <button
                  onClick={() => products[0] && addToCart(products[0])}
                  className="rounded-lg bg-[#071b2b] px-3.5 py-2 text-xs font-bold text-white transition hover:bg-[#0b304a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d8fcf]"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <div className="absolute -left-2 bottom-16 flex items-center gap-3 rounded-2xl border border-[#d3e7f0] bg-white/92 px-4 py-3 shadow-[0_18px_45px_rgba(10,68,96,.13)] backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e6f8fc] text-[#0d8fcf]">
                <DropMark size={24} />
              </div>
              <div>
                <div className="text-xs font-black text-[#16384d]">Need help choosing?</div>
                <div className="mt-0.5 text-[11px] text-[#7890a0]">Call or WhatsApp our team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#dbeaf1] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#e5f0f5] px-5 sm:px-8 md:grid-cols-4 md:divide-y-0">
          {[
            ["0325-891-7527", "Customer line"],
            ["WhatsApp", "Quick ordering"],
            ["6 cities", "Current coverage"],
            ["Lahore", "Head office"],
          ].map(([value, label]) => (
            <div key={value} className="px-5 py-7 md:px-7">
              <div className="text-lg font-black tracking-[-0.02em] text-[#0b3550]" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</div>
              <div className="mt-1 text-xs text-[#79909f]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 grid items-end gap-7 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0d8fcf]">Shop by need</p>
              <h2 className="text-4xl font-black tracking-[-0.035em] text-[#071b2b] md:text-5xl" style={{ fontFamily: "Outfit, sans-serif" }}>
                Everything around water,
                <span className="block text-[#6a8595]">without the clutter.</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0a6e9c] hover:text-[#074c6d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d8fcf]"
            >
              Browse full catalog <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionCards.map((item, index) => (
              <Link
                key={item.title}
                to={item.href}
                className={`group relative min-h-[330px] overflow-hidden rounded-[28px] border p-8 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0d8fcf] ${
                  index === 0
                    ? "border-[#b7dfe9] bg-[#dff6fb]"
                    : index === 1
                      ? "border-[#d7e7ef] bg-white"
                      : "border-[#bdd7e6] bg-[#0b3550] text-white"
                }`}
              >
                <div className="relative z-10 flex h-full flex-col">
                  <div className={`text-[11px] font-black uppercase tracking-[.22em] ${index === 2 ? "text-[#7edcf2]" : "text-[#0d8fcf]"}`}>
                    {item.accent}
                  </div>
                  <div className="mt-auto pt-20">
                    <h3 className={`text-3xl font-black tracking-[-.025em] ${index === 2 ? "text-white" : "text-[#071b2b]"}`} style={{ fontFamily: "Outfit, sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 max-w-sm text-sm leading-6 ${index === 2 ? "text-[#bdd6e1]" : "text-[#60798a]"}`}>{item.copy}</p>
                    <span className={`mt-7 inline-flex items-center gap-2 text-sm font-bold ${index === 2 ? "text-[#86e5f7]" : "text-[#0a6e9c]"}`}>
                      Explore <ArrowIcon />
                    </span>
                  </div>
                </div>
                <div className={`absolute -right-12 -top-12 h-44 w-44 rounded-full transition duration-500 group-hover:scale-125 ${index === 2 ? "bg-[#16a9d4]/18" : "bg-white/55"}`} />
                <div className={`absolute right-8 top-8 opacity-25 ${index === 2 ? "text-[#71ddf4]" : "text-[#0d8fcf]"}`}>
                  <DropMark size={76} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#0d8fcf]">Featured products</p>
              <h2 className="text-4xl font-black tracking-[-0.035em] text-[#071b2b] md:text-5xl" style={{ fontFamily: "Outfit, sans-serif" }}>Everyday essentials.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6f8795]">
              A focused selection from our current catalog. Add products to your cart, then send your order enquiry directly to RS Waters.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-[24px] border border-[#dceaf1] bg-white shadow-[0_10px_35px_rgba(9,62,87,.045)] transition duration-300 hover:-translate-y-1 hover:border-[#b8dce9] hover:shadow-[0_22px_50px_rgba(9,62,87,.10)]">
                <div className="relative h-56 overflow-hidden bg-[#eef8fb]">
                  {product.badge && (
                    <span className="absolute left-4 top-4 z-10 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-black uppercase tracking-[.12em] text-[#0a6e9c] backdrop-blur">
                      {product.badge}
                    </span>
                  )}
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[.12em] text-[#6f8a9a]">{product.category}</p>
                  <h3 className="mt-2 min-h-12 text-base font-black leading-6 text-[#102c40]" style={{ fontFamily: "Outfit, sans-serif" }}>{product.name}</h3>
                  <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#edf3f6] pt-4">
                    <div>
                      <div className="text-xl font-black tracking-[-.02em] text-[#0a6e9c]">Rs. {product.price.toLocaleString()}</div>
                      <div className="mt-0.5 text-xs text-[#8297a5]">{product.unit}</div>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-xl bg-[#071b2b] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0b304a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d8fcf]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 text-center">
            <Link to="/products" className="inline-flex items-center gap-2 rounded-xl border border-[#bfd9e5] bg-[#f7fbfd] px-5 py-3 text-sm font-bold text-[#0a6e9c] transition hover:border-[#9fcddd] hover:bg-[#eff8fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d8fcf]">
              View all products <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#071b2b] py-24 text-white">
        <div className="pointer-events-none absolute -right-28 -top-28 h-[520px] w-[520px] rounded-full border border-[#2dc8e8]/12" />
        <div className="pointer-events-none absolute -right-5 top-6 h-[340px] w-[340px] rounded-full border border-[#2dc8e8]/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#65d7ee]">For offices & businesses</p>
            <h2 className="text-4xl font-black leading-[1.04] tracking-[-0.04em] md:text-5xl" style={{ fontFamily: "Outfit, sans-serif" }}>
              Water requirements that go beyond a single order.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#b8cfdb]">
              Talk to us about recurring supply, workplace drinking water, dispensers, filtration equipment, or larger commercial requirements. We’ll confirm what is available for your location.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#58d6ee] px-6 py-3.5 text-sm font-black text-[#062033] transition hover:bg-[#7fe3f3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white">
              Discuss your requirement <ArrowIcon />
            </Link>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.055] p-6 backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#6bd9ef]">Current coverage</p>
                <h3 className="mt-1 text-xl font-black">Selected service cities</h3>
              </div>
              <div className="text-[#52cde7]"><DropMark size={38} /></div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {serviceAreas.map((city) => (
                <div key={city} className="rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-[#d4e7ef]">{city}</div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-[#89a7b7]">Product and delivery availability may vary by exact area and requirement.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#dff6fb] py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-[34px] border border-[#b7dfe9] bg-white px-7 py-12 shadow-[0_22px_70px_rgba(10,77,105,.09)] md:px-12 md:py-14">
            <div className="absolute -right-12 -top-20 text-[#0d8fcf]/[0.055]"><DropMark size={250} /></div>
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0d8fcf]">Talk to RS Waters</p>
                <h2 className="max-w-2xl text-3xl font-black tracking-[-0.03em] text-[#071b2b] md:text-4xl" style={{ fontFamily: "Outfit, sans-serif" }}>
                  Need help with an order or water solution?
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#647e8f]">Reach our team directly by phone, WhatsApp, or email.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+923258917527" className="rounded-xl bg-[#071b2b] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0b304a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d8fcf]">
                  0325-891-7527
                </a>
                <a href="https://wa.me/923258917527" target="_blank" rel="noreferrer" className="rounded-xl border border-[#b9d7e3] bg-[#f7fbfd] px-5 py-3 text-sm font-bold text-[#0a6e9c] transition hover:bg-[#eef8fb] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0d8fcf]">
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
