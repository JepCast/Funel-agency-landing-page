'use strict';

/*NavBar*/
const menuToggleBtn = document.querySelector('[data-navbar-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

/*Elementos toggle function*/

const elemToggleFunction = (elem) => (elem.classList.toggle('active'));
menuToggleBtn.addEventListener('click', () => elemToggleFunction(navbar));

/*Scroll to top button*/
const goToTopBtn = document.getElementById('goToTopBtn');

window.addEventListener('scroll', () => {
   if (this.window.scrollY >= 800) {
      goToTopBtn.classList.add('active');
   }else{
        goToTopBtn.classList.remove('active');
   }
});