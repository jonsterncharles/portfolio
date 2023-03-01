//Smooth scrolling on click of nav links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
link.addEventListener('click', e => {
e.preventDefault();
const target = document.querySelector(link.getAttribute('href'));
target.scrollIntoView({behavior: 'smooth', block: 'start'});
});
});

//Open and close the mobile menu on click of the hamburger icon
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.toggle('show');
});

//Close the mobile menu on click of a nav link
navLinks.forEach(link => {
link.addEventListener('click', () => {
mobileMenu.classList.remove('show');
});
});