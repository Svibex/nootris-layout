let menuBtn = document.querySelector('.header_menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('isVisible')
})