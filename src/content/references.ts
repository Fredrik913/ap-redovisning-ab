export type Reference = {
  company: string;
  initials: string;
  contact: string;
  phone: { tel: string; label: string };
};

export const references: Reference[] = [
  {
    company: "Rosenblad Bygg AB",
    initials: "RB",
    contact: "Robin Rosenblad",
    phone: { tel: "0709208874", label: "0709-20 88 74" },
  },
  {
    company: "JH Tjänst",
    initials: "JH",
    contact: "Jon Huhle",
    phone: { tel: "0793043086", label: "0793-04 30 86" },
  },
  {
    company: "Lindenergi AB",
    initials: "LE",
    contact: "Björn Lindskog",
    phone: { tel: "0793379692", label: "0793-37 96 92" },
  },
  {
    company: "Van der Graaf Scandinavia Aktiebolag",
    initials: "VG",
    contact: "Dan Larsson",
    phone: { tel: "0706734973", label: "0706-73 49 73" },
  },
];
