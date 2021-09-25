var form = document.querySelector(".form");
var input = form.querySelectorAll(".form__input");
var button = document.querySelector(".form__button");


button.addEventListener("click", function (evt) {
    input.forEach (function (red) {
        if (!red.value) {
            evt.preventDefault();
            red.classList.add("form__input--error");
        } else {
            red.classList.remove("form__input--error");
        }
    });
});
