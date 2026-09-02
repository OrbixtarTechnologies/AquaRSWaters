import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">Get in Touch</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Contact AquaRS</h1>
          <p className="text-blue-200 mt-2">We're here to help — call, WhatsApp, or drop us a message.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid md:grid-cols-2 gap-12">
        {/* Contact details */}
        <div>
          <h2 className="text-2xl font-black text-[#080f1e] mb-6" style={{ fontFamily: "Outfit, sans-serif" }}>Let's Talk</h2>

          <div className="space-y-5">
            {[
              {
                icon: (
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.83 10.1 19.79 19.79 0 01.77 1.4 2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.08-1.08a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                ),
                label: "Phone",
                value: "0311-RSWATER (0311-779-2837)",
                sub: "Available 8AM – 10PM, 7 days",
              },
              {
                icon: (
                  <>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </>
                ),
                label: "Email",
                value: "info@aquarswaters.web.app",
                sub: "Reply within 24 hours",
              },
              {
                icon: (
                  <>
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </>
                ),
                label: "Head Office",
                value: "LDA 276, Shah Jamal Ichhra, Lahore",
                sub: "RS WATERS (PRIVATE) LIMITED",
              },
              {
                icon: (
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                ),
                label: "WhatsApp",
                value: "0311-779-2837",
                sub: "Quick orders & queries",
              },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 p-4 bg-white border border-[#cce0f5] rounded-xl">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-[#e8f2ff] flex items-center justify-center">
                  <svg className="text-[#005fc5]" width="18" height="18" viewBox="0 0 24 24">{c.icon}</svg>
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider">{c.label}</div>
                  <div className="font-semibold text-[#080f1e] text-sm">{c.value}</div>
                  <div className="text-xs text-[#4a6080]">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Cities */}
          <div className="mt-8 bg-white border border-[#cce0f5] rounded-xl p-5">
            <div className="text-xs font-semibold text-[#005fc5] uppercase tracking-wider mb-3">We Deliver To</div>
            <div className="flex flex-wrap gap-2">
              {["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad", "Multan", "Hyderabad", "Peshawar", "Quetta", "Sialkot"].map((city) => (
                <span key={city} className="px-2.5 py-1 bg-[#f0f7ff] border border-[#cce0f5] text-xs text-[#4a6080] rounded-full">{city}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white border border-[#cce0f5] rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>Message Sent!</h3>
              <p className="text-[#4a6080] text-sm">Our team will get back to you within 24 hours.</p>
              <button onClick={() => setSent(false)} className="mt-5 text-sm text-[#005fc5] hover:underline">Send another message</button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-black text-[#080f1e] mb-5" style={{ fontFamily: "Outfit, sans-serif" }}>Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-medium text-[#4a6080] mb-1 block">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
                      placeholder="Muhammad Ali"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[#4a6080] mb-1 block">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
                      placeholder="03xx-xxxxxxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#4a6080] mb-1 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-[#4a6080] mb-1 block">Subject *</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20 bg-white"
                  >
                    <option value="">Select subject...</option>
                    <option>Water Delivery Order</option>
                    <option>RO System Installation</option>
                    <option>Dispenser Purchase/Rental</option>
                    <option>B2B / Industrial Supply</option>
                    <option>Water Quality Testing</option>
                    <option>Complaint / Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-medium text-[#4a6080] mb-1 block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-3 py-2.5 border border-[#cce0f5] rounded-lg text-sm resize-none focus:outline-none focus:border-[#005fc5] focus:ring-2 focus:ring-[#005fc5]/20"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#005fc5] text-white font-bold rounded-lg hover:bg-[#004ea3] transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
