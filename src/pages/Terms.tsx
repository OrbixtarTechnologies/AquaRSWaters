export default function Terms() {
  const sections = [
    {
      title: "1. Website Purpose",
      content: "rswaters.store is the official website of RS WATERS (PRIVATE) LIMITED. It provides company information, product-category information, service-enquiry information, and direct contact channels.",
    },
    {
      title: "2. Availability & Pricing",
      content: "Any product, service, price, delivery area, specification, or commercial term must be confirmed directly by RS Waters before you rely on it or place an order. Website content may be updated without prior notice.",
    },
    {
      title: "3. Enquiries Are Not Confirmed Orders",
      content: "Sending an email, WhatsApp message, phone enquiry, or other request does not by itself create a confirmed order or contract. RS Waters will confirm applicable terms separately.",
    },
    {
      title: "4. Acceptable Use",
      content: "You may not misuse this website, attempt unauthorized access, interfere with its operation, impersonate RS Waters, or use company branding in a misleading way.",
    },
    {
      title: "5. Intellectual Property",
      content: "Unless otherwise stated, RS Waters owns or is authorized to use the company-specific text, branding, and design elements presented on this website. Third-party images or services remain subject to their respective rights.",
    },
    {
      title: "6. External Services",
      content: "Links or contact actions may open third-party services such as WhatsApp, email clients, or telephone services. Those services operate under their own terms and privacy practices.",
    },
    {
      title: "7. Governing Law",
      content: "These website terms are governed by the applicable laws of Pakistan. Any dispute will be handled in the competent jurisdiction applicable to RS WATERS (PRIVATE) LIMITED.",
    },
    {
      title: "8. Contact",
      content: "Questions about these Terms can be sent to info@rswaters.store or discussed by phone at 0325-891-7527.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Terms of Use</h1>
          <p className="text-blue-100 mt-2 text-sm">Last updated: 22 September 2026 — RS WATERS (PRIVATE) LIMITED</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="bg-white border border-[#cce0f5] rounded-xl p-6">
            <h2 className="font-black text-[#080f1e] mb-2" style={{ fontFamily: "Outfit, sans-serif" }}>{section.title}</h2>
            <p className="text-sm text-[#4a6080] leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
