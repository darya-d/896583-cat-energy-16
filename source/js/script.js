var nav = document.querySelector(".main-nav");
var burger = document.querySelector(".burger");

document.addEventListener("DOMContentLoaded", function() {
  nav.classList.remove("main-nav--no-js");
  burger.classList.add("burger--opened");
});

burger.addEventListener("click", function (evt) {
  nav.classList.toggle("main-nav--no-js");
  burger.classList.toggle("burger--opened");
});
