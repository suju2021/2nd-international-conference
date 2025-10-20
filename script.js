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
// Navbar toggle
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const toggle = document.querySelector(".nav-toggle");
  const navLinksDiv = document.querySelector(".nav-links");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      navLinksDiv.classList.remove("show");
    });
  });

  toggle.addEventListener("click", () => {
    navLinksDiv.classList.toggle("show");
  });

  document.addEventListener("click", e => {
    if (!navLinksDiv.contains(e.target) && !toggle.contains(e.target)) {
      navLinksDiv.classList.remove("show");
    }
  });
});
// ===== Left & Right Slideshows =====
let leftIndex = 0;
let rightIndex = 0;

function showSlides(className, indexRef) {
  const slides = document.querySelectorAll(`.${className} .slide`);
  slides.forEach(slide => slide.style.display = "none");
  indexRef++;
  if (indexRef > slides.length) { indexRef = 1; }
  slides[indexRef - 1].style.display = "block";
  return indexRef;
}

function autoSlides() {
  leftIndex = showSlides("left-slideshow", leftIndex);
  rightIndex = showSlides("right-slideshow", rightIndex);
  setTimeout(autoSlides, 3000); // Change every 3 seconds
}

document.addEventListener("DOMContentLoaded", autoSlides);
