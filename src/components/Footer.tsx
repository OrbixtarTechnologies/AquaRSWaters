import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#080f1e] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#005fc5] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity="0.9"/>
                <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <div className="font-black text-lg text-white tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>AquaRS</div>
              <div className="text-[10px] text-[#4a6080] tracking-widest uppercase">Pure Water, Pure Life</div>
            </div>
          </div>
          <p className="text-sm text-[#8aa0b8] leading-relaxed mb-4">
            Pakistan's trusted source for premium mineral water, water dispensers, and advanced filtration systems. Delivering purity to every home and office.
          </p>
          <div className="text-xs text-[#4a6080]">
            A brand by <span className="text-[#00b4d8] font-semibold">RS WATERS (PRIVATE) LIMITED</span>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Quick Links</h4>
          <ul className="space-y-2.5">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Shop Products" },
              { to: "/services", label: "Our Services" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy", label: "Privacy Policy" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-[#8aa0b8] hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Products</h4>
          <ul className="space-y-2.5">
            {[
              "19L Mineral Water Gallons",
              "1.5L Water Bottles",
              "500ml Water Bottles",
              "Water Dispensers",
              "RO Filtration Systems",
              "UV Water Purifiers",
              "Filter Cartridges",
              "Industrial Water Supply",
            ].map((item) => (
              <li key={item}>
                <Link to="/products" className="text-sm text-[#8aa0b8] hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex gap-2.5">
              <svg className="mt-0.5 shrink-0 text-[#005fc5]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.83 10.1 19.79 19.79 0 01.77 1.4 2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.15 6.15l1.08-1.08a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <div className="text-sm text-[#8aa0b8]">
                <div className="text-white font-medium">0311-RSWATER</div>
                <div>0311-779-2837</div>
              </div>
            </li>
            <li className="flex gap-2.5">
              <svg className="mt-0.5 shrink-0 text-[#005fc5]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <div className="text-sm text-[#8aa0b8]">info@aquarswaters.web.app</div>
            </li>
            <li className="flex gap-2.5">
              <svg className="mt-0.5 shrink-0 text-[#005fc5]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <div className="text-sm text-[#8aa0b8]">LDA 276, Shah Jamal Ichhra,<br/>Lahore, Pakistan</div>
            </li>
          </ul>

          <div className="mt-5">
            <div className="text-xs text-[#4a6080] mb-2 uppercase tracking-wider">Follow Us</div>
            <div className="flex gap-2">
              {["Facebook", "Instagram", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="px-3 py-1.5 bg-[#0d1929] text-[#8aa0b8] hover:text-white hover:bg-[#005fc5] rounded text-xs transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#0d1929] px-4 py-4 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-[#4a6080]">
        <div>© {new Date().getFullYear()} AquaRS — RS WATERS (PRIVATE) LIMITED. All rights reserved.</div>
        <div className="flex gap-4">
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
