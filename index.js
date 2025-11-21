console.log("Script funkar i extern fil!");

const btn = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");
const homeDesktop = document.getElementById("home-scroll");
const homeMobile = document.getElementById("home-scroll-mobile");

// === ÖPPNA/STÄNG HAMBURGARMENY ===
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  menu.classList.toggle("hidden");
});

// === STÄNG MENY VID KLICK PÅ EN MOBIL-LÄNK ===
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

// === STÄNG MENYN VID KLICK UTANFÖR ===
document.addEventListener("click", (e) => {
  const clickInsideMenu = menu.contains(e.target);
  const clickOnButton = btn.contains(e.target);

  if (!clickInsideMenu && !clickOnButton) {
    menu.classList.add("hidden");
  }
});

// === SMOOTH SCROLL HEM (DESKTOP) ===
if (homeDesktop) {
  homeDesktop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// === SMOOTH SCROLL HEM (MOBIL) OCH STÄNG MENY ===
if (homeMobile) {
  homeMobile.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
