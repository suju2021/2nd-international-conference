document.addEventListener("DOMContentLoaded", () => {
  console.log("Conference Header Loaded!");

  // Highlight active link dynamically
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Hamburger toggle for mobile
  const toggle = document.querySelector(".nav-toggle");
  const navLinksDiv = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    navLinksDiv.classList.toggle("show");
  });
});
