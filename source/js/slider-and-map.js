var button = document.querySelector(".example__slider-button");
var iconAfter = document.querySelector(".example__slider-after-icon");
var iconBefore = document.querySelector(".example__slider-before-icon");
var imageAfter = document.querySelector(".example__image--after");
var imageBefore = document.querySelector(".example__image--before");
var map = document.querySelector(".map__image");

map.classList.remove("map__image-nojs");


button.addEventListener("click", function(evt) {
    evt.preventDefault();
    if(iconAfter.classList.contains("example__slider-button--active")) {
        iconAfter.classList.remove("example__slider-button--active");
        iconBefore.classList.add("example__slider-button--active");
        imageAfter.classList.remove("example__slider--active");
        imageBefore.classList.add("example__slider--active");
    } else {
        iconAfter.classList.add("example__slider-button--active");
        iconBefore.classList.remove("example__slider-button--active");
        imageAfter.classList.add("example__slider--active");
        imageBefore.classList.remove("example__slider--active");
    }
})
