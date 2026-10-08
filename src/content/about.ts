export type TextBlockContent = {
  heading: string;
  paragraphs: string[];
};

export type ExperienceContent = {
  label: string;
  title: string;
  text: string;
};

export const about: {
  heading: string;
  image: { src: string; alt: string };
  intro: TextBlockContent;
  experience: ExperienceContent;
  background: TextBlockContent;
} = {
  heading: "Vilka är vi",
  image: {
    src: "/pictures/profile-portrait.jpg",
    alt: "Ägare Annika Persson",
  },
  intro: {
    heading: "Om oss",
    paragraphs: [
      "Vi är en nystartad redovisningsbyrå sedan april 2025. Vi erbjuder tjänster inom redovisning, bokslutsarbete samt digitalisering av er ekonomi.",
      "Vi jobbar efter Rekos riktlinjer (Svensk standard för redovisnings- och lönetjänster) och är anslutna till SRF konsulter.",
    ],
  },
  experience: {
    label: "Erfarenhet",
    title: "40+ års erfarenhet inom ekonomi och redovisning",
    text: "Från skrivmaskin och manuell bokföring till dagens digitala, automatiserade system.",
  },
  background: {
    heading: "Bakgrund",
    paragraphs: [
      "Det har hänt mycket på de 40 år som jag varit aktiv inom ekonomiområdet. Från att skriva fakturor på skrivmaskin till dagens digitaliserade system.",
      "Jag började min karriär på 80-talet med manuell bokföring, gick vidare till ekonomiroller i industrin och har arbetat både som konsult, ekonomichef och på revisionsbyrå.",
      "Med hjälp av digitala verktyg kan vi skapa en effektiv, trygg och transparent ekonomiprocess. Det är detta jag hjälper företag med idag.",
    ],
  },
};
