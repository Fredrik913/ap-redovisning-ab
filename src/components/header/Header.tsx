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
    <header id="top" className="sticky top-0 z-50 bg-gray-50 border-b border-gray-300">
      <nav className="relative bg-gray-50 border-b border-gray-300 sticky top-0 z-50">
        <div className="px-6 md:px-10 py-4 flex items-center justify-between">
          <div className="text-[length:clamp(0.9375rem,4.6vw,1.25rem)] leading-7 text-gray-800 whitespace-nowrap">
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
                onClick={(e) => goToSection(e, link.href)}
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

        {/* Mobilmeny: ligger ovanpå sidan och fälls ut genom att animera radhöjden från 0 till full höjd */}
        <div
          ref={menuRef}
          inert={!menuOpen}
          className={`lg:hidden absolute inset-x-0 top-full grid transition-[grid-template-rows,opacity] duration-200 ease-out ${menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-gray-200 border-b border-b-gray-300 px-6 py-2 bg-white text-right shadow-md">
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
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
