export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-[#00b4d8] uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Privacy Policy</h1>
          <p className="text-blue-200 mt-2 text-sm">Last updated: September 2025 — RS WATERS (PRIVATE) LIMITED</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="bg-white border border-[#cce0f5] rounded-xl p-6 text-sm leading-relaxed text-[#4a6080]">
          <p>
            AquaRS, operated by <strong className="text-[#080f1e]">RS WATERS (PRIVATE) LIMITED</strong>, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website or services.
          </p>
        </div>

        {[
          {
            title: "1. Information We Collect",
            content: `When you place an order, contact us, or register on our site, we may collect:
• Your full name and contact number
• Delivery address and city
• Email address (optional)
• Order history and product preferences
• Device and browser information (for site analytics)

We do not collect financial card data. All payments via COD (Cash on Delivery) are processed in person.`,
          },
          {
            title: "2. How We Use Your Information",
            content: `We use your information to:
• Process and deliver your orders
• Contact you for order confirmation and delivery coordination
• Respond to your customer service inquiries
• Send promotional offers (only if you opt in via WhatsApp or email)
• Improve our products, website, and service quality
• Comply with legal obligations under Pakistani law`,
          },
          {
            title: "3. Information Sharing",
            content: `AquaRS does not sell, rent, or trade your personal information to third parties. We may share limited data only with:
• Delivery partners to fulfill your orders
• Payment processors if applicable in the future
• Government or regulatory bodies if required by Pakistani law

All third-party partners are bound by confidentiality agreements.`,
          },
          {
            title: "4. Data Security",
            content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or disclosure. Our website uses HTTPS encryption. However, no system is 100% secure and we cannot guarantee absolute security.`,
          },
          {
            title: "5. Cookies & Tracking",
            content: `Our website may use cookies to improve your browsing experience. These include:
• Session cookies (necessary for site function)
• Analytics cookies (to understand site usage)

You may disable cookies in your browser settings, though this may affect certain site features.`,
          },
          {
            title: "6. Your Rights",
            content: `You have the right to:
• Access the personal data we hold about you
• Request correction of inaccurate information
• Request deletion of your data (subject to legal retention requirements)
• Opt out of marketing communications at any time

To exercise these rights, contact us at info@aquarswaters.web.app or call 0311-779-2837.`,
          },
          {
            title: "7. Children's Privacy",
            content: `Our services are not directed to children under the age of 13. We do not knowingly collect personal data from children. If you believe your child has provided us information, please contact us immediately.`,
          },
          {
            title: "8. Changes to This Policy",
            content: `We may update this Privacy Policy periodically. Any significant changes will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the revised policy.`,
          },
          {
            title: "9. Contact & Grievances",
            content: `For any privacy-related concerns, please contact:

RS WATERS (PRIVATE) LIMITED — AquaRS
LDA 276, Shah Jamal Ichhra, Lahore, Pakistan
Email: privacy@aquarswaters.web.app
Phone: 0311-779-2837
Office Hours: Monday – Saturday, 9AM – 6PM`,
          },
        ].map((section) => (
          <div key={section.title} className="bg-white border border-[#cce0f5] rounded-xl p-6">
            <h2 className="font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{section.title}</h2>
            <div className="text-sm text-[#4a6080] leading-relaxed whitespace-pre-line">{section.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
