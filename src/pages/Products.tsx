import { useState } from "react";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [addedId, setAddedId] = useState<number | null>(null);
  const { addToCart } = useCart();

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (id: number) => {
    const product = products.find((item) => item.id === id);
    if (!product) return;
    addToCart(product);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-2">Our Products</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Shop RS Waters</h1>
          <p className="text-blue-100 mt-2 text-sm">Browse drinking-water products, dispensers, filtration systems, and accessories.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat ? "bg-[#005fc5] text-white shadow-sm" : "bg-white text-[#4a6080] border border-[#cce0f5] hover:border-[#005fc5] hover:text-[#005fc5]"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 bg-white border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="group bg-white border border-[#cce0f5] rounded-xl overflow-hidden hover:shadow-xl hover:border-[#005fc5]/40 transition-all flex flex-col">
              <div className="relative h-52 bg-[#f0f7ff] overflow-hidden">
                {p.badge && <span className="absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full bg-[#005fc5] text-white">{p.badge}</span>}
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="text-xs font-medium text-[#005fc5] mb-1">{p.category}</div>
                <h2 className="font-bold text-[#080f1e] leading-snug mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{p.name}</h2>
                {p.nameUrdu && <div className="text-xs text-[#4a6080] mb-2 font-medium" dir="rtl">{p.nameUrdu}</div>}
                <p className="text-xs text-[#4a6080] leading-relaxed mb-3 flex-1">{p.description}</p>

                <ul className="mb-4 space-y-1">
                  {p.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-xs text-[#4a6080]">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#e8f2ff] flex items-center justify-center text-[#005fc5]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between pt-3 border-t border-[#eef4fb]">
                  <div>
                    {p.originalPrice && <div className="text-xs text-[#4a6080] line-through">Rs. {p.originalPrice.toLocaleString()}</div>}
                    <div className="text-xl font-black text-[#005fc5]">Rs. {p.price.toLocaleString()}</div>
                    <div className="text-xs text-[#4a6080]">{p.unit}</div>
                  </div>
                  <button onClick={() => handleAdd(p.id)} disabled={!p.inStock}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${addedId === p.id ? "bg-green-500 text-white" : "bg-[#005fc5] text-white hover:bg-[#004ea3]"} disabled:opacity-50`}>
                    {addedId === p.id ? "Added ✓" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && <div className="text-center py-20 text-[#4a6080]">No products matched your search.</div>}
      </div>
    </div>
  );
}
