let menuButton = document.querySelector('.menu-button');
let navlinkWrapper = document.querySelector('.navlink-wrapper');

menuButton.addEventListener('click', () => {
    navlinkWrapper.classList.toggle('active');
});