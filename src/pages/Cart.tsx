import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Cart() {
  const { items, removeFromCart, updateQty, total, clearCart } = useCart();
  const [ordered, setOrdered] = useState(false);

  if (ordered) {
    return (
      <div className="min-h-screen bg-[#f8fbff] flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>Order Placed!</h2>
          <p className="text-[#4a6080] mb-2">Thank you for your order. Our team will call you within 2 hours to confirm delivery.</p>
          <p className="text-sm font-semibold text-[#005fc5] mb-6">📞 Expect a call from: 0311-779-2837</p>
          <Link to="/products" onClick={() => { clearCart(); setOrdered(false); }} className="inline-block px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg text-sm hover:bg-[#004ea3] transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Your Cart</h1>
          <p className="text-blue-200 mt-1 text-sm">{items.length === 0 ? "Your cart is empty" : `${items.length} item(s) in cart`}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <svg className="mx-auto mb-4 text-[#cce0f5]" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.68L23 6H6"/>
            </svg>
            <p className="text-[#4a6080] font-medium mb-4">No items in your cart yet</p>
            <Link to="/products" className="inline-block px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg text-sm hover:bg-[#004ea3] transition-colors">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white border border-[#cce0f5] rounded-xl p-4 flex gap-4 items-center hover:shadow-sm transition-shadow">
                  <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-[#f0f7ff]">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-[#080f1e] leading-snug truncate" style={{ fontFamily: "Outfit, sans-serif" }}>{item.name}</div>
                    <div className="text-xs text-[#4a6080] mt-0.5">{item.category}</div>
                    <div className="text-[#005fc5] font-black mt-1" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Rs. {item.price.toLocaleString()} <span className="text-xs font-medium text-[#4a6080]">/ {item.unit}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-md border border-[#cce0f5] hover:border-[#005fc5] text-[#4a6080] hover:text-[#005fc5] flex items-center justify-center font-bold text-sm transition-colors"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-bold text-[#080f1e]">{item.quantity}</span>
                    <button
                      onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-md border border-[#cce0f5] hover:border-[#005fc5] text-[#4a6080] hover:text-[#005fc5] flex items-center justify-center font-bold text-sm transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-black text-[#080f1e] text-sm" style={{ fontFamily: "Outfit, sans-serif" }}>
                      Rs. {(item.price * item.quantity).toLocaleString()}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-400 hover:text-red-600 mt-1 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-[#cce0f5] rounded-xl p-6 sticky top-24">
                <h3 className="font-black text-lg mb-4 text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>Order Summary</h3>

                <div className="space-y-2.5 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-[#4a6080] truncate max-w-[160px]">{item.name} × {item.quantity}</span>
                      <span className="font-semibold text-[#080f1e]">Rs. {(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#eef4fb] pt-3 mb-2">
                  <div className="flex justify-between text-sm text-[#4a6080]">
                    <span>Delivery</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                </div>

                <div className="border-t border-[#cce0f5] pt-3 mb-5 flex justify-between">
                  <span className="font-bold text-[#080f1e]">Total</span>
                  <span className="font-black text-xl text-[#005fc5]" style={{ fontFamily: "Outfit, sans-serif" }}>
                    Rs. {total.toLocaleString()}
                  </span>
                </div>

                {/* Order form */}
                <OrderForm onPlaced={() => setOrdered(true)} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OrderForm({ onPlaced }: { onPlaced: () => void }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address || !form.city) return;
    onPlaced();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="text-xs font-semibold text-[#4a6080] uppercase tracking-wider mb-1">Delivery Details</div>
      <input
        required
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-3 py-2 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
      />
      <input
        required
        type="tel"
        placeholder="Phone Number (03xx-xxxxxxx)"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-3 py-2 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
      />
      <input
        required
        type="text"
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        className="w-full px-3 py-2 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
      />
      <textarea
        required
        placeholder="Delivery Address"
        value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        rows={2}
        className="w-full px-3 py-2 border border-[#cce0f5] rounded-lg text-sm resize-none focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
      />
      <button
        type="submit"
        className="w-full py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm"
      >
        Place Order (Cash on Delivery)
      </button>
      <p className="text-xs text-[#4a6080] text-center">We'll call you to confirm. Free delivery on all orders.</p>
    </form>
  );
}
