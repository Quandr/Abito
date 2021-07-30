const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuCloseBtn = document.querySelector(".close-menu");
const toggleIsOpen = function () {
  menu.classList.toggle("is-open");
};
menuBtn.addEventListener("click", toggleIsOpen);
menuCloseBtn.addEventListener("click", toggleIsOpen);
