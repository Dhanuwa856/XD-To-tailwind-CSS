// nav bar

const menuLinks = document.querySelector(".nav-menu-links-ul");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", function () {
  menuLinks.style.display = "flex";
  openMenu.style.display = "none";
  closeMenu.style.display = "flex";
});

closeMenu.addEventListener("click", function () {
  menuLinks.style.display = "none";
  openMenu.style.display = "flex";
  closeMenu.style.display = "none";
});
