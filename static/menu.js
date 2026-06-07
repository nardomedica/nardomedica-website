const topNav = document.querySelector(".top-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");
const galleryTriggers = document.querySelectorAll(".gallery-trigger");
const heroCarouselSlides = document.querySelectorAll(".hero-carousel-slide");
let activeGalleryTrigger = null;
let activeHeroSlide = 0;

function setMenuOpen(isOpen) {
  topNav.classList.toggle("is-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Chiudi menu" : "Apri menu");
}

navToggle.addEventListener("click", () => {
  setMenuOpen(!topNav.classList.contains("is-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuOpen(false);
    closeLightbox();
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 761px)").matches) {
    setMenuOpen(false);
  }
});

function openLightbox(trigger) {
  const image = trigger.querySelector("img");
  const src = image.currentSrc || image.src;

  activeGalleryTrigger = trigger;
  const base = src.replace(/\.webp$/, "");
  const ext = src.includes("panoramica") ? ".jpg" : ".JPG";
  lightboxImage.src = base + "-large" + ext;
  lightboxImage.alt = image.alt;
  lightbox.hidden = false;
  document.body.classList.add("is-lightbox-open");
  lightboxClose.focus();
}

function closeLightbox() {
  if (lightbox.hidden) {
    return;
  }

  lightbox.hidden = true;
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.classList.remove("is-lightbox-open");

  if (activeGalleryTrigger) {
    activeGalleryTrigger.focus();
    activeGalleryTrigger = null;
  }
}

galleryTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => openLightbox(trigger));
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

function showHeroSlide(slideIndex) {
  heroCarouselSlides[activeHeroSlide].classList.remove("is-active");
  heroCarouselSlides[slideIndex].classList.add("is-active");
  activeHeroSlide = slideIndex;
}

if (
  heroCarouselSlides.length > 1 &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  window.setInterval(() => {
    showHeroSlide((activeHeroSlide + 1) % heroCarouselSlides.length);
  }, 4500);
}
