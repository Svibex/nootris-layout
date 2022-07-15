let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let body = document.querySelector('body');
let list = document.querySelector('.header__nav__list');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('isVisible')
})

list.addEventListener('click', function(){
    body.classList.remove('isVisible');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})