const btnPopup = document.querySelectorAll('.buttonPopUp');
const popUpcontainer = document.querySelector('.popup-container');
const popup = document.querySelector('.popup-container__popup');

btnPopup.forEach(elem => elem.addEventListener('click', () => {
    popUpcontainer.classList.toggle('popup-container--active')
}))

popUpcontainer.addEventListener('click', (e) => {
    let elem = e.target;

    if(!elem.classList.contains('popup-container__popup')) {
        popUpcontainer.classList.remove('popup-container--active')
    }
})