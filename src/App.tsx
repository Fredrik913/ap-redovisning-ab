import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

const services: { title: string; text: ReactNode }[] = [
  {
    title: "Bokföringshjälp",
    text: "Vi hanterar hela eller delar av bokföringen beroende på ert behov. Struktur, löpande arbete och korrekt rapportering.",
  },
  {
    title: "Löner & arbetsgivardeklarationer",
    text: "Vi sköter löner, arbetsgivardeklarationer och semesterberäkningar.",
  },
  {
    title: "Stöd & rådgivning",
    text: "Vi hjälper er att komma igång med egen bokföring och finns tillgängliga för frågor när ni behöver stöd.",
  },
  {
    title: "Momsavstämningar",
    text: "Vi gör avstämningar inför momsdeklarationen och säkerställer att inlämningen blir korrekt.",
  },
  {
    title: "Projektredovisning",
    text: "Löpande projektredovisning och uppföljning.",
  },
  {
    title: "Årsredovisning & deklarationer",
    text: "Vi upprättar årsredovisning, bokslut och inkomstdeklaration enligt gällande krav och regelverk.",
  },
  {
    title: "Ekonomiprogram & rådgivning",
    text: (
      <>
        Vi erbjuder rådgivning och stöd i <span className="highlight">Spiris</span>,{" "}
        <span className="highlight">Fortnox</span> och{" "}
        <span className="highlight">Visma</span>. Vi hjälper er att arbeta
        effektivt i ert valda system.
      </>
    ),
  },
  {
    title: "Övriga ekonomitjänster",
    text: "Behöver ni hjälp inom andra områden i redovisning eller ekonomi? Kontakta oss så tittar vi på det.",
  },
];

const references = [
  { company: "Rosenblad Bygg AB", contact: "Robin", tel: "0709208874", telLabel: "0709-208874" },
  { company: "JH Tjänst", contact: "Jon", tel: "0793043086", telLabel: "0793-043086" },
  { company: "Lindenergi AB", contact: "Björn", tel: "0793379692", telLabel: "0793-379692" },
];

const menuLinks = [
  { href: "#ourServices", label: "Våra tjänster" },
  { href: "#aboutUs", label: "Om oss" },
  { href: "#references", label: "Referenser" },
  { href: "#contact", label: "Kontakt" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openService, setOpenService] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // === STÄNG MENYN VID KLICK UTANFÖR ===
  useEffect(() => {
    const handleClick = (e: globalThis.MouseEvent) => {
      const target = e.target as Node;
      if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // === SMOOTH SCROLL HEM OCH STÄNG MENY ===
  const scrollToTop = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header id="top" className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200">
        <nav className="bg-gray-50 border-b sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-xl text-gray-800">
              <a href="#" onClick={scrollToTop}>
                AP Ekonomi & Redovisning AB
              </a>
            </div>

            {/* Desktop-meny */}
            <div className="hidden md:flex gap-6">
              <a href="#" onClick={scrollToTop} className="hover:underline text-black">
                Hem
              </a>
              {menuLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:underline text-black">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Hamburgermenyn (mobil) */}
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
            <a href="#" onClick={scrollToTop} className="block hover:underline text-black">
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

      <main>
        <div className="relative flex justify-center items-center -mt-[73px] pt-[97px] pb-8 border-b border-black/20 h-[80vh]">
          <picture className="absolute inset-0 w-full h-full">
            <source srcSet="/pictures/hero-mobile.jpg" media="(max-width: 640px)" type="image/jpeg" />
            <source srcSet="/pictures/hero-desktop.jpg" media="(min-width: 641px)" type="image/jpeg" />
            <img src="/pictures/hero-desktop.jpg" alt="Background" className="w-full h-full object-cover" />
          </picture>

          {/* MÖRK OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 leading-tight">
              Erfarenhet som skapar trygghet i en digital ekonomi
            </h1>
          </div>
        </div>

        <section id="ourServices" className="w-full pt-16 pb-20 scroll-mt-[70px]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Våra tjänster</h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {services.map((service, i) => (
                <details
                  key={service.title}
                  open={openService === i}
                  // ALLOW ONLY ONE DETAILS OPEN AT A TIME
                  onToggle={(e) => {
                    const isOpen = e.currentTarget.open;
                    setOpenService((current) => (isOpen ? i : current === i ? null : current));
                  }}
                  className="group border border-gray-200 rounded-xl p-5 shadow-xs transition-all bg-white hover:shadow-md hover:border-gray-600"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-gray-800 list-none flex items-center justify-between">
                    {service.title}
                    <svg
                      className="w-5 h-5 text-gray-800 transition-all duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>

                  <p className="mt-3 text-gray-600 leading-relaxed">{service.text}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="aboutUs" className="w-full pt-16 pb-20 scroll-mt-[60px]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">Vilka är vi</h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Bilden */}
              <div className="flex justify-center">
                <img
                  src="/pictures/profile-portrait.jpg"
                  alt="Ägare Annika Persson"
                  className="w-64 h-64 object-cover rounded-full shadow-lg border border-blue-400/30"
                />
              </div>

              {/* Textblock */}
              <div className="space-y-6">
                {/* Sektion 1 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Om oss</h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">
                    Vi är en nystartad redovisningsbyrå sedan april 2025. Vi erbjuder tjänster inom
                    redovisning, bokslutsarbete samt digitalisering av er ekonomi.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Vi jobbar efter Rekos riktlinjer (Svensk standard för redovisnings- och
                    lönetjänster) och är anslutna till SRF konsulter.
                  </p>

                  <div className="mt-6 border-l-4 border-blue-500 pl-4">
                    <p className="text-sm uppercase tracking-wide text-gray-500">Erfarenhet</p>
                    <p className="mt-1 text-gray-800 font-semibold">
                      40+ års erfarenhet inom ekonomi och redovisning
                    </p>
                    <p className="mt-1 text-gray-600 text-sm">
                      Från skrivmaskin och manuell bokföring till dagens digitala, automatiserade
                      system.
                    </p>
                  </div>
                </div>

                {/* Sektion 2 */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800">Bakgrund</h3>
                  <p className="text-gray-700 leading-relaxed mt-2">
                    Det har hänt mycket på de 40 år som jag varit aktiv inom ekonomiområdet. Från att
                    skriva fakturor på skrivmaskin till dagens digitaliserade system.
                  </p>

                  <p className="text-gray-700 leading-relaxed mt-4">
                    Jag började min karriär på 80-talet med manuell bokföring, gick vidare till
                    ekonomiroller i industrin och har arbetat både som konsult, ekonomichef och på
                    revisionsbyrå.
                  </p>

                  <p className="text-gray-700 leading-relaxed mt-4">
                    Med hjälp av digitala verktyg kan vi skapa en effektiv, trygg och transparent
                    ekonomiprocess. Det är detta jag hjälper företag med idag.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="references"
          className="flex items-center w-full pt-6 pb-12 scroll-mt-[50px] md:min-h-[500px]"
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Referenser</h2>

            {/* 2 cards in row on tablet, 3 on large desktop */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
              {references.map((ref) => (
                <div
                  key={ref.company}
                  className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-lg shadow-gray-300 w-full"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{ref.company}</h3>
                  <p className="text-gray-600 mt-1">Kontakt: {ref.contact}</p>
                  <p className="text-gray-700 mt-1">
                    <span className="font-semibold">Telefon:</span>{" "}
                    <a href={`tel:${ref.tel}`} className="text-black hover:underline">
                      {ref.telLabel}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-blue-400/50 px-6 py-12 text-gray-700 border-t border-black/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kontakt</h3>

          <ul className="mx-auto inline-block text-left space-y-2">
            <li className="font-medium text-gray-800">AP Ekonomi & Redovisning AB</li>

            <li>
              <span className="font-semibold">Postadress:</span> Fjärestadsvägen 309, 253 42 Vallåkra
            </li>

            <li>
              <span className="font-semibold">Besöksadress:</span> Florettgatan 14, Helsingborg
            </li>

            <li>
              <span className="font-semibold">Organisationsnummer:</span> 559518-7211
            </li>

            <li>
              <span className="font-semibold">Bankgiro:</span> 823-3439
            </li>

            <li className="pt-2">
              <span className="font-semibold">Telefon:</span>{" "}
              <a href="tel:0760344371" className="text-black hover:underline">
                0760-34 43 71
              </a>
            </li>

            <li>
              <span className="font-semibold">Mailadress:</span>{" "}
              <a
                href="mailto:annika.persson@ekonomiochredovisning.se"
                className="text-black hover:underline"
              >
                annika.persson@ekonomiochredovisning.se
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10">
          © 2025 AP Ekonomi & Redovisning AB. Alla rättigheter reserverade.
        </div>
      </footer>
    </>
  );
}

export default App;
