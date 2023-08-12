const hamburger = document.querySelector(
  ".navigation .nav-container .hamburger"
);
const menu = document.querySelector(".navigation .nav-container .nav-list ul");
const menu_item = document.querySelectorAll(
  ".navigation .nav-container .nav-list ul li a"
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
});
