document.addEventListener("DOMContentLoaded", () => {
  // ===== Navbar Elements =====
  const navLinks = document.querySelectorAll(".nav-links a");
  const navLinksDiv = document.querySelector(".nav-links");
  const toggle = document.querySelector(".nav-toggle");

  // ===== Highlight Active Link & Close Menu After Click =====
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      navLinksDiv.classList.remove("show"); // close menu after click
    });
  });

  // ===== Hamburger Toggle =====
  toggle.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing when toggle clicked
    navLinksDiv.classList.toggle("show");
  });

  // ===== Close Menu If Clicking Outside =====
  document.addEventListener("click", (e) => {
    if (!navLinksDiv.contains(e.target) && !toggle.contains(e.target)) {
      navLinksDiv.classList.remove("show");
    }
  });

  // ===== Left & Right Slideshows =====
  let leftIndex = 0;
  let rightIndex = 0;

  function showSlides(className, indexRef) {
    const slides = document.querySelectorAll(`.${className} .slide`);
    slides.forEach(slide => (slide.style.display = "none"));
    indexRef++;
    if (indexRef > slides.length) indexRef = 1;
    if (slides[indexRef - 1]) slides[indexRef - 1].style.display = "block";
    return indexRef;
  }

  function autoSlides() {
    leftIndex = showSlides("left-slideshow", leftIndex);
    rightIndex = showSlides("right-slideshow", rightIndex);
    setTimeout(autoSlides, 3000); // change every 3s
  }

  // Start both slideshows
  autoSlides();
});
