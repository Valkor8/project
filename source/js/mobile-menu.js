var nav = document.querySelector(".page-header__nav");
var navBtnToggle = document.querySelector(".page-header__logo-toggle");

nav.classList.remove("page-header__nav--nojs");

navBtnToggle.addEventListener("click", function(evt) {
    // evt.preventDefault ();
    if (nav.classList.contains("page-header__nav--closed")) {
        nav.classList.remove("page-header__nav--closed");
        nav.classList.add("page-header__nav--opened");
    } else {
        nav.classList.remove("page-header__nav--opened");
        nav.classList.add("page-header__nav--closed");
    }

});
