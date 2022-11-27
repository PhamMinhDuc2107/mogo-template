let menuToggle = document.querySelector(".header-toggle");
let menu = document.querySelector(".header-menu");
let isShow = "is-show";
menuToggle.addEventListener("click", function () {
  menu.classList.add(isShow);
});
window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
    menu.classList.remove(isShow);
  }
});
$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});