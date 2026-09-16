const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const nav = document.querySelector(".nav-pill");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-pill a");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("is-active"));
    link.classList.add("is-active");
    if (toggle && nav) {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
});

const sections = ["home", "services", "about", "skills", "projects", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const setActiveFromScroll = () => {
  const offset = 120;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top - offset <= 0) {
      current = section.id;
    }
  }
  links.forEach((link) => {
    const href = link.getAttribute("href")?.replace("#", "");
    link.classList.toggle("is-active", href === current);
  });
};

window.addEventListener("scroll", setActiveFromScroll, { passive: true });
setActiveFromScroll();
