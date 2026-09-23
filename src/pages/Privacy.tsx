export default function Privacy() {
  const sections = [
    {
      title: "1. Information We May Collect",
      content: `When you contact RS Waters, we may receive information you choose to provide, such as your name, phone number, email address, city, delivery or service location, and the details of your enquiry.

Basic technical information may also be processed by our hosting provider or browser infrastructure for security, reliability, and website operation.`,
    },
    {
      title: "2. How We Use Information",
      content: `We may use information you provide to respond to enquiries, confirm product or service availability, coordinate customer communication, maintain business records, prevent misuse, and comply with applicable legal obligations.`,
    },
    {
      title: "3. WhatsApp, Phone & Email",
      content: `If you choose to contact us by WhatsApp, phone, or email, your communication is also subject to the privacy practices of the relevant communications provider. RS Waters uses these channels for customer and business communication.`,
    },
    {
      title: "4. Sharing of Information",
      content: `We do not sell personal information. We may disclose information to service providers that support our website or communications, or where disclosure is required by law or necessary to protect legitimate business and security interests.`,
    },
    {
      title: "5. Data Retention",
      content: `We retain enquiry and business communication records only for as long as reasonably necessary for customer service, operational, legal, accounting, or security purposes.`,
    },
    {
      title: "6. Your Requests",
      content: `You may contact us to request access, correction, or deletion of personal information that RS Waters holds about you, subject to applicable legal and record-retention requirements.`,
    },
    {
      title: "7. Contact",
      content: `RS WATERS (PRIVATE) LIMITED
LDA 276, Shah Jamal Ichhra, Lahore, Pakistan
Email: info@rswaters.store
Phone: 0325-891-7527`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fbff]">
      <div className="bg-gradient-to-r from-[#002c6e] to-[#005fc5] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-xs font-semibold text-[#7de8ff] uppercase tracking-widest mb-3">Legal</div>
          <h1 className="text-4xl font-black" style={{ fontFamily: "Outfit, sans-serif" }}>Privacy Policy</h1>
          <p className="text-blue-100 mt-2 text-sm">Last updated: 22 September 2026 — RS WATERS (PRIVATE) LIMITED</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div className="bg-white border border-[#cce0f5] rounded-xl p-6 text-sm leading-relaxed text-[#4a6080]">
          This Privacy Policy describes how RS WATERS (PRIVATE) LIMITED handles information submitted through or in connection with rswaters.store and our listed customer-contact channels.
        </div>

        {sections.map((section) => (
          <section key={section.title} className="bg-white border border-[#cce0f5] rounded-xl p-6">
            <h2 className="font-black text-[#080f1e] mb-3" style={{ fontFamily: "Outfit, sans-serif" }}>{section.title}</h2>
            <div className="text-sm text-[#4a6080] leading-relaxed whitespace-pre-line">{section.content}</div>
          </section>
        ))}
      </div>
    </div>
  );
}
