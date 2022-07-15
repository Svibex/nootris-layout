let menuBtn = document.querySelector('.burger');
let menu = document.querySelector('.navListWrapper');
let body = document.querySelector('body');
let list = document.querySelector('.navList');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('isVisible');
})

list.addEventListener('click', function(){
    body.classList.remove('isVisible');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})