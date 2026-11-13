document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelector("#nav-links");

  if (menuToggle && navLinks) {
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

  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

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
});
