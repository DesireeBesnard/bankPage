// Variables declarations

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');

btnHamburger.addEventListener('click', function(){
    console.log('click burger');

    if (header.classList.contains('open')){
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        mobileMenu.classList.remove('fade-in');
        mobileMenu.classList.add('fade-out');
        
    } else {
        header.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        mobileMenu.classList.remove('fade-out');
        mobileMenu.classList.add('fade-in');
        
    }
});