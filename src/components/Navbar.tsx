import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#cce0f5]">
      {/* Top bar */}
      <div className="bg-[#005fc5] text-white text-xs py-1.5 px-4 flex justify-between items-center">
        <span>📍 Serving all major cities across Pakistan</span>
        <span className="hidden sm:block">📞 0311-RSWATER (0311-779283)</span>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#005fc5] flex items-center justify-center shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8 8 5 12 5 15.5a7 7 0 0014 0C19 12 16 8 12 2z" fill="white" opacity="0.9"/>
              <path d="M12 8C10 11 9 13 9 15a3 3 0 006 0c0-2-1-4-3-7z" fill="white" opacity="0.4"/>
            </svg>
          </div>
          <div className="leading-none">
            <div className="font-black text-lg text-[#005fc5] tracking-tight" style={{ fontFamily: "Outfit, sans-serif" }}>
              AquaRS
            </div>
            <div className="text-[10px] text-[#4a6080] font-medium tracking-wide uppercase">Pure Water, Pure Life</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-150 ${
                location.pathname === link.to
                  ? "text-[#005fc5] bg-[#e8f2ff]"
                  : "text-[#4a6080] hover:text-[#005fc5] hover:bg-[#f0f7ff]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#005fc5] text-white text-sm font-medium hover:bg-[#004ea3] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 001.99 1.61h9.72a2 2 0 001.98-1.68L23 6H6"/>
            </svg>
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#00b4d8] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md text-[#4a6080] hover:bg-[#f0f7ff]"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#cce0f5] bg-white px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-[#005fc5] bg-[#e8f2ff]"
                  : "text-[#4a6080] hover:text-[#005fc5] hover:bg-[#f0f7ff]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
