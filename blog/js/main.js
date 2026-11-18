document.addEventListener("DOMContentLoaded", () => {
  // El menú solo existe en el índice del blog; los artículos ofrecen un enlace de regreso.
  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  if (menuToggle && navLinks) {
    // Mantiene icono, etiqueta accesible y estado desplegado en sincronía.
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú",
      );
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
  }

  // Completa el año del pie de página en las páginas que incluyen ese marcador.
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Aplica revelado progresivo a la presentación, las tarjetas y la llamada final.
  const revealTargets = document.querySelectorAll(
    ".hero-content, .hero-note, .section-heading, .article-card, .cta-inner",
  );
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (!prefersReducedMotion) {
    revealTargets.forEach((element) => {
      const siblings = Array.from(element.parentElement.children).filter((child) =>
        child.matches(".article-card"),
      );
      const siblingIndex = siblings.indexOf(element);

      element.dataset.reveal = "";
      element.style.setProperty(
        "--reveal-delay",
        `${Math.max(siblingIndex, 0) * 100}ms`,
      );
    });

    // Conserva solo los elementos pendientes para dejar de escuchar eventos al final.
    const pendingReveals = new Set(revealTargets);
    let revealCheckScheduled = false;

    const revealVisibleElements = () => {
      // Solo activa las animaciones de elementos que ya son visibles en el viewport.
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
      // Agrupa cálculos de scroll y resize en el siguiente frame de renderizado.
      window.requestAnimationFrame(() => {
        revealCheckScheduled = false;
        revealVisibleElements();
      });
    };

    window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
    window.addEventListener("resize", scheduleRevealCheck);
    revealVisibleElements();
  }
});
