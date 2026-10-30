
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // FILTRADO DE ARTÍCULOS
    // ==========================

    const filterButtons = document.querySelectorAll(".filter");
    const articles = document.querySelectorAll(".article-card");
    const resultsCount = document.querySelector("#results-count");
    const emptyMessage = document.querySelector("#empty-message");

    function filterArticles(category) {
        let visibleCount = 0;

        articles.forEach(article => {
            const articleCategory = article.dataset.category;

            const visible =
                category === "todos" ||
                articleCategory === category;

            article.hidden = !visible;

            if (visible) {
                visibleCount++;
            }
        });

        resultsCount.textContent =
            `${visibleCount} artículo${visibleCount !== 1 ? "s" : ""}`;

        emptyMessage.hidden = visibleCount !== 0;
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            const category = button.dataset.filter;

            // Actualizamos el botón seleccionado.
            filterButtons.forEach(item => {
                const selected = item === button;

                item.classList.toggle("active", selected);
                item.setAttribute(
                    "aria-pressed",
                    String(selected)
                );
            });

            filterArticles(category);
        });
    });

    // ==========================
    // MENÚ MÓVIL
    // ==========================

    const menuToggle = document.querySelector("#menu-toggle");
    const navLinks = document.querySelector("#nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.textContent = "☰";
            });
        });
    }

    // ==========================
    // AÑO AUTOMÁTICO
    // ==========================

    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

});
