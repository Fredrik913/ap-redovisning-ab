import Header from "./components/Header";
import Services from "./components/Services";

const references = [
  { company: "Rosenblad Bygg AB", contact: "Robin", tel: "0709208874", telLabel: "0709-208874" },
  { company: "JH Tjänst", contact: "Jon", tel: "0793043086", telLabel: "0793-043086" },
  { company: "Lindenergi AB", contact: "Björn", tel: "0793379692", telLabel: "0793-379692" },
];

function App() {
  return (
    <>
      <Header />

      <main>
        <div className="relative flex justify-center items-center -mt-[73px] pt-[97px] pb-8 border-b border-black/20 h-[80vh]">
          <picture className="absolute inset-0 w-full h-full">
            <source
              srcSet="/pictures/hero-mobile.jpg"
              media="(max-width: 640px)"
              type="image/jpeg"
            />
            <source
              srcSet="/pictures/hero-desktop.jpg"
              media="(min-width: 641px)"
              type="image/jpeg"
            />
            <img
              src="/pictures/hero-desktop.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </picture>

          {/* MÖRK OVERLAY */}
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 leading-tight">
              Erfarenhet som skapar trygghet i en digital ekonomi
            </h1>
          </div>
        </div>

        <Services />

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
                    Det har hänt mycket på de 40 år som jag varit aktiv inom ekonomiområdet. Från
                    att skriva fakturor på skrivmaskin till dagens digitaliserade system.
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

      <footer
        id="contact"
        className="bg-blue-400/50 px-6 py-12 text-gray-700 border-t border-black/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kontakt</h3>

          <ul className="mx-auto inline-block text-left space-y-2">
            <li className="font-medium text-gray-800">AP Ekonomi & Redovisning AB</li>

            <li>
              <span className="font-semibold">Postadress:</span> Fjärestadsvägen 309, 253 42
              Vallåkra
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
