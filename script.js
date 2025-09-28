document.addEventListener("DOMContentLoaded", () => {
  // ===== Highlight active link =====
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Close mobile menu after clicking a link
      const navLinksDiv = document.querySelector(".nav-links");
      if (navLinksDiv.classList.contains("show")) {
        navLinksDiv.classList.remove("show");
      }
    });
  });

  // ===== Hamburger toggle for mobile =====
  const toggle = document.querySelector(".nav-toggle");
  const navLinksDiv = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinksDiv.classList.toggle("show");
  });

  // Optional: Close mobile menu if clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinksDiv.contains(e.target) && !toggle.contains(e.target)) {
      navLinksDiv.classList.remove("show");
    }
  });
});
