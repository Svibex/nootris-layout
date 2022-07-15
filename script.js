let menuBtn = document.querySelector('.header_burger');
let menu = document.querySelector('.header_nav');
let body = document.querySelector('body');
let ul = document.querySelector('ul');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('isVisible')
})

ul.addEventListener('click', function(){
    body.classList.remove('isVisible');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})