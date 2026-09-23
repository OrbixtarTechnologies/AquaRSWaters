import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#080f1e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-[#005fc5] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity="0.9"/>
                <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity="0.4"/>
              </svg>
            </div>
            <div>
              <div className="font-black text-lg tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>RS Waters</div>
              <div className="text-[10px] text-[#8aa0b8] tracking-widest uppercase">Water Solutions</div>
            </div>
          </div>
          <p className="text-sm text-[#8aa0b8] leading-relaxed mb-4">
            Official website of RS WATERS (PRIVATE) LIMITED, serving customers from our Lahore office.
          </p>
          <div className="text-xs text-[#8aa0b8] space-y-1">
            <div>Established: 10 November 2021</div>
            <div>Website: rswaters.store</div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Company</h4>
          <ul className="space-y-2.5">
            {[
              { to: "/about", label: "About RS Waters" },
              { to: "/services", label: "Services" },
              { to: "/products", label: "Products" },
              { to: "/contact", label: "Contact" },
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Use" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-[#8aa0b8] hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Service Areas</h4>
          <p className="text-sm text-[#8aa0b8] leading-7">
            Lahore<br />
            Islamabad<br />
            Multan<br />
            Peshawar<br />
            Quetta<br />
            Faisalabad
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider text-[#00b4d8] mb-4" style={{ fontFamily: "Outfit, sans-serif" }}>Contact</h4>
          <div className="space-y-3 text-sm text-[#8aa0b8]">
            <a href="tel:+923117792837" className="block hover:text-white transition-colors">0311-779-2837</a>
            <a href="mailto:info@rswaters.store" className="block hover:text-white transition-colors">info@rswaters.store</a>
            <a href="mailto:sales@rswaters.store" className="block hover:text-white transition-colors">sales@rswaters.store</a>
            <address className="not-italic leading-relaxed">
              LDA 276, Shah Jamal Ichhra,<br />Lahore, Pakistan
            </address>
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
