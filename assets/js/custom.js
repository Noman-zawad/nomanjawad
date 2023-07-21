// Using DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  const menubtn = document.querySelector(".menu");
  const responsiveMenu = document.querySelector(".responsive-sidebar-menu");
  const menuhide = document.querySelector(".overlay");

  menubtn.addEventListener("click", function () {
    responsiveMenu.classList.add("active");
  });
  menuhide.addEventListener("click", function () {
    responsiveMenu.classList.remove("active");
  });
});
