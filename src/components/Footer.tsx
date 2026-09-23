import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#080f1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#005fc5] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity=".95"/>
                <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity=".4"/>
              </svg>
            </div>
            <div>
              <div className="font-black text-lg tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>RS Waters</div>
              <div className="text-[10px] text-[#8aa0b8] tracking-widest uppercase">Pure Water, Pure Life</div>
            </div>
          </div>
          <p className="text-sm text-[#8aa0b8] leading-relaxed mb-4">
            Drinking-water products, dispensers, filtration equipment, and water-solution support for homes and businesses.
          </p>
          <p className="text-xs text-[#4a6080]">
            Operated by <span className="text-[#8aa0b8]">RS WATERS (PRIVATE) LIMITED</span>.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Explore</h4>
          <ul className="space-y-2.5">
            {[
              { to: "/products", label: "Products" },
              { to: "/services", label: "Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/cart", label: "Cart" },
            ].map((link) => (
              <li key={link.to}><Link to={link.to} className="text-sm text-[#8aa0b8] hover:text-white transition-colors">{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Service Areas</h4>
          <div className="grid grid-cols-2 gap-y-2 text-sm text-[#8aa0b8]">
            <span>Lahore</span><span>Islamabad</span><span>Multan</span><span>Peshawar</span><span>Quetta</span><span>Faisalabad</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Contact</h4>
          <div className="space-y-3 text-sm text-[#8aa0b8]">
            <a href="tel:+923258917527" className="block hover:text-white transition-colors">0325-891-7527</a>
            <a href="mailto:info@rswaters.store" className="block hover:text-white transition-colors">info@rswaters.store</a>
            <address className="not-italic leading-relaxed">LDA 276, Shah Jamal Ichhra,<br/>Lahore, Pakistan</address>
          </div>
        </div>
      </div>

      <div className="border-t border-[#0d1929] px-4 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#4a6080]">
        <div>© {new Date().getFullYear()} RS WATERS (PRIVATE) LIMITED. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
