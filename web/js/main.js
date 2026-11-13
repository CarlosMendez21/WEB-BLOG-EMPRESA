const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.textContent = "☰";
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const business = formData.get("business").trim();

  // Sustituye esta dirección por el correo corporativo real.
  const recipient = "hola@tudominio.com";
  const subject = encodeURIComponent(`Consulta web de ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmail: ${email}\n\nProyecto:\n${business}`
  );

  formMessage.textContent = "Se abrirá tu aplicación de correo. Revisa el destinatario antes de enviar.";
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});

const revealTargets = document.querySelectorAll(
  ".hero-copy, .service-card, .step, .about-art, .about-copy, .team-card, .commitment-card, .contact-form",
);
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (!prefersReducedMotion) {
  revealTargets.forEach((element) => {
    const siblings = Array.from(element.parentElement.children).filter((child) =>
      child.matches(
        ".service-card, .step, .team-card, .commitment-card",
      ),
    );
    const siblingIndex = siblings.indexOf(element);

    element.dataset.reveal = "";
    element.style.setProperty(
      "--reveal-delay",
      `${Math.max(siblingIndex, 0) * 90}ms`,
    );
  });

  const pendingReveals = new Set(revealTargets);
  let revealCheckScheduled = false;

  const revealVisibleElements = () => {
    pendingReveals.forEach((element) => {
      const { top, bottom } = element.getBoundingClientRect();

      if (top < window.innerHeight - 35 && bottom > 0) {
        element.classList.add("is-visible");
        pendingReveals.delete(element);
      }
    });

    if (pendingReveals.size === 0) {
      window.removeEventListener("scroll", scheduleRevealCheck);
      window.removeEventListener("resize", scheduleRevealCheck);
    }
  };

  const scheduleRevealCheck = () => {
    if (revealCheckScheduled) {
      return;
    }

    revealCheckScheduled = true;
    window.requestAnimationFrame(() => {
      revealCheckScheduled = false;
      revealVisibleElements();
    });
  };

  window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
  window.addEventListener("resize", scheduleRevealCheck);
  revealVisibleElements();
}
