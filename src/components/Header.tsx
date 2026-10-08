import { useRef, useState, type MouseEvent } from "react";
import { useClickOutside } from "../hooks/useClickOutside";
import { scrollToTop } from "../utils/scroll";

const menuLinks = [
  { href: "#ourServices", label: "Våra tjänster" },
  { href: "#aboutUs", label: "Om oss" },
  { href: "#references", label: "Referenser" },
  { href: "#contact", label: "Kontakt" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useClickOutside([menuRef, buttonRef], () => setMenuOpen(false));

  const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToTop();
  };

  return (
    <header id="top" className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
      <nav className="bg-gray-50 border-b sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl text-gray-800">
            <a href="#" onClick={goHome}>
              AP Ekonomi & Redovisning AB
            </a>
          </div>

          {/* Desktop-meny */}
          <div className="hidden md:flex gap-6">
            <a href="#" onClick={goHome} className="hover:underline text-black">
              Hem
            </a>
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:underline text-black">
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburgermenyn icon (mobil) */}
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden text-2xl"
            aria-label="Öppna meny"
            aria-expanded={menuOpen}
            type="button"
          >
            ☰
          </button>
        </div>

        {/* Mobilmeny */}
        <div
          ref={menuRef}
          className={`md:hidden ${menuOpen ? "" : "hidden"} border-t border-gray-200 px-6 pb-4 pt-2 space-y-2 bg-white/95 text-right backdrop-blur-xs`}
        >
          <a href="#" onClick={goHome} className="block hover:underline text-black">
            Hem
          </a>
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block hover:underline text-black"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
