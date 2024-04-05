window.addEventListener("DOMContentLoaded", () => {
  // menu
  const openMenuBtn = document.querySelector(".open__menu-btn");
  const closeMenuBtn = document.querySelector(".menu__close-btn");
  const menu = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu__overlay");

  function toggleMenuClass(eventClass) {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      if (contactForm.classList.contains("active")) {
        contactForm.classList.remove("active");
      }
    }
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden");
  }

  openMenuBtn.addEventListener("click", toggleMenuClass);
  closeMenuBtn.addEventListener("click", toggleMenuClass);
  menuOverlay.addEventListener("click", toggleMenuClass);

  // contact-fom
  const openContactFormBtn = document.querySelectorAll(
    "[data-contact-form-btn]"
  );
  const closeContactFormBtn = document.querySelector(".close__contact-btn");
  const contactForm = document.querySelector(".leave__request");

  function showContactForm() {
    contactForm.classList.add("active");
    if (contactForm.classList.contains("active")) {
      menu.classList.remove("active");
      menuOverlay.classList.remove("active");
      document.body.classList.remove("overflow-hidden");
    }
  }
  function hideleContactForm() {
    contactForm.classList.remove("active");
  }

  openContactFormBtn.forEach((btn) =>
    btn.addEventListener("click", showContactForm)
  );
  closeContactFormBtn.addEventListener("click", hideleContactForm);
});

// numbers__swiper
var numbersSwiper = new Swiper(".numbers__swiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-next-btn",
    prevEl: ".swiper-prev-btn",
  },
});
