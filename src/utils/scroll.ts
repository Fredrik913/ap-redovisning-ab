// Långsam start och mjuk inbromsning mot slutet
const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2);

let cancelScroll: (() => void) | undefined;

// === ANIMERAD SCROLL TILL EN POSITION ===
// Egen animation istället för behavior: "smooth", så att vi styr hastighet och inbromsning
function animateScrollTo(target: number) {
  cancelScroll?.();

  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const end = Math.max(0, Math.min(target, maxScroll));
  const start = window.scrollY;
  const distance = end - start;

  if (Math.abs(distance) < 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: end, behavior: "instant" });
    return;
  }

  // Längre sträcka får längre tid, men aldrig snabbare än 600 ms eller långsammare än 1200 ms
  const duration = Math.min(1200, Math.max(600, Math.abs(distance) * 0.5));
  const startTime = performance.now();
  let frame = 0;

  // Avbryt om användaren själv börjar scrolla
  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    cancelScroll = undefined;
  };
  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  cancelScroll = stop;

  const step = (now: number) => {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({ top: start + distance * easeInOutQuart(progress), behavior: "instant" });
    if (progress < 1) {
      frame = requestAnimationFrame(step);
    } else {
      stop();
    }
  };
  frame = requestAnimationFrame(step);
}

// === SMOOTH SCROLL TILL TOPPEN OCH TA BORT #SEKTION FRÅN URL:EN ===
export function scrollToTop() {
  animateScrollTo(0);
  history.pushState(null, "", location.pathname);
}

// === SMOOTH SCROLL TILL EN SEKTION OCH UPPDATERA URL:EN ===
export function scrollToSection(hash: string) {
  const section = document.querySelector<HTMLElement>(hash);
  if (!section) return;

  // Räkna med scroll-mt-[...] så att rubriken inte hamnar bakom headern
  const marginTop = parseFloat(getComputedStyle(section).scrollMarginTop) || 0;
  animateScrollTo(section.getBoundingClientRect().top + window.scrollY - marginTop);
  history.pushState(null, "", hash);
}
