import type { ReactNode } from "react";

export type Service = {
  title: string;
  text: ReactNode;
};

export const services: Service[] = [
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
        <span className="highlight">Fortnox</span> och <span className="highlight">Visma</span>. Vi
        hjälper er att arbeta effektivt i ert valda system.
      </>
    ),
  },
  {
    title: "Övriga ekonomitjänster",
    text: "Behöver ni hjälp inom andra områden i redovisning eller ekonomi? Kontakta oss så tittar vi på det.",
  },
];
