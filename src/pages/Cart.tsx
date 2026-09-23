import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function Cart() {
  const { items, removeFromCart, updateQty, total } = useCart();

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Your Cart</h1>
          <p className="text-blue-100 mt-1 text-sm">{items.length === 0 ? "Your cart is empty" : `${items.length} item(s) ready for enquiry`}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {items.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-[#4a6080] font-medium mb-4">No items in your cart yet.</p>
            <Link to="/products" className="inline-block px-6 py-3 bg-[#005fc5] text-white font-bold rounded-lg text-sm hover:bg-[#004ea3] transition-colors">Browse Products</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white border border-[#cce0f5] rounded-xl p-4 flex gap-4 items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 shrink-0 rounded-lg object-cover bg-[#f0f7ff]" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-[#080f1e] truncate">{item.name}</div>
                    <div className="text-[#005fc5] font-black mt-1">Rs. {item.price.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)} className="w-7 h-7 rounded-md border border-[#cce0f5]">−</button>
                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)} className="w-7 h-7 rounded-md border border-[#cce0f5]">+</button>
                  </div>
                  <div className="text-right">
                    <div className="font-black text-[#080f1e] text-sm">Rs. {(item.price * item.quantity).toLocaleString()}</div>
                    <button onClick={() => removeFromCart(item.id)} className="text-xs text-red-500 mt-1">Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="bg-white border border-[#cce0f5] rounded-xl p-6 sticky top-24">
                <h2 className="font-black text-lg mb-4 text-[#080f1e]" style={{ fontFamily: "Outfit, sans-serif" }}>Order Enquiry</h2>
                <div className="flex justify-between border-b border-[#eef4fb] pb-4 mb-5">
                  <span className="font-bold text-[#080f1e]">Estimated total</span>
                  <span className="font-black text-xl text-[#005fc5]">Rs. {total.toLocaleString()}</span>
                </div>
                <OrderForm items={items} total={total} />
                <p className="text-xs text-[#4a6080] mt-3 text-center">Your order is not confirmed until RS Waters responds and confirms availability, delivery, and final amount.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function OrderForm({ items, total }: { items: any[]; total: number }) {
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderLines = items.map((item) => `• ${item.name} × ${item.quantity} — Rs. ${(item.price * item.quantity).toLocaleString()}`).join("\n");
    const message = [
      "Hello RS Waters, I would like to place an order enquiry:",
      "",
      orderLines,
      "",
      `Estimated total: Rs. ${total.toLocaleString()}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `City: ${form.city}`,
      `Address: ${form.address}`,
      "",
      "Please confirm availability, delivery, and final amount.",
    ].join("\n");

    window.open(`https://wa.me/923258917527?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input required type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5]" />
      <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5]" />
      <input required type="text" placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5]" />
      <textarea required placeholder="Delivery Address" rows={2} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm resize-none focus:outline-none focus:border-[#005fc5]" />
      <button type="submit" className="w-full py-3 bg-[#25d366] text-white font-bold rounded-lg hover:brightness-95 transition text-sm">Continue on WhatsApp</button>
    </form>
  );
}
