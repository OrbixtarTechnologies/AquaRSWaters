import { Link } from "react-router-dom";

const policies = [
  { to: "/privacy", title: "Privacy Policy", copy: "How RS Waters handles information across the website, orders, enquiries, WhatsApp, and other customer-contact channels." },
  { to: "/terms", title: "Terms of Use", copy: "The terms that apply when you use rswaters.store, browse products, submit enquiries, or interact with RS Waters online." },
  { to: "/data-deletion", title: "Data Deletion Instructions", copy: "How to request deletion of personal information held by RS Waters, including information connected with Meta or WhatsApp interactions." },
  { to: "/shipping-delivery", title: "Shipping & Delivery Policy", copy: "How service areas, delivery availability, timing, fees, and delivery confirmation are handled." },
  { to: "/returns-refunds", title: "Returns & Refunds Policy", copy: "How damaged, incorrect, or otherwise disputed product deliveries are reviewed and resolved." },
  { to: "/cancellation", title: "Cancellation Policy", copy: "How to request cancellation of an order enquiry or confirmed order before fulfillment." },
  { to: "/cookies", title: "Cookie & Tracking Policy", copy: "What browser technologies and third-party services may process when you visit rswaters.store." },
];

export default function Policies() {
  return (
    <div className="min-h-screen bg-[#f8fcfe]">
      <section className="bg-[#071b2b] px-5 py-16 text-white sm:px-8 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#58d6ee]">RS Waters</p>
          <h1 className="text-4xl font-black tracking-[-0.035em] md:text-5xl" style={{ fontFamily: "Outfit, sans-serif" }}>Policies & Legal Information</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#bfd3de]">
            Clear information about privacy, website use, customer data, delivery, returns, refunds, cancellations, and cookies.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {policies.map((item) => (
            <Link key={item.to} to={item.to} className="group rounded-2xl border border-[#d8e8ef] bg-white p-7 transition hover:-translate-y-0.5 hover:border-[#a9d7e6] hover:shadow-[0_18px_45px_rgba(9,62,87,.08)]">
              <h2 className="text-xl font-black text-[#102c40]" style={{ fontFamily: "Outfit, sans-serif" }}>{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#60798a]">{item.copy}</p>
              <span className="mt-5 inline-block text-sm font-bold text-[#0a6e9c]">Read policy →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
