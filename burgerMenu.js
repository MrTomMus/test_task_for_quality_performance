const button = document.querySelector('.header-burgerContainer');
const menu = document.querySelector('.header-burgerMenu');
const btnBurgerMenu = document.querySelector('.header__burgerMenu');

button.addEventListener('click', () => {
    console.log('test')
    menu.classList.toggle('header-burgerMenu--active');
    btnBurgerMenu.classList.toggle('header__burgerMenu--active')
})




