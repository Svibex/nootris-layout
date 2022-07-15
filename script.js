let menuBtn = document.querySelector('.header_menu-btn');
let menu = document.querySelector('.menu');
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