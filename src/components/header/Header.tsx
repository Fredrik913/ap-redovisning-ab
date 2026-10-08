import { useRef, useState, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { useClickOutside } from "../../hooks/useClickOutside";
import { scrollToSection, scrollToTop } from "../../utils/scroll";

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

  // Stänger menyn innan scrollningen startar, så att headern inte krymper mitt i scrollen
  const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    flushSync(() => setMenuOpen(false));
    scrollToTop();
  };

  const goToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    flushSync(() => setMenuOpen(false));
    scrollToSection(href);
  };

  return (
    <header id="top" className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
      <nav className="bg-gray-50 border-b sticky top-0 z-50">
        <div className="px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="text-xl text-gray-800 whitespace-nowrap">
            <a href="#" onClick={goHome}>
              AP Ekonomi & Redovisning AB
            </a>
          </div>

          {/* Desktop-meny */}
          <div className="hidden lg:flex gap-8 text-lg whitespace-nowrap">
            <a
              href="#"
              onClick={goHome}
              className="hover:underline decoration-2 underline-offset-8 text-black"
            >
              Hem
            </a>
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:underline decoration-2 underline-offset-8 text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburgermenyn icon (mobil) */}
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex lg:hidden w-11 h-11 -my-2 -mr-2.5 items-center justify-center text-2xl"
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
          className={`lg:hidden ${menuOpen ? "" : "hidden"} border-t border-gray-200 px-6 py-2 bg-white/95 text-right backdrop-blur-xs`}
        >
          <a href="#" onClick={goHome} className="block py-2.5 hover:underline text-black">
            Hem
          </a>
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => goToSection(e, link.href)}
              className="block py-2.5 hover:underline text-black"
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
