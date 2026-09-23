import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#071b2b] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-xl bg-[#0d8fcf] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity=".95"/>
                <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity=".4"/>
              </svg>
            </div>
            <div>
              <div className="font-black text-lg tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>RS Waters</div>
              <div className="text-[10px] text-[#82a1b1] tracking-widest uppercase">Pure Water, Pure Life</div>
            </div>
          </div>
          <p className="text-sm text-[#9db3bf] leading-relaxed mb-4">
            Drinking-water products, dispensers, filtration equipment, and water-solution support for homes and businesses.
          </p>
          <p className="text-xs text-[#688595]">
            Operated by <span className="text-[#9db3bf]">RS WATERS (PRIVATE) LIMITED</span>.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#58d6ee] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Explore</h4>
          <ul className="space-y-2.5">
            {[
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/cart", label: "Cart" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-[#9db3bf] hover:text-white transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#58d6ee] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Policies</h4>
          <ul className="space-y-2.5">
            {[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Use" },
              { to: "/data-deletion", label: "Data Deletion" },
              { to: "/shipping-delivery", label: "Shipping & Delivery" },
              { to: "/returns-refunds", label: "Returns & Refunds" },
              { to: "/cancellation", label: "Cancellation" },
              { to: "/cookies", label: "Cookie Policy" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-[#9db3bf] hover:text-white transition-colors">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#58d6ee] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Contact</h4>
          <div className="space-y-3 text-sm text-[#9db3bf]">
            <a href="tel:+923258917527" className="block hover:text-white transition-colors">0325-891-7527</a>
            <a href="mailto:info@rswaters.store" className="block hover:text-white transition-colors">info@rswaters.store</a>
            <address className="not-italic leading-relaxed">LDA 276, Shah Jamal Ichhra,<br/>Lahore, Pakistan</address>
          </div>
          <Link to="/policies" className="mt-5 inline-block text-xs font-bold text-[#58d6ee] hover:underline">All policies →</Link>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 sm:px-8 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#688595]">
        <div>© {new Date().getFullYear()} RS WATERS (PRIVATE) LIMITED. All rights reserved.</div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link to="/data-deletion" className="hover:text-white transition-colors">Data Deletion</Link>
        </div>
      </div>
    </footer>
  );
}
