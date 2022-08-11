'use srtict';


let wrapper = document.querySelector('.wrapper');
let themeButton = document.querySelector('.header__switch_slider');
let main = document.querySelector('.main');
let body = document.querySelector('.body')

themeButton.onclick = function() {
    wrapper.classList.toggle('light_theme');
    wrapper.classList.toggle('dark_theme');
    if (wrapper.classList.contains('light_theme')) {
        menu.classList.toggle('light_bcg');
        menu.classList.remove('dark_bcg');
        main.classList.toggle('main_light');
        main.classList.remove('main_dark');
        body.classList.toggle('body_light');
        body.classList.remove('body_dark');
    } else {
        menu.classList.toggle('dark_bcg');
        menu.classList.remove('light_bcg');
        main.classList.toggle('main_dark');
        main.classList.remove('main_light');
        body.classList.toggle('body_dark');
        body.classList.remove('body_light');
    }
}


let menu = document.querySelector('.header__popup');
let button = document.querySelector('.header__menu_popup');
let close = document.querySelector('.button_close');

button.addEventListener("click", humbHandler);

function humbHandler(e) {
    e.preventDefault();
    menu.classList.toggle('open');
    menu.classList.toggle('close');
}

close.addEventListener("click", closeHandler);

function closeHandler(e) {
    e.preventDefault();
    menu.classList.remove('open');
    menu.classList.add("close");
}