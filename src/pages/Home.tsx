import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

gsap.registerPlugin(ScrollTrigger);

function useReveal(selector: string, containerRef: React.RefObject<HTMLElement | null>, opts?: gsap.TweenVars) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(selector, { y: 40, opacity: 0 });
      gsap.to(selector, {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: selector,
          start: "top 88%",
          toggleActions: "play none none none",
        },
        ...opts,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
}

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { y: 20, opacity: 0 });
    const tween = gsap.to(el, { y: 0, opacity: 1, duration: 0.6, delay, ease: "power3.out" });
    return () => { tween.kill(); };
  }, [delay]);
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-black text-white" style={{ fontFamily: "Outfit, sans-serif" }}>{value}</div>
      <div className="text-sm text-white font-medium mt-0.5">{label}</div>
    </div>
  );
}

export default function Home() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  const heroRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const b2bRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // Hero entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-badge", { y: -16, opacity: 0 });
      gsap.set(".hero-h1",    { y: 32,  opacity: 0 });
      gsap.set(".hero-p",     { y: 24,  opacity: 0 });
      gsap.set(".hero-btns",  { y: 20,  opacity: 0 });
      gsap.set(".hero-visual",{ scale: 0.85, opacity: 0 });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".hero-badge",  { y: 0, opacity: 1, duration: 0.5 })
        .to(".hero-h1",     { y: 0, opacity: 1, duration: 0.7 }, "-=0.2")
        .to(".hero-p",      { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
        .to(".hero-btns",   { y: 0, opacity: 1, duration: 0.5 }, "-=0.3")
        .to(".hero-visual", { scale: 1, opacity: 1, duration: 0.8 }, "-=0.6");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  // Why section cards
  useReveal(".why-card", whyRef, { stagger: 0.1 });

  // Product cards
  useReveal(".product-card", productsRef, { stagger: 0.1 });

  // B2B section
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".b2b-text", { x: -50, opacity: 0 });
      gsap.set(".b2b-img",  { x: 50,  opacity: 0 });
      gsap.to(".b2b-text", { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".b2b-text", start: "top 85%", toggleActions: "play none none none" } });
      gsap.to(".b2b-img",  { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".b2b-img",  start: "top 85%", toggleActions: "play none none none" } });
    }, b2bRef);
    return () => ctx.revert();
  }, []);

  // Testimonial cards
  useReveal(".testimonial-card", testimonialsRef, { stagger: 0.12 });

  return (
    <div>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden text-white" style={{ background: "#001228" }}>
        {/* Water splash background image */}
        <img
          src="https://images.unsplash.com/photo-1514747975201-4715db583da9?w=1600&h=900&fit=crop&auto=format&q=80"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ opacity: 0.55 }}
        />
        {/* Gradient overlays for text legibility */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(0,18,40,0.88) 0%, rgba(0,40,100,0.65) 50%, rgba(0,18,40,0.40) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,18,40,0.7) 0%, transparent 50%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 bg-[#00b4d8]/20 border border-[#00b4d8]/50 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 tracking-wide text-[#7de8ff]">
              <span className="w-2 h-2 bg-[#00e5ff] rounded-full animate-pulse shadow-[0_0_6px_#00e5ff]" />
              Pakistan's Most Trusted Water Brand
            </div>
            <h1 className="hero-h1 text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>
              Pure Water,<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #38d9f5 0%, #a8f0ff 100%)" }}
              >
                Pure Life.
              </span>
            </h1>
            <p className="hero-p text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: "#c8e6f7" }}>
              From 19L gallons to advanced RO filtration systems — AquaRS delivers certified pure water to homes, offices, and industrial plants across Pakistan.
            </p>
            <div className="hero-btns flex flex-wrap gap-3">
              <Link
                to="/products"
                className="px-7 py-3 font-bold rounded-xl text-sm shadow-lg shadow-[#00b4d8]/30 transition-all hover:shadow-[#00b4d8]/50 hover:scale-105 active:scale-100"
                style={{ background: "linear-gradient(135deg, #38d9f5, #005fc5)", color: "#fff" }}
              >
                Shop Now →
              </Link>
              <Link
                to="/services"
                className="px-7 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/60 transition-all text-sm"
              >
                Our Services
              </Link>
            </div>
          </div>

          <div className="hero-visual hidden md:flex justify-center items-center">
            <div className="relative w-96 h-96 flex items-center justify-center">

              {/* Far outer pulse ring */}
              <div className="absolute inset-0 rounded-full border border-[#38d9f5]/10" style={{ animation: "pulseRing 3s ease-out infinite" }} />

              {/* Outer orbit ring — spinning */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#00b4d8]/25" style={{ animation: "spin 28s linear infinite" }}>
                {/* Orbit dot */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#38d9f5]" style={{ boxShadow: "0 0 10px #38d9f5" }} />
              </div>

              {/* Mid ring — counter-spin */}
              <div className="absolute inset-12 rounded-full border border-[#00b4d8]/20" style={{ animation: "spinReverse 20s linear infinite" }}>
                <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7de8ff]/60" />
              </div>

              {/* Glass sphere */}
              <div
                className="relative w-52 h-52 rounded-full flex flex-col items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 35% 30%, rgba(56,217,245,0.45) 0%, rgba(0,95,197,0.7) 50%, rgba(0,26,77,0.9) 100%)",
                  boxShadow: "0 0 0 1px rgba(56,217,245,0.3), 0 0 60px rgba(0,180,216,0.35), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.3)",
                }}
              >
                {/* Highlight glare */}
                <div className="absolute top-6 left-8 w-10 h-6 rounded-full bg-white/20 blur-sm" style={{ transform: "rotate(-30deg)" }} />
                <div className="absolute top-8 left-10 w-4 h-3 rounded-full bg-white/30" style={{ transform: "rotate(-30deg)" }} />

                {/* Water drop icon */}
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className="drop-shadow-lg">
                  <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity="0.95"/>
                  <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity="0.4"/>
                </svg>

                {/* AquaRS label */}
                <div className="mt-2 text-white font-black text-sm tracking-widest" style={{ fontFamily: "Outfit, sans-serif", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>
                  AquaRS
                </div>
              </div>

              {/* Floating chips */}
              <div className="absolute top-6 -right-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 shadow-xl" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
                <div className="text-[10px] text-[#7de8ff] font-semibold uppercase tracking-wider mb-0.5">Purity</div>
                <div className="text-white font-black text-lg leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>99.9%</div>
              </div>

              <div className="absolute bottom-10 -left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 shadow-xl" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
                <div className="text-[10px] text-[#7de8ff] font-semibold uppercase tracking-wider mb-0.5">Coverage</div>
                <div className="text-white font-black text-lg leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>20+ Cities</div>
              </div>

              <div className="absolute -bottom-2 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2.5 shadow-xl" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)" }}>
                <div className="text-[10px] text-[#7de8ff] font-semibold uppercase tracking-wider mb-0.5">Certified</div>
                <div className="text-white font-black text-sm leading-none" style={{ fontFamily: "Outfit, sans-serif" }}>PSQCA ✓</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <AnimatedStat value="50,000+" label="Happy Customers" delay={0.8} />
            <AnimatedStat value="10+" label="Years of Trust" delay={0.95} />
            <AnimatedStat value="20+" label="Cities Covered" delay={1.1} />
            <AnimatedStat value="99.9%" label="Purity Guaranteed" delay={1.25} />
          </div>
        </div>
      </section>

      {/* Why AquaRS */}
      <section ref={whyRef} className="py-16 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Why Choose Us</div>
            <h2 className="text-3xl md:text-4xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>
              The AquaRS Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                ),
                title: "Certified Pure",
                desc: "PSQCA certified. Multi-stage tested for minerals, bacteria, and heavy metals.",
              },
              {
                icon: <><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></>,
                title: "Same-Day Delivery",
                desc: "Order before 2 PM and receive your water the same day across major cities.",
              },
              {
                icon: <><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></>,
                title: "24/7 Support",
                desc: "Our customer team is always available on call and WhatsApp.",
              },
              {
                icon: <><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2" fill="none"/></>,
                title: "Community First",
                desc: "Serving homes, schools, hospitals, factories & plants across Pakistan.",
              },
            ].map((f) => (
              <div key={f.title} className="why-card bg-white rounded-xl p-6 border border-[#cce0f5] hover:shadow-md hover:border-[#005fc5]/30 transition-all group">
                <div className="w-11 h-11 rounded-lg bg-[#e8f2ff] flex items-center justify-center mb-4 group-hover:bg-[#005fc5] transition-colors">
                  <svg className="text-[#005fc5] group-hover:text-white transition-colors" width="20" height="20" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#080f1e] mb-1.5" style={{ fontFamily: "Outfit, sans-serif" }}>{f.title}</h3>
                <p className="text-sm text-[#4a6080] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section ref={productsRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Featured</div>
              <h2 className="text-3xl md:text-4xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>
                Top Products
              </h2>
            </div>
            <Link to="/products" className="text-sm font-semibold text-[#005fc5] hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((p) => (
              <div key={p.id} className="product-card group bg-white border border-[#cce0f5] rounded-xl overflow-hidden hover:shadow-lg hover:border-[#005fc5]/40 transition-all">
                <div className="relative h-48 bg-[#f0f7ff] overflow-hidden">
                  {p.badge && (
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold bg-[#005fc5] text-white rounded-full">
                      {p.badge}
                    </span>
                  )}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#4a6080] mb-1">{p.category}</div>
                  <h3 className="font-bold text-[#080f1e] text-sm leading-snug mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{p.name}</h3>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <span className="text-lg font-black text-[#005fc5]" style={{ fontFamily: "Outfit, sans-serif" }}>
                        Rs. {p.price.toLocaleString()}
                      </span>
                      <span className="text-xs text-[#4a6080] ml-1">{p.unit}</span>
                    </div>
                    <button
                      onClick={() => addToCart(p)}
                      className="px-3 py-1.5 bg-[#005fc5] text-white text-xs font-semibold rounded-lg hover:bg-[#004ea3] transition-colors active:scale-95"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section ref={b2bRef} className="py-16 bg-[#080f1e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="b2b-text">
            <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">B2B & Industrial</div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>
              We Supply Factories,<br />
              <span className="text-[#00b4d8]">Plants & Institutions</span>
            </h2>
            <p className="text-[#8aa0b8] leading-relaxed mb-6">
              AquaRS provides bulk water supply and professional filtration system installation for manufacturing plants, hospitals, schools, and large commercial spaces. Custom contracts available.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "Bulk 19L gallon delivery — daily, weekly, or monthly",
                "Industrial RO plant installation & maintenance",
                "Custom water quality testing & TDS monitoring",
                "Dedicated account manager for B2B clients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#c8d8e8]">
                  <span className="mt-1 w-4 h-4 shrink-0 rounded-full bg-[#005fc5] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm"
            >
              Explore Services →
            </Link>
          </div>
          <div
            className="b2b-img hidden md:block h-80 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1606214554814-e8a9f97bdbb0?w=700&h=500&fit=crop&auto=format")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsRef} className="py-16 bg-[#f0f7ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-widest mb-2">Testimonials</div>
            <h2 className="text-3xl font-black text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>
              What Our Customers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Muhammad Irfan",
                city: "Lahore",
                review: "Bohot badhia pani hai. Hamara poora office AquaRS ka istimaal karta hai. Delivery hamesha waqt par hoti hai!",
                stars: 5,
              },
              {
                name: "Sana Malik",
                city: "Karachi",
                review: "The RO system they installed is excellent. Water quality is noticeably better and the installation team was very professional.",
                stars: 5,
              },
              {
                name: "Ahmed Textile Mills",
                city: "Faisalabad",
                review: "We supply our entire factory with AquaRS water. Their bulk delivery contract has been seamless for over 2 years now.",
                stars: 5,
              },
            ].map((t) => (
              <div key={t.name} className="testimonial-card bg-white rounded-xl p-6 border border-[#cce0f5] shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[#4a6080] leading-relaxed mb-4 italic">"{t.review}"</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#e8f2ff] flex items-center justify-center text-[#005fc5] font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#080f1e]">{t.name}</div>
                    <div className="text-xs text-[#4a6080]">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 bg-gradient-to-r from-[#005fc5] to-[#00b4d8] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>
            Ready to Switch to Pure Water?
          </h2>
          <p className="text-blue-100 mb-7">
            Order online or call us now. Free delivery on your first order.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="px-7 py-3 bg-white text-[#005fc5] font-bold rounded-lg hover:bg-blue-50 transition-colors text-sm"
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3 border border-white/50 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
