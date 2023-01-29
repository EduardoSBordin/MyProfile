const btnDarkMode = document.querySelector('#btnDarkMode');

btnDarkMode.addEventListener('click', () => {

    document.querySelector('body').classList.toggle('activeBody');
});