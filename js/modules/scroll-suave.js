export default function initScrollSuave() {
  document.querySelector("nav.menu").classList.add('[data-menu="suave"]');
  const linksIternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksIternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
