import { useState } from "react";
import { products, categories } from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [addedId, setAddedId] = useState<number | null>(null);
  const { addToCart } = useCart();

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleAdd = (id: number) => {
    const p = products.find((x) => x.id === id)!;
    addToCart(p);
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-2">Our Products</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Shop AquaRS Products</h1>
          <p className="text-blue-200 mt-2 text-sm">Premium water products delivered to your door across Pakistan</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#005fc5] text-white shadow-sm"
                    : "bg-white text-[#4a6080] border border-[#cce0f5] hover:border-[#005fc5] hover:text-[#005fc5]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4a6080]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-[#4a6080] mb-6">
          Showing <span className="font-semibold text-[#080f1e]">{filtered.length}</span> products
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-[#4a6080]">
            <svg className="mx-auto mb-4 opacity-30" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <p className="font-medium">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="group bg-white border border-[#cce0f5] rounded-xl overflow-hidden hover:shadow-xl hover:border-[#005fc5]/40 transition-all duration-200 flex flex-col">
                <div className="relative h-52 bg-[#f0f7ff] overflow-hidden">
                  {p.badge && (
                    <span className={`absolute top-3 left-3 z-10 px-2.5 py-1 text-xs font-bold rounded-full ${
                      p.badge === "Sale" ? "bg-red-500 text-white" :
                      p.badge === "Premium" ? "bg-[#080f1e] text-white" :
                      "bg-[#005fc5] text-white"
                    }`}>
                      {p.badge}
                    </span>
                  )}
                  {!p.inStock && (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
                      <span className="font-bold text-[#4a6080]">Out of Stock</span>
                    </div>
                  )}
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs font-medium text-[#005fc5] mb-1">{p.category}</div>
                  <h3 className="font-bold text-[#080f1e] leading-snug mb-1" style={{ fontFamily: "Outfit, sans-serif" }}>{p.name}</h3>
                  {p.nameUrdu && (
                    <div className="text-xs text-[#4a6080] mb-2 font-medium" dir="rtl">{p.nameUrdu}</div>
                  )}
                  <p className="text-xs text-[#4a6080] leading-relaxed mb-3 flex-1">{p.description}</p>

                  <ul className="mb-4 space-y-1">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-[#4a6080]">
                        <span className="w-3.5 h-3.5 shrink-0 rounded-full bg-[#e8f2ff] flex items-center justify-center">
                          <svg width="6" height="6" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="#005fc5" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-3 border-t border-[#eef4fb]">
                    <div>
                      {p.originalPrice && (
                        <div className="text-xs text-[#4a6080] line-through">Rs. {p.originalPrice.toLocaleString()}</div>
                      )}
                      <div className="text-xl font-black text-[#005fc5]" style={{ fontFamily: "Outfit, sans-serif" }}>
                        Rs. {p.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-[#4a6080]">{p.unit}</div>
                    </div>
                    <button
                      onClick={() => handleAdd(p.id)}
                      disabled={!p.inStock}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                        addedId === p.id
                          ? "bg-green-500 text-white"
                          : "bg-[#005fc5] text-white hover:bg-[#004ea3]"
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {addedId === p.id ? "Added ✓" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
