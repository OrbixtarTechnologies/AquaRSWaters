export default function Terms() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Terms of Use</h1>
          <p className="text-blue-200 mt-2 text-sm">Last updated: September 2025 — RS Waters Private Limited</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        {[
          {
            title: "1. Acceptance of Terms",
            content: "By accessing or using the AquaRS website and services, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, please do not use our services.",
          },
          {
            title: "2. Products & Ordering",
            content: "All products are subject to availability. Prices are listed in Pakistani Rupees (PKR) and may change without prior notice. Orders are confirmed via phone call from our team. AquaRS reserves the right to cancel orders if delivery to your area is not currently feasible.",
          },
          {
            title: "3. Delivery Policy",
            content: "We aim to deliver same-day for orders placed before 2 PM. Delivery timelines may vary based on city, area, and order volume. Free delivery is offered on all standard orders. Bulk and industrial orders are subject to separate delivery terms.",
          },
          {
            title: "4. Returns & Refunds",
            content: "Defective or damaged products are eligible for replacement within 24 hours of delivery with photographic evidence. Used or opened consumable water bottles are not eligible for return. Dispensers and filtration systems carry a 30-day return window for manufacturing defects.",
          },
          {
            title: "5. Warranty",
            content: "Water dispensers carry a 1-year warranty. RO filtration systems carry a 1-year parts and labor warranty. Filter cartridges are consumables and are not covered by warranty. UV purifiers carry a 6-month warranty.",
          },
          {
            title: "6. User Conduct",
            content: "You agree not to misuse this website, attempt unauthorized access, or use our brand identity without permission. Any fraudulent orders or misrepresentation may result in blacklisting from our services.",
          },
          {
            title: "7. Intellectual Property",
            content: "All content on this website including logos, product descriptions, and imagery is the property of RS Waters Private Limited / AquaRS. Reproduction without written permission is prohibited.",
          },
          {
            title: "8. Limitation of Liability",
            content: "AquaRS is not liable for any indirect, incidental, or consequential damages arising from the use of our products or services beyond the direct purchase value. We are not responsible for delays caused by force majeure events.",
          },
          {
            title: "9. Governing Law",
            content: "These terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be resolved in the courts of Karachi, Pakistan.",
          },
          {
            title: "10. Contact",
            content: "For questions about these Terms, contact us at legal@aquarswaters.web.app or call 0311-779-2837.",
          },
        ].map((s) => (
          <div key={s.title} className="bg-white border border-[#cce0f5] rounded-xl p-6">
            <h2 className="font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{s.title}</h2>
            <p className="text-sm text-[#4a6080] leading-relaxed">{s.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
