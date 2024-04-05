window.addEventListener("DOMContentLoaded", () => {
  // menu
  const openMenuBtn = document.querySelector(".open__menu-btn");
  const closeMenuBtn = document.querySelector(".menu__close-btn");
  const menu = document.querySelector(".menu");
  const menuOverlay = document.querySelector(".menu__overlay");

  function toggleMenuClass(eventClass) {
    menu.classList.toggle("active");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle('overflow-hidden')
  }

  openMenuBtn.addEventListener("click", toggleMenuClass);
  closeMenuBtn.addEventListener("click", toggleMenuClass);
  menuOverlay.addEventListener('click', toggleMenuClass);
});
