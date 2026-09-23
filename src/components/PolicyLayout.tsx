import { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

type PolicySection = {
  title: string;
  content: ReactNode;
};

type PolicyLayoutProps = {
  title: string;
  description: string;
  sections: PolicySection[];
  updated?: string;
};

const policyLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Use" },
  { to: "/data-deletion", label: "Data Deletion" },
  { to: "/shipping-delivery", label: "Shipping & Delivery" },
  { to: "/returns-refunds", label: "Returns & Refunds" },
  { to: "/cancellation", label: "Cancellation" },
  { to: "/cookies", label: "Cookie Policy" },
];

export default function PolicyLayout({
  title,
  description,
  sections,
  updated = "23 September 2026",
}: PolicyLayoutProps) {
  useEffect(() => {
    document.title = `${title} | RS Waters`;
  }, [title]);

  return (
    <div className="min-h-screen bg-[#f8fcfe] text-[#071b2b]">
      <section className="border-b border-[#d8e8ef] bg-[#071b2b] text-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#58d6ee]">RS Waters · Legal & Policies</p>
          <h1 className="text-4xl font-black tracking-[-0.035em] md:text-5xl" style={{ fontFamily: "Outfit, sans-serif" }}>
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#bfd3de] sm:text-base">{description}</p>
          <p className="mt-6 text-xs text-[#7898aa]">Last updated: {updated}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[230px_1fr] lg:py-16">
        <aside className="h-fit rounded-2xl border border-[#d8e8ef] bg-white p-4 lg:sticky lg:top-24">
          <div className="px-2 pb-3 text-[11px] font-bold uppercase tracking-[.18em] text-[#7890a0]">Policies</div>
          <nav className="space-y-1" aria-label="Policy navigation">
            {policyLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-[#38566a] transition hover:bg-[#eef8fb] hover:text-[#0a6e9c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0d8fcf]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/policies"
            className="mt-3 block border-t border-[#edf3f6] px-3 pt-4 text-xs font-bold text-[#0a6e9c] hover:underline"
          >
            View all policies →
          </Link>
        </aside>

        <main className="space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-[#d8e8ef] bg-white p-6 shadow-[0_8px_30px_rgba(9,62,87,.035)] sm:p-8">
              <h2 className="text-xl font-black tracking-[-0.015em] text-[#102c40]" style={{ fontFamily: "Outfit, sans-serif" }}>
                {section.title}
              </h2>
              <div className="mt-3 text-sm leading-7 text-[#536f80]">{section.content}</div>
            </section>
          ))}

          <section className="rounded-2xl border border-[#b7dfe9] bg-[#dff6fb] p-6 sm:p-8">
            <h2 className="text-lg font-black text-[#0b3550]" style={{ fontFamily: "Outfit, sans-serif" }}>Contact RS Waters</h2>
            <div className="mt-3 space-y-1 text-sm leading-6 text-[#476779]">
              <p><strong>RS WATERS (PRIVATE) LIMITED</strong></p>
              <p>LDA 276, Shah Jamal Ichhra, Lahore, Pakistan</p>
              <p><a className="font-semibold text-[#0a6e9c] hover:underline" href="mailto:info@rswaters.store">info@rswaters.store</a></p>
              <p><a className="font-semibold text-[#0a6e9c] hover:underline" href="tel:+923258917527">0325-891-7527</a></p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
