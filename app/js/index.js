$("a").on("click", function () {

  let href = $(this).attr("href");

  $("html, body").animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 370,
    easing: "linear"
  });

  return false;
});


let header = document.querySelector(".header");

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;

  if (header && scrollPos > 10) {
    header.classList.add("header--active");
  } else {
    header.classList.remove("header--active");
  }
});

const burger = document.querySelector(".burger")
const menuTel = document.querySelector(".menu__mobile")

burger.addEventListener('click', function (){
  menuTel.classList.toggle("menu__mobile--active")
  burger.classList.toggle("menu__burger--close")
})