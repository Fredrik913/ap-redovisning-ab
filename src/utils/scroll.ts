// === SMOOTH SCROLL TILL TOPPEN OCH TA BORT #SEKTION FRÅN URL:EN ===
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.pushState(null, "", location.pathname);
}

// === SMOOTH SCROLL TILL EN SEKTION OCH UPPDATERA URL:EN ===
export function scrollToSection(hash: string) {
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  history.pushState(null, "", hash);
}
