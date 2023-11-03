/*==menu icon navbar==*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====sticky navbar===*/
window.onscroll = () => {
let header = document.querySelector('.header');

header.classList.toggle('sticky' , window.scrollY > 100);

/*====remove navbar===*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};


/*====dark mode===*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');

};

